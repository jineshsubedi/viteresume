import DefaultTheme from 'vitepress/theme-without-fonts'
import './css/custom.css'
import Tag from "./components/Tag.vue";
import ArticleCard from "./components/ArticleCard.vue";
import LandingBlog from "./components/LandingBlog.vue";
import SectionTitle from "./components/SectionTitle.vue";

export default {
      extends: DefaultTheme,
      enhanceApp(ctx) {
            ctx.app.component('Tag', Tag);
            ctx.app.component('ArticleCard', ArticleCard);
            ctx.app.component('LandingBlog', LandingBlog);
            ctx.app.component('SectionTitle', SectionTitle);
      }
}