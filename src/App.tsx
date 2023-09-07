import {CSSProperties} from "react";
import LandingPage from "./pages/LandingPage";
import SeasonedEngineer from "./pages/SeasonedEngineer";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}


function App() {

    return <div style={style}>
        <LandingPage />
        <SeasonedEngineer />
        <Experience />
        <Education />
        <Contact />
    </div>
}

export default App