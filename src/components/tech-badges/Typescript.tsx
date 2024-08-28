import { Badge } from "../ui/badge"
import { SiTypescript as Typescript } from "react-icons/si";

const TsBadge = () => {
    return (
        <Badge className="hover:bg-blue-500/80 text-zinc-900 flex gap-2 bg-blue-700">
            <Typescript className="text-zinc-50"/>
            <p className="text-zinc-50">Typescript</p>
        </Badge>
    )
}

export default TsBadge