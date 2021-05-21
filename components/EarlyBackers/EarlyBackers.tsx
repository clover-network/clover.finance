import React from 'react';
import { useTheme } from 'next-themes';
import styles from './EarlyBackers.module.scss';
import ArrowLeft from '../../public/svg/arrow_left.svg';
import ArrowRight from '../../public/svg/arrow_right.svg';
import ArrowLeftSakura from '../../public/svg/arrow_left_sakura.svg';
import ArrowRightSakura from '../../public/svg/arrow_right_sakura.svg';
import cn from 'classnames';
import { ThemeProvider } from '@material-ui/styles';
import { mainTheme } from '../theme/mainTheme';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const EarlyBackers = ({ className }: { className?: string }) => {
  const { theme } = useTheme();

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
              itemWidth={200}
              infinite
              autoPlay={3000}
              slidesPerScroll={2}
              centered
              addArrowClickHandler
              arrowLeft={
                theme && theme === 'dark' ? (
                  <ArrowLeftSakura
                    style={{ marginRight: 36, cursor: 'pointer' }}
                  />
                ) : (
                  <ArrowLeft style={{ marginRight: 36, cursor: 'pointer' }} />
                )
              }
              arrowRight={
                theme && theme === 'dark' ? (
                  <ArrowRightSakura
                    style={{ marginLeft: 36, cursor: 'pointer' }}
                  />
                ) : (
                  <ArrowRight style={{ marginLeft: 36, cursor: 'pointer' }} />
                )
              }
            >
              <div className={styles.item}>
                <img
                  width={123}
                  key={1}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/wh_polychain.png'
                      : '/backers/bk_polychain.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={2}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/wh_alameda.png'
                      : '/backers/bk_alameda.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={3}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/wh_hypersphere.png'
                      : '/backers/bk_hypersphere.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={4}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/wh_divergence.png'
                      : '/backers/bk_divergence.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={5}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/bk_block.png'
                      : '/backers/bk_block.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={6}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/wh_cms.png'
                      : '/backers/bk_cms.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={7}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/wh_kr1.png'
                      : '/backers/bk_kr1.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={8}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/wh_bitcoin.png'
                      : '/backers/bk_bitcoin.png'
                  }
                  alt=""
                />
              </div>

              {/* <div className={styles.item}>
                <img
                  width={123}
                  key={9}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/wh_moonwhale.png'
                      : '/backers/bk_moonwhale.png'
                  }
                  alt=""
                />
              </div> */}

              <div className={styles.item}>
                <img
                  width={123}
                  key={10}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/wh_kyrosVentures.png'
                      : '/backers/bk_kyrosVentures.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={10}
                  src={
                    theme && theme === 'dark'
                      ? '/backers/wh_illusionist.png'
                      : '/backers/bk_illusionist.png'
                  }
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
