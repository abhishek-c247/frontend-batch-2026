import { ReactNode } from "react";

type AdjustedTableVariant = "weight" | "score";
type ScoringTableVariant = "main" | "side";

export interface SectionTypeItem {
  question_type?: string;
  total_question?: number;
  completed_question_percentage?: number;
  completion_weight?: number;
  type_total?: number | string;
  total_percentage?: number;
  adjustment_weight_type?: number;
  adjustment_score_type?: number;
}

export interface Section {
  section?: string;
  section_type: SectionTypeItem[];
  section_total?: number;
  section_weight?: number | string;
  section_total_score?: number;
  adjustment_weight_section?: number;
  adjustment_score_section?: number;
}
export interface BonusSection {
  section: string;
  section_type: SectionTypeItem[];
  section_total: number;
  section_weight: number;
  section_total_score: number;
  adjustment_score_section: number;
}
export interface SectionsTotal {
  all_score_total: number;
  adjustment_weight_section_total: number;
  adjustment_score_section_total: number;
}
export interface AuditData {
  data: Section[];
  bonus: BonusSection;
  sections_total: SectionsTotal;
  overall_safety_score_total: number;
  audit_status: string;
}
export interface OverviewProps {
  apiData?: AuditData;
}
export interface AdjustedProps {
  apiData?: AuditData;
}
export interface ScoringProps {
  apiData?: AuditData;
}
export interface BonusProps {
  data?: BonusSection;
}

export interface AdjustedTableProps {
  sections: Section[];
  variant: AdjustedTableVariant;
  className?: string;
}
export interface ScoringTableProps {
  sections: Section[];
  variant: ScoringTableVariant;
  className?: string;
}

export interface BonusTableProps<T> {
  className?: string;
  rows: T[];
  renderRow: (row: T, index: number) => ReactNode;
};
