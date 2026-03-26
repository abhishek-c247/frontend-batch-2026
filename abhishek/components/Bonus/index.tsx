"use client";

import { BONUS_CONSTANT } from "@/constant/table.constants";
import styles from "./bonus.module.scss";
import { auditData } from "@/public/auditData";
import type {
  BonusSection,
  SectionTypeItem,
} from "@/types/audit.types";

import { useFormatValue } from "@/hooks/useFormatValue";
import BonusTable from "./BonusTable";

const Bonus = () => {
  const bonus:BonusSection = auditData.bonus;
  const rows: SectionTypeItem[] = bonus.section_type;

  const { formatValue } = useFormatValue();
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.rowWrap}>
        <BonusTable
          className={styles.tableSmall}
          rows={rows}
          renderRow={(item, i) => (
            <tr key={i}>
              {i === 0 && (
                <td
                  rowSpan={rows.length}
                  className={styles.categoryBonusCell}
                >
                  {BONUS_CONSTANT.BONUS}
                </td>
              )}
              <td className={styles.question}>{item.question_type}</td>
              <td>{item.total_question}</td>
            </tr>
          )}
        />

        <div className={styles.scoringGroup}>
          <BonusTable
            className={styles.table}
            rows={rows}
            renderRow={(item, i) => (
              <tr key={i}>
                <td>{formatValue(item.completed_question_percentage, true)}</td>
                <td>{formatValue(item.completion_weight, true)}</td>
                <td>{item.type_total}</td>
                <td>{item.total_percentage}</td>

                {i === 0 && (
                  <td rowSpan={rows.length} className={styles.summary}>
                    {bonus.section_total}
                  </td>
                )}
              </tr>
            )}
          />

          <BonusTable
            className={styles.tableSide}
            rows={rows}
            renderRow={(_, i) => (
              <tr key={i}>
                {i === 0 && (
                  <>
                    <td rowSpan={rows.length} className={styles.summary}>
                      {bonus.section_weight}%
                    </td>
                    <td rowSpan={rows.length} className={styles.summary}>
                      {bonus.section_total_score}
                    </td>
                  </>
                )}
              </tr>
            )}
          />
        </div>
        <div className={styles.finalBox}>{bonus.adjustment_score_section}</div>
      </div>

      <div className={styles.footer}>
        {BONUS_CONSTANT.OVERALL_SCORE}
        <span>{auditData.overall_safety_score_total}</span>
      </div>
    </div>
  );
};

export default Bonus;
