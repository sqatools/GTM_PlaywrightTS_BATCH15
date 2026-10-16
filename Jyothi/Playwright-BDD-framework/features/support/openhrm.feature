Feature: OpenHRM authentication


  @smoke
  Scenario: Sign in with a valid admin account
    Given I am on the OrangeHRM login page
    When I sign in as "Admin" with password "admin@123"
    Then I should see on dashboard page
