import styles from "./Page.module.css";
import {PropsWithChildren, useRef} from "react";

export default function Page(props: PropsWithChildren) {
    const ref = useRef<HTMLDivElement | null>(null);
    return <div ref={ref} className={styles.container}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}