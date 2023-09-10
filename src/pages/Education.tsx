import Page from "../component/Page";
import styles from "./Education.module.css";

const certifications: { name: string, organization: string, issued: string, url: string, description: string, className: string }[] = [
    {
        name: 'AI TensorFlow Developer Specialization',
        organization: 'DeepLearning.AI',
        issued: 'October 2020',
        url: 'https://www.coursera.org/account/accomplishments/professional-cert/K7MXS6ZDJF55',
        description: 'Successfully completed all four courses within the DeepLearning.AI TensorFlow Developer Professional Certificate program. These include constructing and training neural networks using TensorFlow, enhancing network performance through convolutional techniques for real-world image recognition, instructing machines to comprehend, analyze, and interact with human speech using natural language processing systems, and acquiring knowledge in other essential TensorFlow concepts.',
        className: styles.fullWidth
    }, {
        name: 'Certified Arduino Fundamental',
        issued: 'February 2020',
        url: 'https://drive.google.com/file/d/12bJu4pl11P2YkUq3itGHuhMncNZZg8J2/view',
        organization: 'Arduino',
        description: 'Arduino Certification is an online exam that provides official certification on the knowledge of Arduino related electronics, programming and physical computing.',
        className: styles.halfWidth
    }, {
        name: 'API Management Concept',
        issued: 'March 2018',
        url: 'https://www.credly.com/badges/1fc4b1dd-4498-4b20-a814-a94892b7955e/linked_in_profile',
        organization: 'IBM',
        description: 'Successfully completed the API Management Concepts certification issued by IBM, this badge holder demonstrates an understanding of the business and architectural concepts of API development.',
        className: styles.halfWidth
    }, {
        name: 'Architecting Google Compute Engine',
        issued: 'March 2018',
        url: 'https://www.coursera.org/account/accomplishments/specialization/H8B9NDMLL94X',
        organization: 'Coursera',
        description: "Successfully completed the 'Architecting with Google Compute Engine' specialization and gained an in-depth understanding of designing and deploying solutions, encompassing infrastructure components such as networks, systems, and application services. This practical experience was acquired within the versatile environment of the Google Cloud Platform, contributing to the development of expertise in cloud-based architectural design.",
        className: styles.fullWidth
    }, {
        name: 'Google Mobile Web Specialist',
        issued: 'March 2018',
        url: 'https://www.credential.net/9c990a3b-d9ea-4cfb-87f0-adedc97d366d?key=4bc0067199009ca60752c325bf03930e21091bcfeb38d4994e0fb68b57fe0066',
        organization: 'Google',
        description: ' Google Certified Mobile Web Specialist certification, a performance-based examination evaluating expertise in developing and delivering superior mobile web experiences. This comprehensive exam encompasses various essential topics, including fundamental website layout and styling, front-end networking, accessibility standards, progressive web application development, progressive enhancement strategies, performance optimization, caching techniques, security best practices, rigorous testing, debugging methodologies, and JavaScript design principles. Obtaining this certification demonstrates the ability to apply these skills to real-world challenges within a timed setting, necessitating strong critical thinking and problem-solving capabilities under pressure.',
        className: styles.fullWidth
    }, {
        name: 'Advance CSS Concept',
        issued: 'February 2018',
        url: 'https://courses.edx.org/certificates/43312906e0fa4d10ba53a03cba5d9aa3',
        organization: 'Microsoft',
        description: 'DEV218x: Advanced CSS Concepts, an online course by Microsoft on edX, instructed by seasoned developer Josh Bezdek. This comprehensive course covers advanced CSS topics, including Flexbox, CSS Grid, responsive design, Sass, SCSS, SVG images, and web development tools. The course consists of seven modules with video lectures, quizzes, exercises, and a final exam. It equips learners with skills for creating sophisticated and responsive web pages, efficient layouts, maintainable CSS, and error-free coding. ',
        className: styles.fullWidth
    }, {
        name: 'Microservices Practitioner Essential',
        issued: 'March 2018',
        url: 'https://www.credly.com/badges/118f3f5a-9ed3-4d6b-b900-78489df6c14b/linked_in_profile',
        organization: 'IBM',
        description: 'The earner of this badge has demonstrated the knowledge of Microservices Foundation skills. The individual has an understanding of Microservices architecture, how to refactor, design and develop applications and use Microservices Frameworks.',
        className: styles.halfWidth
    }, {
        name: 'Docker Essentials',
        issued: 'February 2018',
        url: 'https://www.credly.com/badges/641bc0e2-4b27-4473-854b-ba35026f9e4f/linked_in_profile',
        organization: 'IBM',
        description: 'Earners of this badge know what Docker containers are and their benefits. The individual knows how to run containers from Docker Hub, create Docker containers, and how to solve problems of orchestration (reconciliation, scaling, high availability, service discovery). The badge earner also understands best practices for using DockerFiles and how to use tools such as the IBM Cloud Kubernetes Service.',
        className: styles.halfWidth
    }, {
        name: 'IBM Blockchain foundation Developer',
        issued: 'January 2018',
        url: 'https://www.credly.com/badges/da52b331-f6df-4407-8a9a-91e6bfe98d74/linked_in_profile',
        organization: 'IBM',
        description: 'Earners of this badge have deep knowledge of blockchain concepts, such as smart contracts, ledgers, business networks, participants, and Hyperledger Composer. Badge earners also know how to model and build a simple blockchain network and a JavaScript application that queries the ledger',
        className: styles.halfWidth
    }, {
        name: 'Python for DataScience',
        issued: 'January 2018',
        url: 'https://www.credly.com/badges/0199436b-5cbb-4550-8638-e4d600ea7aaa/linked_in_profile',
        organization: 'IBM',
        description: 'The individual holding this badge possesses the capability to independently create Python scripts and conduct fundamental hands-on data analysis within IBM\'s Jupyter-based laboratory environment.',
        className: styles.halfWidth
    }, {
        name: 'Sun Certified Programmer for Java 2 Platform',
        issued: 'September 2007',
        url: 'https://drive.google.com/file/d/1o57qOczdp90yW9C6bkmomSGCnQUXMZX9/view',
        organization: 'Sun Microsystem',
        description: 'Sun Certified Programmer for Java 2 Platform (SCJP) was a certification examination assessing proficiency in the Java programming language, evaluating the ability to write, compile, debug, and troubleshoot Java programs. Notably, the SCJP exam was officially retired in 2018, but it remains a valuable certification for Java developers seeking to showcase their expertise. The examination encompassed a wide range of topics, including Java language fundamentals, object-oriented programming, control flow, data structures, exception handling, I/O operations, multithreading, generics, annotations, JavaBeans, Servlets, JSP, and Enterprise JavaBeans.',
        className: styles.fullWidth
    }]

export default function Education() {
    return <Page>
        <div className={styles.container}>
            <div>
                <div className={styles.title}>
                    <div>Education</div>
                    <div>& Certifications</div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', flexGrow:1, gap: '5rem'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{fontWeight: 600}}>BACHELOR OF ELECTRICAL ENGINEERING</div>
                    <div style={{fontStyle: 'italic', fontWeight: 300, fontSize: '0.9rem'}}>Major in Computer
                        Engineering
                    </div>
                    <div style={{fontWeight: 700, fontSize: '0.8rem', marginTop: '0.5rem'}}>UNIVERSITY OF INDONESIA
                        (2000-2004)
                    </div>
                    <div style={{fontWeight: 400, fontSize: '0.9rem'}}>Final Project : Distance Learning System With
                        J2EE
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{fontWeight: 600}}>HIGH SCHOOL DIPLOMA</div>
                    <div style={{fontWeight: 700, fontSize: '0.8rem', marginTop: '0.5rem'}}>SMA NEGERI 8, JAKARTA
                        (1997-2000)
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: "row", flexWrap: 'wrap'}}>
                    {certifications.map(c => {
                        return <div key={c.name} className={c.className} >
                            <div style={{fontWeight: 700}}>{c.name}</div>
                            <div style={{
                                marginTop: '0.5rem',
                                fontWeight: 600,
                                fontSize: '0.8rem'
                            }}>{c.organization}</div>
                            <div style={{fontSize: '0.8rem', fontStyle: 'italic'}}>{c.issued}</div>
                            <div style={{color: '#555', marginTop: '1rem'}}>{c.description}</div>
                            <a href={c.url} style={{fontSize:'0.8rem',marginTop:'0.5rem'}}>Show Credentials</a>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </Page>
}