<template class="container mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div class="bg-white">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div
                        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <VideoCard 
                              v-for="(video, index) in videos" :key="index"
                              :title="video.title"
                              :href="video.href"
                              :image="video.image"
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
const videos = [
      {
            title: "Yajra Datatables",
            href: "https://www.youtube.com/watch?v=N69ZOg59exs",
            image: "https://img.youtube.com/vi/N69ZOg59exs/hqdefault.jpg",
      },
      {
            title: "Laravel Google 2FA Authentication Tutorial",
            href: "https://www.youtube.com/watch?v=IkfzS96Y3Wk",
            image: "https://img.youtube.com/vi/IkfzS96Y3Wk/hqdefault.jpg",
      },
      {
            title: "Chat Application under 15 min | Laravel | Chatify | Pusher | EASY Tutorial",
            href: "https://www.youtube.com/watch?v=TDDRGULKfv0",
            image: "https://img.youtube.com/vi/TDDRGULKfv0/hqdefault.jpg",
      },
      {
            title: "captcha | Laravel 10 | Validate form using Captcha",
            href: "https://www.youtube.com/watch?v=ldoVDJ7gP8s",
            image: "https://img.youtube.com/vi/ldoVDJ7gP8s/hqdefault.jpg",
      },
      {
            title: "laravel 9 | Next js | Setup Tutorial",
            href: "https://www.youtube.com/watch?v=f7vucFXxEPo",
            image: "https://img.youtube.com/vi/f7vucFXxEPo/hqdefault.jpg",
      },
      {
            title: "Laravel 9 || Breeze API || Next.js || Demo.",
            href: "https://www.youtube.com/watch?v=awVsuMgXEBs",
            image: "https://img.youtube.com/vi/awVsuMgXEBs/hqdefault.jpg",
      },
]
</script>