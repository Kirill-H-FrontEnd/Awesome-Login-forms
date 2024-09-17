import Link from "next/link";
import { FC } from "react";

export const FooterForm: FC = ({}) => {
  return (
    <p className="text-[14px] text-center mt-4 text-gray-400">
      Have an account?{" "}
      <Link className="text-blue-500" href={""}>
        Log in
      </Link>
    </p>
  );
};
