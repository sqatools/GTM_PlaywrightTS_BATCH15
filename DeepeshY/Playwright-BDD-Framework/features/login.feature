Feature: SauceDemo authentication
  As a shopper
  I want to sign in securely
  So that I can access the product catalog

  @smoke
  Scenario: Sign in with a valid standard account
    Given I am on the SauceDemo login page
    When I sign in "saucedemo.com" as "standard_user" with password "secret_sauce"
    Then I should see the product catalog

  @regression
  Scenario: Reject an invalid passwordv
    Given I am on the SauceDemo login page
    When I sign in "saucedemo.com" as "standard_user" with password "wrong_password"
    Then I should see the login error "Username and password do not match any user in this service"

  @regression
  Scenario: Show an error for a locked account
    Given I am on the SauceDemo login page
    When I sign in "saucedemo.com" as "locked_out_user" with password "secret_sauce"
    Then I should see the login error "Sorry, this user has been locked out."

  @regression
  Scenario Outline: Require both login credentials
    Given I am on the SauceDemo login page
    When I submit the login form with username "<username>" and password "<password>"
    Then I should see the login error "<message>"

    Examples:
      | username      | password     | message                      |
      |               | secret_sauce | Username is required         |
      | standard_user |              | Password is required         |
