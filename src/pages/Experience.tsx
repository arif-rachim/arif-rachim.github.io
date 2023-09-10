import Page from "../component/Page";
import styles from "./Experience.module.css"

const experience: string[] = ["Utilizing the React framework in order to methodically plan out, design, and construct design system components for an enterprise resource planning (ERP) application. This all-inclusive suite is comprised of more than 50 precisely built components, such as a DataGrid, DataLookup, DropDown, Slide Panel, and the program's Shell, which together provide a solid and adaptable basis for the application.",
    "Crafting user interface components for dynamic dashboards, exemplified by the Operation Dashboard. This entails skillfully integrating an array of features, including interactive charts and tabular data, all while enhancing the user experience with fluid animations and an aesthetically pleasing interface.",
    "Innovative development, design, and deployment of a mobile application with seamless offline functionality for aircraft pilots and technicians. This intuitive application enables users to efficiently record mission information, flight hours, faults, and scheduled inspections. Additionally, it synchronizes this vital information with the central ERP application using advanced encryption techniques for increased security.",
    "Building a Geographical Information System through the use of open-source technology called Apache Flex (formerly known as Adobe Flex), with the goal of enabling users to mark the location of aircraft as they are deployed and giving the system the name Fleet Location.",
    "Creating an innovative server health check monitoring system, harnessing socket technology to provide continuous, real-time data updates to clients, facilitating seamless server condition monitoring encompassing disk consumption, CPU utilization, and memory usage. This cutting-edge system operates tirelessly, ensuring 24/7 availability without interruption.",
    `Innovating the development of strong "File View" backend systems with the capability to convert many file formats, such as Microsoft Excel, Microsoft Word, and PowerPoint, into PDF files, and then transforming them further into SWF format. This protected method ensures that users are able to view the content without jeopardizing the system's security in any way by barring direct file downloads.`,
    "Utilizing the capabilities of the React Framework and JavaScript to construct a reporting mechanism that is centered on the client and encapsulating it as a component that can be reused. This strategic step not only expedites report development but also frees it from dependence on legacy technologies like as Reporting Engine Server, which helps to streamline the process. Moreover, it speeds up report development.",
    "Developed a complex Scheduler component in order to provide the aircraft mission schedules in a manner known as Weekly Mission. Displayed great ability in drawing schedule blocks correctly and aligning them in a columnar structure, ensuring accurate portrayal of start and end timings of a schedule while maintaining high-performance rendering.",
    "Actively assisting colleagues in need of support when they encounter issues in implementing an attractive user interface, while also providing recommendations on the right approach to achieve optimal performance in front-end development."
]

export default function Experience() {
    return <Page>
        <div className={styles.container}>
            <div>
                <div className={styles.title}>
                    <div>Relevant</div>
                    <div>Experience</div>
                </div>
            </div>
            <div>
                <div className={styles.subTitle}>2009 -
                    current
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className={styles.heading}>Front End Architect / Fullstack
                    Engineer
                </div>
                <div style={{fontWeight: 500, fontStyle: 'italic'}}>Global Aerospace Logistic, LLC</div>
                {experience.map((e, index) => {
                    return <div key={index} style={{marginTop: '2rem', color: '#555'}}>{e}</div>
                })}
            </div>
        </div>
    </Page>
}