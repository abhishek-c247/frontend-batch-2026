"use client";

import Table from "react-bootstrap/Table";
import styles from "./adjusted.module.scss";
import { auditData } from "@/public/auditData";
import { Fragment } from "react";

import type { AdjustedProps, Section } from "@/types/audit.types";

import { ADJUSTED_CONSTANT } from "@/constant/table.constants";
import { useFormatValue } from "@/hooks/useFormatValue";

const Adjusted = ({ apiData: propData }: AdjustedProps) => {
  const data = propData ?? auditData;
  const sections: Section[] = data.data ?? [];

  const { formatValue } = useFormatValue();

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        <div className={styles.rowWrap}>
        
          <Table bordered className={styles.table}>
            <thead>
              <tr>
                <th colSpan={2}>{ADJUSTED_CONSTANT.WEIGHT}</th>
              </tr>
              <tr className={styles.subHeader}>
                <th>{ADJUSTED_CONSTANT.TYPE}</th>
                <th>{ADJUSTED_CONSTANT.SECTION}</th>
              </tr>
            </thead>

            <tbody>
              {sections.map((section, sectionIndex) => {
                const totalRows = section.section_type.length;

                return (
                  <>
                    {section.section_type.map((type, typeIndex) => (
                      <tr key={`w-${sectionIndex}-${typeIndex}`}>
                        <td>
                          {formatValue(type.adjustment_weight_type, true)}
                        </td>

                        {typeIndex === 0 && (
                          <td
                            rowSpan={totalRows}
                            className={styles.sectionCell}
                          >
                            {formatValue(
                              section.adjustment_weight_section,
                              true,
                            )}
                          </td>
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

          <Table bordered className={styles.sideTable}>
            <thead>
              <tr>
                <th colSpan={2}>{ADJUSTED_CONSTANT.SCORE}</th>
              </tr>
              <tr className={styles.subHeader}>
                <th>{ADJUSTED_CONSTANT.TYPE}</th>
                <th>{ADJUSTED_CONSTANT.SECTION}</th>
              </tr>
            </thead>

            <tbody>
              {sections.map((section, sectionIndex) => {
                const totalRows = section.section_type.length;

                return (
                  <>
                    {section.section_type.map((type, typeIndex) => (
                      <tr key={`s-${sectionIndex}-${typeIndex}`}>
                        <td>
                          {formatValue(type.adjustment_score_type, false)}
                        </td>

                        {typeIndex === 0 && (
                          <td
                            rowSpan={totalRows}
                            className={styles.sectionCell}
                          >
                            {formatValue(
                              section.adjustment_score_section,
                              false,
                            )}
                          </td>
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

export default Adjusted;
