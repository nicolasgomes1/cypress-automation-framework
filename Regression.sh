#!/bin/bash
npx cypress run --browser chrome --spec "cypress\e2e\5-Nobi FrontEnd\01-TC_Login.js" --headless
npx mochawesome-merge cypress/results/mochawesome/*.json > mochawesome.json && npx marge mochawesome.json