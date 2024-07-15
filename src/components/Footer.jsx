import React from "react";

function Footer() {
  return (
    <div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100">
        <p className="text-base text-muted-foreground">
          &copy; 2024 GAIL India Limited. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
