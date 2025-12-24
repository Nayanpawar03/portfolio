import { DataCollection } from "@/data/data.type";
import CommandLine from "./CommandLine";

export default function CommandOutput({ data, command }: { data: DataCollection, command: string }) {
    return (
        <>
            <CommandLine />
            <p>{command}</p>
            <pre>
                {
                    JSON.stringify(data, null, 5)
                }
            </pre>
        </>
    )
}
