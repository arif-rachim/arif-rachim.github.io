import Page, {PageSubTitle, PageTitle} from "./Page";
import LabelText, {HorizontalLabel} from "./LabelText";
import Vertical from "./layout/Vertical";
import theme from "./theme";
export default function AboutPage() {
    return <Page>
        <PageTitle text={'About'}/>
        <Vertical style={{marginBottom:'2rem'}}>
        <HorizontalLabel width={'8rem'}>
            <LabelText label={'Name'}>Achmad Arif Rachim</LabelText>
            <LabelText label={'Email'}>a.arif.r@gmail.com</LabelText>
            <LabelText label={'Phone'}>(+971)50-9018075</LabelText>
            <LabelText label={'Date of Birth'}>29 January 1982</LabelText>
            <LabelText label={'Address'}>Marina Diamond 5, Dubai Marina, Dubai, United Arab Emirates</LabelText>
            <LabelText label={'Nationality'}>Indonesia</LabelText>
        </HorizontalLabel>
        </Vertical>
        <PageSubTitle text={'Professional Profile'}/>
        <Vertical style={{fontWeight:300,fontFamily:theme.font.display}}>
            <p style={{marginBottom:'1rem'}}>Arif Rachim is an accomplished software engineer who has spent the most of his professional career designing enterprise resource planning (ERP) solutions.</p>
            <p style={{marginBottom:'1rem'}}>He began his career as a Java Developer and has since earned the Sun Certified Enterprise Architect designation.</p>
            <p style={{marginBottom:'1rem'}}>Apart from his extensive knowledge of Java technology, Arif Rachim possesses significant experience in the field of Rich Internet Applications.</p>
            <p style={{marginBottom:'1rem'}}>He is responsible for the design and development of an enterprise resource planning (ERP) system based on Adobe Flex-based Rich Internet Applications (RIA).</p>
            <p style={{marginBottom:'1rem'}}>Arif Rachim is also an expert in HTML 5 technology and is the 42nd man to be certified by Google as a mobile web specialist.</p>
            <p style={{marginBottom:'1rem'}}>Arif Rachim also enjoys developing open source technologies such as yallajs.io and web components utilizing the React framework for fun.</p>
            <p style={{marginBottom:'1rem'}}>Arif is currently employed as a Software Engineer with a government entity in Abu Dhabi, where he is responsible for the architecture of the front-end ERP and mobile application systems.</p>
        </Vertical>
    </Page>
}