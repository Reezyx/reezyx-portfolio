import React from "react";

function Footer() {
  return (
    <>
      <p className="xl:text-base md:text-xs md:block hidden text-center bg-nav-color text-gray-100 xl:py-3 md:py-2 rounded-sm">
        Copyright <span className="xl:text-lg md:text-md">©</span> 2023
        Rudiansyah Wijaya Pratama (Reezyx). All Rights Reserved | Want to
        Collaborate? Contact Me by Email in rudiansyahpratama04@gmail.com
      </p>
      <p className="text-xs sm:block md:hidden text-center bg-nav-color text-gray-100 py-2 rounded-sm">
        Copyright <span className="xl:text-lg md:text-md">©</span> 2023
        Rudiansyah Wijaya Pratama (Reezyx).
        <p>
          All Rights Reserved | Want to Collaborate? Contact Me by Email in
          rudiansyahpratama04@gmail.com
        </p>
      </p>
    </>
  );
}

export default Footer;
