<script setup>
import ShowDetailGame from '../components/ShowDetailGame.vue'
import LoadingIcon from '../components/icons/loadingIcon.vue'
import {useRoute, useRouter} from 'vue-router'
import {ref, onBeforeMount} from 'vue'

const {params} = useRoute()
const myRouter = useRouter()
const goToHome = () => myRouter.push({name:'home'})

// -- function GET Detail API --
const thisGame = ref([])
const loadingStatus = ref(false)
const message = ref("")
const getGameById = async (id) =>{
    loadingStatus.value = true
    const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
        method: "GET",
        headers:{
          'x-rapidapi-key' : '2a50aee9e6msh55cf8498c0e6c1ap1c932fjsn9403eb2b255d',
          'x-rapidapi-host' : 'free-to-play-games-database.p.rapidapi.com'
        }
      }).catch((error)=> {
          console.log(error)
          console.log('GET This Games Error')
      });
      console.log(res)
      if(res.status == 200){
        thisGame.value = await res.json()
        console.log(thisGame.value)
        loadingStatus.value = false
      }else if(res.status == 404){
        loadingStatus.value = false
        console.log("No game found with that id")
        message.value = `Not found this game id: ${id}`
      }
}
onBeforeMount(async()=> await getGameById(params.gameId))
</script>

<template>
  <!-- // Loading -->
  <div v-if="loadingStatus" 
    class="mt-52 text-center">
    <LoadingIcon/>
  </div>
  
  <!-- // Error message 
    (ถ้า id ของ url : /detail/{id} ไม่มีข้อมูล จะมี error message "Not found this game id: {id}")-->
  <div v-else-if="message!==''" class="mt-32 text-red-400 text-center font-sans text-base">{{message}}</div>

  <ShowDetailGame v-else
    :thisGame="thisGame"
    @goToHome="goToHome"/>
  
</template>
