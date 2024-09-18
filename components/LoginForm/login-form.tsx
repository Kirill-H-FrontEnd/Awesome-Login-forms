"use client";
// > Zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// > React
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
// > Schemas
import { LoginFormSchema } from "@/schemas";
// > Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { TitleForm } from "./_components/title-form";
import { SocialButtonsForm } from "./_components/socialButtons-form";
import { FooterForm } from "./_components/footer-form";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginFormSchema>) => {};

  return (
    <form
      className=" w-full sm:w-[400px] bg-white rounded-2xl p-6 shadow-md border-[1px] border-gray-300 relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TitleForm />
      <div className="grid gap-4 relative ">
        <div className="relative">
          <Label
            className={` ${
              errors.email?.message ? "text-red-400" : "text-black"
            }`}
            htmlFor="email"
          >
            Email
          </Label>
          <Input
            placeholder={`Email`}
            className={`mt-1 bg-white ${
              errors.email ? "border-red-400 placeholder:text-red-300" : ""
            }`}
            type="text"
            id="email"
            disabled={isPending}
            {...register("email")}
          />
        </div>
        <div className="relative">
          <Link
            className="absolute top-[3px] right-0 text-[13px] font-normal text-blue-500 md:hover:text-blue-400"
            href=""
          >
            Forgot password
          </Link>
          <Label
            className={`bg-white    ${
              errors.password?.message ? "text-red-400" : "text-black"
            }`}
            htmlFor="password"
          >
            Password
          </Label>
          <Input
            placeholder={`Password`}
            className={`mt-1 ${
              errors.password ? "border-red-400 placeholder:text-red-300" : ""
            }`}
            type="text"
            id="password"
            disabled={isPending}
            {...register("password")}
          />
        </div>
      </div>
      <div className="grid gap-4 mt-4 relative z-10">
        <div className="grid grid-cols-2-auto justify-start items-center gap-2">
          <Checkbox className="" id="terms1" />
          <label
            className="text-grayPrimary text-[14px] font-medium"
            htmlFor="terms1"
          >
            Remember me
          </label>
        </div>
        <Button
          className="w-full bg-grayPrimary rounded-lg font-normal md:hover:bg-grayPrimary/80 active:scale-[.98] transition-all relative"
          type="submit"
        >
          {isPending ? "Wait..." : "Login"}
          <StarsBackground className="select-none" starDensity={0.001} />
          <ShootingStars
            starColor="#fff"
            trailColor="#fff"
            minDelay={1000}
            maxDelay={2000}
          />
        </Button>
      </div>
      <SocialButtonsForm />
      <FooterForm />
    </form>
  );
};

export default LoginForm;
