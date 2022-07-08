import React, { FC } from "react";
import InputField from "../form/input-field";
const Contact: FC = () => {
  return (
    <>
      <div className="absolute top-[14px] left-[115px] w-[80%] h-[650px] ml-auto mr-auto px-[76px] py-[66px] mb-[30px] shadow-[0px_11px_16px_rgba(0, 0, 0, 0.04)] rounded-xl	">
        <form>
          <InputField label="How can i help you?" />
          <div
            className={`grid sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 `}
          >
            <div className={`col-span-1`}>
              <InputField label="Name" />
            </div>
            <div className={`col-span-1`}>
              <InputField label="Email" type="email" />
            </div>
          </div>
          <div
            className={`grid sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 `}
          >
            <div className={`col-span-1`}>
              <InputField label="Phone Number" type="number" />
            </div>
            <div className={`col-span-1`}>
              <InputField label="Organization" />
            </div>
          </div>
          <InputField label="Message" isTextArea={true} />
        </form>
        <div className="mt-[54px]">
          <div className="inline-block	">
            <h1 className="font-['lato'] not-italic font-bold text-xl text-justify">
              Phone & Whatsapp
            </h1>
            <p className="w-[168px] border-b font-['lato'] border-[#FE2A44] not-italic font-medium text-xl text-[#FE2A44] text-justify">
              +1 ‭(330) 285-3015‬
            </p>
          </div>
          <div className="inline-block	ml-[51px]">
            <h1 className="font-['lato'] not-italic font-bold text-xl text-justify">
              Email Address
            </h1>
            <p className="w-[168px] border-b font-['lato'] border-[#FE2A44] not-italic font-medium text-xl text-[#FE2A44] text-justify">
              usa@maxenius.com
            </p>
          </div>
          <button className="inline-block float-right	h-[54px] w-[185px] rounded-[50px] bg-button-gradient font-['Poppins'] font-bold	 text-white	 text-base	">
            Send Message
          </button>
        </div>
      </div>
      <div className="h-[493px]">Abc</div>
    </>
  );
};
export default Contact;
