Feature: Shopper session actions
  As a signed-in shopper
  I want to end or reset my session
  So that my account and cart remain under my control

  @smoke
  Scenario: Sign out
    Given I am signed in as "standard_user"
    When I sign out
    Then I should be on the SauceDemo login page

  @regression
  Scenario: Reset cart state from the menu
    Given I am signed in as "standard_user"
    And I add "Sauce Labs Backpack" to the cart
    When I reset the application state
    Then the cart badge should not be visible
