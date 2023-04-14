export const SITE = {
	title: 'VCE Software Development Wiki',
	description: 'A comprehensive open-source wiki for VCE Software Development.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://sd.archerhu.me/card.jpg',
		alt:
			'Software Development Wiki title on white background.'
	},
	twitter: '4rcherhume',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/archerhume/vceSDWiki`;

export const COMMUNITY_INVITE_URL = false;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Unit 3': [
			{ text: 'Overview of Unit 3: Software Development', link: 'u3/introduction' },
			{ text: 'Key Outcomes and Assessment', link: 'u3/key-outcomes' },
			{ text: 'Area of Study 1', link: 'u3/aos-one' },
			{ text: 'Area of Study 2', link: 'u3/aos-two' },
			{ text: 'Key Terms & Definitions', link: 'u3/key-terms' },
		],
	},
};
