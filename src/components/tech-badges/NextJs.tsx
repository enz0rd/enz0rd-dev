import { TbBrandNextjs } from "react-icons/tb";
import { Badge } from "../ui/badge"

const NextBadge = () => {
    return (
        <Badge className="hover:bg-[#2c2c2c]/80 text-zinc-50 flex gap-2 bg-[#1b1b1b]">
            <TbBrandNextjs />
            <p>NextJS</p>
        </Badge>
    )
}

export default NextBadge;