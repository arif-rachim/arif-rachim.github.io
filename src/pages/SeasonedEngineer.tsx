import Page from "../component/Page";
import arif from "../assets/arif-photo.jpg";

export default function SeasonedEngineer(){
    const years = new Date().getFullYear() - 2004;
    return <Page style={{alignItems: 'center', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '5rem', maxWidth: 1024}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1 style={{fontWeight: 600, fontSize: '2rem'}}>Seasoned Engineer</h1>
                <h1 style={{fontWeight: 600, fontSize: '1rem'}}>More than {years} Years software development</h1>
                <div style={{marginTop: '2rem'}}>I'm a software engineer with a focus on web-based systems and
                    mobile apps, currently working on a component design system for an ERP solution with a web-based
                    interface. I've had the privilege of collaborating with my team, contributing to component
                    development, and going through several iterations to improve our implementation continually.
                    Additionally, I've had the opportunity to share my knowledge and offer support to my colleagues,
                    contributing to the growth of our team's skills in designing user-centric applications. I remain
                    actively engaged in application development, committed to adapting to evolving user requirements
                    for more effective solutions.
                </div>
            </div>
            <img src={arif} width={375} height={375} style={{borderRadius: '50rem'}} alt={'Arif photo'}/>
        </div>
    </Page>
}