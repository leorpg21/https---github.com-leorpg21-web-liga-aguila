
fetch("https://v3.football.api-sports.io/standings?league=239&season=2023", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "400bd206fa9de4ffc482147d7efa0416"
	}
})
	.then(response => response.json())
	.then(data => mostrarTablaA(data))
	.catch(err => console.log(err))

//const mostrarD = data.find(i=>i.standings===3);
const mostrarTablaA = (data) =>{
	tApertura = data.response[0].league.standings[3];
	console.log(tApertura)
	let body = ""
        for (var i = 0; i < tApertura.length; i++) {      
            body+=`<tr>
			       	<td>${tApertura[i].rank}</td>
			       	<td>${tApertura[i].team.name}</td>
				   	<td>${tApertura[i].points}</td>
					<td>${tApertura[i].all.played}</td>
					<td>${tApertura[i].all.win}</td>
					<td>${tApertura[i].all.draw}</td>
					<td>${tApertura[i].all.lose}</td>
					<td>${tApertura[i].all.goals.for}</td>
					<td>${tApertura[i].all.goals.against}</td>
					<td>${tApertura[i].goalsDiff}</td>
					<td>${tApertura[i].form}</td>
					   
				   </tr>`
        }
        document.getElementById('Apertura').innerHTML = body
}



fetch("https://v3.football.api-sports.io/standings?league=239&season=2023", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "400bd206fa9de4ffc482147d7efa0416"
	}
})
	.then(response => response.json())
	.then(data => mostrarTablaCA(data))
	.catch(err => console.log(err))

const mostrarTablaCA = (data) =>{
	cuadrangularA= data.response[0].league.standings[1];
	//console.table(cuadrangularA);
	body =""
	for (let i = 0; i < cuadrangularA.length; i++) {
		body += `<tr>
					<td>${cuadrangularA[i].rank}</td>
					<td>${cuadrangularA[i].team.name}</td>
					<td>${cuadrangularA[i].points}</td>
	 				<td>${cuadrangularA[i].all.played}</td>
	 				<td>${cuadrangularA[i].all.win}</td>
	 				<td>${cuadrangularA[i].all.draw}</td>
	 				<td>${cuadrangularA[i].all.lose}</td>
	 				<td>${cuadrangularA[i].all.goals.for}</td>
	 				<td>${cuadrangularA[i].all.goals.against}</td>
	 				<td>${cuadrangularA[i].goalsDiff}</td>
	 				<td>${cuadrangularA[i].form}</td>
				</tr>`
	}
	document.getElementById('cuadrangularA').innerHTML = body


}



fetch("https://v3.football.api-sports.io/standings?league=239&season=2023", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "400bd206fa9de4ffc482147d7efa0416"
	}
})
	.then(response => response.json())
	.then(data => mostrarTablaCB(data))
	.catch(err => console.log(err))

const mostrarTablaCB = (data) =>{
	cuadrangularB= data.response[0].league.standings[2];
	//console.log(cuadrangularB);
	body =""
	for (let i = 0; i < cuadrangularB.length; i++) {
		body += `<tr>
					<td>${cuadrangularB[i].rank}</td>
					<td>${cuadrangularB[i].team.name}</td>
					<td>${cuadrangularB[i].points}</td>
	 				<td>${cuadrangularB[i].all.played}</td>
	 				<td>${cuadrangularB[i].all.win}</td>
	 				<td>${cuadrangularB[i].all.draw}</td>
	 				<td>${cuadrangularB[i].all.lose}</td>
	 				<td>${cuadrangularB[i].all.goals.for}</td>
	 				<td>${cuadrangularB[i].all.goals.against}</td>
	 				<td>${cuadrangularB[i].goalsDiff}</td>
	 				<td>${cuadrangularB[i].form}</td>
				</tr>`
	}
	document.getElementById('cuadrangularB').innerHTML = body


}

fetch("https://v3.football.api-sports.io/standings?league=239&season=2023", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "400bd206fa9de4ffc482147d7efa0416"
	}
})
	.then(response => response.json())
	.then(data => mostrarTablaCl(data))
	.catch(err => console.log(err))

const mostrarTablaCl = (data) =>{
	clausura= data.response[0].league.standings[0];
	//console.table(clausura);
	body =""
	for (let i = 0; i < clausura.length; i++) {
		body += `<tr>
					<td>${clausura[i].rank}</td>
					<td>${clausura[i].team.name}</td>
					<td>${clausura[i].points}</td>
	 				<td>${clausura[i].all.played}</td>
	 				<td>${clausura[i].all.win}</td>
	 				<td>${clausura[i].all.draw}</td>
	 				<td>${clausura[i].all.lose}</td>
	 				<td>${clausura[i].all.goals.for}</td>
	 				<td>${clausura[i].all.goals.against}</td>
	 				<td>${clausura[i].goalsDiff}</td>
	 				<td>${clausura[i].form}</td>
				</tr>`
	}
	document.getElementById('clausura').innerHTML = body


}


