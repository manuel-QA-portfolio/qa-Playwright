# 🚀 Playwright + TypeScript (QA Automation Demo)

This repository contains an initial example of automation with **Playwright**, following the **Page Object Model (POM)** design pattern.  
The structure is designed to keep tests **clear, maintainable, and scalable**. POM Manger, fixtures and tests are used in this repository in order to ease the upcoming tests. Basic repetitive actions have been created in the POMs in order to use them in all tests. To do that, I created a Fixture file of the POM Manager. With this method, tests only inherit from POMManagerFixture and tests can use functions from all parts of the project.

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
