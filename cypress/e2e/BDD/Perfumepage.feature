Feature: Verify the Number of product for perfume page Highlight dropdown

    Scenario: Verify the sale option in highlight dropdown
        Given I am on the home page
        When I click on perfume page
        Then I am on the perfume page
        And All option of dropdown is displayed
        When I click on the highlight dropdown
        And I click on SALE option and verify the number of product
        Then Verify the sale filter is applied
