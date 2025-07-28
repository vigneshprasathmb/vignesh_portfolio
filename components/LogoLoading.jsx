"use client";
import { useEffect, useState } from "react";

const LogoLoading = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="122.225mm"
        height="100mm"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        viewBox="0 0 12222.5 10000"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={`w-32 h-32 ${isActive ? "active" : ""}`}
        // {...props}
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <g id="_1843670267824">
            <path
              className="fil0 str0 svg-elem-1"
              d="M12218.65 6281.78l0 3725.97 -1111.1 0 0 -2545.71c0,-35.78 -46.86,-49.18 -65.82,-18.87l-1391.17 2227.11c-130.25,209.81 -359.68,337.47 -606.64,337.47l0 0c-394.3,0 -713.93,-319.67 -713.93,-713.96l0 -1831.75c0,-35.78 -46.86,-49.22 -65.76,-18.87l-1391.58 2227.43c-130.3,209.62 -359.64,337.15 -606.51,337.15l0 0c-394.43,0 -714.14,-319.76 -714.14,-714.15l0 -3730.29 1111.1 0 0 2385.84c0,35.2 45.61,49.04 65.2,19.8l1397.18 -2086.81c133.36,-199.26 357.31,-318.83 597.12,-318.83l0 0c396.82,0 718.51,321.68 718.51,718.51l0 1667.29c0,35.19 45.61,49.03 65.19,19.79l1396.73 -2086.67c133.36,-199.3 357.37,-318.92 597.17,-318.92 396.78,0 718.45,321.68 718.45,718.47z"
            />
            <path
              className="fil0 str0 svg-elem-2"
              d="M1107.46 7244.9c7.11,286.55 230.02,519.28 513,540.64 14.24,1.34 28.48,1.78 42.72,1.78 14.24,0 28.48,-0.44 42.71,-1.78l1623.57 0 0 -1111.12 -1666.28 0c-302.55,0 -548.15,241.63 -555.72,541.99 -0.44,4.46 -0.44,9.35 -0.44,14.25 0,4.89 0,9.78 0.44,14.24zm-1016.24 -570.48c167.31,-473.45 542.82,-849.02 1016.24,-1016.32 173.52,-61.41 360.84,-94.78 555.72,-94.78l2777.72 0 0 4444.44 -1111.44 0 0 -1111.1 -1666.28 0c-194.88,0 -382.2,-33.38 -555.72,-94.78 -473.42,-167.32 -848.93,-542.88 -1016.24,-1016.34 -61.39,-173.54 -94.76,-360.43 -94.76,-555.34 0,-194.89 33.37,-382.23 94.76,-555.78z"
            />
            <path
              className="fil0 str0 svg-elem-3"
              d="M6663.1 726.23l0 3725.97 -1111.1 0 0 -2545.71c0,-35.79 -46.86,-49.18 -65.82,-18.87l-1391.18 2227.11c-130.24,209.81 -359.67,337.47 -606.63,337.47l0 0c-394.3,0 -713.93,-319.67 -713.93,-713.96l0 -1831.75c0,-35.79 -46.86,-49.22 -65.77,-18.87l-1391.57 2227.42c-130.3,209.63 -359.64,337.16 -606.51,337.16l0 0c-394.43,0 -714.15,-319.76 -714.15,-714.15l0 -3730.29 1111.11 0 0 2385.84c0,35.2 45.61,49.04 65.2,19.8l1397.17 -2086.81c133.37,-199.27 357.32,-318.83 597.13,-318.83l0 0c396.82,0 718.51,321.68 718.51,718.51l0 1667.29c0,35.19 45.61,49.03 65.18,19.79l1396.74 -2086.67c133.36,-199.31 357.37,-318.92 597.16,-318.92 396.79,0 718.46,321.68 718.46,718.47z"
            />
            <path
              className="fil0 str0 svg-elem-4"
              d="M11107.98 1689.35c-7.11,286.55 -230.02,519.28 -513,540.64 -14.24,1.34 -28.48,1.78 -42.72,1.78 -14.24,0 -28.48,-0.44 -42.71,-1.78l-1623.57 0 0 -1111.12 1666.28 0c302.55,0 548.15,241.63 555.72,541.99 0.44,4.46 0.44,9.35 0.44,14.24 0,4.9 0,9.79 -0.44,14.25zm1016.24 -570.48c-167.31,-473.45 -542.82,-849.02 -1016.24,-1016.33 -173.52,-61.4 -360.84,-94.77 -555.72,-94.77l-2777.72 0 0 4444.44 1111.44 0 0 -1111.1 1666.28 0c194.88,0 382.2,-33.38 555.72,-94.78 473.42,-167.32 848.93,-542.88 1016.24,-1016.34 61.39,-173.54 94.76,-360.43 94.76,-555.34 0,-194.89 -33.37,-382.23 -94.76,-555.78z"
            />
          </g>
        </g>
      </svg>

      <style jsx>{`
        svg .svg-elem-1 {
          stroke-dashoffset: 36112.69921875px;
          stroke-dasharray: 36112.69921875px;
          fill: transparent;
          -webkit-transition: stroke-dashoffset 1.5s
              cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s,
            fill 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715)
              0.6s,
            fill 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
        }

        svg.active .svg-elem-1 {
          stroke-dashoffset: 0;
          fill: rgb(254, 254, 254);
        }

        svg .svg-elem-2 {
          stroke-dashoffset: 22541.376953125px;
          stroke-dasharray: 22541.376953125px;
          fill: transparent;
          -webkit-transition: stroke-dashoffset 1.5s
              cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s,
            fill 3s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715)
              1.6s,
            fill 3s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s;
        }

        svg.active .svg-elem-2 {
          stroke-dashoffset: 0;
          fill: rgb(254, 254, 254);
        }

        svg .svg-elem-3 {
          stroke-dashoffset: 36112.7109375px;
          stroke-dasharray: 36112.7109375px;
          fill: transparent;
          -webkit-transition: stroke-dashoffset 1.5s
              cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s,
            fill 3s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715)
              2.6s,
            fill 3s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s;
        }

        svg.active .svg-elem-3 {
          stroke-dashoffset: 0;
          fill: rgb(254, 254, 254);
        }

        svg .svg-elem-4 {
          stroke-dashoffset: 22541.3828125px;
          stroke-dasharray: 22541.3828125px;
          fill: transparent;
          -webkit-transition: stroke-dashoffset 1.5s
              cubic-bezier(0.47, 0, 0.745, 0.715) 3.6s,
            fill 3s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715)
              3.6s,
            fill 3s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s;
        }

        svg.active .svg-elem-4 {
          stroke-dashoffset: 0;
          fill: rgb(254, 254, 254);
        }

        .str0 {
          stroke: #ebecec;
          stroke-width: 20;
          stroke-miterlimit: 22.9256;
        }
        .fil0 {
          fill: #fefefe;
          fill-rule: nonzero;
        }
      `}</style>
    </div>
  );
};

export default LogoLoading;
