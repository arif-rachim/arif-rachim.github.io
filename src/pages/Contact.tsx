import Page from "../component/Page";
import {IoLogoLinkedin} from "react-icons/io5";

export default function Contact() {
    return <Page style={{alignItems: 'center', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: 1024, width: '100%'}}>
            <div style={{fontWeight: 400, fontSize: '3rem', lineHeight: '3rem'}}>Connect with me</div>
            <div style={{fontWeight: 600, marginTop: '5rem'}}>Achmad Arif Rachim</div>
            <div style={{marginTop: '1.5rem', color: '#555'}}>
                <div>a.arif.r@gmail.com</div>
                <div>+971-50-901-8075</div>
                <div>Dubai, United Arab Emirates</div>
            </div>
            <div style={{marginTop: '2rem'}}>Find my resume <a href={'arif-rachim-cv.pdf'}>here</a></div>
            <div style={{marginTop: '2rem'}}><a href={'https://ae.linkedin.com/in/arifrachim'}><IoLogoLinkedin style={{fontSize:'4rem'}}/></a></div>
        </div>
    </Page>
}