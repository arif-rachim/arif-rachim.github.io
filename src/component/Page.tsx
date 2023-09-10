import styles from "./Page.module.css";
import {PropsWithChildren} from "react";


export default function Page(props: PropsWithChildren) {
    return <div className={styles.container}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}