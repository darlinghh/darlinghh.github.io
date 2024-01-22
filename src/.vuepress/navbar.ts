import { link } from "fs";
import { navbar } from "vuepress-theme-hope";

export default navbar([
	"/",
	{
		text: "前端导航",
		link: "/navigation/",
		icon: "lightbulb",
		// 仅在 `/zh/guide/` 激活
		// activeMatch: "^/zh/guide/$",
	},
	{
		text: "面试题库",
		link: "/interview/",
		icon: "book",
	},
	{
		text: "程序员笔记",
		link: "/notes/",
		icon: "book",
	},
]);
