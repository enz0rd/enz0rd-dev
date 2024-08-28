import { Badge } from "../ui/badge"
import { FaNodeJs  } from "react-icons/fa";
const NodeBadge = () => {
    return (
        <Badge className="hover:bg-green-500/80 text-zinc-900 flex gap-2 bg-green-500">
            <FaNodeJs />
            <p>Node</p>
        </Badge>
    )
}

export default NodeBadge