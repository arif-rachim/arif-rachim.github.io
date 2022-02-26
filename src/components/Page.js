import Vertical from "./Vertical";
import theme from "../theme";

export default function Page({id,children,backgroundColor}){
    return <Vertical id={id} style={{padding:'1rem',paddingTop:'5rem',backgroundColor}}>
        {children}
    </Vertical>
}


export function PageTitle({text}){
    return <Vertical hAlign={'left'} style={{marginBottom:'2rem'}}>
        <Vertical style={{fontWeight:'lighter',fontFamily:theme.font.display,textTransform:'uppercase',borderBottom:`1px solid ${theme.title.borderColor}`,fontSize:'1.5rem'}}>
            {text}
        </Vertical>
    </Vertical>
}

export function PageSubTitle({text}){
    return <Vertical style={{fontWeight:'lighter',fontFamily:theme.font.display,textTransform:'uppercase',fontSize:'1.2rem',marginBottom:'2rem'}}>
        {text}
    </Vertical>
}
