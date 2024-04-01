"use client";

import supabase from "@/lib/supabase";
import Image from "next/image";

export default function Home() {
  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    console.log({ data, error });
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <button
        onClick={handleSignIn}
        className='px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150'>
        <Image
          width={24}
          height={24}
          src='https://www.svgrepo.com/show/475656/google-color.svg'
          loading='lazy'
          alt='google logo'
        />
        <span>Login with Google</span>
      </button>
    </main>
  );
}
