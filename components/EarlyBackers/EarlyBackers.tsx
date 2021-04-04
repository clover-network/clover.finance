import React from 'react';
import styles from './EarlyBackers.module.scss';
import ArrowLeft from '../../public/svg/arrow_left.svg';
import ArrowRight from '../../public/svg/arrow_right.svg';
import cn from 'classnames';
import Carousel from 'react-material-ui-carousel';
import { ThemeProvider } from '@material-ui/styles';
import { mainTheme } from '../theme/mainTheme';

const EarlyBackers = ({ className }: { className?: string }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h3
            className={cn('wow', 'bounceInUp')}
            data-wow-duration="2s"
            data-wow-delay="0s"
          >
            Early Backers
          </h3>
          <div className={styles.content}>
            <Carousel
              NextIcon={<ArrowRight />}
              PrevIcon={<ArrowLeft />}
              animation="slide"
              indicators={false}
              navButtonsAlwaysVisible={true}
              navButtonsProps={{
                style: {
                  backgroundColor: 'transparent',
                  fontSize: 100,
                },
                className: '',
              }}
              interval={1000000}
            >
              <div className={styles.sliderContentWrapper}>
                <img
                  className={styles.image}
                  width={103}
                  src="/backers/bk_polychain.png"
                  alt=""
                />
                <img
                  className={styles.image}
                  width={226}
                  src="/backers/bk_alameda.png"
                  alt=""
                />
                <img
                  className={styles.image}
                  width={168}
                  src="/backers/bk_hypersphere.png"
                  alt=""
                />

                <img
                  className={styles.image}
                  width={123}
                  src="/backers/bk_divergence.png"
                  alt=""
                />
              </div>
              <div className={styles.sliderContentWrapper}>
                <img
                  className={styles.image}
                  width={123}
                  src="/backers/bk_block.png"
                  alt=""
                />
                <img
                  className={styles.image}
                  width={125}
                  src="/backers/bk_cms.png"
                  alt=""
                />
                <img
                  className={styles.image}
                  width={125}
                  src="/backers/bk_kr1.png"
                  alt=""
                />
                <img
                  className={styles.image}
                  width={125}
                  src="/backers/bk_bitcoin.png"
                  alt=""
                />
              </div>
              <div className={styles.sliderContentWrapper}>
                <img
                  className={styles.image}
                  width={125}
                  src="/backers/bk_moonwhale.png"
                  alt=""
                />
                <img
                  className={styles.image}
                  width={125}
                  src="/backers/bk_kyrosVentures.png"
                  alt=""
                />
                <img
                  className={styles.image}
                  width={113}
                  src="/backers/bk_okex.png"
                  alt=""
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default EarlyBackers;
