// src/components/Disclaimer.js
import React from 'react';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

export default function Disclaimer() {
  return (
    <div className={styles.disclaimer}>
      <h3>
        <Translate>Disclaimer</Translate>
      </h3>
      <p>
        <Translate>
          The NOTE protocol and its associated software are currently in the testing phase and are experimental technological explorations. Please be aware of the following:
        </Translate>
      </p>
      <ul>
        <li>
          <Translate>
            All tokens have no actual value, and speculation is strongly discouraged.
          </Translate>
        </li>
        <li>
          <Translate>
            There is a significant risk of losing part or all of your assets.
          </Translate>
        </li>
        <li>
          <Translate>
            The protocol and software may contain bugs or security vulnerabilities.
          </Translate>
        </li>
        <li>
          <Translate>
            Features and functionalities may change without prior notice.
          </Translate>
        </li>
        <li>
          <Translate>
            The developers are not responsible for any losses or damages incurred.
          </Translate>
        </li>
      </ul>
      <p>
        <Translate>
          By using the NOTE protocol or any associated software, you acknowledge that you understand and accept these risks. Always do your own research and never invest more than you can afford to lose.
        </Translate>
      </p>
    </div>
  );
}