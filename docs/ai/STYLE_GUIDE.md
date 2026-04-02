## Absolute Rules (Non-negotiable)

- Separation of Concerns is mandatory (UI vs Logic).
- If a file exceeds ~200 lines, the agent MUST propose a split/refactor plan before proceeding.
- No magic strings or numbers. Extract them into constants or config files.
- Use feature-based folder structure only. Do NOT organize by technical type (e.g., global components/, hooks/).
- Diffs only. Never dump full files unless explicitly requested.
- If a rule cannot be followed, the agent MUST explain why before proceeding.

## Optional Guidelines

- Prefer strict typing; avoid `any` and implicit `any` unless justified.
- Handle errors explicitly; avoid silent failures.
- Add comments only for non-obvious or complex logic.
- Follow naming conventions strictly:
  - camelCase for functions and variables
  - PascalCase for components and classes
- When modifying logic, briefly explain the reasoning.
