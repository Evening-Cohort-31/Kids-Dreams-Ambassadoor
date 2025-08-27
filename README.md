# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > The Kids.js module. An eventListener is added to the entire DOM and sends the target of every user click to handleKidClick. If that target has a data-type of "child" is will create a window alert with the formatted string, whose values are retrieved from the dataset & textContent of the clicked list item.


2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > The for ... of loop is responsible for creating the list item for each kid in the database, so each for each loop we have to also find the correct celebrity so we can display the correct data. 

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > The sport information is stored inside the data-sport property of the celebrity list items. That can be access by accessing the target of the eventListener (e.target), and then accessing it's dataset properties with e.target.dataset.sport. 

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > 1. All necessary functions are imported from their modules (html constructors & event handlers)
     2. The DOM is queried to get the element our html will be inserted into. (mainContainer)
     3. Event listeners are added to the DOM and custom event handlers are set as the callback functions for them.
     4. The final html is constructed by calling the 3 html functions from the various imports. (Kids(), Celebrities(), Pairings())
     5. The html is inserted into the previously queried element (mainContainer). 
