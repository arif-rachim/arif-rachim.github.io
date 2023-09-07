import {CSSProperties, useMemo} from "react";
import {motion} from "framer-motion";
import {ComponentProperties} from "./ComponentProperties.ts";

const style: CSSProperties = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
}


export default function Page(props: ComponentProperties<HTMLDivElement>) {
    const {style: propStyle, children, ...properties} = props;
    const localStyle = useMemo(() => ({...style, ...propStyle}), [propStyle]);
    return <motion.div style={localStyle} {...properties}>{children}</motion.div>
}