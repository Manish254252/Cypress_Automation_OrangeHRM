@regression
Feature: Orangehrmlive Login Page

    Scenario: Login using valid credentails
        Given I access Login Portal Page
        When I enter a username Admin
        And I enter a password admin123
        And I click on the login button
        Then I should be redirected to Dashboard page

    Scenario Outline: Login using invalid credentails
        Given I access Login Portal Page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should be presented with the following message <message>

        Examples:
            | username   | password      | message             |
            | Admin      | admin155      | Invalid credentials |
            | Magda      | admin123      | Invalid credentials |
            | dummyAdmin | dummyPassword | Invalid credentials |
            | admin      | Admin123      | Invalid credentials |


