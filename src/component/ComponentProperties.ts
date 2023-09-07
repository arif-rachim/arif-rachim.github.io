import {HTMLAttributes, PropsWithoutRef, RefAttributes} from "react";
import {MotionProps} from "framer-motion";

type HTMLAttributesWithoutMotionProps<Attributes extends HTMLAttributes<Element>, Element extends HTMLElement> = {
    [K in Exclude<keyof Attributes, keyof MotionProps>]?: Attributes[K];
};

export type ComponentProperties<T extends HTMLElement> = PropsWithoutRef<HTMLAttributesWithoutMotionProps<HTMLAttributes<T>, T> & MotionProps>& RefAttributes<T>