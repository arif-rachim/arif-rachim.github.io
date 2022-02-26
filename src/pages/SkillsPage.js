import Page, {PageSubTitle, PageTitle} from "../components/Page";
import LabelText, {HorizontalLabel} from "../components/LabelText";
import Vertical from "../components/Vertical";
import Horizontal from "../components/Horizontal";
import theme from "../theme";
import GaugeChart from "react-gauge-chart";

export default function SkillsPage(){
    return <Page id={'skills'}>
        <PageSubTitle text={'Arif Rachim skill set'}/>
        <Horizontal style={{marginBottom:'1rem'}}>
            <Vertical hAlign={'center'} style={{width:'50%'}}>
                <Vertical hAlign={'center'}>HTML 5 / Mobile</Vertical>
                <GaugeChart nrOfLevels={30}
                            colors={["#FF5F6D", "#FFC371"]}
                            arcWidth={0.3}
                            percent={0.99}
                />
            </Vertical>
            <Vertical hAlign={'center'} style={{width:'50%'}}>
                <Vertical hAlign={'center'}>Blockchain</Vertical>
                <GaugeChart nrOfLevels={30}
                            colors={["#FF5F6D", "#FFC371"]}
                            arcWidth={0.3}
                            percent={0.91}
                />
            </Vertical>
        </Horizontal>
        <Horizontal style={{marginBottom:'1rem'}}>
            <Vertical hAlign={'center'} style={{width:'50%'}}>
                <Vertical hAlign={'center'}>AI</Vertical>
                <GaugeChart nrOfLevels={30}
                            colors={["#FF5F6D", "#FFC371"]}
                            arcWidth={0.3}
                            percent={0.87}
                />
            </Vertical>
            <Vertical hAlign={'center'} style={{width:'50%'}}>
                <Vertical hAlign={'center'}>Full Stack</Vertical>
                <GaugeChart nrOfLevels={30}
                            colors={["#FF5F6D", "#FFC371"]}
                            arcWidth={0.3}
                            percent={0.98}
                />
            </Vertical>
        </Horizontal>
        <Horizontal style={{marginBottom:'1rem'}}>
            <Vertical hAlign={'center'} style={{width:'50%'}}>
                <Vertical hAlign={'center'}>IOT</Vertical>
                <GaugeChart nrOfLevels={30}
                            colors={["#FF5F6D", "#FFC371"]}
                            arcWidth={0.3}
                            percent={0.93}
                />
            </Vertical>
            <Vertical hAlign={'center'} style={{width:'50%'}}>
                <Vertical hAlign={'center'}>K8S</Vertical>
                <GaugeChart nrOfLevels={30}
                            colors={["#FF5F6D", "#FFC371"]}
                            arcWidth={0.3}
                            percent={0.93}
                />
            </Vertical>
        </Horizontal>
    </Page>
}