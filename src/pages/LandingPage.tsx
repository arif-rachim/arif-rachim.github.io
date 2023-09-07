import Page from "../component/Page";

export default function LandingPage() {
    return <Page style={{alignItems: 'center', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{fontWeight: 600, fontSize: '5rem'}}>Arif Rachim</h1>
            <h3 style={{fontWeight: 400, fontSize: '2.1rem'}}>Fullstack Software Architect</h3>
            <a style={{
                marginTop: '2.5rem',
                backgroundColor: '#010101',
                color: '#FFF',
                fontSize: '1rem',
                fontWeight: 700,
                padding: '0.7rem 4rem',
                cursor: 'pointer',
                textDecoration:'none'
            }} href={'mailto:a.arif.r@gmail.com'}>REACH OUT</a>
        </div>
    </Page>
}