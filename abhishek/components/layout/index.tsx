import { IoCheckmarkCircleSharp, IoChevronBackOutline } from "react-icons/io5";
import styles from "./layout.module.scss";
import { auditData } from "@/public/auditData";
import Scoring from "../Scoring";
import Adjusted from "../Adjusted";
import Bonus from "../Bonus";
import OverView from "../Overview";
import { LAYOUT_CONSTANT } from "@/constant/table.constants";

const Layout = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.subNav}>
          <div className={styles.breadcrumbs}>
            {LAYOUT_CONSTANT.HEADING} <span>/</span>
            {LAYOUT_CONSTANT.SUB_HEADING}
          </div>
        </div>

        <div className={styles.pageHeader}>
          <p className={styles.pageTitle}>{LAYOUT_CONSTANT.SUB_HEADING}</p>
          <p className={styles.status}>
            <IoCheckmarkCircleSharp />
            {LAYOUT_CONSTANT.STATUS}
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>{LAYOUT_CONSTANT.OVERVIEW}</div>
            <OverView apiData={auditData} />
          </div>
          <div className={styles.cards}>
            <div className={styles.cardTitle}>{LAYOUT_CONSTANT.SCORING}</div>
            <Scoring apiData={auditData} />
          </div>
          <div className={styles.cards}>
            <div className={styles.cardTitle}>{LAYOUT_CONSTANT.ADJUSTED}</div>
            <Adjusted apiData={auditData} />
            <div className={styles.totals}>
              <div className={styles.totalsHeader}>
                {LAYOUT_CONSTANT.TOTALS}
              </div>
              <div className={styles.totalsRow}>
                <span>{auditData.sections_total.all_score_total}</span>
                <span>
                  {auditData.sections_total.adjustment_weight_section_total}%
                </span>
                <span>
                  {auditData.sections_total.adjustment_score_section_total}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bonusCard}>
          <Bonus />
        </div>
      </div>
    </div>
  );
};

export default Layout;
