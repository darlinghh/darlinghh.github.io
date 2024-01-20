import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "技术博客",
    description: "vuepress-theme-hope 的文档演示",

    theme,

    // 和 PWA 一起启用
    // shouldPrefetch: false,
    alias: {
        "@theme-hope/modules/blog/components/BlogHero": path.resolve(
            __dirname,
            "./components/BlogHero.vue"
        )
    },
    plugins: [
        searchPlugin({
            locales: {
                "/": {
                    placeholder: "搜索"
                }
            },
            // 排除首页
            isSearchable: (page) => page.path !== "/",
            // 允许搜索 Frontmatter 中的 `tags`
            getExtraFields: (page: any) => page.frontmatter.tags ?? []
        })
    ]
});
