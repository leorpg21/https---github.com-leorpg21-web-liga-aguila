fetch("https://v3.football.api-sports.io/players/topassists?season=2023&league=239", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "400bd206fa9de4ffc482147d7efa0416"
    }
})
.then(response => response.json())
.then(data => MaxAsistencia(data))
.catch(err => console.log(err));

const  MaxAsistencia = (data) => {
    maxAss = data.response;
    console.log(maxAss);
    let body=""
    for (let i = 0; i < maxAss.length; i++) {
        body += ` <tr>
                      <td>${maxAss[i].player.firstname} ${maxAss[i].player.lastname}</td>
                      <td>${maxAss[i].statistics[0].goals.assists}</td>
                      <td>${maxAss[i].statistics[0].games.minutes}</td>
                  </tr>
                `
    }
    document.getElementById('m-asistentes').innerHTML = body
}