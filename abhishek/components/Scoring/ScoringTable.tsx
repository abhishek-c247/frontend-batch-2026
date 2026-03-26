import { SCORING_CONSTANT } from "@/constant/table.constants";
import type { ScoringTableProps } from "@/types/audit.types";
import { Table } from "react-bootstrap";
import styles from "./scoring.module.scss";

const ScoringTable = ({ sections, variant, className }: ScoringTableProps) => {
  const isMain = variant === SCORING_CONSTANT.VARIANT.MAIN;

  if (isMain) {
    return (
      <Table bordered className={className ?? styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>{SCORING_CONSTANT.COMPLETION_PCT}</th>
            <th rowSpan={2}>{SCORING_CONSTANT.TYPE_TOTAL}</th>
            <th rowSpan={2}>{SCORING_CONSTANT.PCT_TOTAL}</th>
            <th rowSpan={2}>{SCORING_CONSTANT.SECTION_TOTAL}</th>
          </tr>
          <tr className={styles.subHeaderRow}>
            <th>{SCORING_CONSTANT.QUESTIONS}</th>
            <th>{SCORING_CONSTANT.WEIGHT}</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, sectionIndex) => {
            const totalRows = section.section_type.length;

            return (
              <>
                {section.section_type.map((type, typeIndex) => (
                  <tr key={`row-${sectionIndex}-${typeIndex}`}>
                    <td>{type.completed_question_percentage}%</td>
                    <td>{type.completion_weight}%</td>
                    <td>{type.type_total}</td>
                    <td>{type.total_percentage}%</td>

                    {typeIndex === 0 && (
                      <td rowSpan={totalRows} className={styles.summary}>
                        {section.section_total}
                      </td>
                    )}
                  </tr>
                ))}
                <tr className={styles.sectionSpacer}>
                  <td colSpan={5}></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    );
  }

  return (
    <Table bordered className={className ?? styles.sideTable}>
      <thead>
        <tr>
          <th rowSpan={2}>{SCORING_CONSTANT.WEIGHT}</th>
          <th rowSpan={2}>{SCORING_CONSTANT.TOTAL_SCORE}</th>
        </tr>
        <tr></tr>
      </thead>
      <tbody>
        {sections.map((section, sectionIndex) => {
          const totalRows = section.section_type.length;

          return (
            <>
              {section.section_type.map((_, typeIndex) => (
                <tr key={`side-row-${sectionIndex}-${typeIndex}`}>
                  {typeIndex === 0 && (
                    <>
                      <td rowSpan={totalRows} className={styles.summary}>
                        {section.section_weight}%
                      </td>
                      <td rowSpan={totalRows} className={styles.summary}>
                        {section.section_total_score}
                      </td>
                    </>
                  )}
                </tr>
              ))}

              <tr className={styles.sectionSpacer}>
                <td colSpan={2}></td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ScoringTable;
