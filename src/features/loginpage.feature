Feature: Direct Ferries Login Page

    Scenario: Login Attempt - Unsuccessful
        Given I am on the login page
        When I enter incorrect login details
        Then I see incorrect email or password message
