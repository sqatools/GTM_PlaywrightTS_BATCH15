Feature: Product catalog and shopping cart
  As a shopper
  I want to browse products and manage my cart
  So that I can choose the products I want to purchase

  Background:
    Given I am signed in as "standard_user"

  @smoke
  Scenario: Display the full product catalog
    Then I should see 6 products in the catalog

  @regression
  Scenario: Sort products by price from low to high
    When I sort products by "Price (low to high)"
    Then products should be sorted by price in ascending order

  @regression
  Scenario: Sort products by name from Z to A
    When I sort products by "Name (Z to A)"
    Then products should be sorted by name in descending order

  @smoke
  Scenario: Add a product and verify cart contents
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show 1 item
    When I open the cart
    Then the cart should contain "Sauce Labs Backpack"

  @regression
  Scenario: Remove a product from the cart
    Given I add "Sauce Labs Backpack" to the cart
    When I open the cart
    And I remove "Sauce Labs Backpack" from the cart
    Then the cart should be empty

  @regression
  Scenario: Continue shopping from an empty cart
    When I open the cart
    And I choose to continue shopping
    Then I should see the product catalog
