import Page, {PageSubTitle} from "../components/Page";
import Vertical from "../components/Vertical";
import theme from "../theme";

export default function ExperiencePage() {
    return <Page id={'experience'} backgroundColor={theme.background.color3}>
        <PageSubTitle text={'Experience'}/>
        <Vertical style={{marginBottom: '1rem'}}>
            <Vertical style={{fontWeight: 'bold', fontSize: '1.1rem'}}>Front End Tech Lead (Architect)</Vertical>
            <Vertical style={{fontWeight: 300}}>Global Aerospace Logistic, LLC. Full-time</Vertical>
            <Vertical style={{fontWeight: 300}}>October 2009 - Present</Vertical>
            <Vertical>Abu Dhabi</Vertical>
        </Vertical>
        <Vertical style={{fontWeight: 300, fontFamily: theme.font.display}}>
            <p style={{marginBottom: '1rem'}}>Responsible for architecting and developing enterprise
                resource planning (ERP) applications, particularly in the front end and mobile versions, for one of Abu
                Dhabi's government institutions.</p>
            <p style={{marginBottom: '1rem'}}>Due to the organization's security and distinctiveness, it requires an
                internally developed ERP system</p>
            <p style={{marginBottom: '1rem'}}>The requirement is for an ERP system that is web-based yet has the user
                interface of a desktop program.</p>
            <p style={{marginBottom: '1rem'}}>The program must be capable of displaying an attractive dashboard that is
                packed with functionality and performs well.</p>
            <p style={{marginBottom: '1rem'}}>Additionally, the program must act similarly to an admin panel, with
                functions organized into business modules.</p>
            <p style={{marginBottom: '1rem'}}>Furthermore, a mobile application is required, which enables the firm to
                send personnel to remote regions without access to the internet or a network, where they can work
                offline and have their data synchronized back to the center. with the use of encrypted files.</p>
            <p style={{marginBottom: '1rem'}}>Arif began developing an application for this ERP by breaking down
                the needs the system will employ into individual components. He began by creating minor
                components from scratch, eventually covering approximately 80% of the use cases.</p>
            <p style={{marginBottom: '1rem'}}>Then started by creating some of the functions required by ERP
                as a proof of concept and pilot project using the components that had been prepared. After several
                iterations, He guides the team on how to use the developed components.</p>
            <p style={{marginBottom: '1rem'}}>Responsible for assisting and training colleagues in order
                to ensure that we have the expertise necessary to design apps that meet the expectations of users.</p>
            <p style={{marginBottom: '1rem'}}>Arif is still actively involved in application development to this
                day, tackling new issues based on customer requirements and teaching colleagues how to construct
                effective programs.</p>
        </Vertical>
    </Page>
}