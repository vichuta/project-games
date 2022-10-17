<script setup>
</script>

<template>
  <!-- // Header -->
  <header>
      <nav class="bg-gradient-to-r from-blue-800 to-blue-500 py-6 w-full 
                  fixed top-0 z-10">
        <div class="mx-4 md:mx-5 lg:mx-10 xl:mx-auto max-w-screen-lg h-5
                    flex items-center relative">
          <p class="mr-6 font-sans text-white text-base md:text-lg 
                    md:absolute md:right-10">
            Hello, Marvelous</p>
          <img src="./assets/user-profile.png" 
            class="w-10 h-10 absolute right-0 "/>
        </div>
      </nav>
  </header>

  <RouterView/>
  
</template>

<style scoped>
</style>
