export interface teamMember {
	name: string;
	role: string;
	imageUrl: string;
	twitterLink: string;
}
export interface product {
	name: string;
	category: string;
	about: string;
	imageUrl: string;
	link: string;
}
export interface page {
	title: string;
	routeLink: string;
	isActive: boolean;
}
export interface article {
	date: string;
	title: string;
	link: string;
}
export interface Advisor {
	name: string;
	role: string;
	company?: string;
	imageUrl: string;
	twitterLink: string;
}
