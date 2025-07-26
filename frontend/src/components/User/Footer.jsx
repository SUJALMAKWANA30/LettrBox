import React from 'react';

function SocialIcon({ href, children }) {
  return (
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">ResumeXpert</h2>
            <p className="mt-4 max-w-xs">
              Create a professional resume that stands out and helps you land your dream job.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Templates</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} ResumeXpert. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <SocialIcon href="#"><LinkedInIcon /></SocialIcon>
            <SocialIcon href="#"><TwitterIcon /></SocialIcon>
            <SocialIcon href="#"><FacebookIcon /></SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
