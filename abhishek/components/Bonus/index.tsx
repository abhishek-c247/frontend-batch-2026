"use client";

import { BONUS_CONSTANT } from "@/constant/table.constants";
import styles from "./bonus.module.scss";
import { auditData } from "@/public/auditData";
import type {
  BonusSection,
  SectionTypeItem,
} from "@/types/audit.types";

import { useFormatValue } from "@/hooks/useFormatValue";
import { Table } from "react-bootstrap";


const Bonus = () => {
  const bonus:BonusSection = auditData.bonus;
  const rows: SectionTypeItem[] = bonus.section_type;

  const { formatValue } = useFormatValue();
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.rowWrap}>
        <Table className={styles.tableSmall}>
          <tbody>
            {rows.map((item, i) => (
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
            ))}
          </tbody>
        </Table>

        <Table className={styles.table}>
          <tbody>
            {rows.map((item, i) => (
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
            ))}
          </tbody>
        </Table>

        <Table className={styles.tableSide}>
          <tbody>
            {rows.map((_, i) => (
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
            ))}
          </tbody>
        </Table>
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
