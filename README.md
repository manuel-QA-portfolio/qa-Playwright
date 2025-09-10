# 🚀 Playwright + TypeScript (QA Automation Demo)

This repository contains an initial example of automation with **Playwright**, following the **Page Object Model (POM)** design pattern.  
The structure is designed to keep tests **clear, maintainable, and scalable**, just like in a real QA Automation project.

---

## 📂 Project structure

```text
├─ src/
│  └─ pages/               # Page Objects (POM)
│     └─ LoginFile.ts
│
├─ tests/
│  └─ swaglabs/            # Automated tests
│     └─ loginControl.spec.ts
│
├─ .gitignore
├─ package.json
├─ playwright.config.ts
├─ tsconfig.json
└─ README.md
```
---

## 🛠️ Requirements

- **Node.js 18+**  
- **npm** (comes with Node)

---

## ⚙️ Installation

Clone the repository and run:

```bash
npm install
npx playwright install --with-deps
```
▶️ Run tests
Run all tests:
```bash
npm test
```
Run in UI mode:
```bash
npm run test:ui
```
View the HTML report of the last run:
```bash
npm run report
```
---

## 🧩 Pattern used: Page Object Model (POM)
Page Objects are located in src/pages/.

Tests import these objects from tests/swaglabs/.

This allows to:

Reuse code.

Avoid selector duplication.

Make tests more readable and semantic.

## ✅ Best practices applied
Accessible selectors (getByRole, getByLabel, data-testid).

No sleep() or hard waits → only Playwright auto-waits.

Semantic methods (login(), open(), submit()), instead of raw selectors like click on #id123.

Configuration ready for CI/CD, with BASE_URL configurable per environment.

## 📌 Next steps
Add more POMs (e.g., products page, support page).

Expand the test suite.

Integrate with CI/CD (GitHub Actions, GitLab CI).

💡 This repository is part of my QA Automation portfolio.
I will keep expanding it with more examples and best practices of Playwright + TypeScript.