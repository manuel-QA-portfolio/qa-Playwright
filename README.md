# 🚀 Playwright + TypeScript

This repository will reflect a starting point for automation using **Playwright**, structured with the **Page Object Model (POM) pattern**. The architecture is made to achieve clarity, ease of maintenance, and scalability in your tests. You will find a **POM manager**, a set of fixtures, and test cases configured to optimize the workflow.
To reduce redundant code, common actions are abstracted within POMs, making them accessible across all test suites. I have also created a **dedicated fixture file for the POM manager**, so that new tests simply inherit from POMManagerFixture and gain access to utility functions for the entire project. Basically, it is designed to try to make testing as scalable and accessible as possible.

---

## 📂 Project structure

```text
├── src
│   ├── core
│   │   └── PageObjectManager.ts
│   └── pages
│       ├── swag
│       │   ├── CartManagement.ts
│       │   └── LoginFile.ts
│       └── theinternet // Coming soon
├── tests
│   ├── swaglabs
│   │   ├── cartControl.spec.ts
│   │   ├── commonActions.spec.ts
│   │   ├── fixtures
│   │   │   └── pomManager.fixture.ts
│   │   └── loginControl.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
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
- Page Objects are located in src/pages/
- Tests import POMs via tests/swaglabs/fixtures/pomManager.fixture.ts
- Advantages:
    - Reuse code
    - Avoid selector duplication
    - Make tests readable and semantic

---

## ✅ Best practices applied
- Accessible selectors (getByRole, getByLabel, data-test)
- No hard waits (sleep()); Playwright auto-waits
- Semantic methods (login(), addItemsToCart()) instead of raw selectors
- Centralized configuration (playwright.config.ts)
- TypeScript strict mode enabled
- Fixtures for reusable page objects
- Ready for CI/CD pipelines
- BASE_URL configurable per environment

---

## 🚀 Future Improvements

- Add tests for the “theinternet” page
- Implement visual regression testing
- Increase coverage for **edge cases**:
    - Filter and sort functionality
