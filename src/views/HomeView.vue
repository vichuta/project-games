<script setup>
import ShowListGame from '../components/ShowListGames.vue'
import LoadingIcon from '../components/icons/loadingIcon.vue'
import {useRouter} from 'vue-router'
import {useListGames} from '../stores/listGames.js'
import {onMounted} from 'vue'

const myRouter = useRouter()
const goToDetailGame = (id) => myRouter.push({ name: 'detail', params:{gameId:id}})

const listgames = useListGames()
onMounted(async()=> {
  //ถ้ายังไม่มีการ fetch List API จะให้ไป get ข้อมูลใหม่ก่อนแสดงผล
  if(listgames.dataGames.length===0){
    await listgames.getListGames()
  }
  })

</script>

<template>
  <main>
  <!-- // Loading... -->
  <div v-if="listgames.loadingStatus" 
    class="text-center mt-52" >
     <LoadingIcon/>
  </div>

    <ShowListGame v-else
      :dataGames="listgames.dataGames"
      @goToViewDetail="goToDetailGame"
      />
  </main>
</template>
<style>
</style>
