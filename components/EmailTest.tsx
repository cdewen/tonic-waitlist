"use client";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AtSign, Mail, UserIcon } from "lucide-react"

export default function EmailTest(Props) {

  const [formData, setFormData] = useState({
    name: '',
    instagram: '',
    email: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    Props.setSignedUp(true)
  }

  return (
    <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="space-y-2">
            <label htmlFor="name" className="sr-only">Name</label>
            <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="text-accent-500 max-w-lg block h-10 w-full pl-10 focus:invalid:border-red-400 focus:invalid:ring-red-500 appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your name"
                />
            </div>
            <label htmlFor="instagram" className="sr-only">Instagram</label>
            <div className="relative">
                <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <input
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleInputChange}
                className="text-accent-500 max-w-lg block h-10 w-full pl-10 focus:invalid:border-red-400 focus:invalid:ring-red-500 appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                placeholder="instagram username"
                />
            </div>
            <label htmlFor="email" className="sr-only">Name</label>
            <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="text-accent-500 max-w-lg block h-10 w-full pl-10 focus:invalid:border-red-400 focus:invalid:ring-red-500 appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="name@email.com"
                />
            </div>
            <button
                className="flex h-10 shrink-0 items-center justify-center gap-1 rounded-lg bg-[#000F2D] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700"
                type="submit"
                >
                <span>Join the waitlist</span>
            </button>
        </div>
        </form>
    </>
  );
}
