import {motion} from "framer-motion";
import {ComponentProperties} from "./ComponentProperties.ts";
import styles from "./Page.module.css";


export default function Page(props: ComponentProperties<HTMLDivElement>) {
    const {children, ...properties} = props;
    return <motion.div className={styles.container} {...properties}>
        <div className={styles.content}>
            {children}
        </div>
    </motion.div>
}