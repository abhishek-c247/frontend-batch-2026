"use client";

import styles from "./adjusted.module.scss";
import { auditData } from "@/public/auditData";
import type { AdjustedProps, Section } from "@/types/audit.types";
import AdjustedTable from "./AdjustedTable";
import { ADJUSTED_CONSTANT } from "@/constant/table.constants";

const Adjusted = ({ apiData: propData }: AdjustedProps) => {
  const data = propData ?? auditData;
  const sections: Section[] = data.data ?? [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        <div className={styles.rowWrap}>
          <AdjustedTable
            sections={sections}
            variant={ADJUSTED_CONSTANT.VARIANT.WEIGHT}
          />
          <AdjustedTable
            sections={sections}
            variant={ADJUSTED_CONSTANT.VARIANT.SCORE}
            className={styles.sideTable}
          />
        </div>
      </div>
    </div>
  );
};

export default Adjusted;
