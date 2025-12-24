export interface INFO {
    name: string
    email: string
    phone: string
    position: string
    location: string
    about: string
    careerGoals: string
}

export interface SOCIAL {
    type: "email" | "linkedIn" | "instagram" | "x" | "facebook"
    url: "string"
}

export interface PROJECT {
    /** The name of the project */
    name: string;

    /** A brief description of the project */
    description: string;

    /**
     * The duration of the project
     * Must include start and end duration
     * e.g., "2000 - present" or "2000 - 2005"
     */
    duration: string;

    /** Keywords or technologies used in the project (optional) */
    keywords?: string[];

    /**
     * Link to the live version or demo of the project (optional)
     * e.g., "https://your-domain-name/project"
     */
    url?: string;

    /**
     * Link to the source code of the project, if available (optional)
     * e.g., "https://github.com/username/project.git"
     */
    src?: string;

    /**
     * URL of the project's image (optional)
     * e.g., "/images/project.png"
     */
    imgUrl?: string;

    /**
     * The category or type of the project
     * e.g., "Web Dev", "Game Dev", "RUST"
     */
    type: string | string[];
}




export interface EXPERIENCE {
    role: string
    orgainzation: string
    /** must include start and end duration  
     * 
     * e.g. 2000 - present | 2000 - 2005
     */
    duration: string
    responsiblities: string[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataCollection = INFO | SOCIAL[] | string[] | any

export interface DATA {
    info: INFO
    socials: SOCIAL[]
    projects: PROJECT[]
    experience: {
        work?: EXPERIENCE[]
        internship?: EXPERIENCE[]
        other?: EXPERIENCE[]
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    education: any
    technicalSkills: string[]
    hobbies?: string[]
}
