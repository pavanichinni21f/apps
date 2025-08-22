import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-blue-900 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        {/* Contact Information */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>info@SigninSoft.net</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+1(302) 703-1113</span>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-orange-400 transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}