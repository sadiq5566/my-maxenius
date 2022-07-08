import React, { FC } from "react";

interface IProps {
  label: string;
  type?: string;
  isTextArea?: boolean;
}
const InputField: FC<IProps> = (props) => {
  const { label, type, isTextArea = false } = props;
  return (
    <div className="w-full mb-[30px]">
      <label className="absolute font-['lato'] not-italic font-medium text-xl text-[#6A6A6A] text-justify">
        {label}
      </label>
      {!isTextArea && (
        <input
          value={" "}
          type={type || "text"}
          className="w-full border-b mt-[20px] focus:border-b bg-transparent border-solid	border-[#000000] opacity-10	"
        />
      )}
      {isTextArea && (
        <textarea
          value={" "}
          className="w-full border-b mt-[106px] focus:border-b bg-transparent border-solid	border-[#000000] opacity-10	"
        />
      )}
    </div>
  );
};

export default InputField;
