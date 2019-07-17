/**
*	this is a github search for users by username;
* it displays a list of users found given a search input
*/

async function getUsers(name) {
	const response = await fetch(`https://api.github.com/search/users?q=${name}`);
  return response.json();
}

const userInput = document.getElementById('user');

userInput.addEventListener('change', async function() {
  cleanList();

  const query = userInput.value;
  const users = await getUsers(query);

	console.table(users.items);

  for (var i = 0; i < users.items.length; i++) {
    const user = users.items[i];

		console.log("user: ", user);

    const element = document.createElement("div");
		element.style.backgroundImage = `url(${user.avatar_url})`;
		element.style.width = '300px';
		element.style.height = '300px';
    // const text = document.createTextNode(user.login);
    // element.appendChild(text);

    document.getElementById("result").appendChild(element);
  }
});

function cleanList() {
  const e = document.getElementById("result");
  let child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
