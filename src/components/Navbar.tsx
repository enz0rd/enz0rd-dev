import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-4 w-full lg:justify-center flex justify-around z-10">
      <div className="w-[90%] lg:w-[1280px] h-[4rem] border border-zinc-900 backdrop-blur p-2 flex flex-row justify-between rounded-full bg-zinc-900/50">
        <div className="flex bg-zinc-900 w-fit rounded-full px-4">
          <h1 className="m-auto text-zinc-50 font-bold">
            enz0rd
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FDC500] to-[#FFE383]">
              .dev
            </span>
          </h1>
        </div>
        <div className="hidden lg:flex rounded-full bg-zinc-900">
          <div className="flex px-4 py-2 flex-row gap-6 m-auto">
            <a
              className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </a>
            <a
              className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About me
            </a>
            <a
              className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </a>
            <a
              className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]"
              onClick={() =>
                document
                  .querySelector("#experiences")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Experiences
            </a>
            <a
              className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]"
              onClick={() =>
                document
                  .querySelector("#skills")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Skills
            </a>
          </div>
        </div>
        <Sheet>
          <SheetTrigger className="lg:hidden" asChild>
            <div className="align-middle bg-zinc-900 rounded-md m-2 cursor-pointer p-1">
              <Menu className="text-zinc-50" />
            </div>
          </SheetTrigger>
          <SheetContent className="fixed bg-zinc-900 text-zinc-50 m-auto flex flex-col justify-center h-[100vh]">
            <div className="flex bg-zinc-900 align-middle justify-center w-fit rounded-full px-2">
              <h1 className="m-auto text-zinc-50 font-bold">
                enz0rd
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FDC500] to-[#FFE383]">
                  .dev
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <a
                className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </a>
              <a
                className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]"
                onClick={() =>
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About me
              </a>
              <a
                className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Projects
              </a>
              <a
                className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]"
                onClick={() =>
                  document
                    .querySelector("#experiences")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Experiences
              </a>
              <a
                className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]"
                onClick={() =>
                  document
                    .querySelector("#skills")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Skills
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
