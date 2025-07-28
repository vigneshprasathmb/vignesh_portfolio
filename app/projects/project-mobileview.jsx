"use client";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React from "react";
import { projectsList } from "../data";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProjectMobileView() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-3">
      {projectsList.map((i, x) => {
        return (
          <Card
            className="w-full rounded-[20px] !shadow-none p-2 relative"
            key={x}
          >
            {i.hasImage && (
              <img
                src={i.image}
                alt={i.projImage}
                className="aspect-video object-cover object-top rounded-xl"
              />
            )}
            <div className="flex gap-2 items-center justify-between p-2">
              <h1 className="font-bold text-base capitalize flex flex-row gap-3 items-center">
                {i.name}
              </h1>

              {i.development ? (
                <p className="text-[12px] space-x-1 text-muted-foreground flex items-center leading-tight capitalize">
                  <span className="w-1 h-1 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-[#00e626] opacity-75"></span>
                  <span className="font-medium text-gray-700">
                    In-development
                  </span>
                </p>
              ) : (
                <p className="text-[12px] space-x-1 text-muted-foreground flex items-center leading-tight capitalize">
                  <span className="w-1 h-1 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-[#00e626] opacity-75"></span>
                  <span className="font-medium text-gray-700">In-Live</span>
                </p>
              )}
            </div>
            {i.hasLink && (
              <Dialog key={x}>
                <DialogTrigger className="w-full text-[12px] flex items-center h-10 justify-center rounded-xl bg-muted-foreground/10">
                  View
                </DialogTrigger>
                <DialogContent className=" max-w-sm !h-[calc(100%-30px)] block rounded-2xl sm:rounded-2xl p-0">
                  <DialogHeader className="p-6">
                    <DialogTitle>{i.name}</DialogTitle>
                  </DialogHeader>
                  <iframe
                    width="100%"
                    height="90.7%"
                    src={
                      i.type === "design"
                        ? i.link +
                          "&footer=false&viewport-controls=true&page-selector=false&scaling=fit-width&content-scaling=fixed"
                        : i.link
                    }
                    allowFullScreen
                    className="rounded-b-xl"
                    footer='false'
                  ></iframe>
                </DialogContent>
              </Dialog>
            )}
          </Card>
        );
      })}
    </div>
  );
}
