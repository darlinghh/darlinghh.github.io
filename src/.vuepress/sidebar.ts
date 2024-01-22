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
export default sidebar({
	"/": [
		{
			text: "前端导航",
			icon: "laptop-code",
			// prefix: "navigation/",
			link: "navigation/",
			// children: "structure",
		},
		{
			text: "面试题库",
			icon: "book",
			prefix: "interview/",
			link: "interview/",
			children: "structure",
		},
		{
			text: "程序员笔记",
			icon: "person-chalkboard",
			prefix: "notes/",
			link: "notes/",
			children: "structure",
		},
	],
});
