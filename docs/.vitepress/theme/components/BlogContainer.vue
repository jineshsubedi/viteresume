<template class="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div class="bg-white">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div
                        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                              <ArticleCard 
                                    v-for="(blog, index) in articles" :key="index"
                                    :title="blog.title"
                                    :excerpt="blog.excerpt"
                                    :href="blog.href"
                                    :date="blog.date"
                                    :tag="blog.tag"
                        />
                        
                  </div>
            </div>
            <div>
                  <br />
                  <br />
                  <br />
            </div>
      </div>
</template>
<script setup>
const articles = [
      {
            title: "Laravel Google 2FA Authentication Tutorial",
            excerpt: "Laravel is a secure framework with security features. However, if you want to make your laravel app more secure...",
            href: "./laravel-google-2fa-auth",
            date: "2024-01-06",
            tag: "Laravel, Google, Two Factor Auth, Google Auth"
      },
      {
            title: "Changing PHP Version in Ubuntu - A Step-by-Step Guide",
            excerpt: "If you're running a web server on Ubuntu and need to upgrade your PHP version, this guide will walk you through...",
            href: "./change-php-version-in-ubuntu",
            date: "2024-01-03",
            tag: "PHP, Ubuntu, Server"
      },
      {
            title: "Oracle to PostgreSQL SQL Converter Tool",
            excerpt: "If you're transitioning from Oracle to PostgreSQL and need to convert your SQL queries, this simple tool can...",
            href: "./oracletopgsql",
            date: "2024-01-01",
            tag: "Oracle, PostgreSQL, SQL, Conversion"
      },
];
</script>

