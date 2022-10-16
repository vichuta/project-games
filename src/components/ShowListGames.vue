<script setup>
import {ref, computed} from 'vue'

defineEmits(['goToViewDetail'])
const props = defineProps({
  dataGames: {
    type: Object,
    required: true
  }
})

//Searching Mode
const resultGames = ref([])
const nameSearch = ref("")
const searching = computed(() => {
  if(nameSearch.value !== ""){
    let text = nameSearch.value.toLowerCase()
    resultGames.value = props.dataGames.filter((game)=>{
      let name = game.title.toLowerCase()
      return name.includes(text)
    })
    return true
  }
  return false
})
</script>

<template>
  <!-- // Searching bar -->
  <div class="mt-20 mx-2 max-w-screen-lg md:mx-10 lg:mx-10 xl:mx-auto">
    <div class="m-2 flex items-center">
      <!-- search icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-6 md:h-6 mr-2 text-white" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
      <!-- search input -->
    <input type="text" name="name" placeholder="Search game by name" v-model="nameSearch" maxlength="200"
        class="bg-inherit px-3 outline-none text-white placeholder:text-white placeholder:opacity-60
               w-full sm:w-1/2 md:w-72 lg:w-96 py-1 
               border-b border-blue-400 focus:border-white focus:bg-inherit">
    </div>
  </div>

<!-- // List Games for Searching -->
<div v-if="searching && resultGames.length !== 0"
   class="mx-3 max-w-screen-lg
          grid grid-cols-1 gap-5
          place-content-center 
          md:grid-cols-2 md:mx-10
          lg:grid-cols-3 lg:gap-7 lg:mx-10
          xl:mx-auto">
    <!-- // Card for Searching -->
    <div v-for="(game,index) in resultGames" :key="index" @click="$emit('goToViewDetail',game.id)"
      class="rounded-lg bg-white/30 backdrop-sepia-0
            border-white border-solid border
            transition duration-300
            hover:scale-105 hover:delay-100 hover:drop-shadow-2xl">
          <!-- // Content -->
          <div class="m-2 md:m-3 lg:m-4
                      flex flex-row md:flex-col items-start">
            <img :src="game.thumbnail" 
              class="rounded-lg mt-1 mr-3 
                    flex-initial w-36 sm:w-2/5 md:w-full"/>
            <div class="flex-initial md:mx-2">
              <h3 class="pt-0 pb-1 sm:py-3 
                    font-bold text-white text-lg md:text-xl ">
                {{game.title}}
              </h3>
              <p class="pb-3 text-white text-sm md:text-md">
                {{game.short_description}}
              </p>
          </div>
        </div>
    </div>
  </div>
  <!-- // Searched not found -->
  <div v-else-if="searching && resultGames.length === 0" 
      class="text-white text-center text-base">
      search not found</div>
 
  <!-- // List Games -->
  <div v-show="!searching"
   class="mx-3 max-w-screen-lg
          grid grid-cols-1 gap-5
          place-content-center 
          md:grid-cols-2 md:mx-10
          lg:grid-cols-3 lg:gap-7 lg:mx-10
          xl:mx-auto">
    <!-- // Card -->
    <div v-for="(game,index) in dataGames" :key="index" @click="$emit('goToViewDetail',game.id)"
      class="rounded-lg bg-white/30 backdrop-sepia-0
            border-white border-solid border
            transition duration-300
            hover:scale-105 hover:delay-100 hover:drop-shadow-2xl">
          <!-- // Content -->
          <div class="m-2 md:m-3 lg:m-4
                      flex flex-row md:flex-col items-start">
            <img :src="game.thumbnail" 
              class="rounded-lg mt-1 mr-3 
                    flex-initial w-36 sm:w-2/5 md:w-full"/>
            <div class="flex-initial md:mx-2">
              <h3 class="pt-0 pb-1 sm:py-3 
                    font-bold text-white text-lg md:text-xl ">
                {{game.title}}
              </h3>
              <p class="pb-3 text-white text-sm md:text-md">
                {{game.short_description}}
              </p>
            </div>
          </div>
    </div>
  </div>
</template>

<style scoped>
</style>
