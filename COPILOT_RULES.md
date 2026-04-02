# Copilot Rules

## 🚨 SINGLE SOURCE OF TRUTH

You MUST follow `/AI_RULES.md` as the primary instruction set.
If any conflict arises, `/AI_RULES.md` takes precedence.

---

## Core Conventions (Non-Negotiable)

- Feature-based folder structure only
- Strict separation of UI and logic
- No magic strings or numbers (extract constants)
- Prefer small, focused files
- Do NOT introduce refactors or new abstractions implicitly

---

## Execution Control

- Do NOT generate large changes without a clear plan.
- Do NOT rewrite entire files unless explicitly requested.
- Edit only what is necessary.

If documentation is unclear, stop and ask.
