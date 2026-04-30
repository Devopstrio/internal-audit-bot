export enum AuditType {
  IDENTITY = "IDENTITY",
  INFRASTRUCTURE = "INFRASTRUCTURE",
  APPLICATION = "APPLICATION",
  VENDOR = "VENDOR",
  COMPLIANCE = "COMPLIANCE"
}

export enum ControlStatus {
  PASSED = "PASSED",
  FAILED = "FAILED",
  EXCEPTION = "EXCEPTION",
  NOT_APPLICABLE = "NOT_APPLICABLE"
}

export interface AuditRun {
  id: string;
  type: AuditType;
  status: "IN_PROGRESS" | "COMPLETED" | "FAILED";
  controlCount: number;
  failureCount: number;
  startTime: string;
  endTime?: string;
  triggeredBy: string;
}

export interface ControlFinding {
  id: string;
  controlId: string;
  status: ControlStatus;
  evidencePath: string;
  description: string;
  remediationPlan?: string;
  dueDate?: string;
}

export interface EvidenceAsset {
  id: string;
  source: string;
  timestamp: string;
  hash: string;
  filePath: string;
  metadata: Record<string, any>;
}

export interface ComplianceScore {
  framework: string;
  score: number; // 0-100
  lastAssessment: string;
}
