import About from "./GUI/About";
import Contact from "./GUI/Contact";
import Cursor from "./GUI/cursor";
import Footer from "./GUI/Footer";
import HeroSection from "./GUI/HeroSection";
import Navbar from "./GUI/Navbar";
import Projects from "./GUI/Projects";
import Skills from "./GUI/Skills";
import Temp from "./GUI/Temp";

export default function Gui({ sceneChanger }: { sceneChanger: (data: number) => void }) {
    return (
        <>
            {/* <Navbar /> */}
            <Temp />
            <div className="px-2">
                <HeroSection />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Footer sceneChanger={sceneChanger} />
            <Cursor />
        </>
    )
}
