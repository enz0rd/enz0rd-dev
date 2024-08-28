import { Badge } from "../ui/badge"
import { IoLogoJavascript as Javascript } from "react-icons/io";

const JsBadge = () => {
    return (
        <Badge className="hover:bg-[#F0DB4F]/80 text-zinc-900 flex gap-2 bg-[#F0DB4F]">
            <Javascript />
            <p>Javascript</p>
        </Badge>
    )
}

export default JsBadge