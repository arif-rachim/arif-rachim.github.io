import Page, {PageSubTitle, PageTitle} from "./Page";
import LabelText, {HorizontalLabel} from "./LabelText";
import Vertical from "./layout/Vertical";
import Horizontal from "./layout/Horizontal";
import theme from "./theme";
import GaugeChart from "react-gauge-chart";

export default function SkillsPage(){
    return <Page backgroundColor={theme.background.color3}>
        <PageTitle text={'Skills'}/>
        <PageSubTitle text={'Arif Rachim skill set'}/>
        <Vertical style={{fontWeight:300,fontFamily:theme.font.display,marginBottom:'1rem'}}>
            Following demonstrate Arif Rachim skill set.
        </Vertical>
        <Horizontal style={{marginBottom:'1rem'}}>
            <Vertical hAlign={'center'} style={{width:'50%'}}>
                <Vertical hAlign={'center'}>HTML 5</Vertical>
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