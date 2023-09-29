import Page from "../component/Page";

import style from "./LandingPage.module.css";

export default function LandingPage() {
    return <Page>
        <h1 className={style.title} style={{marginTop:'30vh'}}>Arif Rachim</h1>
        <h2 className={style.subTitle}>Fullstack Software Architect</h2>
        <div style={{display: 'flex', justifyContent: 'center',marginBottom:'20vh'}}>
            <a style={{
                marginTop: '2.5rem',
                backgroundColor: '#010101',
                color: '#FFF',
                fontSize: '1rem',
                fontWeight: 700,
                padding: '0.7rem 4rem',
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center'
            }} href={'mailto:a.arif.r@gmail.com'} aria-label={'reach out link'}>REACH OUT</a>
        </div>
    </Page>
}