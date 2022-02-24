import Vertical from "./layout/Vertical";
import theme from "./theme";
import {useEffect} from "react";
import ToolBar from "./ToolBar";
import pic_one from "./pics/pic-one.jpg";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
export default function App() {
    useEffect(checkIfFontIsReady, []);
    return <Vertical style={{
        backgroundColor: theme.backgroundColor,
        color: theme.font.color,
        height: '100%',
        fontFamily: theme.font.display
    }}>
        <ToolBar/>
        <Vertical style={{backgroundColor:'blue',position:'relative',marginTop:'4rem'}}>
            <img src={pic_one} alt="Arif Rachim looking at you with pale look" width={'100%'}/>
            <Vertical style={{position:'absolute',bottom:'0rem',left:'0rem',backgroundColor:theme.background.color2,padding:'1rem'}}>
                <h2 style={{fontWeight:'lighter',fontSize:'2rem'}}>Helo, I'm</h2>
                <h1 style={{fontWeight:'lighter',fontSize:'3rem'}}>Arif Rachim</h1>
                <Vertical style={{borderBottom:`1px solid ${theme.font.color}`}}></Vertical>
                <Vertical style={{fontSize:'0.9rem',marginTop:'1rem',marginBottom:'1rem'}}>
                    Software Architect | Blockchain | AI | HTML5 | Full Stack
                </Vertical>
                <Vertical style={{borderBottom:`1px solid ${theme.font.color}`}}></Vertical>
            </Vertical>
        </Vertical>
        <AboutPage/>
        <SkillsPage/>
        <Vertical hAlign={'center'} style={{padding:'1rem'}}>
            @Dubai 2022
        </Vertical>
    </Vertical>
}

function checkIfFontIsReady() {
    (async () => {
        await document.fonts.ready;
        document.body.style.opacity = 1;
    })();

}