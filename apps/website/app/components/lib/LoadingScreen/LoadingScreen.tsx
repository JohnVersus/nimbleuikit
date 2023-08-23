import Image from "next/image";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/logo-loading.svg"
        alt="Loading..."
        height={150}
        width={150}
        title="Nimble Ui Kit Loading"
      />
    </div>
  );
};

export default LoadingScreen;
