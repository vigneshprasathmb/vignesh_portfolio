"use client";
import { skillSets, socialMedia, workExp } from "./data";

export default function Home() {
  return (
    <main className="flex-auto">
      <div className="sm:px-8 mt-9">
        <div className="mx-auto w-full max-w-4xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-2xl">
              <a
                aria-label="Home"
                className="block size-24 origin-left pointer-events-auto mb-6 mt-12 sm:mt-24"
                href="/"
                style={{ transform: "var(--avatar-image-transform)" }}
              >
                <img
                  alt=""
                  className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800  text-transparent"
                  srcSet="./images/profile-img.png"
                  src="./images/profile-img.png"
                />
              </a>
              <h1 className="text-4xl sm:text-5xl font-black">
                Vignesh Prasath
                <span className="text-muted-foreground font-semibold font-extralight  mt-1 text-lg sm:text-xl block text-balance">
                  Business Analyst & UI/Frontend Developer
                </span>
              </h1>
              <p className="text-balance text-base text-muted-foreground mt-3">
                Business Analyst with 4+ years of experience in business process
                optimization and requirement analysis. 
                <strong>
                  Skilled in gathering and documenting requirements, stakeholder
                  management, and translating business needs into actionable
                  solutions.
                </strong>
                Proficient in data analysis, process modelling, and UI/UX
                collaboration using tools like Figma.
                <strong>
                  Strong understanding of Agile/Scrum methodologies and
                  experienced in working with development teams using
                  technologies like React.js, Node.js, and Express.js.
                </strong>
                Passionate about bridging business and technology to drive
                efficiency and enhance user experience.
              </p>
              <div className="mt-6 flex gap-6">
                {socialMedia.map((itm, inx) => {
                  return (
                    <a
                      key={inx}
                      href={itm.url}
                      aria-label={itm.url}
                      className="hover:opacity-80 transition-opacity duration-200"
                    >
                      <img src={itm.src} alt={itm.alt} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-8 mt-16">
        <div className="mx-auto w-full max-w-4xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-bold ">
                Spot Me
                <span className="text-muted-foreground mt-3 font-normal  text-base block text-balance ">
                  Most recent projects and contributions.
                </span>
              </h1>
              <div className="text-muted-foreground text-balance mt-6 flex items-center gap-2">
                <a
                  href="./doc/VigneshPrasath_Resume.pdf"
                  download="vigneshprasath_resume.pdf"
                  className="border px-4 py-2 rounded-full flex items-center gap-4 transition-transform duration-200 hover:scale-105 hover:bg-background/20 hover:opacity-80"
                >
                  Resume
                  <i className="text-foreground hgi-stroke hgi-download-04" />
                </a>
                <a
                  href="https://github.com/vigneshprasasthmarimuthu"
                  className="border px-4 py-2 rounded-full flex items-center gap-4 transition-transform duration-200 hover:scale-105 hover:bg-background/20 hover:opacity-80"
                >
                  Github{" "}
                  <i className="text-foreground hgi-stroke hgi-link-forward" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-8 mt-16">
        <div className="mx-auto w-full max-w-4xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-bold ">
                Skillsets
                <span className="text-muted-foreground font-normal   mt-3 text-base block text-balance ">
                  The skills i have used for my projects.
                </span>
              </h1>

              <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {skillSets.map((i, x) => {
                  return (
                    <li
                      key={x}
                      className=" flex items-center gap-4 transition-transform duration-200 cursor-pointer hover:scale-105 hover:bg-background/20 hover:opacity-80"
                    >
                      <img src={i.src} alt={i.alt} className="h-[20px]" />
                      <span className="capitalize font-light">{i.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-8 mt-16">
        <div className="mx-auto w-full max-w-4xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Works/Interns
                <span className="text-muted-foreground font-normal mt-3 text-base block text-balance">
                  I have 4+ years of experience working on various company as
                  internships and full-time. <br />
                  Here are some of the experiences I've had.
                </span>
              </h1>

              {workExp.map((i, x) => {
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-3 mt-9" key={x}>
                    <div className="col-span-1 text-base text-muted-foreground  ">
                      {i.period}
                    </div>
                    <div className="col-span-2  space-y-2 ">
                      <h2 className="text-xl font-[400] ">
                        {i.role}{" "}
                        <span className="text-blue-500">@{i.company}</span>
                      </h2>

                      {i.desc && (
                        <p className="text-muted-foreground text-base">
                          <strong className="text-foreground">
                            Description:
                          </strong>{" "}
                          {i.desc}
                        </p>
                      )}
                      <p className="text-muted-foreground text-base">
                        <strong className="text-foreground">
                          Technologies Used:
                        </strong>{" "}
                        <span className="text-blue-500">{i.techUsed}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
