import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'homepage.features.encryption.title',
    description: 'homepage.features.encryption.description',
    Svg: require('@site/static/img/security.svg').default,
  },
  {
    title: 'homepage.features.realWorld.title',
    description: 'homepage.features.realWorld.description',
    Svg: require('@site/static/img/treasure.svg').default,
  },
  {
    title: 'homepage.features.bitcoin.title',
    description: 'homepage.features.bitcoin.description',
    Svg: require('@site/static/img/investor.svg').default,
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{translate({id:title, message: "title"})}</h3>
        <p>{translate({id:description, message: "description"})}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
