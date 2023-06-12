fetch("https://v3.football.api-sports.io/standings?league=239&season=2023", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "400bd206fa9de4ffc482147d7efa0416"
        // 6fe44ced887178679f2581791bb8b9fb
	}
})
	.then(response => response.json())
	.then(data => MostrarEquipos(data))
	.catch(err => console.log(err))
    

    const MostrarEquipos = (data) =>{
        equipos= data.response[0].league.standings[0];
        console.log(equipos);
        body =""
        for (let i = 0; i < equipos.length; i++) {
            body += `  <div class="cont3">
                            <figure>
                                <img src="${equipos[i].team.logo}" >
                                <div class="capa">
                    
                                    <p>${equipos[i].team.name}</p>
                                </div>
                            </figure>
                        </div>
                        
                         `
        }
        document.getElementById('equipos').innerHTML = body
    
    
    }