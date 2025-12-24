import localFont from "next/font/local";

const geistSans = localFont({
    src: "./GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const arctic_guardian = localFont({
    src: "./arcticguardian.ttf",
    variable: "--font-arctic-guardian"
})

const nerd_font = localFont({
    src: "./0xProtoNerdFontMono-Regular.ttf",
    variable: "--font-nerd"
})

export const fontVariables: string = `${geistMono.variable} ${geistSans.variable} ${arctic_guardian.variable} ${nerd_font.variable}`