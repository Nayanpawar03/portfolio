import data from "@/data/data";
import { FormEvent, Fragment, useEffect, useState } from "react";
import CommandLine from "./TUI/CommandLine";
import CommandOutput from "./TUI/CommandOutput";
import { Error, Help, SplashScreen } from "./TUI/ConstantOutput";

const MAX_CONTENT: number = 10;

enum commands {
    gui,
    clear,
    help,
    error,
    info,
    socials,
    projects,
    experience,
    education,
    technicalSkills,
    hobbies,
}

function matcher(input: string): commands {
    switch (input) {
        case "gui":
            return commands.gui;
        case "clear":
            return commands.clear;
        case "help":
            return commands.help;
        case "about":
            return commands.info;
        case "social":
            return commands.socials;
        case "project":
            return commands.projects;
        case "experience":
            return commands.experience;
        case "skill":
            return commands.technicalSkills;
        case "hobbies":
            return commands.hobbies;
        case "help":
            return commands.help;

        default:
            return commands.error;
    }
}

function boundedSet<T>(list: T[], item: T) {
    if (list.length === MAX_CONTENT) list.shift();
    return [...list, item];
}

export default function Tui({ sceneChanger }: { sceneChanger: (data: number) => void }) {
    const [content, setcontent] = useState<JSX.Element[]>([<SplashScreen key={0} />]);
    const [commandStore, setCommandStore] = useState<string[]>([]); // Stores history of commands
    const [input, setInput] = useState<string>(""); // Current input in the terminal
    const [historyIndex, setHistoryIndex] = useState<number>(-1); // Tracks position in history

    console.log(commandStore, content);

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const latestCommand = matcher(input);
        if (latestCommand !== commands.error)
            setCommandStore((commandStore) => boundedSet(commandStore, input));

        switch (latestCommand) {
            case commands.gui:
                return sceneChanger(2);
            case commands.clear:
                setcontent([]);
                break;
            case commands.info:
                setcontent((content) =>
                    boundedSet(content, <CommandOutput data={data.info} command={input} />)
                );
                break;
            case commands.socials:
                setcontent((content) =>
                    boundedSet(content, <CommandOutput data={data.socials} command={input} />)
                );
                break;
            case commands.projects:
                setcontent((content) =>
                    boundedSet(content, <CommandOutput data={data.projects} command={input} />)
                );
                break;
            case commands.experience:
                setcontent((content) =>
                    boundedSet(content, <CommandOutput data={data.experience} command={input} />)
                );
                break;
            case commands.education:
                setcontent((content) =>
                    boundedSet(content, <CommandOutput data={data.education} command={input} />)
                );
                break;
            case commands.technicalSkills:
                setcontent((content) =>
                    boundedSet(content, <CommandOutput data={data.technicalSkills} command={input} />)
                );
                break;
            case commands.hobbies:
                setcontent((content) =>
                    boundedSet(content, <CommandOutput data={data.hobbies} command={input} />)
                );
                break;
            case commands.help:
                setcontent((content) => boundedSet(content, <Help command={input} />));
                break;
            default:
                setcontent((content) => boundedSet(content, <Error command={input} />));
                break;
        }

        setInput("");
        setHistoryIndex(-1); // Reset history navigation on new command
    }

    useEffect(() => {
        function handleClick() {
            document.querySelector("input")?.focus();
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: "smooth" });
    }, [content]);

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "ArrowUp") {
            // Navigate to previous command
            if (commandStore.length > 0 && historyIndex < commandStore.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandStore[commandStore.length - 1 - newIndex]); // Fetch command in reverse order
            }
        } else if (event.key === "ArrowDown") {
            // Navigate to next command
            if (historyIndex > -1) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandStore[commandStore.length - 1 - newIndex]);
            }
        }
    }

    return (
        <div
            style={{
                minHeight: "calc(100vh - 1.5rem)",
                borderColor: "rgb(166, 218, 149)",
                backgroundColor: "rgb(30, 32, 48)",
                fontFamily: "var(--font-nerd)",
            }}
            className="box-border border-2 m-3 p-3 rounded-md overflow-x-clip"
            id="Terminal"
        >
            {content.map((data, index) => (
                <Fragment key={index}>{data}</Fragment>
            ))}
            <CommandLine />
            <form onSubmit={(e) => submitHandler(e)}>
                <input
                    name="input"
                    className="bg-transparent text-white outline-none border-none w-full"
                    value={input}
                    autoComplete="off"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown} // Handle arrow key navigation
                    type="text"
                />
            </form>
        </div>
    );
}