import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cryptography',
    Svg: require('@site/static/img/security.svg').default,
    description: (
      <>
        Comprehensive application of elliptic curve encryption technology, encompassing not only HASH but also encryption and decryption capabilities, as well as DID actions.
      </>
    ),
  },
  {
    title: 'Focus on Real World',
    Svg: require('@site/static/img/treasure.svg').default,
    description: (
      <>
        Achieving on-chain transaction consensus, and off-chain asset interpretation and proof. Whether for Tokens/NFTs or other data, significantly reducing transaction friction costs in society through smart contracts and Merkle proofs.
      </>
    ),
  },
  {
    title: 'Powered by Bitcoin',
    Svg: require('@site/static/img/investor.svg').default,
    description: (
      <>
        Driven by years of blockchain technology development and a vision to serve humanity globally, we continuously strive to improve and enhance. We believe in universal financial values, aiming to guide the world towards greater unity.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
