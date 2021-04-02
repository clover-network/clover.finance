import React, {useEffect, useMemo, useState} from 'react';
import styles from "../styles/CloverDNA.module.scss";
import {useInView} from "react-intersection-observer";

const EarlyBackers = ({
    className,
}: {
    className?: string;

}) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    return (
        <div className={styles.wrapper}>

        </div>
    );
};

export default EarlyBackers;
