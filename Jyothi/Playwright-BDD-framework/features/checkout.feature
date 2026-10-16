Feature: Checkout
  As a shopper
  I want to complete checkout
  So that I can place an order for my selected products

  Background:
    Given I am signed in as "standard_user"
    And I add "Sauce Labs Backpack" to the cart
    And I open the cart
    And I start checkout

  @smoke
  Scenario: Complete an order
    When I enter checkout details "Ada" "Lovelace" "12345"
    And I continue checkout
    Then the order summary should contain "Sauce Labs Backpack"
    And the order total should equal the subtotal plus tax
    When I finish the order
    Then I should see the order confirmation

  @regression
  Scenario Outline: Require checkout information
    When I enter checkout details "<first name>" "<last name>" "<postal code>"
    And I continue checkout
    Then I should see the checkout error "<message>"

    Examples:
      | first name | last name | postal code | message                       |
      |            |           |             | Error: First Name is required |
      | Ada        |           |             | Error: Last Name is required  |
      | Ada        | Lovelace  |             | Error: Postal Code is required |

  @regression
  Scenario: Cancel checkout and return to the catalog
    When I cancel checkout
    Then I should see the product catalog
    And the cart badge should show 1 item
