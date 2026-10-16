Feature: Product catalog and shopping cart
  As a shopper
  I want to browse products and manage my cart
  So that I can choose the products I want to purchase

  Background:
    Given I am signed in as "standard_user"

  @smoke
  Scenario: Display the product catalog
    Then I should see 6 products in the catalog

  @regression
  Scenario Outline: Sort the catalog
    When I sort products by "<sort option>"
    Then products should be sorted by "<sort order>"

    Examples:
      | sort option          | sort order        |
      | Name (A to Z)        | name ascending    |
      | Name (Z to A)        | name descending   |
      | Price (low to high)  | price ascending   |
      | Price (high to low)  | price descending  |

  @regression
  Scenario: Open a product detail page
    When I open the "Sauce Labs Backpack" product
    Then I should see the "Sauce Labs Backpack" product details

  @smoke
  Scenario: Add multiple products and verify the cart
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    Then the cart badge should show 2 items
    When I open the cart
    Then the cart should contain "Sauce Labs Backpack"
    And the cart should contain "Sauce Labs Bike Light"

  @regression
  Scenario: Remove one product from a cart containing multiple products
    Given I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    When I open the cart
    And I remove "Sauce Labs Backpack" from the cart
    Then the cart should contain "Sauce Labs Bike Light"
    And the cart should not contain "Sauce Labs Backpack"
    And the cart badge should show 1 item

  @regression
  Scenario: Continue shopping from the cart
    Given I add "Sauce Labs Backpack" to the cart
    When I open the cart
    And I choose to continue shopping
    Then I should see the product catalog
