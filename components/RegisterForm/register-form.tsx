"use client";
// > Zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// > React
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
// > Schemas
import { RegisterFormSchema } from "@/schemas";
// > Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import { StarsBackground } from "../ui/stars-background";
import { ShootingStars } from "../ui/shooting-stars";
import { FooterForm } from "./_components/footer-form";
import { TitleForm } from "./_components/title-form";

const RegisterForm: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof RegisterFormSchema>) => {};
  return (
    <>
      <form
        className="w-full sm:w-[400px] bg-white rounded-2xl p-6 shadow-md relative border-[1px] border-gray-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TitleForm />
        <div className="grid gap-4">
          <div className="relative">
            <Label
              className={`${
                errors.email?.message ? "text-red-400" : "text-black"
              }`}
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              placeholder={`${errors.email ? errors.email?.message : "Email"}`}
              className={`mt-1 ${
                errors.email ? "border-red-400 placeholder:text-red-300" : ""
              }`}
              type="email"
              id="email"
              disabled={isPending}
              {...register("email")}
            />
          </div>
          <div className="relative">
            <Label
              className={`${
                errors.password?.message ? "text-red-400" : "text-black"
              }`}
              htmlFor="password"
            >
              Password
            </Label>
            <Input
              placeholder={`${
                errors.password ? errors.password?.message : "Password"
              }`}
              className={`mt-1 ${
                errors.password ? "border-red-400 placeholder:text-red-300" : ""
              }`}
              type="password"
              id="password"
              disabled={isPending}
              {...register("password")}
            />
          </div>
          <div className="relative">
            <Label
              className={`${
                errors.confirmPassword?.message ? "text-red-400" : "text-black"
              }`}
              htmlFor="confirmPassword"
            >
              Confirm password
            </Label>
            <Input
              placeholder={`${
                errors.confirmPassword
                  ? errors.confirmPassword?.message
                  : "Confirm password"
              }`}
              className={`mt-1 ${
                errors.confirmPassword
                  ? "border-red-400 placeholder:text-red-300"
                  : ""
              }`}
              type="password"
              id="confirmPassword"
              disabled={isPending}
              {...register("confirmPassword")}
            />
          </div>
        </div>
        <div className="grid gap-4 mt-4">
          <div className="grid grid-cols-2-auto justify-start items-center gap-2">
            <Checkbox className="" id="terms1" />
            <label
              className="text-grayPrimary text-[14px] font-medium"
              htmlFor="terms1"
            >
              I accept{" "}
              <Link
                className="text-blue-500 font-normal md:hover:text-blue-400"
                href=""
              >
                Terms and Conditions
              </Link>
            </label>
          </div>
          <Button
            className="w-full bg-grayPrimary rounded-lg md:hover:bg-grayPrimary/80 font-normal  active:scale-[.98] transition-all relative"
            type="submit"
          >
            {isPending ? "Wait..." : "Create an account"}
            <StarsBackground className="select-none" starDensity={0.001} />
            <ShootingStars
              starColor="#fff"
              trailColor="#fff"
              minDelay={1000}
              maxDelay={2000}
            />
          </Button>
        </div>
        <FooterForm />
      </form>
    </>
  );
};

export default RegisterForm;
