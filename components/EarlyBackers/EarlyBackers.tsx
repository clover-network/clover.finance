import React, { useMemo } from 'react';
import styles from './EarlyBackers.module.scss';
import ArrowLeft from '../../public/svg/arrow_left.svg';
import ArrowRight from '../../public/svg/arrow_right.svg';
import cn from 'classnames';
import Carousel from 'react-material-ui-carousel';
import { ThemeProvider } from '@material-ui/styles';
import { mainTheme } from '../theme/mainTheme';
import { useIsLgUp, useIsMdUp, useIsXsUp } from '../../utils/hooks/useTheme';
import { uid } from 'react-uid';

function chunkArrayInGroups(arr: any[], size: number) {
  var newArray = [];
  for (var i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }
  return newArray;
}

const BACKERS = [
  {
    element: <img width={123} key={1} src="/backers/bk_polychain.png" alt="" />,
  },
  {
    element: <img width={123} key={2} src="/backers/bk_alameda.png" alt="" />,
  },
  {
    element: (
      <img width={123} key={3} src="/backers/bk_hypersphere.png" alt="" />
    ),
  },
  {
    element: (
      <img width={123} key={4} src="/backers/bk_divergence.png" alt="" />
    ),
  },
  {
    element: <img width={123} key={5} src="/backers/bk_block.png" alt="" />,
  },
  {
    element: <img width={123} key={6} src="/backers/bk_cms.png" alt="" />,
  },
  {
    element: <img width={123} key={7} src="/backers/bk_kr1.png" alt="" />,
  },
  {
    element: <img width={123} key={8} src="/backers/bk_bitcoin.jpg" alt="" />,
  },
  {
    element: <img width={123} key={9} src="/backers/bk_moonwhale.png" alt="" />,
  },
  {
    element: (
      <img width={123} key={10} src="/backers/bk_kyrosVentures.png" alt="" />
    ),
  },
];

const EarlyBackers = ({ className }: { className?: string }) => {
  const isXsUp = useIsXsUp();
  const isMdUp = useIsMdUp();
  const isLgUp = useIsLgUp();

  const elements = useMemo(() => {
    const chunks = (() => {
      if (isLgUp) {
        return chunkArrayInGroups(BACKERS, 4);
      }
      if (isMdUp) {
        return chunkArrayInGroups(BACKERS, 3);
      }
      return chunkArrayInGroups(BACKERS, 1);
    })();

    return chunks.map(backers => {
      return (
        <div key={uid(backers)} className={styles.sliderContentWrapper}>
          {backers.map(item => item.element)}
        </div>
      );
    });
  }, [isXsUp, isMdUp, isLgUp]);

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
              PrevIcon={<ArrowLeft className={styles.arrowLeft} />}
              NextIcon={<ArrowRight className={styles.arrowRight} />}
              animation="slide"
              indicators={false}
              navButtonsAlwaysVisible={true}
              navButtonsProps={{
                style: {
                  backgroundColor: 'transparent',
                  fontSize: 100,
                },
                className: 'buttons',
              }}
            >
              {elements}
            </Carousel>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default EarlyBackers;
