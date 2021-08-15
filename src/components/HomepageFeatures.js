import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Cluster Federation',
    Svg: require('../../static/img/kube-b-1.svg').default,
    description: (
      <>
        Kubernetes cluster federation is a mechanism to provide one way or one practice to distribute applications and services to multiple clusters.
      </>
    ),
  },
  {
    title: 'Observability',
    Svg: require('../../static/img/infrastructure-monitoring.svg').default,
    description: (
      <>
        Observability is defined as the ability of the internal states of a system to be determined by its external outputs.
      </>
    ),
  },
  {
    title: 'GitOps',
    Svg: require('../../static/img/gitops.svg').default,
    description: (
      <>
        An operating model for Kubernetes and other cloud native technologies, providing a set of best practices that unify Git deployment, management and monitoring for containerized clusters and applications.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
