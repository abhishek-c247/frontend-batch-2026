"use client";

import styles from "./scoring.module.scss";
import { ScoringProps, Section } from "@/types/audit.types";
import ScoringTable from "./ScoringTable";
import { SCORING_CONSTANT } from "@/constant/table.constants";

const Scoring = ({ apiData }: ScoringProps) => {


  const sections: Section[] = Array.isArray(apiData)
    ? apiData
    : (apiData?.data ?? []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        <div className={styles.rowWrap}>
          <ScoringTable
            sections={sections}
            variant={SCORING_CONSTANT.VARIANT.MAIN}
          />
          <ScoringTable
            sections={sections}
            variant={SCORING_CONSTANT.VARIANT.SIDE}
            className={styles.sideTable}
          />
        </div>
      </div>
    </div>
  );
};

export default Scoring;
