const Footer = () => {
  return (
    <footer className="bg-white text-[#02101b] py-8 text-center px-6 border-t border-gray-200">
      <div className="flex flex-col items-center space-y-3 text-sm text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-8 text-[#f0f5ff] bg-[#02101b] rounded-4xl cursor-pointer  text-4xl"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          
        >
          <a href="https://web.facebook.com/p/RisingStar-Recruitment-Agency-61554189520171/?_rdc=1&_rdr#">
             <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </a>
         
        </svg>
        <p>
          © {new Date().getFullYear()} <span className="font-medium">Risingstar Recruitment Agency</span>.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
