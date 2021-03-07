# simple-api-pokemon

This is a simple pokemon app that returns the pokemon's images and abilities. The user inputs the pokemon's name and clicks enter/on the button. Then, 2 images of the pokemon and a list of its abilities are returned to the DOM.

Link to Project: https://simple-pokemon-abilities-api.netlify.app/

![Project Image](/pic/pokemon.png)


### How It's Made:

Tech used: HTML, CSS, JavaScript

This pokemon app uses 1 API (pokeapi.co). It is made using an input, event listener, function, and fetch statement. First, the user enters a pokemon's name as the input. Next, there is an event listener on the 'Get Abilities' button/the enter key. When either is clicked, a function runs. Within the function is a fetch statement which contacts the API with the request. Finally, the pokemon's images and abilities are returned to the DOM.  


### Lesson Learned

I learned how to fetch data from an API. In this case, the API url needs a pokemon name parameter to fetch the images and abilities. The name is retrieved from the input and inserted into the url through a template literal.  
 

###