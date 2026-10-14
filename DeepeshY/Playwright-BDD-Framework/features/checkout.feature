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
    Then the order summary should show "Sauce Labs Backpack"
    When I finish the order
    Then I should see the order confirmation

  @regression
  Scenario Outline: Require checkout information
    When I enter checkout details "<firstName>" "<lastName>" "<postalCode>"
    And I continue checkout
    Then I should see the checkout error "<message>"

    Examples:
      | firstName | lastName | postalCode | message                   |
      |           |          |            | Error: First Name is required |
      | Ada       |          |            | Error: Last Name is required  |
      | Ada       | Lovelace |            | Error: Postal Code is required |
