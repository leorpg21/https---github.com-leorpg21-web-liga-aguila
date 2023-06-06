fetch("https://v3.football.api-sports.io/players/topscorers?season=2023&league=239",{
    "method": "GET",     "headers": 
            { 	    "x-rapidapi-host": "v3.football.api-sports.io", 
                    "x-rapidapi-key": "400bd206fa9de4ffc482147d7efa0416"     } }     )
         .then(response => response.json())     
         .then(data => MaxGoleadores(data))     
         .catch(err => console.log(err))

 const MaxGoleadores = (data) =>{

         console.log(data)
         goleadores = data.response;
         let body = ""
        
         for (var i = 0; i < goleadores.length; i++) {      
             body+=`<tr>
                            <td>${goleadores[i].player.firstname} ${goleadores[i].player.lastname}</td>
                            <td>${goleadores[i].statistics[0].goals.total}</td>
                            <td>${goleadores[i].statistics[0].games.minutes}</td>
               
                     </tr>`
         }
         document.getElementById('goleadores').innerHTML = body
     }
    
