// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('readExcelData', (fileName) => {
    cy.readFile(`cypress/fixtures/${fileName}`, 'binary').then((binaryData) => {
        const XLSX = require('xlsx');
        const workbook = XLSX.read(binaryData, { type: 'binary' });

        // Get the first sheet (adjust if needed)
        const sheetName = workbook.SheetNames[1];  // Change index if necessary
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet data to JSON
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });  // Treat first row as data

        // Filter out empty rows (optional)
        const filteredData = data.filter(row => row.some(cell => cell != null));

        // Log the filtered data for debugging
        cy.log(JSON.stringify(filteredData));  // Logs the entire data array

        // Return the filtered data
        return filteredData;
    });
});
Cypress.Commands.add('readCsvData', (fileName) => {
    // Read the CSV file using cy.readFile
    cy.readFile(`cypress/fixtures/${fileName}`).then((csvData) => {
        // Use PapaParse to parse CSV data
        const Papa = require('papaparse');

        // Parse CSV data (PapaParse will automatically handle CSV formatting)
        const parsedData = Papa.parse(csvData, {
            header: true, // Treat the first row as the header
            skipEmptyLines: true, // Skip empty lines
        });

        // Log the parsed data for debugging
        cy.log(JSON.stringify(parsedData.data)); // Logs the data from the CSV file

        // Return the parsed data
        return cy.wrap(parsedData.data);
    });
});



