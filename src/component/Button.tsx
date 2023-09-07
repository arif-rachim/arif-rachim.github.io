import {motion} from "framer-motion";
import {ComponentProperties} from "./ComponentProperties.ts";
import {CSSProperties, useMemo} from "react";

const style: CSSProperties = {
    backgroundColor: '#010101',
    color: '#FFF',
    fontSize: '1rem',
    fontWeight:700,
    padding: '0.7rem 4rem',
    cursor:'pointer'
}
export default function Button(props: ComponentProperties<HTMLButtonElement>) {
    const {style: propStyle, children, ...properties} = props;
    const localStyle = useMemo(() => ({...style, ...propStyle}), [propStyle]);
    return <motion.button style={localStyle} whileTap={{scale:0.95}} {...properties}>{children}</motion.button>
}