import React, {useRef, useState} from 'react'
import styles from "./EarlyBackers.module.scss";
import {useInView} from "react-intersection-observer";
import ArrowLeft from '../../public/svg/arrow_left.svg'
import ArrowLeftDisabled from '../../public/svg/arrow_left_disabled.svg'
import ArrowRight from '../../public/svg/arrow_right.svg'
import cn from 'classnames'
const EarlyBackers = ({
    className,
}: {
    className?: string;

}) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    const [clientWidth, setClientWidth] = useState(200)
    const [totalNumber, setTotalNumber] = useState(1)
    const scrollView = useRef<HTMLInputElement>();

    let [imgIndex, setImgIndex] = useState(0)
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={cn('wow', 'bounceInUp')} data-wow-duration="2s" data-wow-delay="0s"
                >Early Backers</h3>
                <div className={styles.content}>
                    {imgIndex > 0 ? (
                        <ArrowLeft className={styles.arrowLeft} onClick={() => {
                            setImgIndex(imgIndex > 0 ? --imgIndex : 0)
                        }} />
                    ) : (
                        <ArrowLeftDisabled />
                    )
                    }
                    <div ref={scrollView}>
                        <div style={{ transform: `translateX(${imgIndex == totalNumber ? -(1825 - clientWidth)  : (-clientWidth * imgIndex) }px)` }}>
                            <img className={styles.image} width={103} src="/backers/bk_polychain.png" alt=""/>
                            <img className={styles.image} width={226} src="/backers/bk_alameda.png" alt=""/>
                            <img className={styles.image} width={168} src="/backers/bk_hypersphere.png" alt=""/>
                            <img className={styles.image} width={123} src="/backers/bk_divergence.png" alt=""/>
                            <img className={styles.image} width={123} src="/backers/bk_block.png" alt=""/>
                            <img className={styles.image} width={125} src="/backers/bk_cms.png" alt=""/>
                            <img className={styles.image} width={125} src="/backers/bk_kr1.png" alt=""/>
                            <img className={styles.image} width={125} src="/backers/bk_bitcoin.png" alt=""/>
                            <img className={styles.image} width={125} src="/backers/bk_moonwhale.png" alt=""/>
                            <img className={styles.image} width={125} src="/backers/bk_kyrosVentures.png" alt=""/>
                            <img className={styles.image} width={113} src="/backers/bk_okex.png" alt=""/>
                        </div>
                    </div>
                    <ArrowRight className={styles.arrowRight} onClick={() => {
                        //1820
                        const clientWidth = scrollView.current.clientWidth;
                        const totalNumber = Math.ceil(1820 / clientWidth) - 1;
                        setClientWidth(clientWidth)
                        setTotalNumber(totalNumber)
                        setImgIndex(imgIndex < totalNumber ? ++imgIndex : totalNumber )
                    }} />
                </div>
            </div>
        </div>
    );
};

export default EarlyBackers;
