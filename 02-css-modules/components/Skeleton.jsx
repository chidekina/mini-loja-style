import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = () => {
  return (
    <div className={styles.skeletonCard} aria-label="Carregando produto...">
      <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
      <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
      <div className={`${styles.skeleton} ${styles.skeletonTitleSecond}`} />
      <div className={`${styles.skeleton} ${styles.skeletonRating}`} />
      <div className={`${styles.skeleton} ${styles.skeletonPrice}`} />
      <div className={`${styles.skeleton} ${styles.skeletonButton}`} />
    </div>
  );
};

export default Skeleton;