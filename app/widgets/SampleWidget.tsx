import Image from "next/image";
import styles from "../app.module.css";

export default function SampleWidget() {

  return (
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="1us.png"
        alt="1us Logo"
        width={180}
        height={180}
        priority
      />
    </div>
  );
}