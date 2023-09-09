#!/bin/bash
sh clean-logs.sh
npx cypress run --browser chrome --spec "cypress\e2e\Nobi BackEnd" --headless
npx mochawesome-merge cypress/results/mochawesome/*.json > mochawesome.json && npx marge mochawesome.json