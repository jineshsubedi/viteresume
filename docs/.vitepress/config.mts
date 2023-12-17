import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "JINESH SUBEDI",
  description: "Hello! Jinesh Subedi here, a dedicated Laravel developer with a love for building solid web applications. I thrive on transforming creative ideas into scalable, high-performance solutions. With a strong foundation in PHP and the Laravel framework, I provide vast experience in creating elegant and efficient code that matches the specific demands of clients.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Blog', link: '/blog' },
      { text: 'Contact', link: '/contact' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jineshsubedi' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jinesh-subedi-541550154/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@sojhodeveloper' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 - Jinesh Subedi'
    }
  }
})
