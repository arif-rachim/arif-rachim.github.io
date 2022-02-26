import Page, {PageSubTitle} from "../components/Page";
import Vertical from "../components/Vertical";
import LabelText, {HorizontalLabel} from "../components/LabelText";
import theme from "../theme";

function CertificationPanel({name, organization, issuedOn, id, link}) {
    return <Vertical style={{marginBottom:'1rem'}}>
        <HorizontalLabel width={'8rem'}>
            <LabelText label={'Certification'}>
                {name}
            </LabelText>
            <LabelText label={'Organization'}>
                {organization}
            </LabelText>
            <LabelText label={'Date'}>
                {issuedOn}
            </LabelText>
            <LabelText label={'Credential ID'}>
                {id}
            </LabelText>
            <a href={link} style={{color: theme.font.color,margin:'1rem 0rem',fontWeight:600,fontSize:'0.9rem',textAlign:'right'}}>See Credential</a>
        </HorizontalLabel>
    </Vertical>;
}

export default function CertificationPage() {
    return <Page id={'certification'} backgroundColor={theme.background.color3}>
        <PageSubTitle text={'Certification'}/>
        <CertificationPanel name={'Mobile Web Specialist'}
                            id={'42'}
                            issuedOn={'Mar 2018'}
                            link={'https://www.credential.net/9c990a3b-d9ea-4cfb-87f0-adedc97d366d?key=4bc0067199009ca60752c325bf03930e21091bcfeb38d4994e0fb68b57fe0066'}
                            organization={'Google'}
        />
        <CertificationPanel name={'DeepLearning. AI TensorFlow Developer Specialization'}
                            id={'K7MXS6ZDJF55'}
                            issuedOn={'Oct 2020'}
                            link={'https://www.coursera.org/account/accomplishments/specialization/certificate/K7MXS6ZDJF55'}
                            organization={'DeepLearning.AI'}
        />
        <CertificationPanel name={'Certified Arduino Fundamental'}
                            id={'43b36d46-779a-42d9-be04-22852b419b6c'}
                            issuedOn={'Feb 2020'}
                            link={'https://drive.google.com/open?id=12bJu4pl11P2YkUq3itGHuhMncNZZg8J2'}
                            organization={'Arduino'}
        />
        <CertificationPanel name={'Block Chain For Business - An Introduction to Hyperledger Technologies'}
                            id={'aaf4f682d7bb461baf1ee04a90fa6606'}
                            issuedOn={'Jan 2018'}
                            link={'https://courses.edx.org/certificates/aaf4f682d7bb461baf1ee04a90fa6606'}
                            organization={'The Linux Foundation'}
        />
        <CertificationPanel name={'IBM Blockchain Foundation Developer'}
                            id={'da52b331-f6df-4407-8a9a-91e6bfe98d74'}
                            issuedOn={'Jan 2018'}
                            link={'https://www.youracclaim.com/badges/da52b331-f6df-4407-8a9a-91e6bfe98d74/linked_in_profile'}
                            organization={'IBM'}
        />

        <CertificationPanel name={'Architecting with Google Compute Engine Specialization'}
                            id={'H8B9NDMLL94X'}
                            issuedOn={'March 2018'}
                            link={'https://www.coursera.org/account/accomplishments/specialization/certificate/H8B9NDMLL94X'}
                            organization={'Coursera'}
        />
        <CertificationPanel name={'Sun Certified Programmer for Java 2 Platfrom'}
                            id={'11/05 SW409182'}
                            issuedOn={'Sep 2007'}
                            link={'https://drive.google.com/open?id=1o57qOczdp90yW9C6bkmomSGCnQUXMZX9'}
                            organization={'Sun Microsystems'}
        />

    </Page>
}