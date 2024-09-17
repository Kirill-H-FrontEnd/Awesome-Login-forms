"use client";
import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const SocialButtonsForm: FC = ({}) => {
  return (
    <div className="grid gap-4 mt-4">
      <div className="grid grid-cols-1fr-auto-1fr items-center ">
        <span className="bg-gray-200 h-[1px] w-full"></span>
        <p className="text-[12px] text-gray-400 mx-1">OR</p>
        <span className="bg-gray-200 h-[1px] w-full"></span>
      </div>
      <Button
        type="button"
        className="bg-graySecondary hover:bg-white border-[1px] border-gray-300 shadow-none transition-all rounded-lg active:scale-[.98]"
      >
        <Image
          src={"/apple-logo.svg"}
          alt="Apple logo"
          width={20}
          height={20}
        />
      </Button>
      <Button
        type="button"
        className="bg-graySecondary hover:bg-white border-[1px] border-gray-300 shadow-none transition-all rounded-lg active:scale-[.98]"
      >
        <Image
          src={"/google-logo.svg"}
          alt="Google logo"
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
};
