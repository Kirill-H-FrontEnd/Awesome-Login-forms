import Link from "next/link";
import { FC } from "react";

export const FooterForm: FC = ({}) => {
  return (
    <p className="text-[14px] text-center mt-4 text-gray-400">
      Don't have an account?{" "}
      <Link
        className="text-blue-500 font-normal md:hover:text-blue-400"
        href={""}
      >
        Register
      </Link>
    </p>
  );
};
