import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
        {
            text: "前端导航",
            icon: "laptop-code",
            prefix: "navigation/",
            link: "navigation/",
        },
        {
            text: "文档",
            icon: "book",
            prefix: "guide/",
            children: "structure",
        },
    ],
});
