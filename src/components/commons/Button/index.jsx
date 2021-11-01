import styles from './index.module.scss';

export const Button = ({ label, ...props }) => {
  return (
    <button type="button" className={styles.button} {...props}>
      {label}
    </button>
  );
};
