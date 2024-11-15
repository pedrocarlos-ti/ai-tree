"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME, redirect: false });
    } catch (error) {
      console.log(error);
      toast({
        title: "Sign in failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign in",
        variant: "destructive",
      });
    }
  };

  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          className="invert-colors mr-2.5 object-contain"
          src="/icons/github.svg"
          alt="github"
          width={20}
          height={20}
        />
        <span>Log in with Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          className="mr-2.5 object-contain"
          src="/icons/google.svg"
          alt="google"
          width={20}
          height={20}
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
