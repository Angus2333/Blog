import styles from './index.less';
interface Props {}
const IndexPage = (props:Props) => {
  return (
    <div>
      <h1 className={styles.title}>Page Home</h1>
    </div>
  );
}

export default IndexPage