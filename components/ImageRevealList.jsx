"use client";

import { useState } from "react";

const list = [
  {
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    label: "Beautiful",
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    label: "Tech",
  },
  {
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    label: "Modern",
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    label: "Delicious",
  },
  {
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    label: "Travel",
  },
  {
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    label: "Sports",
  },
];

const ImageRevealList = () => {
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
        {list.map((item) => (
          <li
            key={item.label}
            className="w-full py-3 cursor-pointer flex justify-between items-center text-xl border-b last:border-none"
            role="button"
            tabIndex={0}
            onMouseEnter={() =>
              setImg({
                src: item.img,
                alt: item.label,
                visible: true,
                x: img.x,
                y: img.y,
              })
            }
            onMouseLeave={() =>
              setImg({ src: "", alt: "", visible: false, x: img.x, y: img.y })
            }
          >
            <p>{item.label}</p>
            <p>{item.label}</p>
            <p>{item.label}</p>
          </li>
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
};

export default ImageRevealList;
