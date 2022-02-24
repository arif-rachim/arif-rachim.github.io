import Horizontal from "./layout/Horizontal";
import Vertical from "./layout/Vertical";
import {createContext,useContext} from "react";
import theme from "./theme";

export default function LabelText({label,...props}){
    const horizontalWidth = useContext(HorizontalWidthContext);
    return <Horizontal style={{fontSize:'0.9rem',fontWeight:300,paddingBottom:'0.5rem',marginBottom:'1rem',borderBottom:`1px solid ${theme.label.separatorColor}`}}>
        <Vertical style={{width:horizontalWidth,flexShrink:0}}>
            {label}
        </Vertical>
        <Vertical style={{width:'1rem',flexShrink:0}}>:</Vertical>
        <Vertical style={{flexGrow:1}}>
            {props.children}
        </Vertical>
    </Horizontal>
}

const HorizontalWidthContext = createContext('30rem');


export function HorizontalLabel({width,...props}){
    return <HorizontalWidthContext.Provider value={width}>
        {props.children}
    </HorizontalWidthContext.Provider>

}