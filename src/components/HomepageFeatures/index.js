import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <Translate description="homepage users section title">Users</Translate>,
    link: 'docs/user/intro',
    Svg: require('@site/static/img/users.svg').default,
    description: (
      <Translate description="homepage users section blurb">
        Dashboard users can get started quickly as it was designed 
        with ease of use in mind.
      </Translate>
    ),
  },
  {
    title: <Translate description="homepage managers section title">Managers</Translate>,
    link: 'docs/manager/intro',
    Svg: require('@site/static/img/managers.svg').default,
    description: (
      <Translate description="homepage managers section blurb">
        Dashboard Starter Kit allows you to control access to data in your dashboard with
        ease and flexibility.
      </Translate>
    ),
  },
  {
    title: <Translate description="homepage developers section title">Developers</Translate>,
    link: 'docs/developer/intro',
    Svg: require('@site/static/img/developers.svg').default,
    description: (
      <Translate description="homepage developers section blurb">
        Dashboard Starter Kit was designed to be easily installed and
        used to make managing your census or survey easy.
      </Translate>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link}>{title}</a></h3>
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
