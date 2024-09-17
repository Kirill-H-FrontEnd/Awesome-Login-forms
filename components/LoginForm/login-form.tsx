"use client";
import React, { useTransition } from "react";
// > Components

import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormError } from "@/components/ui/error-form";

const LoginForm: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
      className="w-[350px] bg-white rounded-md p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="relative">
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Email"
            className={`mt-1 `}
            type="text"
            id="email"
            disabled={isPending}
            {...register("email")}
          />
          <FormError error={errors.email?.message ?? ""} />
        </div>
        <div className="relative">
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Password"
            className={`mt-1 `}
            type="text"
            id="password"
            disabled={isPending}
            {...register("password")}
          />
          <FormError error={errors.password?.message ?? ""} />
        </div>
      </div>
      <Button className="w-full" type="submit">
        {isPending ? "Sending..." : "Log In"}
      </Button>
    </form>
  );
};

export default LoginForm;
