import ProjectDesktopView from "./project-destoktop";
import ProjectMobileView from "./project-mobileview";

export default function page() {
  return (
    <main className="flex-auto">
      <div className="sm:px-8 mt-9">
        <div className="mx-auto w-full max-w-4xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-3xl">
              <h1 className=" text-4xl sm:text-5xl font-bold">
                Projects
                <span className="text-muted-foreground  font-normal text-base mt-2 block text-balance">
                  Here you can find the major updates and changes to my life.
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-8 mt-9">
        <div className="mx-auto w-full max-w-4xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-3xl hidden lg:block">
              <ProjectDesktopView />
            </div>
            <div className="mx-auto max-w-2xl lg:max-w-3xl block lg:hidden ">
              <ProjectMobileView />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
