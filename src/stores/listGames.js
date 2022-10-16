import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useListGames = defineStore('listGames', () => {
    const dataGames = ref([])
    const loadingStatus = ref(false)
    const getListGames = async () =>{
        loadingStatus.value = true
        const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
            method: "GET",
            headers:{
              'x-rapidapi-key' : '2a50aee9e6msh55cf8498c0e6c1ap1c932fjsn9403eb2b255d',
              'x-rapidapi-host' : 'free-to-play-games-database.p.rapidapi.com'
            }
          }).catch((error)=> {
              console.log(error)
              console.log('GET List Games fail')
          });
          if(res.status == 200){
            dataGames.value = await res.json()
            console.log(dataGames.value[0])
            loadingStatus.value = false
          }
    }

  return { dataGames, loadingStatus, getListGames }
})
