Feed Reader Project
===============================

This project is a web-based application that reads RSS feeds. The 
original developer of this application saw the value in testing. Therefore, 
they've already included the Jasmine framework.  This fork adds more test
in this application.

### Changes made on this fork:

1. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
2. Return the `allFeeds` variable to a passing state.
3. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
4. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
5. Write a new test suite named `"The menu"`.
6. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
7. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
8. Write a test suite named `"Initial Entries"`.
9. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
10. Write a test suite named `"New Feed Selection"`.
11. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
12. No test should be dependent on the results of another.
13. Callbacks should be used to ensure that feeds are loaded before they are tested.
14. Implement error handling for undefined variables and out-of-bound array access.
15. When complete - all of your tests should pass. 
16. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

## How to run

* Download or clone this project.

* Open your browser (Tested on Google Chrome).

* Then open the file _index.html_ on the browser.

* Done, Feed Reader Project will be load!  Tests will run automatically. 