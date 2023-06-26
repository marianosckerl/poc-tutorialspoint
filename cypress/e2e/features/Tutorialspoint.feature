Feature: Test Tutorials Point Site
    Background: 
        Given I navigate to the Website "/html/html_iframes.htm"
    
    Scenario: I want to validate title of home page
        Then Validate the page title
            | title          |
            | HTML - Iframes |

    Scenario: I want to access to iframe src
        Given Get the Iframe URL
        Then Visit the "About us" link inside the Iframe
        Then Get current Iframe URL
        Then Get the current URL
        Then Current URL page should be "https://www.tutorialspoint.com/html/html_iframes.htm"

     Scenario: I want to collect data
        Then Visit the "About us" link inside the Iframe
        Then List all the URLs
        Then List all the Buttons
        Then List all the Input fields

    Scenario: I want to log in the page
        When Open the login page
        When Uses the user credentials
            | email                   | password  |
            | marianosckerl@gmail.com | Test1234! |

        When Skip mobile number verification
        Then Validate that the user is registered
            | name           |
            | Mariano Sckerl |
            
        When User logout 
        Then Current URL page should be "https://www.tutorialspoint.com/index.htm"
