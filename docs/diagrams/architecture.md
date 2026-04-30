# Architecture & Audit Diagrams

## 11. Multi-Cloud Evidence Collection Topology (Detailed)
*How the bot orchestrates data collection across disparate trust zones.*

```mermaid
graph TD
    subgraph "Audit Bot Control Plane"
        Scheduler[Audit Scheduler]
        Collector[Evidence Collector]
    end
    subgraph "Trust Zones"
        AWS[AWS Production]
        Azure[Azure Compliance Zone]
        Okta[Identity Provider]
    end
    subgraph "Evidence Vault"
        Ledger[Immutable Ledger]
        Storage[S3/Blob Storage]
    end
    Scheduler --> Collector
    Collector --> AWS
    Collector --> Azure
    Collector --> Okta
    AWS & Azure & Okta --> Collector
    Collector --> Ledger
    Collector --> Storage
```

## 13. Continuous Control Verification Loop
```mermaid
graph LR
    Config[Asset Config] --> Scan[Automated Scan]
    Scan --> Verify[Policy Check: OPA]
    Verify -->|Pass| Log[Evidence: Compliant]
    Verify -->|Fail| Exception[Exception: Open Findings]
```

## 20. Risk-Based Audit Selection Model
```mermaid
stateDiagram-v2
    Inventory --> Impact: Assess Criticality
    Impact --> Frequency: Check Control Failures
    Frequency --> Score: Calculate Risk
    Score --> Plan: Schedule High-Priority Audit
```
