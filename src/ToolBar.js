import Horizontal from "./layout/Horizontal";
import Vertical from "./layout/Vertical";
import theme from "./theme";
import {IoMenu} from "react-icons/io5";
export default function ToolBar(){
    return <Horizontal vAlign={'center'} style={{position:'fixed',top:'0',backgroundColor:theme.backgroundColor,width:'100vw',zIndex:1}}>
        <h4 style={{fontFamily:theme.font.display,fontSize:'1.2rem',fontWeight:"normal",padding:'1rem'}}>Arif Rachim</h4>
        <Vertical style={{flexGrow:1}}/>
        <Vertical style={{padding:'1rem',fontSize:'2rem'}}>
            <IoMenu></IoMenu>
        </Vertical>
    </Horizontal>
}