import Image from "next/image";
import React from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Theme from "@/components/navigation/navbar/Theme";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      <section className="light-border background-light900_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join AITree</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get started, please enter your details.
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            alt="AI Tree"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}

        <SocialAuthForm />
      </section>

      <Theme className="absolute right-10 top-10" />
    </main>
  );
};

export default AuthLayout;
