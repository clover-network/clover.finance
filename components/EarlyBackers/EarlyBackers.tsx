import React, { useState} from 'react'
import styles from "./EarlyBackers.module.scss";
import {useInView} from "react-intersection-observer";
import ArrowLeft from '../../public/svg/arrow_left.svg'
import ArrowLeftDisabled from '../../public/svg/arrow_left_disabled.svg'
import ArrowRight from '../../public/svg/arrow_right.svg'
import ArrowRightDisabled from '../../public/svg/arrow_right_disabled.svg'

const EarlyBackers = ({
    className,
}: {
    className?: string;

}) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    let [imgIndex, setImgIndex] = useState(0)
    return (
        <div className={styles.wrapper}>
            <h3>Early Backers</h3>
            <div className={styles.content}>
                {imgIndex > 0 ? (
                    <ArrowLeft className={styles.arrowLeft} onClick={() => {
                        setImgIndex(imgIndex > 0 ? --imgIndex : 0)
                    }} />
                ) : (
                    <ArrowLeftDisabled />
                )
                }
                <div>
                    <div style={{ transform: `translateX(${-200 * imgIndex}px)` }}>
                        <img width={103} src="/backers/bk_polychain.png" alt=""/>
                        <img width={226} src="/backers/bk_alameda.png" alt=""/>
                        <img width={168} src="/backers/bk_hypersphere.png" alt=""/>
                        <img width={123} src="/backers/bk_divergence.png" alt=""/>
                        <img width={123} src="/backers/bk_block.png" alt=""/>
                        <img width={125} src="/backers/bk_cms.png" alt=""/>
                        <img width={125} src="/backers/bk_kr1.png" alt=""/>
                        <img width={125} src="/backers/bk_bitcoin.png" alt=""/>
                        <img width={125} src="/backers/bk_moonwhale.png" alt=""/>
                        <img width={125} src="/backers/bk_kyrosVentures.png" alt=""/>
                        <img width={113} src="/backers/bk_blocksynk.png" alt=""/>
                    </div>
                </div>
                {imgIndex < 3 ? (
                        <ArrowRight className={styles.arrowRight} onClick={() => {
                            setImgIndex(imgIndex < 3 ? ++imgIndex : 3)
                        }} />
                    ) : (
                        <ArrowRightDisabled />
                    )
                }
            </div>

        </div>
    );
};

export default EarlyBackers;
