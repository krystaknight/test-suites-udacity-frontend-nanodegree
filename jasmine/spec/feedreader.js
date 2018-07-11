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

         //check that each feed has a defined, non-empty url
         it('should have a url', function(){
           for(const feed of allFeeds){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).toBeGreaterThan(0);
           }
         });

         //check that each feed has a defined non-empty name
         it('should have a name', function(){
           for(const feed of allFeeds){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).toBeGreaterThan(0);
           }
         });
    });


    describe('The menu', function(){
        //check that the menu item is hidden by default
         it('menu should be hidden', function(){
           expect($('body').hasClass('menu-hidden')).toEqual(true);
         });

         //check that menu item visibily toggles on click
          it('should toggle menu', function(){
            var menu = $('.menu-icon-link');
            //onclick 1
            menu.click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            //onclick 2
            menu.click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
          });
    });


    describe('Initial Entries', function(){

        //ceck that the feed contains at least 1 entry after load
         beforeEach(function(done){
           loadFeed(0, function(){
              done()
           })
         });

         it('there is at least 1 entry', function(){
           expect($('.feed .entry').length).toBeGreaterThan(0);
         })
       });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
      //check that the feed changes when new feed iis selected
       var init;

       beforeEach(function(done){
         loadFeed(0, function(){
           init = $('.feed').html();
           loadFeed(1,function(){
             done();
           })
         })
       });

      it('content changes', function(){
        expect($('.feed').html()).not.toEqual(init);
      })
    });


}());
