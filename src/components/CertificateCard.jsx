import { message } from "antd";
import React from "react";

function CertificateCard({ item }) {
  const clickWithoutLink = () => {
    message.info("Look like this certificate doesn't have credentials");
  };
  return item.link ? (
    <a
      className="hover:bg-gray-300 hover:duration-500 shadow-xl p-4 rounded-xl flex flex-col mt-3 md:mt-0"
      href={item.link}
      target="_blank"
    >
      <img className="mx-auto w-2/3" src={item.img} alt="" />
      <p className="xl:text-xl md:text-xl text-md font-bold text-center text-gray-800 md:mt-5 sm:my-3">
        {item.title}
      </p>
      <div className="flex flex-wrap gap-1 md:gap-3 md:my-4 justify-center">
        <div className="py-1 px-2 rounded-xl bg-nav xl:text-sm md:text-xs text-sxs text-black font-medium">
          Issued : {item.issued}
        </div>
        {item.expired != null && (
          <div className="py-1 px-2 rounded-xl bg-nav-color xl:text-sm md:text-xs text-sxs text-white font-medium">
            Expired: {item.expired}
          </div>
        )}
      </div>
    </a>
  ) : (
    <div
      className="hover:bg-gray-300 hover:duration-500 shadow-xl p-4 rounded-xl flex flex-col mt-3 md:mt-0"
      onClick={() => clickWithoutLink()}
    >
      <img className="mx-auto w-2/3" src={item.img} alt="" />
      <p className="xl:text-xl md:text-xl text-md font-bold text-center text-gray-800 md:mt-5 sm:my-3">
        {item.title}
      </p>
      <div className="flex flex-wrap gap-1 md:gap-3 md:my-4 justify-center">
        <div className="py-1 px-2 rounded-xl bg-nav xl:text-sm md:text-xs text-sxs text-black font-medium">
          Issued : {item.issued}
        </div>
        {item.expired != null && (
          <div className="py-1 px-2 rounded-xl bg-nav-color xl:text-sm md:text-xs text-sxs text-white font-medium">
            Expired: {item.expired}
          </div>
        )}
      </div>
    </div>
  );
}

export default CertificateCard;
