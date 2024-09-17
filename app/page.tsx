"use client";
// > Components
import LoginForm from "@/components/LoginForm/login-form";
import RegisterForm from "@/components/RegisterForm/register-form";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="w-full h-full lg:h-screen grid place-items-center bg-primary relative py-20 px-5 lg:p-0">
        <article className="grid lg:grid-cols-2 gap-[30px] items-center w-full sm:w-auto">
          <div>
            <LoginForm />
          </div>
          <div>
            <RegisterForm />
          </div>
        </article>
        <Link
          className="hover:bg-grayPrimary/10 transition-all p-1 absolute top-3 right-3 rounded-full"
          href="https://github.com/Kirill-H-FrontEnd"
        >
          <Image
            src={"/github.svg"}
            alt="GitHub"
            width={25}
            height={25}
            className=""
          />
        </Link>
      </section>
    </>
  );
}
