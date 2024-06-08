
Feature: Login functionality

  Scenario: User logs in with valid credentials
    Given I am on the login page
    When I login with username "roshan" and password "password123"
    Then I should be redirected to the dashboard
