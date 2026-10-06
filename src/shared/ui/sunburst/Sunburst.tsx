import styles from './Sunburst.module.css';

interface Props {
  zIndex?: number;
}

export const Sunburst = ({ zIndex = -1 }: Props) => {
  return <div className={styles.root} style={{ zIndex }} />;
};
