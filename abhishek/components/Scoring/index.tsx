"use client";

import Table from "react-bootstrap/Table";
import styles from "./scoring.module.scss";
import { ScoringProps, Section } from "@/types/audit.types";
import { SCORING_CONSTANT } from "@/constant/table.constants";


const Scoring = ({ apiData }: ScoringProps) => {


  const sections: Section[] = Array.isArray(apiData)
    ? apiData
    : (apiData?.data ?? []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        <div className={styles.rowWrap}>
          <Table bordered className={styles.table}>
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

          <Table bordered className={styles.sideTable}>
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
        </div>
      </div>
    </div>
  );
};

export default Scoring;
