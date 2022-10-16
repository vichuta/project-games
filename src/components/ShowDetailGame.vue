<script setup>
import {ref} from 'vue'
defineEmits(['goToHome'])
defineProps({
  thisGame: {
    type: Object,
    required: true
  }
})
const readMoreMode = ref(false)
const showReadMore = () => {readMoreMode.value=true}
</script>

<template>
  <div class="mt-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
    <!-- // Breadcrumb -->
    <div class="mx-1 md:mx-auto max-w-screen-lg py-3">
      <h3 class="text-white font-bold text-base md:text-lg">
        <button @click="$emit('goToHome')" 
        class="underline opacity-70 hover:opacity-100">
          List</button> 
        <span class="opacity-70"> / 
          {{thisGame.title}}</span>
      </h3>
    </div>
        <!-- // Card Detail -->
        <div class="rounded-lg max-w-screen-lg 
                    bg-white/30 backdrop-sepia-0 border-white border-solid border
                    mx-auto mb-10 p-2 sm:p-3 md:p-5 lg:p-7">
            <img class="rounded-lg w-full" 
              :src="thisGame.thumbnail" />
            <h3 class="py-2 sm:py-3 mx-2
                       font-bold text-white text-lg md:text-xl">
              {{thisGame.title}}</h3>
            <p v-if="!readMoreMode" 
                class="mx-2 mb-3 text-white text-md md:text-base">
              {{thisGame.short_description}}</p>
            <p v-else 
                class="mx-2 mb-3 text-white text-md md:text-base">
              {{thisGame.description}}</p>
            
            <!-- Read more -->
            <button v-show="!readMoreMode" @click="showReadMore()"
              class="mx-3 py-1 px-10 rounded-full
                     bg-white/20 backdrop-sepia-0 border-white border-solid border 
                     hover:bg-white hover:text-blue-500 active:bg-gray-200
                     text-white font-bold">
              Read more >></button>
           
        </div>
    </div>
</template>
