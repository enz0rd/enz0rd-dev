import { Badge } from "../ui/badge"
import { FaReact } from "react-icons/fa";
const ReactBadge = () => {
    return (
        <Badge className="hover:bg-sky-600/80 text-zinc-900 flex gap-2 bg-sky-400">
            <FaReact/>
            <p>React</p>
        </Badge>
    )
}

export default ReactBadge