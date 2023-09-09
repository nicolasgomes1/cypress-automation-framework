const fs = require("fs");
const path = require("path");

function findAndExportTestCases(folderPath, outputFile) {
  const testCases = [];

  function processFile(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    const itMatches = content.match(/it\s*\(\s*"([^"]+)"/g);

    if (itMatches) {
      itMatches.forEach((match) => {
        const testNameMatch = match.match(/"([^"]+)"/);
        if (testNameMatch) {
          const testName = testNameMatch[1];
          testCases.push(`Test "${testName}"`);
        }
      });
    }
  }

  function processDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (filePath.endsWith(".js")) {
        processFile(filePath);
      }
    });
  }

  processDirectory(folderPath);

  if (testCases.length > 0) {
    fs.writeFileSync(outputFile, testCases.join("\n"), "utf-8");
    console.log(`Test cases exported to ${outputFile}`);
  } else {
    console.log("No test cases found.");
  }
}

const outputPath =
  "C:/Users/nicol/OneDrive/Desktop/Nobi/cypress-automation-framework/cypress/e2e/test_cases1.txt";

findAndExportTestCases(
  "C:/Users/nicol/OneDrive/Desktop/Nobi/cypress-automation-framework/cypress/e2e/Nobi FrontEnd",
  outputPath
);

// usage  node ExportFeatures.js
