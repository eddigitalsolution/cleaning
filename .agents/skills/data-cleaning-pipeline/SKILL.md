---
name: data-cleaning-pipeline
description: Workflow standards for profiling, sanitizing, deduplicating, and transforming datasets with zero accidental data loss.
---

# Data Cleaning Pipeline Workflow

Use this skill when developing or executing data cleaning tasks in this workspace.

## Steps

1. **Profiling & Inspection**:
   - Inspect missing values, duplicate records, data type mismatches, and outliers.
   - Summarize data distributions prior to modification.

2. **Sanitization & Normalization**:
   - Standardize column names (lowercase, snake_case).
   - Strip extra whitespace and normalize encoding/date/time formats.
   - Impute or handle missing values according to business logic.

3. **Validation & Verification**:
   - Check transformed datasets against expected schemas.
   - Generate summary metrics (row count diffs, null value counts, value ranges).
