import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const [autoPlay, setAutoPlay] = useState(10000000000000);
  useEffect(() => {
    const html = document.getElementById('earlyBackers');
    const onScroll = () => {
      if ((window.scrollY + document.documentElement.clientHeight) > html.offsetTop) {
        setTimeout(() => {
          setAutoPlay(3000);
        }, 3000)
      } else if (scroll) {
        setAutoPlay(10000000000000);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          <div className={styles.content} id="earlyBackers">
            <Carousel
              itemWidth={200}
              infinite
              autoPlay={autoPlay}
              slidesPerScroll={2}
              addArrowClickHandler
              arrowLeft={
                router.pathname === '/sakura' ? (
                  <ArrowLeftSakura
                    style={{ marginRight: 36, cursor: 'pointer' }}
                  />
                ) : (
                  <ArrowLeft style={{ marginRight: 36, cursor: 'pointer' }} />
                )
              }
              arrowRight={
                router.pathname === '/sakura' ? (
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
                    router.pathname === '/sakura'
                      ? '/backers/wh_polychain.png'
                      : '/backers/bk_polychain.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={1}
                  src={
                    router.pathname === '/sakura'
                      ? '/backers/wh_huo_bi.png'
                      : '/backers/bk_huo_bi.jpg'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={1}
                  src={
                    router.pathname === '/sakura'
                      ? '/backers/wh_okex.png'
                      : '/backers/bk_okex.jpg'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={2}
                  src={
                    router.pathname === '/sakura'
                      ? '/backers/wh_alameda.png'
                      : '/backers/bk_alameda.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={8}
                  src={
                    router.pathname === '/sakura'
                      ? '/backers/wh_bitcoin.png'
                      : '/backers/bk_bitcoin.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={8}
                  src={
                    router.pathname === '/sakura'
                      ? '/backers/wh_bithumb_global.png'
                      : '/backers/bk_bithumb_global.jpg'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={8}
                  src={
                    router.pathname === '/sakura'
                      ? '/backers/gate_io.jpg'
                      : '/backers/gate_io.jpg'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={3}
                  src={
                    router.pathname === '/sakura'
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
                    router.pathname === '/sakura'
                      ? '/backers/wh_divergence.png'
                      : '/backers/bk_divergence.png'
                  }
                  alt=""
                />
              </div>

              <div className={styles.item}>
                <img
                  width={123}
                  key={6}
                  src={
                    router.pathname === '/sakura'
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
                    router.pathname === '/sakura'
                      ? '/backers/wh_kr1.png'
                      : '/backers/bk_kr1.png'
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
                    router.pathname === '/sakura'
                      ? '/backers/wh_kyrosVentures.png'
                      : '/backers/bk_kyrosVentures.png'
                  }
                  alt=""
                />
              </div>

              {/*<div className={styles.item}>*/}
              {/*  <img*/}
              {/*    width={123}*/}
              {/*    key={10}*/}
              {/*    src={*/}
              {/*      router.pathname === '/sakura'*/}
              {/*        ? '/backers/wh_illusionist.png'*/}
              {/*        : '/backers/bk_illusionist.png'*/}
              {/*    }*/}
              {/*    alt=""*/}
              {/*  />*/}
              {/*</div>*/}
            </Carousel>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default EarlyBackers;
