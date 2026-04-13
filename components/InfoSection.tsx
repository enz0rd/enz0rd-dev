import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

export default function InfoSection() {
  return (
    <div
      id="info"
      className="container flex flex-col items-center gap-2 justify-center mx-auto"
    >
      <h1 className="text-3xl font-bold">info:</h1>
      <span className="text-md flex-wrap text-center mx-5 max-w-2xl">
        My focus is on delivering{" "}
        <Tooltip>
          <TooltipTrigger>
            <b className="text-green-500">high-quality, maintainable code</b>
          </TooltipTrigger>
          <TooltipContent>
            <p>pretty cool, huh?</p>
          </TooltipContent>
        </Tooltip>{" "}
        that meets the needs of end-users and stakeholders alike.
      </span>
    </div>
  );
}
