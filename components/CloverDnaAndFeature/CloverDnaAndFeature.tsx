import React from 'react';
import cn from 'classnames';
import {useInView} from 'react-intersection-observer';
import styles from "./CloverDNA.module.scss";
import Vector1 from "../../public/svg/vector1.svg";
import Vector2 from "../../public/svg/vector2.svg";
import CloverIcon from "../../public/svg/clover_icon.svg";
import Fees from "../../public/svg/fees.svg";
import Governance from "../../public/svg/governance.svg";
import Validation from "../../public/svg/validation.svg";
import Treasury from "../../public/svg/treasury.svg";
import Nomination from "../../public/svg/nomination.svg";
import Deployment from "../../public/svg/deployment.svg";

const DnaAndFeatures = ({
    className,
    dnas = [],
    features = [],
    clvTokens = [],
}: {
    className?: string;
    dnas?: {
        title: string;
        content: string;
        btnText: string;
        link: string;
    }[];
    features?: {
        title: string;
        content: string;
        btnText: string;
        link: string;
    }[];
    clvTokens?: {
        title: string,
        content: string,
    }[];
}) => {
    const cursor = {
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: true,
        hideWhenDoneDelay: 0,
    };
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    const getImgByIcon = (token) => {
        switch (token.toLowerCase()) {
            case 'opt-in fees':
                return <Fees width={48} height={33} />
            case 'governance':
                return <Governance width={48} height={33} />
            case 'validation':
                return <Validation width={48} height={33} />
            case 'treasury':
                return <Treasury width={48} height={33} />
            case 'nomination':
                return <Nomination width={48} height={33} />
            case 'deployment':
                return <Deployment width={48} height={33} />
        }
    }
    return (
        // className={cn(styles.topWrapper, styles.hidden, {
            // [`${styles.visible}`]: inView,
        // })}
        <div className={styles.wrapper}>
            <div
                ref={ref}
                className={styles.topWrapper}
            >
                <div className={styles.topContent}>
                    <span className={styles.title}>
                        Clover's DNA
                    </span>
                    {!!inView && (
                        <div>
                            {dnas.map(dna => (
                                <div className={styles.topContentItem} key={dna.title}>
                                    <h3>{dna.title}</h3>
                                    <p>{dna.content}</p>
                                    <button onClick={() => window.open( dna.link)}>{dna.btnText}</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <Vector1 className={styles.topVector1} />
                <Vector2 className={styles.topVector2} />
            </div>
            <div
                ref={ref}
                className={cn(styles.featureWrapper, styles.hidden, {
                    [`${styles.visible}`]: inView,
                })}
            >
                <div className={styles.featureContent}>
                    <span className={cn(styles.title, styles.black)}>
                        Clover Features
                    </span>
                    {!!inView && (
                        <div>
                            {features.map(feature => (
                                <div className={cn(styles.topContentItem, styles.black)} key={feature.title}>
                                    <h3>{feature.title}</h3>
                                    <p className={styles.gray}>{feature.content}</p>
                                    <a href={feature.link} target="_blank">{feature.btnText}</a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.bottomWrapper}>
                <div className={styles.clvToken}>
                    <CloverIcon className={styles.clvTokenIcon} />
                    <h3 className={styles.clvTokenTitle}>CLV Token</h3>
                    <div className={styles.clvTokenList}>
                        {clvTokens.map(token => (
                            <div className={styles.clvTokenItem} key={token.title}>
                                {getImgByIcon(token.title)}
                                <div>{token.title}</div>
                                <p>{token.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DnaAndFeatures;
