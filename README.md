# @processversion/api-wrapper

This is my first package! I made this simple project for my API just to get some experience with making packages.

Example usage:

- Javascript

```js
const API = require('@processversion/api-wrapper');
const api = new API('KEY HERE');
```

- Typescript

```ts
import API from '@processversion/api-wrapper';
const api = new API('KEY HERE');
```

API keys can be found through my Discord Bot (WIP). Spamming any of the endpoints is an easy way to get your token revoked and your IP banned. I encourage putting the API key into a .env file or a JSON file and requiring it:

- config.json

```json
{
	"api_key": "KEY HERE"
}
```

```js
const config = require('./config.json');

const API = require('@processversion/api-wrapper');
const api = new API(config.api_key);
```

- Dotenv

```txt
API_KEY=KEY HERE
```

```js
require('dotenv').config(); // npm i dotenv

const API = require('@processversion/api-wrapper');
const api = new API(process.env.API_KEY);
```

- Methods

`new API('API_KEY').Reverse('any string')`

```js
const API = require('@processversion/api-wrapper');
const api = new API('API_KEY');

(async function () {
	const info = await api.Reverse('processversion');

	if (info.success == false) console.log('An error has occurred');

	console.log(info.data.text); // Prints out: noisrevssecorp
})();
```

`new API('API_KEY').Subreddit('subreddit name')`

```js
const API = require('@processversion/api-wrapper');
const api = new API('API_KEY');

(async function () {
	const info = await api.Subreddit('prequelmemes');

	if (info.success == false) console.log('An error has occurred!');

	console.log(info.data.created); // Prints out date the subreddit was created
})();
```

`new API('API_KEY').Reddit('user name')`

```js
const API = require('@processversion/api-wrapper');
const api = new API('API_KEY');

(async function () {
	const info = await api.Reddit('reddit user');

	if (info.success == false) console.log('An error has occurred');

	console.log(info.data.created); // Returns when the user's account was created
})();
```

`new API('API_KEY').Roblox('username')`

```js
const API = require('@processversion/api-wrapper');
const api = new API('API_KEY');

(async function () {
	const info = await api.Roblox('roblox user');

	if (info.success == false) console.log('An error has occurred');

	console.log(info.data.joinDate); // Returns when the user's account was created
})();
```

- Simple Discord Bot example

```js
const {} = require('discord.js');
```
