import React, { FC } from "react";

interface IProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: any;
  isTextArea?: boolean;
}
const InputField: FC<IProps> = (props) => {
  const { name, value, onChange, label, type, isTextArea = false } = props;
  return (
    <div className="w-full sm:mb-[20px] mb-[30px]">
      {/* {value.length === 0 && ( */}
      <label className="absolute font-['lato'] not-italic font-medium sm:text-base text-xl text-[#6A6A6A] text-justify">
        {label}
      </label>
      {/* )} */}
      {!isTextArea && (
        <input
          value={value}
          name={name}
          onChange={onChange}
          type={type || "text"}
          className="w-full border-b sm:mt-[15px] mt-[25px] text-black	  focus-visible:border-b focus-visible:outline-none bg-transparent border-solid	border-slate-200"
        />
      )}
      {isTextArea && (
        <textarea
          value={value}
          name={name}
          onChange={onChange}
          rows={5}
          className="w-full border-b sm:mt-[15px] mt-[30px] focus-visible:border-b text-black	 focus-visible:outline-none  focus:border-b bg-transparent border-solid	border-slate-200"
        />
      )}
    </div>
  );
};

export default InputField;
