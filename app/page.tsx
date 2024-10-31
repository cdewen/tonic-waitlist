"use client";
import EmailForm from "@/components/EmailForm";
import ThankYou from "@/components/ThankYou";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Home() {

  const [signedUp, setSignedUp] = useState(false);

  return (
    <>
      <Toaster />


      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#7d7dc3] relative overflow-hidden">
          <Image
            src="/higherRes.webp"
            alt="Mobile App Screenshots"
            fill
            className="object-contain mt-8 md:mt-24 px-14 object-bottom"
            priority={true}
          />
        </div>

        <main className="flex flex-col gap-8 md:mt-8 justify-center px-6 pb-10">
          <Image 
          src="/logo.svg"
          alt="logo"
          width={120}
          height={120}
          priority={true}
          />

          
          <h1 className="font-semibold font-serif tracking-tight text-zinc-900 lg:text-5xl md:text-5xl text-4xl leading-tight ">
            Got <span className="bg-gradient-to-tr from-violet-600 to-blue-500 bg-clip-text text-transparent drop-shadow-md">influence</span>?<br></br>Get <span className="bg-gradient-to-tr from-violet-600 to-blue-500 bg-clip-text text-transparent drop-shadow-md">rewards</span>.
          </h1>
          <p className="text-gray-500 max-w-lg">
            Join the club where your instagram stories can earn
            you exclusive deals at all your favorite spots.
          </p>
          {
            !signedUp ? <EmailForm setSignedUp={setSignedUp} /> : <ThankYou />
          }
        </main>
      </section>
    </>
  );
}
