import {
	type RouteConfigEntry,
	index,
	route,
} from '@react-router/dev/routes';

// Server-side imports - only available in Node.js environment
let readdirSync: any, statSync: any, join: any, fileURLToPath: any;
let __dirname: string = '';

// Initialize server-side modules
if (typeof window === 'undefined') {
	try {
		// Dynamic imports for Node.js modules
		const { readdirSync: fsReaddir, statSync: fsStat } = require('node:fs');
		const { join: pathJoin } = require('node:path');
		const { fileURLToPath: urlFileURLToPath } = require('node:url');
		
		readdirSync = fsReaddir;
		statSync = fsStat;
		join = pathJoin;
		fileURLToPath = urlFileURLToPath;
		__dirname = fileURLToPath(new URL('.', import.meta.url));
	} catch (e) {
		// Fallback if Node.js modules are not available
		console.warn('Node.js modules not available:', e);
	}
}

type Tree = {
	path: string;
	children: Tree[];
	hasPage: boolean;
	isParam: boolean;
	paramName: string;
	isCatchAll: boolean;
};

function buildRouteTree(dir: string, basePath = ''): Tree {
	const files = readdirSync(dir);
	const node: Tree = {
		path: basePath,
		children: [],
		hasPage: false,
		isParam: false,
		isCatchAll: false,
		paramName: '',
	};

	// Check if the current directory name indicates a parameter
	const dirName = basePath.split('/').pop();
	if (dirName?.startsWith('[') && dirName.endsWith(']')) {
		node.isParam = true;
		const paramName = dirName.slice(1, -1);

		// Check if it's a catch-all parameter (e.g., [...ids])
		if (paramName.startsWith('...')) {
			node.isCatchAll = true;
			node.paramName = paramName.slice(3); // Remove the '...' prefix
		} else {
			node.paramName = paramName;
		}
	}

	for (const file of files) {
		const filePath = join(dir, file);
		const stat = statSync(filePath);

		if (stat.isDirectory()) {
			const childPath = basePath ? `${basePath}/${file}` : file;
			const childNode = buildRouteTree(filePath, childPath);
			node.children.push(childNode);
		} else if (file === 'page.jsx') {
			node.hasPage = true;
    }
	}

	return node;
}

function generateRoutes(node: Tree): RouteConfigEntry[] {
	const routes: RouteConfigEntry[] = [];

	if (node.hasPage) {
		const componentPath =
			node.path === '' ? `./${node.path}page.jsx` : `./${node.path}/page.jsx`;

		if (node.path === '') {
			routes.push(index(componentPath));
		} else {
			// Handle parameter routes
			let routePath = node.path;

			// Replace all parameter segments in the path
			const segments = routePath.split('/');
			const processedSegments = segments.map((segment) => {
				if (segment.startsWith('[') && segment.endsWith(']')) {
					const paramName = segment.slice(1, -1);

					// Handle catch-all parameters (e.g., [...ids] becomes *)
					if (paramName.startsWith('...')) {
						return '*'; // React Router's catch-all syntax
					}
					// Handle optional parameters (e.g., [[id]] becomes :id?)
					if (paramName.startsWith('[') && paramName.endsWith(']')) {
						return `:${paramName.slice(1, -1)}?`;
					}
					// Handle regular parameters (e.g., [id] becomes :id)
					return `:${paramName}`;
				}
				return segment;
			});

			routePath = processedSegments.join('/');
			routes.push(route(routePath, componentPath));
		}
	}

	for (const child of node.children) {
		routes.push(...generateRoutes(child));
	}

	return routes;
}
// HMR support for development
if (typeof window === 'undefined') {
	try {
		// @ts-ignore - Vite HMR types
		if (import.meta.env?.DEV) {
			// @ts-ignore - Vite glob import
			import.meta.glob('./**/page.jsx', {});
			// @ts-ignore - Vite HMR
			if (import.meta.hot) {
				// @ts-ignore - Vite HMR
				import.meta.hot.accept((newSelf) => {
					// @ts-ignore - Vite HMR
					import.meta.hot?.invalidate();
				});
			}
		}
	} catch (e) {
		// Ignore HMR errors
	}
}
// Only build routes on server side
let routes: RouteConfigEntry[];

if (typeof window === 'undefined' && __dirname) {
	const tree = buildRouteTree(__dirname);
	const notFound = route('*?', './__create/not-found.tsx');
	routes = [...generateRoutes(tree), notFound];
} else {
	// Fallback for client side - minimal routes
	const notFound = route('*?', './__create/not-found.tsx');
	routes = [notFound];
}

export default routes;
