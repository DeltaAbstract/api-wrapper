import axios from 'axios';

interface RedditUser {
	success: boolean;
	status: number;
	statusMessage: string;
	data: {
		url: string;
		name: string;
		name_prefixed: string;
		id: string;
		pfp: string;
		verified: boolean;
		created: string;
		total_karma: string;
		link_karma: string;
		awardee_karma: number;
		awarder_karma: number;
		mod: boolean;
		gold: boolean;
		employee: boolean;
	};
}
interface Subreddit {
	success: boolean;
	status: number;
	statusMessage: string;
	data: {
		url: string;
		name_prefix: string;
		name: string;
		title: string;
		description: string;
		created: string;
		type: string;
		over18: boolean;
		quarantined: boolean;
		lang: string;
		members: {
			online: string;
			subscribers: string;
		};
		colors: {
			primary_color: string;
			key_color: string;
		};
		images: {
			header_img: string;
			community_icon: string;
			background_img: string;
		};
	};
}
interface Roblox {
	success: boolean;
	status: number;
	statusMessage: string;
	data: {
		username: string;
		thumbnail: string;
		bio: string;
		joinDate: string;
		isBanned: boolean;
		age?: string;
		pastNames?: string[];
		friends?: number;
		following?: string;
		followers?: string;
		profile_url?: string;
	};
}
interface Reverse {
	success: boolean;
	status: number;
	statusMessage: string;
	data: {
		text: string;
	};
}
export class API {
	/** API key */
	key: string;
	constructor(key: string) {
		if (!key || typeof key != 'string')
			throw new Error(
				'You need to provide a key and it needs to be of type string'
			);
		this.key = key;
	}
	/**
	 * Fetch a reddit user's information
	 */
	async Reddit(user: string) {
		try {
			if (!user || typeof user != 'string')
				throw new Error('Missing a required query or is the wrong data type');

			const res = await axios.get(
				`https://processversion.herokuapp.com/reddit?user=${user}`,
				{ headers: { Authorization: this.key } }
			);
			const data = <RedditUser>res.data;

			if (data.success == false)
				throw new Error(
					`Status code: ${data.status}\nMessage: ${data.statusMessage}`
				);

			return data;
		} catch (error) {
			throw error;
		}
	}
	/**
	 * Fetch a subreddit's information
	 */
	async Subreddit(subreddit: string) {
		try {
			if (!subreddit || typeof subreddit != 'string')
				throw new Error('Missing param or incorrect type');

			const res = await axios.get(
				`https://processversion.herokuapp.com/subreddit?subreddit=${subreddit}`,
				{ headers: { Authorization: this.key } }
			);
			const data = <Subreddit>res.data;

			if (data.success == false)
				throw new Error(
					`Status code: ${data.data}\nMessage: ${data.statusMessage}`
				);

			return data;
		} catch (error) {
			throw error;
		}
	}
	async Reverse(text: string) {
		try {
			if (!text || typeof text != 'string')
				throw new Error('Missing required parameter or incorrect type');

			const res = await axios.get(
				`https://processversion.herokuapp.com/reverse?text=${text}`,
				{ headers: { Authorization: this.key } }
			);
			const data = <Reverse>res.data;

			if (data.success == false)
				throw new Error(
					`Status code: ${data.data}\nMessage: ${data.statusMessage}`
				);

			return data;
		} catch (error) {
			throw error;
		}
	}
	/**
	 * Fetch ROBLOX user information VIA username
	 */
	async Roblox(username: string) {
		try {
			if (!username || typeof username != 'string') throw new Error('');

			const res = await axios.get(
				`https://processversion.herokuapp.com/roblox?username=${username}`,
				{ headers: { Authorization: this.key } }
			);
			const data = <Roblox>res.data;

			if (data.success == false)
				throw new Error(
					`Status code: ${data.data}\nMessage: ${data.statusMessage}`
				);

			return data;
		} catch (error) {
			throw error;
		}
	}
}
