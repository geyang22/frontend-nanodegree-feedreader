/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe("RSS Feeds", function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* A test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it("has a URL defined and the URL is not empty", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        });
      });

      /* A test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
      it("has a URL defined and the URL is not empty", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        });
      });
    });

    /* A test suite to test the functionality of the menu */
    describe("The menu", function() {
      /* A test that ensures the menu element is
       * hidden by default.
       */
      const body = document.getElementsByTagName("body")[0];
      const hamburger = $(".menu-icon-link");
      it("hidden by default", function() {
        expect(body.classList).toContain("menu-hidden");
      });

      /* A test that ensures the menu changes
       * visibility when the menu icon is clicked (does the menu display when
       * clicked and does it hide when clicked again).
       */
      it("changes visibility when clicked", function() {
        hamburger.click();
        expect(body.classList).not.toContain("menu-hidden");
        hamburger.click();
        expect(body.classList).toContain("menu-hidden");
      });
    });
    /* A test suite to test the feed entries*/
    describe("Initial Entries", function() {
      /* A test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */

      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      it("should be in the feed container before loadFeed is called", function() {
        expect(".feed .entry".length).toBeGreaterThan(0);
      });
    });
    /* A suite to test new feed selection */
    describe("New Feed Selection", function() {
      /* A test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
      let firstSet = "";
      let secondSet = "";
      beforeEach(function(done) {
        $(".feed").empty();
        loadFeed(0, function() {
          firstSet = $(".feed")[0].innerHTML;
          loadFeed(1, function() {
            secondSet = $(".feed")[0].innerHTML;
            done();
          });
        });
      });

      it("should be different from the previous selection", function() {
        expect(firstSet).not.toBe(secondSet);
      });
    });
  })()
);
