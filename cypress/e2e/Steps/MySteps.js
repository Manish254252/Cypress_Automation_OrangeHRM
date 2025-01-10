import {
    Before,
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../PageObj/loginPage';


Given
("I access Login Portal Page with Data Driven", function () {
   cy.fixture("loginUsers").then((data) => {

       // Negative Validation
       data.forEach((user) => {
           // Navigate to the login page

               cy.visit(Cypress.config("baseUrl"));

               // Use methods from the loginPage object
               loginPage.typeUsername(user.username);
               loginPage.typePassword(user.password);
               loginPage.clickLogin();
                cy.get(".oxd-alert").should("be.visible");





       })
   })
});


Given("I access Login Portal Page with CSV", function () {
    // cy.readExcelData('Order_Details.xlsx').then((xlsx) => {
    //     // cy.log(JSON.stringify(xlsx));
    //     xlsx.forEach((item) => {
    //         cy.log("Company " + item.Company+"\n OrderNumber " + item.OrderNumber+"\n OrderTotal " + item.OrderTotal);
    //
    //     })
    // });
        cy.readCsvData('login.csv').then((data) => {
            // Negative Validation
            data.forEach((user) => {
                // Navigate to the login page

                cy.visit(Cypress.config("baseUrl"));

                // Use methods from the loginPage object
                loginPage.typeUsername(user.username);
                loginPage.typePassword(user.password);
                loginPage.clickLogin();
                cy.get(".oxd-alert").should("be.visible");
        })





        })

});