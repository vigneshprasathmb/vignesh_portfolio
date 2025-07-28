"use client";

import { useState } from "react";
import { projectsList } from "../data";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProjectDesktopView() {
  const [img, setImg] = useState({
    src: "",
    alt: "",
    visible: false,
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {
    setImg((prev) => ({ ...prev, x: e.clientX + 10, y: e.clientY + 10 }));
  };

  return (
    <section onMouseMove={handleMove} className="flex items-center w-full">
      <ul className="list-none w-full">
        {projectsList.map((i, x) => (
          <Dialog key={x}>
            <DialogTrigger className="w-full !border-b last:border-none   px-3 transition-all  ">
              <li
                className="w-full h-14 cursor-pointer grid grid-cols-3 items-center text-xl"
                role="button"
                tabIndex={0}
                // onClick={() => router.push(i.projLink)}
                onMouseEnter={() =>
                  setImg({
                    src: i.image,
                    alt: i.name,
                    visible: true,
                    x: img.x,
                    y: img.y,
                  })
                }
                onMouseLeave={() =>
                  setImg({
                    src: "",
                    alt: "",
                    visible: false,
                    x: img.x,
                    y: img.y,
                  })
                }
              >
                <p className="text-base text-start capitalize p-1">{i.name}</p>
                <p className="text-sm text-muted-foreground text-start capitalize p-1">
                  {i.type}
                </p>
                <div className="text-base text-start capitalize grid grid-cols-3 items-center p-1">
                  <div className="col-span-2">
                    <p className="text-sm capitalize text-muted-foreground flex flex-row items-center gap-2">
                      {i.development ? (
                        <>
                          <span className="w-1 h-1 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-[#00e626] opacity-75"></span>
                          <span>In-development</span>
                        </>
                      ) : (
                        <>
                          <span className="w-1 h-1 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-[#00e626] opacity-75"></span>
                          <span>In-Live</span>
                        </>
                      )}
                    </p>
                  </div>
                  <div className="text-end transition-all">
                    {img.alt === i.name && i.hasLink && (
                      <i className="hgi-stroke hgi-link-square-02 " />
                    )}
                  </div>
                </div>
              </li>
            </DialogTrigger>
            <DialogContent className="!min-w-[calc(100%-30px)] !h-[calc(100%-30px)] block sm:rounded-2xl p-0">
              <DialogHeader className="p-6">
                <DialogTitle>name</DialogTitle>
              </DialogHeader>
              <iframe
                width="100%"
                height="92.5%"
                src={
                  i.type === "design"
                    ? i.link +
                      "&footer=false&viewport-controls=true&page-selector=false&scaling=fit-width&content-scaling=fixed"
                    : i.link
                }
                allowFullScreen
                className="rounded-xl"
                footer={false}
              ></iframe>
            </DialogContent>
          </Dialog>
        ))}
      </ul>
      {img.visible && (
        <img
          src={img.src}
          alt={img.alt}
          className="w-[300px] h-[300px] rounded-xl object-cover object-center absolute left-0 top-0 transition-[opacity 200ms ease-in-out]"
          style={{
            position: "fixed",
            left: img.x,
            top: img.y,
            opacity: img.visible ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            pointerEvents: "none",
          }}
        />
      )}
    </section>
  );
}
