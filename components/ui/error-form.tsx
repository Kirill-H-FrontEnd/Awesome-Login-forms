import { FC } from "react";

type TFormError = {
  error: string;
};

export const FormError: FC<TFormError> = ({ error }) => {
  return (
    <p className="text-red-600 text-[12px] absolute -bottom-[20px] left-0">
      {error}
    </p>
  );
};
