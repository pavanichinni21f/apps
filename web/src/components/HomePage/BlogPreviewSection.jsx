export default function BlogPreviewSection() {
    return (
        <section id="blog" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Latest Insights
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Stay updated with industry trends and expert advice
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((post) => (
                        <div
                            key={post}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
                                <span className="text-gray-500 dark:text-gray-400">
                                    Blog Image {post}
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                                    Business Strategy
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                    How to Scale Your Business in 2024
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Essential strategies for sustainable business growth in the
                                    modern marketplace...
                                </p>
                                <a
                                    href="/blog"
                                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="/blog"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        View All Posts
                    </a>
                </div>
            </div>
        </section>
    );
}
