import Page from "../component/Page";

import style from "./LandingPage.module.css";
export default function LandingPage() {
    return <Page>
        <h1 className={style.title}>Arif Rachim</h1>
        <h3 className={style.subTitle}>Fullstack Software Architect</h3>
        <div style={{display: 'flex', justifyContent: 'center'}}>
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
            }} href={'mailto:a.arif.r@gmail.com'}>REACH OUT</a>
        </div>
    </Page>
}