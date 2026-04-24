import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

export default function TechnologiesSection() {
  return (
    <div
      id="tech"
      className="container flex flex-col items-center gap-2 justify-center mx-auto"
    >
      <h1 className="text-3xl font-bold">technologies:</h1>
      <div className="text-md mx-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-x-10">
        <Tooltip>
          <TooltipTrigger>
            <li className="hover:text-blue-500 transition .7s cursor-default">
              TypeScript
            </li>
          </TooltipTrigger>
          <TooltipContent>
            <p>my main language</p>
          </TooltipContent>
        </Tooltip>
        <li className="hover:text-sky-500 transition .7s cursor-default">
          React
        </li>
        <Tooltip>
          <TooltipTrigger>
            <li className="hover:text-mist-500 transition text-start .7s cursor-default">
              Next.js
            </li>
          </TooltipTrigger>
          <TooltipContent>
            <p>my main framework</p>
          </TooltipContent>
        </Tooltip>
        <li className="hover:text-green-500 transition .7s cursor-default">
          Node.js
        </li>
        <li className="hover:text-orange-500 transition .7s cursor-default">
          Html
        </li>
        <li className="hover:text-blue-500 transition .7s cursor-default">
          CSS
        </li>
        <Tooltip>
          <TooltipTrigger>
            <li className="hover:text-blue-500 transition .7s cursor-default">
              PostgreSQL
            </li>
          </TooltipTrigger>
          <TooltipContent>
            <p>my main database</p>
          </TooltipContent>
        </Tooltip>
        <li className="hover:text-green-500 transition .7s cursor-default">
          Playwright
        </li>
      </div>
    </div>
  );
}
