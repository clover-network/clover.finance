import React, { useMemo } from 'react';
import styles from './EarlyBackers.module.scss';
import ArrowLeft from '../../public/svg/arrow_left.svg';
import ArrowRight from '../../public/svg/arrow_right.svg';
import cn from 'classnames';
import { ThemeProvider } from '@material-ui/styles';
import { mainTheme } from '../theme/mainTheme';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
              itemWidth={130}
              infinite
              autoPlay={1000}
              slidesPerScroll={2}
              centered
              addArrowClickHandler
              arrowLeft={
                <ArrowLeft style={{ marginRight: '20px', cursor: 'pointer' }} />
              }
              arrowRight={
                <ArrowRight style={{ marginLeft: '20px', cursor: 'pointer' }} />
              }
            >
              <img
                style={{ marginLeft: '150px' }}
                width={123}
                key={1}
                src="/backers/bk_polychain.png"
                alt=""
              />
              ,
              <img width={123} key={2} src="/backers/bk_alameda.png" alt="" />,
              <img
                width={123}
                key={3}
                src="/backers/bk_hypersphere.png"
                alt=""
              />
              ,
              <img
                width={123}
                key={4}
                src="/backers/bk_divergence.png"
                alt=""
              />
              ,
              <img width={123} key={5} src="/backers/bk_block.png" alt="" />,
              <img width={123} key={6} src="/backers/bk_cms.png" alt="" />,
              <img width={123} key={7} src="/backers/bk_kr1.png" alt="" />,
              <img width={123} key={8} src="/backers/bk_bitcoin.jpg" alt="" />,
              <img width={123} key={9} src="/backers/bk_moonwhale.png" alt="" />
              ,
              <img
                width={123}
                key={10}
                src="/backers/bk_kyrosVentures.png"
                alt=""
              />
            </Carousel>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default EarlyBackers;
