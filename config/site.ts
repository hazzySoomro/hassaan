export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Web Developer",
	description: "Make beautiful websites regardless of your experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    // {
    //   label: "Docs",
    //   href: "/docs",
    // },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Expreince",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Skills",
			href: "/skills",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		// {
		// 	label: "Team",
		// 	href: "/team",
		// },
		// {
		// 	label: "Calendar",
		// 	href: "/calendar",
		// },
		// {
		// 	label: "Settings",
		// 	href: "/settings",
		// },
		// {
		// 	label: "Help & Feedback",
		// 	href: "/help-feedback",
		// },
		{
			label: "WhatsApp",
			href: "https://wa.me/+923312444229",
		},
	],
	links: {
		github: "https://github.com/hazzySoomro",
		twitter: "https://twitter.com/getnextui",
		docs: "https://www.upwork.com/freelancers/~010d98a86986135d14",
		discord: "https://discord.com/users/hazzyalee",
    sponsor: "https://patreon.com/webdeveloper201"
	},
};
