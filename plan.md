# Plan: Angular 21 + Vitest + GitHub Actions CI Pipeline

## Context
Learning project: scaffold Angular 21 with unit tests and a full GitHub Actions CI pipeline covering lint, build, test coverage enforcement, and security scanning.

## Tech Choices

| Concern | Tool | Why |
|---|---|---|
| Unit tests | Vitest | Angular 21 native (identical API to Jest) |
| Coverage threshold | 50% minimum | Pipeline fails below this |
| Lint | angular-eslint | Official Angular ESLint integration |
| CI | GitHub Actions | Free, GitHub-native |
| Dependency CVEs | `npm audit` | Built-in, zero setup |
| SAST (code security) | CodeQL | Free for public repos, GitHub-native |
| SonarQube | Not used | Paid for private repos |

## Pipeline Stages (`.github/workflows/ci.yml`)

```
push / pull_request to main
        │
        ├── lint     → ng lint (ESLint)
        ├── build    → ng build --configuration production
        ├── test     → ng test --watch=false (Vitest, fails if <50% coverage)
        └── security → npm audit + CodeQL SAST
```

Lint, build, test, and security jobs run in parallel.

## Key Files

| File | Purpose |
|---|---|
| `angular.json` | `coverageThresholds` (50%) + lint target |
| `src/app/greeting.service.ts` | Simple service used for testing |
| `src/app/greeting.service.spec.ts` | 4 Vitest unit tests |
| `src/app/app.spec.ts` | 2 component tests (Angular scaffold default) |
| `.github/workflows/ci.yml` | Full CI pipeline |
| `eslint.config.js` | ESLint rules (added by angular-eslint schematic) |

## Status

- [x] Step 1: Scaffold Angular 21
- [x] Step 2: Git init + first commit
- [x] Step 3: Vitest coverage thresholds configured in `angular.json`
- [x] Step 4: Unit tests written (GreetingService x4, AppComponent x2)
- [x] Step 5: ESLint added via `@angular-eslint/schematics`
- [x] Step 6: GitHub Actions CI workflow created
- [x] Step 7: plan.md written + final commit

## Next Steps (after pushing to GitHub)
1. Create a GitHub repo and push: `git remote add origin <url> && git push -u origin main`
2. Go to **Actions** tab — watch all 4 jobs run
3. Try breaking coverage (delete a test) → see the pipeline fail
4. For private repos: upgrade to GitHub Advanced Security to keep CodeQL; otherwise swap for Snyk free tier
