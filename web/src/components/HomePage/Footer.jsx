import { CheckSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center mr-3">
                <CheckSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">SigninSoft</div>
                <div className="text-xs text-orange-400 -mt-1">
                  Get into your Future
                </div>
              </div>
            </div>
            <p className="text-gray-300">
              Leading consulting, business solution and systems integration firm
              transforming businesses through expert services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">IT Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="/services/it-consulting"
                  className="hover:text-orange-400 transition-colors"
                >
                  IT Consulting & Strategy
                </a>
              </li>
              <li>
                <a
                  href="/services/software-development"
                  className="hover:text-orange-400 transition-colors"
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="/services/ui-ux-design"
                  className="hover:text-orange-400 transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="/services/data-analytics"
                  className="hover:text-orange-400 transition-colors"
                >
                  Data & Analytics
                </a>
              </li>
              <li>
                <a
                  href="/services/cybersecurity"
                  className="hover:text-orange-400 transition-colors"
                >
                  Cybersecurity Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Visa Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="/visa/study-abroad"
                  className="hover:text-orange-400 transition-colors"
                >
                  Study Abroad Visas
                </a>
              </li>
              <li>
                <a
                  href="/visa/work-business"
                  className="hover:text-orange-400 transition-colors"
                >
                  Work & Business Visas
                </a>
              </li>
              <li>
                <a
                  href="/visa/travel-tourism"
                  className="hover:text-orange-400 transition-colors"
                >
                  Travel & Tourism
                </a>
              </li>
              <li>
                <a
                  href="/visa/extension-renewal"
                  className="hover:text-orange-400 transition-colors"
                >
                  Extension & Renewal
                </a>
              </li>
              <li>
                <a
                  href="/visa/document-verification"
                  className="hover:text-orange-400 transition-colors"
                >
                  Document Verification
                </a>
              </li>
              <li>
                <a
                  href="/visa/immigration-consultation"
                  className="hover:text-orange-400 transition-colors"
                >
                  Immigration Consultation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="/about"
                  className="hover:text-orange-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="hover:text-orange-400 transition-colors"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-orange-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-orange-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-orange-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 SigninSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
