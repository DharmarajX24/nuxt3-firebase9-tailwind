<script lang='ts' setup>
const techArray = [
  {
    title: 'Nuxt 3',
    description: 'Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.',
    link: 'https://nuxt.com'
  },
  {
    title: 'Firebase',
    description: 'Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.',
    link: 'https://firebase.google.com'
  },
  {
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
    link: 'https://tailwindcss.com/'
  }
]
</script>

<template>
  <div class='flex h-screen pt-[4.5rem] box-border justify-center items-center'>
    <div class='w-2/3 px-12 grid grid-rows-3 gap-6'>
      <InfoCard v-for='t in techArray' :tech='t' />
    </div>
  </div>
</template>