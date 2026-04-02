# AI Governance & Agent Rules

This project enforces strict AI behavior and coding standards. Agent drift is NOT tolerated.
All AI agents (Claude, Copilot, Cursor, etc.) MUST read and follow the rules linked below as their primary instruction set.

## 🚨 Source of Truth (Mandatory Reading)

You must read these documents before starting any complex task:

1. **Style & Standards**: [`/docs/ai/STYLE_GUIDE.md`](./docs/ai/STYLE_GUIDE.md)
   - Code style, folder structure, and naming conventions.
   - *Strict Separation of Concerns (UI vs Logic).*

2. **Workflow**: [`/docs/ai/AGENT_WORKFLOW.md`](./docs/ai/AGENT_WORKFLOW.md)
   - Step-by-step process: Analysis → Plan → Approval → Execute.
   - *Never execute code without a plan and user approval.*

3. **Definition of Done**: [`/docs/ai/DEFINITION_OF_DONE.md`](./docs/ai/DEFINITION_OF_DONE.md)
   - Criteria for considering a task complete (Linting, TS checks, etc.).

4. **Review Checklist**: [`/docs/ai/PR_REVIEW_CHECKLIST.md`](./docs/ai/PR_REVIEW_CHECKLIST.md)
   - Self-correction checklist before final output.

## 🚫 Primary Directives

- **No Refactoring Without Permission**: Do not reorganize code unless explicitly asked or approved in the plan.
- **No Magic Values**: Extract constants.
- **Docs First**: If a rule isn't clear, ask the user or check existing docs. Do not guess.

Failure to follow these rules will result in rejected code.
