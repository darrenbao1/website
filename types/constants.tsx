import { page } from "./interfaces";

export abstract class Constants {
	static readonly ACTIVE_PAGES: page[] = [
		{
			title: "Team",
			routeLink: "team",
			isActive: true,
		},
		{
			title: "Advisors",
			routeLink: "/advisors",
			isActive: true,
		},
		{
			title: "Products",
			routeLink: "/products",
			isActive: true,
		},
		{
			title: "Articles",
			routeLink: "/articles",
			isActive: true,
		},
		{
			title: "Vision",
			routeLink: "/vision",
			isActive: false,
		},
	];
}
