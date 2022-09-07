import pic_one from "./pics/arif.jpg";
import Vertical from "../components/Vertical";
import theme from "../theme";

export default function WelcomePage(){
    return <Vertical style={{backgroundColor: 'blue', position: 'relative', marginTop: '4rem'}}>
        <img src={pic_one} alt="Arif Rachim looking at you with pale look" width={'100%'} />
        <NameCard />
        <Vertical style={{width:'100%',height:'100%',top:0,position:'absolute',boxShadow:'0px 0px 5px 5px rgba(0,0,0,1) inset,0px 0px 15px 5px rgba(0,0,0,0.5) inset'}}/>
    </Vertical>
}


function NameCard() {
    return <Vertical style={{
        position: 'absolute',
        bottom: '0rem',
        left: '0rem',
        backgroundColor: theme.background.color2,
        padding: '2rem 1rem',
        backdropFilter : 'blur(2px)'
    }}>
        <h2 style={{fontWeight: 'lighter', fontSize: '2rem'}}>Helo, I'm</h2>
        <h1 style={{fontWeight: 'lighter', fontSize: '3rem'}}>Arif Rachim</h1>
        <Vertical style={{borderBottom: `1px solid ${theme.font.color}`}}></Vertical>
        <Vertical style={{fontSize: '0.9rem', marginTop: '1rem', marginBottom: '1rem'}}>
            Software Architect | Blockchain | AI | HTML5 | Full Stack
        </Vertical>
        <Vertical style={{borderBottom: `1px solid ${theme.font.color}`}}></Vertical>
    </Vertical>;
}