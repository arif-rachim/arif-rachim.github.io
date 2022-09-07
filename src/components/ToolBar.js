import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
import theme from "../theme";
import {useState,useEffect} from "react";
import {IoMenu} from "react-icons/io5";

function onLoad(onClick) {
    return function onLoad(){
        document.body.addEventListener('click',onClick);
        return () => {
            document.body.removeEventListener('click',onClick);
        }
    }
}

export default function ToolBar() {
    const [showMenu, setShowMenu] = useState(false);
    useEffect(onLoad(() => showMenu && setShowMenu(false)),[showMenu]);
    return <Vertical style={{position: 'fixed', top: '0', width: '100%',maxWidth:800, zIndex: 1}}>
        <Horizontal vAlign={'center'} style={{backgroundColor: theme.backgroundColor,zIndex:1,boxShadow:`0px 0px 5px 2px rgba(0,0,0,0.7)`}}>
            <h4 style={{fontFamily: theme.font.display, fontSize: '1.2rem', fontWeight: "normal", padding: '1rem'}}>Arif
                Rachim</h4>
            <Vertical style={{flexGrow: 1}}/>
            <Vertical style={{padding: '1rem', fontSize: '2rem'}} onClick={() => setShowMenu(toggle => !toggle)}>
                <IoMenu/>
            </Vertical>
        </Horizontal>
        <Vertical style={{
            position: 'absolute',
            top: showMenu ? '4rem' : '-7rem',
            transition: 'top 300ms ease-in-out',
            backgroundColor: theme.background.color,
            width:'100vw',
            padding:'0rem 1rem',
            fontSize:'1.1rem'
        }}>
            <a href={'#about'} style={{color:theme.font.color}}><Vertical style={{marginBottom:'1rem',marginTop:'1rem'}}>About</Vertical></a>
            <a href={'#experience'} style={{color:theme.font.color}}><Vertical style={{marginBottom:'1rem'}}>Experience</Vertical></a>
            <a href={'#skills'} style={{color:theme.font.color}}><Vertical style={{marginBottom:'1rem'}}>Skill Set</Vertical></a>
            <a href={'#certification'} style={{color:theme.font.color}}><Vertical style={{marginBottom:'1rem'}}>Certification</Vertical></a>
        </Vertical>
    </Vertical>
}