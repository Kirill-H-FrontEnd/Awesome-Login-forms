"use client";
import { FC } from "react";
import Image from "next/image";

export const TitleForm: FC = ({}) => {
  return (
    <div className="w-full grid justify-center my-4">
      <div className="grid justify-center mb-4 ">
        <Image
          className="drop-shadow-sm"
          src={"/stars-logo.svg"}
          alt="Logo"
          width={50}
          height={50}
        />
      </div>
      <h2 className="text-center text-grayPrimary font-bold text-2xl">
        Create an account
      </h2>
      <p className="text-gray-400 text-[15px]">
        Please enter your details to register.
      </p>
    </div>
  );
};
