import "@/styles/commandLine.css";
import { FaLinux, FaRegClock } from "react-icons/fa6";

export default function CommandLine({ extras }: { extras?: string[] }) {
    return (
        <div className="cliHeaderParent">
            <span className="firstLine">
                <FaLinux className="inline" /> GUEST
            </span>
            <span className="secondLine">
                Localhost:3000
            </span>
            <span className="thirdLine">{extras && extras[0]}</span>
            <span className="fourthLine">{extras && extras[1]}</span>
            <span className="fifthLine">{extras && extras[2]}</span>
            <span className="lastLine text-black">
                <FaRegClock className=" inline mx-2" />
                {(new Date().toLocaleString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true }))}</span>
        </div>
    )
}
