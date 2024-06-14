Feature: Login Page test Scanario

  Scenario Outline: Test login with valide credentials
    Given I navigate to the login page
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the login button
    Then I should see login successful the message "<message>"

    Examples:
      | username | password    | message                                              |
      | student  | Password123 | Congratulations student. You successfully logged in! |

  Scenario Outline: Test login with invalide credentials
    Given I navigate to the login page
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the login button
    Then I should see the message "<message>"

    Examples:
      | username      | password    | message                   |
      | incorrectUser | Password123 | Your username is invalid! |
      | student       | pass2       | Your password is invalid! |
