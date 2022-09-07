import Vertical from "./components/Vertical";
import theme from "./theme";
import {useEffect} from "react";
import ToolBar from "./components/ToolBar";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import CertificationPage from "./pages/CertificationPage";
import WelcomePage from "./pages/WelcomePage";
import FooterPage from "./pages/FooterPage";

export default function App() {
    useEffect(checkIfFontIsReady, []);
    return <Vertical style={{
        backgroundColor: theme.backgroundColor,
        color: theme.font.color,
        height: '100%',
        fontFamily: theme.font.display
    }} hAlign={'center'}>
        <Vertical style={{maxWidth:800}}>
        <ToolBar/>
        <WelcomePage/>
        <AboutPage/>
        <ExperiencePage/>
        <SkillsPage/>
        <CertificationPage/>
        <FooterPage/>
        </Vertical>
    </Vertical>
}

function checkIfFontIsReady() {
    (async () => {
        await document.fonts.ready;
        document.body.style.opacity = 1;
    })();

}