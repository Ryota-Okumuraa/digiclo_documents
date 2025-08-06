import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'アプリ概要',
    Svg: require('@site/static/img/appoverview.svg').default,
    description: (
      <>
        アプリ概要が入りますアプリ概要が入ります
      </>
    ),
  },
  {
    title: 'デザイン定義',
    Svg: require('@site/static/img/design.svg').default,
    description: (
      <>
        デザイン定義が入りますデザイン定義が入ります
      </>
    ),
  },
  {
    title: 'チームメンバー',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
        チームメンバーが入ります。チームメンバーが入ります
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
