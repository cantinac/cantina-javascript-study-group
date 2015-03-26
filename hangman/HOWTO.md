##An Intro to Javascript Testing with Karma, Jasmine, and Hangman

### GOALS
* Learn what Karma and Jasmine are
* Know what you're looking at when you see a project with Karma:  directory structure, where to find tests
* Know how to run the tests
* Know basic Jasmine phrases: describe, it, expect, beforeEach

### FIRST THINGS FIRST
Open a command line to this folder.  Run the command 
`make` 

This kicks off a build process that will download all the dependencies you need to run the code.



###ABOUT TESTING

###Context


*What is Karma?*

Karma is a javascript unit-test test runner.
* It's written in and for Javascript. 
* It runs with Node.js . 
* unit testing:  it's meant for testing small chunks of code. 
This is different from integration testing, which tests a whole system end to end, 
and UI testing, which tests that the output renders correctly in a browser.
* test runner:  its job is to organize and run the tests you designate.  

Karma lets you plug in your favorite testing framework - [Jasmine](http://jasmine.github.io/), 
[Mocha](http://mochajs.org/), and [QUnit](http://qunitjs.com/) are very popular.

We're using Jasmine in these exercises. 


DISCUSSION: Anyone have a favorite test library? What do you like about it?

They all do about the same thing, but they phrase it a little differently. 
If you know how to use one, you'll recognize parts of others. 


More:
* [the Karma project Homepage](https://karma-runner.github.io/0.12/index.html)
* Karma was originally named Testacular, the spectaular testing framework. 


###Landmarks

Here's what you'd expect to see in a typical Karma-tested project.

Look at this project in Finder.   

#### Directories
Code is usually kept in a directory called 'src'.  Tests are kept in a directory called 'test'.  
The test directory tree will mirror the src tree so it's easy to find things.  
E.g. if there's a src/level1 folder, there will be a test/level1 folder with all the tests for that area. 

These are optional conventions. Karma doesn't rely on them to work. 

#### Configuration
Configuration lives in a file called karma.conf.js . Open the file and play along at home.

The file begins with `module.exports` .  This is a Node thing that makes the contents available to Karma.

`frameworks:` is where you specify your favorite test library. 

`files:` magically includes files.  This is how files get included without being inside a web page 
with script tags.

`exclude:` lets you ignore files.  You can include tests that aren't ready for prime time.

`autoWatch` will automatically detect if a file changed and rerun the tests.

`browsers` says which browser engines the test will run in.  
Firefox and Chrome will open up your browser briefly.  
PhantomJS (or anything with a ghoulish name) are 'headless' browsers - they run without opening a new app.  These are used for command-line only testing, or for automation tools like Jenkins that run tests when they detect changes. 

`reporters` says how it will show you results.  'Progress' shows messages on the command line. 'html' makes pretty HTML pages.

#### Test specs

The tests themselves live in the test folder.  They're named ______-spec.js .  

TODO: is there a magic naming convention, or does it run everything in the config file's test directories? 


*TRY IT OUT:*

This project shipped with a test file, which you can run. From the command line, run `make` .  Notice you see a flash of a browser opening.  It created a new directory called karma_html and a file called index.html.  Open up the directory in your web browser to see test results. 




### "ONE BEER, PLEASE": A TEST SPEC PHRASEBOOK

Open the test\basic-spec.js file to see a test file.

You'll see several Jasmine phrases:   *describe*, *it*, *beforeEach*, and *expect*.  These are Jasmine functions, not standard javascript.  Each test plugin uses its own dialect, but - like ordering a beer - all the test languages let you express roughly the same things.

#### Jasmine Phrases
[This cheat sheet has the most common Jasmine commands.](http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/)


####Test skeleton: describe() 
describe() organizes a spec into related groups.  It's rewuired to have one describe() function that encloses everything.  A describe() block contains other Jasmine phrases.  You can nest desribe() blocks if you wish.

The format for a describe() block is:
```
describe('a descriptive phrase about what this section does', function(){
	//everything you want to do in this section
});
```

#### standard javascript
You can use standard javascript anywhere inside the spec.  You'll commonly see `var`  declarations for things that are used in multiple tests, especially things you don't want to set up over and over again. 

#### it() 
it() is where tests happen.  it() should test one idea or piece of functionality. 

The format for an it() block is:
```
it('a short description of this test case', function(){
	//nuts and bolts of the test go here
});
```

#### beforeEach()
beforeEach does setup before each it() in the describe block.  Use it to do initialization, like creating an object or setting variables. 

```
beforeEach( function(){
    //set everything up in a clean, known state for tests
});
```

#### afterEach()
afterEach cleans up after each it().  It's used for things like closing files or database connections.  

```
afterEach( function(){

});
```


### MAKE ME A MATCH: expect()

it() functions hold the actual test code. 

Here are some test statements: 

```
expect(true).toBe(true);
expect(1).toBeLessThan(2);
expect(myVariable).toBeDefined();
```


Expect() is the workhorse of tests.  It's how you ask "does this thing do what it ought to".

The thing in the first parenthesis is a variable or a statement, the thing you're looking at.

The next part is called a matcher.  Matchers let you ask questions.  Jasmine comes with several - see the cheat sheet. 

All test libraries offer basic matchers.  Some test libraries offer fancier matchers for convenience.  For example, you can say 
```
var myValue = undefined;

expect( myValue ).toEqual( undefined );
expect( myValue ).toBeUndefined();

```


Fancy matchers are one reason people have favorite test libraries.

### THE TO EQUAL vs TO BE GOTCHA
toEqual() checks that two values are equal.

toBe() checks that two values are the same object.
//TODO: say more about it

### WRITE SOME TESTS
In test/basic-spec.js:
* make an it() test that checks something is true or false
* make a test that checks defined and not defined
* ... 
//TODO: try out those matchers


//TODO:
* process
	* assemble - setup
	* act - do the thing you're testing
	* assert	  - did it do what you want?
		* the test libraries give us some ways to ask that 	
* hands on
	* 	basic assertions -  
	*  expect _____ to _____ ______
	*  test a function
	*  change an object
	*  include code from another file
	*  before and after

* fancy pants: some notes on style
	* go small 	