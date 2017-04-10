/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test if each feed in the allFeeds object
         * has a URL defined and it isn't empty.
         */
        it('url defined on allFeeds', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        /* Test if each feed in the allFeeds object has
         * a name defined and it isn't empty.
         */
        it('name defined on allFeeds', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });

    /* Test suite related to menu */
    describe('The menu', function () {
        /* Test if menu element is hidden by default. */
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        /* Test if menu changes visibility when the menu icon is clicked.
         * This test should have two expectations:
         *   does the menu display when clicked; and
         *   does it hide when clicked again.
         */
        it('is visible after clicked', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(2, done);
        });

        /* Test if there is at least a single .entry element within the .feed
         * container after loadFeed function is called and completes
         * its work.
         */
        it('has entries', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        var titleFromFirstLoad;

        /* Before testing, store first element' title with id 0
         * (used to validate if content changed)
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                titleFromFirstLoad = $('.feed .entry h2')[0].innerHTML;
                loadFeed(1, done);
            });
        });

        /* Test if the content changes when a new feed is loaded by the loadFeed function */
        it('has changed after calling loadFeed again', function(done) {
            expect($('.feed .entry h2')[0].innerHTML).not.toBe(titleFromFirstLoad);
            done();
        });
    });
}());
