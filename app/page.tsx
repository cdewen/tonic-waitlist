"use client";
import EmailTest from "@/components/EmailTest";
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
        <div className="md:h-full h-80 bg-[#FCD0A1] relative overflow-hidden">
          <Image
            src="/mobile-app.png"
            alt="Mobile App Screenshots"
            fill
            className="object-contain mt-8 md:mt-24 px-14 object-bottom"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">

          <Image 
          src="/logo.svg"
          alt="logo"
          width={120}
          height={120}
          />

          
          <h1 className="font-semibold font-serif tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Got <span className="text-purple-500">influence</span>?<br></br>Get <span className="text-purple-500">rewards</span>.
          </h1>
          <p className="text-gray-500 max-w-lg">
            Join the waitlist to join the club where you instagram stories can earn
            you exclusive deals at all your favorite spots.
          </p>
          {
            !signedUp ? <EmailTest setSignedUp={setSignedUp} /> : <ThankYou />
          }
        </main>
      </section>
    </>
  );
}
