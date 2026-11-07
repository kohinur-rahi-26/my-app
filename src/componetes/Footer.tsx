

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#111318] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">

        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="FitLog logo"
            width={32}
            height={32}
            className="object-contain"
          />

        <p className="text-xl"> FITLOG</p>
        </div>

        
        <p className="text-center text-sm text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
