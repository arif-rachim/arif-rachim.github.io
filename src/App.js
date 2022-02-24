import Vertical from "./layout/Vertical";
import theme from "./theme";
import {useEffect} from "react";
import ToolBar from "./ToolBar";
import pic_one from "./pics/pic-one.jpg";
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
        <Vertical style={{padding:'1rem',fontSize:'1.1rem',fontWeight:'normal'}}>
            <p style={{marginTop:'1rem'}}>Finally, on February 24, I purchased the domain name www.rach.im.</p>
            <p style={{marginTop:'1rem'}}>Then I began developing a website using my preferred stack technology. React!.</p>
            <p style={{marginTop:'1rem'}}>This website has also been asked for by my wife for a long time, so I started to think about filling this page with things.</p>
        </Vertical>

    </Vertical>
}

function checkIfFontIsReady() {
    (async () => {
        await document.fonts.ready;
        document.body.style.opacity = 1;
    })();

}