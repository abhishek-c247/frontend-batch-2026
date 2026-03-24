import { DATE_CONSTANT, HEADER_CONSTANT } from "@/constant/table.constants";
import styles from "./header.module.scss";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const now = new Date();

 const month = now.toLocaleString(
   DATE_CONSTANT.LOCALE,
   DATE_CONSTANT.MONTH_FORMAT,
 );

 const day = now.toLocaleString(DATE_CONSTANT.LOCALE, DATE_CONSTANT.DAY_FORMAT);

 const time = now.toLocaleTimeString(
   DATE_CONSTANT.LOCALE,
   DATE_CONSTANT.TIME_FORMAT,
 );
  

  const formattedDateTime = `${month},${day} - ${time}`;

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <p className={styles.title}>{HEADER_CONSTANT.SITE_NAME}</p>
      </div>

      <div className={styles.right}>
        <div className={styles.dateTime}>
          <p className={styles.label}>{HEADER_CONSTANT.DATE_TIME}</p>

          <p className={styles.value}>{formattedDateTime}</p>
        </div>

        <div className={styles.user}>
          <div className={styles.dots}>{HEADER_CONSTANT.DOTS}</div>
          <p className={styles.userName}>
            {HEADER_CONSTANT.USER} <FaAngleDown />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
