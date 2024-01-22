import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
// 搜索插件
import { searchPlugin } from "@vuepress/plugin-search";
// 重定向插件
import { redirectPlugin } from "vuepress-plugin-redirect";
// 主题配置
import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
	base: "/",
	lang: "zh-CN",
	title: "技术博客",
	description: "致力打造前端最全导航",

	theme,

	// 和 PWA 一起启用
	// shouldPrefetch: false,
	alias: {
		"@theme-hope/modules/blog/components/BlogHero": path.resolve(
			__dirname,
			"./components/BlogHero.vue"
		),
		"@src": path.resolve(__dirname, "./components"),
	},
	plugins: [
		searchPlugin({
			locales: {
				"/": {
					placeholder: "搜索",
				},
			},
			// 排除首页
			isSearchable: (page) => page.path !== "/",
			// 允许搜索 Frontmatter 中的 `tags`
			getExtraFields: (page: any) => page.frontmatter.tags ?? [],
		}),
		redirectPlugin({
			config: {
				"/project": "/project/vue",
				"/project/vue": "/project/vue/大事件管理系统.html",
			},
		}),
	],
});
