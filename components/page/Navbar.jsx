"use client";

import { menuItems } from "@/app/data";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  // console.log(pathname);

  return (
    <header className="sticky top-0 z-10 h-16 pt-6">
      <div className="sm:px-8 w-full">
        <div className="mx-auto w-full max-w-4xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-4xl ">
              <div className="relative grid grid-cols-3">
                <div className="flex flex-1 justify-start">
                  <img
                    src={`${
                      theme === "light"
                        ? "/images/brand/brand-dark.svg"
                        : "/images/brand/brand-light.svg"
                    }`}
                    alt="brand"
                    className="h-8"
                  />
                </div>
                <nav className="w-fit pointer-events-auto hidden md:block shrink-0 justify-center  px-3 rounded-full backdrop-blur-md border border-foreground/10">
                  <ul className="flex  rounded-full bg-zinc-0 px-1 text-sm font-medium text-muted-foreground">
                    {menuItems.map((i, x) => {
                      return (
                        <li key={x}>
                          <a
                            className={`relative block px-2 py-2 transition shrink-0 text-muted-foreground dark:text-muted-foreground ${
                              pathname === i.url && "text-black dark:text-white"
                            } hover:text-zinc-900  dark:hover:text-zinc-50 capitalize`}
                            href={i.url}
                          >
                            {i.name}

                            {pathname === i.url && (
                              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent dark:from-zinc-400/0 dark:via-amber-400/40 dark:to-transparent"></span>
                            )}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="pe-3 gap-3 flex items-center col-span-2 sm:col-span-1 justify-end">
                  <div className="pointer-events-auto md:hidden px-5 p-2  border border-foreground/10 h-fit rounded-full">
                    <Dialog>
                      <DialogTrigger className="flex items-center gap-1">
                        Menu <i className="hgi-stroke hgi-menu-11"></i>
                      </DialogTrigger>
                      <DialogContent className="top-5 gap-0 pb-4 pt-4 max-w-[340px] translate-x-[-50%] translate-y-[0] rounded-3xl">
                        <DialogHeader className="mb-1">
                          <DialogTitle className="font-mono text-sm text-start text-muted-foreground">
                            Navigation
                          </DialogTitle>
                        </DialogHeader>
                        <nav className="mt-6">
                          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                            {menuItems.map((i, x) => {
                              return (
                                <li className="block py-2" key={x}>
                                  <a
                                    className={`relative block px-3 py-2 transition shrink-0 text-muted-foreground dark:text-muted-foreground ${
                                      pathname === i.url &&
                                      "text-black dark:text-white"
                                    } hover:text-zinc-900  dark:hover:text-zinc-50 capitalize`}
                                    href={i.url}
                                  >
                                    {i.name}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </nav>

                        <DialogFooter></DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="pointer-events-auto">
                    <button
                      onClick={() =>
                        theme === "light" ? setTheme("dark") : setTheme("light")
                      }
                    >
                      {/* hgi-stroke hgi-sun-03 */}
                      {theme === "light" ? (
                        <i className="text-lg hgi-stroke hgi-sun-03" />
                      ) : (
                        <i className="text-lg hgi-stroke  hgi-moon-02" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
