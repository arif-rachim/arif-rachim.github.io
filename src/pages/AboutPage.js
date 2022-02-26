import Page, {PageSubTitle} from "../components/Page";
import Vertical from "../components/Vertical";
import theme from "../theme";
export default function AboutPage() {
    return <Page id={'about'}>
        <PageSubTitle text={'About'}/>
        <Vertical style={{fontWeight:300,fontFamily:theme.font.display}}>
            <p style={{marginBottom:'1rem'}}>Arif is an accomplished software engineer who has spent the most of his professional career designing enterprise resource planning (ERP) solutions.</p>
            <p style={{marginBottom:'1rem'}}>He began his career as a Java Developer and has since earned the Sun Certified Enterprise Architect designation.</p>
            <p style={{marginBottom:'1rem'}}>Apart from his extensive knowledge of Java technology, Arif possesses significant experience in the field of Rich Internet Applications.</p>
            <p style={{marginBottom:'1rem'}}>Responsible for the design and development of an enterprise resource planning (ERP) system based on Adobe Flex-based Rich Internet Applications (RIA).</p>
            <p style={{marginBottom:'1rem'}}>An expert in HTML 5 technology and is the 42nd man to be certified by Google as a mobile web specialist.</p>
            <p style={{marginBottom:'1rem'}}>He enjoys developing open source technologies such as yallajs.io and web components utilizing the React framework for fun.</p>
            <p style={{marginBottom:'1rem'}}>Currently employed as a Software Engineer with a government entity in Abu Dhabi, where he is responsible for the architecture of the front-end ERP and mobile application systems.</p>
        </Vertical>
    </Page>
}