import Table from "react-bootstrap/Table";
import styles from "./overview.module.scss";
import type {
  OverviewProps,
  Section,
  SectionTypeItem,
} from "@/types/audit.types";
import { OVERVIEW_CONSTANT } from "@/constant/table.constants";

const OverView = ({ apiData }: OverviewProps) => {
  const data = apiData;
  const sections: Section[] = Array.isArray(data) ? data : (data?.data ?? []);

  return (
    <div className={styles.wrapper}>
      <Table bordered className={styles.table}>
        <thead>
          <tr>
            <th rowSpan={2}>{OVERVIEW_CONSTANT.CATEGORY}</th>
            <th rowSpan={2}>{OVERVIEW_CONSTANT.SECTION}</th>
            <th rowSpan={2}>{OVERVIEW_CONSTANT.QUESTIONS}</th>
          </tr>
          <tr className={styles.subHeaderRow}></tr>
        </thead>

        <tbody>
          {sections.map((section: Section, sectionIndex: number) => {
            const types = section.section_type ?? [];
            const totalRows = types.length;

            return (
              <>
                {types.map((type: SectionTypeItem, typeIndex: number) => (
                  <tr key={`row-${sectionIndex}-${typeIndex}`}>
                    {typeIndex === 0 && (
                      <td rowSpan={totalRows} className={styles.categoryCell}>
                        {section.section}
                      </td>
                    )}
                    <td className={styles.sectionName}>{type.question_type}</td>
                    <td className={styles.questions}>{type.total_question}</td>
                  </tr>
                ))}

                <tr
                  key={`spacer-${sectionIndex}`}
                  className={styles.categorySpacer}
                >
                  <td colSpan={3} />
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default OverView;
