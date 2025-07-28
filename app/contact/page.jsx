"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";
import { sendMail } from "./mail";

export default function page() {
  const [state, action] = useActionState(sendMail, undefined);

  return (
    <main className="flex-auto">
      <div className="sm:px-8 mt-9">
        <div className="mx-auto w-full max-w-4xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <p>Want to start project?</p>
              <div className="w-full flex flex-col sm:flex-row  items-start sm:items-center justify-between ">
                <h1 className="text-7xl font-semibold mt-4">Let's Talk</h1>
                <a
                  href="./doc/VigneshPrasath_Resume.pdf"
                  download="vigneshPrasath_resume.pdf"
                  className="p-2 px-5 border rounded-full text-sm mt-5 flex items-center gap-2"
                >
                  Resume{" "}
                  <i className="hgi-stroke hgi-download-04 text-muted-foreground"></i>
                </a>
              </div>
            </div>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h1 className="text-4xl font-medium text-muted-foreground my-4 ">
                Share you request
              </h1>
              <form
                action={action}
                className="flex items-start flex-col max-w-lg gap-4"
              >
                <Input
                  type="text"
                  name="name"
                  className="border w-full rounded-lg outline-none h-10 text-[12px] placeholder:text-[12px] shadow-none"
                  placeholder="Enter fullname"
                />
                <Input
                  type="text"
                  name="mail"
                  className="border w-full rounded-lg outline-none h-10 text-[12px] placeholder:text-[12px] shadow-none"
                  placeholder="Enter email-address"
                />
                <Input
                  type="number"
                  name="mobile"
                  className="border w-full rounded-lg outline-none h-10 text-[12px] placeholder:text-[12px] shadow-none"
                  placeholder="Enter mobile-number"
                />

                <Textarea
                  type="text"
                  name="requestMsg"
                  className="border w-full rounded-lg !outline-none !focus:outline-none p-2 placeholder:text-[12px] shadow-none"
                  placeholder="Enter requirements"
                />
                <button className="p-2 px-5 border rounded-full text-sm items-center flex gap-2">
                  Send request{" "}
                  <i className="hgi-stroke hgi-arrow-up-right-01"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
