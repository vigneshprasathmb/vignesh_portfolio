import React from "react";

export default function Footer() {
  return (
    <footer className="mt-5 flex-none ">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-4xl lg:px-8">
          <div className="border-t max-w-3xl mx-auto"></div>
          <div className="pb-16 pt-10 ">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-muted-foreground mb-4">
                  <a
                    className="transition hover:text-zinc-500 dark:hover:text-zinc-400"
                    href="/"
                  >
                    Readme
                  </a>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="items-center flex flex-wrap gap-4">
                    <a
                      target="_blank"
                      rel="nofollow"
                      className="items-center flex gap-1"
                      href="https://nextjs.org"
                    >
                      Built by{" "}
                      <img
                        src="./images/skillsets/icons8-nextjs.svg"
                        alt=""
                        className="h-6 w-6"
                      />
                     
                    </a>
                    <a
                      target="_blank"
                      rel="nofollow"
                      className="items-center flex gap-1"
                      href="https://nextjs.org"
                    >
                      Deployed in{" "}
                      <img
                        src="./images/skillsets/vercel-logotype-dark.svg"
                        alt=""
                        className="h-3"
                      />
                     
                    </a>

                    <div className="grow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
