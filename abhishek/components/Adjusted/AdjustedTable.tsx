import { ADJUSTED_CONSTANT } from "@/constant/table.constants";
import type { AdjustedTableProps } from "@/types/audit.types";
import { Table } from "react-bootstrap";
import { useFormatValue } from "@/hooks/useFormatValue";
import styles from "./adjusted.module.scss";

const AdjustedTable = ({
  sections,
  variant,
  className,
}: AdjustedTableProps) => {
  const { formatValue } = useFormatValue();
  const isWeight = variant === ADJUSTED_CONSTANT.VARIANT.WEIGHT;
  const title = isWeight ? ADJUSTED_CONSTANT.WEIGHT : ADJUSTED_CONSTANT.SCORE;

  return (
    <Table bordered className={className ?? styles.table}>
      <thead>
        <tr>
          <th colSpan={2}>{title}</th>
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
                <tr key={`${variant}-${sectionIndex}-${typeIndex}`}>
                  <td>
                    {formatValue(
                      isWeight
                        ? type.adjustment_weight_type
                        : type.adjustment_score_type,
                      isWeight,
                    )}
                  </td>
                  {typeIndex === 0 && (
                    <td rowSpan={totalRows} className={styles.sectionCell}>
                      {formatValue(
                        isWeight
                          ? section.adjustment_weight_section
                          : section.adjustment_score_section,
                        isWeight,
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
  );
};

export default AdjustedTable;
