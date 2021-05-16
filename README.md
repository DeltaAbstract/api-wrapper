# @processversion/api-wrapper

This is my first package! I made this simple project for my API just to get some experience with making packages.

Example usage:

- Javascript

```js
const API = require('@processversion/api-wrapper');

// I would recommend putting the key in a .env file or a json file

const api = new API('KEY HERE');

(async function () {
	const subreddit = await api.Subreddit('prequelmemes');

	console.log(subreddit.data.created);
})();
```

- Typescript

```ts
import API from '@processversion/api-wrapper';

const api = new API('KEY HERE');

(async function () {
	const user = await api.Roblox('404');

	console.log(user.data.bio);
})();
```

I mainly made this for fun and just as a side project, so have fun with it!
