export type Route = {
	name: string;
	href: string;
};

export const routes: Route[] = [
	{
		href: '/',
		name: 'Home'
	},
	{
		href: '/about',
		name: 'About'
	},
	{
		href: '/services',
		name: 'Services'
	},
	{
		href: '/contact',
		name: 'Contact'
	}
];
