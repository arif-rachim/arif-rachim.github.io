import Page from "../component/Page";
import {IoLogoLinkedin} from "react-icons/io5";
import {useLayoutEffect, useRef} from "react";
import {gsap} from "gsap";

export default function Contact() {
    const ref = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const timeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    start: '-100px 80%',
                    end: '100px 50%',
                    scrub: true
                }
            })
            timeLine.fromTo(ref.current, {
                y: 200,
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            })
        })
        return () => context.revert()

    }, [])
    return <Page>
        <div style={{display: 'flex', flexDirection: 'column',marginBottom:'30vh'}} ref={ref}>
            <div style={{fontWeight: 500, fontSize: '2.5rem', lineHeight: '3rem'}}>Connect with me</div>
            <div style={{fontWeight: 700, marginTop: '5rem'}}>Achmad Arif Rachim</div>
            <div style={{marginTop: '1.5rem', color: '#555'}}>
                <div>a.arif.r@gmail.com</div>
                <div>+971-50-901-8075</div>
                <div>Dubai, United Arab Emirates</div>
            </div>
            <div style={{marginTop: '2rem'}}>Find my resume <a href={'arif-rachim-cv.pdf'} aria-label={"Download arif rachim resume pdf"}>and download as pdf</a></div>
            <div style={{marginTop: '2rem'}}><a href={'https://ae.linkedin.com/in/arifrachim'} aria-label={'LinkedIn'}><IoLogoLinkedin
                style={{fontSize: '4rem'}}/></a></div>
        </div>
    </Page>
}