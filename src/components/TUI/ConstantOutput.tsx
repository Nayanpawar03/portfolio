import CommandLine from "./CommandLine"

export const Error = ({ command }: { command: string }) => {
    return <>
        <CommandLine />
        <p>{command}</p>
        <pre>&apos;{command}&apos; is not a recognized command.
            <br />
            Type help for more info.
        </pre>
    </>
}

export const Help = ({ command }: { command: string }) => {
    return <>
        <CommandLine />
        <p>{command}</p>
        <pre>
            Available Commands: gui, clear, help, about, social, project, experience, education, skill, hobbies
        </pre>
    </>
}

export const SplashScreen = () => {
    return <>
        <pre style={{ fontSize: "10pt", fontFamily: "var(--font-nerd)" }}>

            Available Commands: gui, clear, help, about, social, project, experience, education, skill, hobbies
        </pre>
    </>
}