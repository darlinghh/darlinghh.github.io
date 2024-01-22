import { sidebar } from "vuepress-theme-hope";

// export default sidebar([
// 	{
// 		text: "前端导航",
// 		icon: "laptop-code",
// 		prefix: "/navigation/",
// 		link: "/navigation/",
// 		children: "structure",
// 	},
// 	{
// 		text: "面试题库",
// 		icon: "book",
// 		prefix: "interview/",
// 		link: "/interview",
// 	},
// 	{
// 		text: "程序员笔记",
// 		icon: "book",
// 		// prefix: "notes/",
// 		link: "/notes",
// 	},
// ]);

export default sidebar([
	{
		text: "前端导航",
		icon: "lightbulb",
		// prefix: "navigation/",
		link: "/navigation/",
		// children: "structure",
	},
	{
		text: "面试题库",
		icon: "book",
		prefix: "/interview/",
		link: "/interview/",
		children: "structure",
		collapsible: true,
	},
	{
		text: "程序员笔记",
		icon: "person-chalkboard",
		prefix: "/notes/",
		link: "/notes/",
		children: "structure",
		collapsible: true,
	},
	{
		text: "项目",
		icon: "person-chalkboard",
		prefix: "/project/",
		link: "/project/",
		children: "structure",
		collapsible: true,
	},
]);
// export default sidebar({
// 	"/": [
// 		{
// 			text: "前端导航",
// 			icon: "lightbulb",
// 			// prefix: "navigation/",
// 			link: "navigation/",
// 			// children: "structure",
// 		},
// 		{
// 			text: "面试题库",
// 			icon: "book",
// 			prefix: "interview/",
// 			link: "interview/",
// 			children: "structure",
// 		},
// 		{
// 			text: "程序员笔记",
// 			icon: "person-chalkboard",
// 			prefix: "notes/",
// 			link: "notes/",
// 			children: "structure",
// 		},
// 		{
// 			text: "项目",
// 			icon: "person-chalkboard",
// 			prefix: "project/",
// 			link: "project/other/",
// 			children: "structure",
// 			collapsible: true,
// 			// activeMatch: "/zh/faq",
// 		},
// 	],
// });
