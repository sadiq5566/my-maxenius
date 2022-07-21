import React, { FC, useState } from "react";
import InputField from "../form/input-field";
const Contact: FC = () => {
  const [values, setValues] = useState({
    subject: "",
    name: "",
    email: "",
    phone_number: "",
    organization: "",
    message: ""
  });
  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <div className="absolute bg-white sm:top-[434px] md:top-[404px] top-[494px] sm:left-[20px] md:left-[80px] left-[115px] sm:w-[90%] w-[80%] sm:h-[760px] md:h-[760px] h-[650px] ml-auto mr-auto sm:px-[20px] px-[76px] sm:py-[60px] py-[66px] sm:mb-[30px] shadow-contact rounded-xl	">
        <form>
          <InputField
            label="How can i help you?"
            name="subject"
            value={values.subject}
            onChange={handleChange}
          />
          <div
            className={`grid sm:gap-2 md:gap-6 gap-8 sm:grid-cols-1 md:grid-cols-2 grid-cols-2 `}
          >
            <div className={`col-span-1`}>
              <InputField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className={`col-span-1`}>
              <InputField
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div
            className={`grid sm:gap-2 md:gap-6 gap-8 sm:grid-cols-1 md:grid-cols-2 grid-cols-2 `}
          >
            <div className={`col-span-1`}>
              <InputField
                label="Phone Number"
                type="number"
                name="phone_number"
                value={values.phone_number}
                onChange={handleChange}
              />
            </div>
            <div className={`col-span-1`}>
              <InputField
                label="Organization"
                name="organization"
                value={values.organization}
                onChange={handleChange}
              />
            </div>
          </div>
          <InputField
            label="Message"
            isTextArea={true}
            name="message"
            value={values.message}
            onChange={handleChange}
          />
        </form>
        <div className="sm:mt-[30px] mt-[54px] sm:text-center text-left">
          <button className="sm:block md:block inline-block sm:float-none float-right sm:ml-auto sm:mr-auto  sm:text-center md:text-center	sm:h-[33.6px] h-[54px] sm:w-[150px] w-[185px] rounded-[50px] bg-button-gradient font-['Poppins'] font-bold text-white	sm:text-xs text-base sm:mb-[40px] md:mb-[40px] mb-[0px]	">
            Send Message
          </button>
          <div className="sm:block md:block inline-block	">
            <h1 className="font-['lato'] not-italic font-bold sm:text-base text-xl text-justify">
              Phone & Whatsapp
            </h1>
            <p className="sm:w-[124px] w-[168px] border-b font-['lato'] border-[#FE2A44] not-italic font-medium sm:text-sm text-xl text-[#FE2A44] text-justify">
              +1 ‭(330) 285-3015‬
            </p>
          </div>
          <div className="sm:block md:block inline-block sm:ml-[0px] md:ml-[0px]	ml-[51px] sm:mt-[20px] md:mt-[20px] mt-[0px]">
            <h1 className="font-['lato'] not-italic font-bold  sm:text-base text-xl text-justify">
              Email Address
            </h1>
            <p className="sm:w-[124px] w-[168px] border-b font-['lato'] border-[#FE2A44] not-italic font-medium sm:text-sm text-xl  text-[#FE2A44] text-justify">
              usa@maxenius.com
            </p>
          </div>
        </div>
      </div>
      <div className="sm:h-[493px] h-[493px] bg-[#FBFBFB]"></div>
    </>
  );
};
export default Contact;
