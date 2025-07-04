import { Network } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 select-none">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div>
              <Image
              src={"/logo.png"}
              alt="logo"
              width={150}
              height={80}
              className="object-contain "
              />
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-1 md:mb-2 text-sm md:text-base ">
              Founded 2025 • Based in Meerut, Uttar Pradesh
            </p>
            <p className="text-xs md:text-sm text-gray-500 ">
              © 2025 OPEXN. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
