# Project Overview

In this project you are given a web-based application that reads RSS feeds. [Jasmine](http://jasmine.github.io/) included.

## How to run the application?
Clone the repository to your local machine using https://github.com/geyang22/frontend-nanodegree-feedreader.git and open index.html using your favourite browser. Jasmine reader will load at the bottom of the page. The following tests have been implemented:

- a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
- a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
- a test that ensures the menu element is hidden by default
- a test that ensures the menu changes visibility when the menu icon is clicked
- a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
- a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
- a test to make sure that the allFeeds variable has been defined and that it is not empty

Check that all the tests check green.



