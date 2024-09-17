// > Components
import { Input } from "@/components/ui/input";
import LoginForm from "@/components/LoginForm/login-form";
import RegisterForm from "@/components/RegisterForm/register-form";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen overflow-hidden grid place-items-center bg-primary ">
        <article className="grid grid-cols-2 gap-[30px]">
          <LoginForm />
          <RegisterForm />
        </article>
      </section>
    </>
  );
}
