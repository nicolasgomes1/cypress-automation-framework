const fs = require("fs");
const path = require("path");

function findAndExportTestCases(folderPath, outputFile) {
  const testCases = [];
  let currentIndent = 0;

  function processFile(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    const describeMatches = content.match(/describe\s*\(\s*"([^"]+)"/g);
    const itMatches = content.match(/it\s*\(\s*"([^"]+)"/g);

    if (describeMatches) {
      describeMatches.forEach((match) => {
        const describeNameMatch = match.match(/"([^"]+)"/);
        if (describeNameMatch) {
          const describeName = describeNameMatch[1];
          testCases.push(`Describe "${describeName}"`);
        }
      });
    }

    if (itMatches) {
      itMatches.forEach((match) => {
        const testNameMatch = match.match(/"([^"]+)"/);
        if (testNameMatch) {
          const testName = testNameMatch[1];
          testCases.push(`${"  ".repeat(currentIndent)}Test "${testName}"`);
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
        const directoryName = path.basename(filePath);
        testCases.push(`Describe "${directoryName}"`);
        currentIndent++;
        processDirectory(filePath);
        currentIndent--;
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
  "C:/Users/nicol/OneDrive/Desktop/Nobi/cypress-automation-framework/cypress/e2e/test_cases.txt";

findAndExportTestCases(
  "C:/Users/nicol/OneDrive/Desktop/Nobi/cypress-automation-framework/cypress/e2e/Nobi BackEnd",
  outputPath
);
