let villeChoisie;
// recevoirTemperature(villeChoisie);

var options = {
    enableHighAccuracy: true
}

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
    villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
    recevoirTemperature(villeChoisie);
});


if("geolocation" in navigator) {
    navigator.geolocation.watchPosition((position) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + position.coords.longitude + '&lat=' + position.coords.latitude + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
        console.log(url);
        let requete = new XMLHttpRequest();
        requete.open('GET', url);
        requete.responseType = 'json';
        requete.send();
        requete.onload = function() {
            if (requete.readyState === XMLHttpRequest.DONE) {
                if (requete.status === 200) {
                    let reponse = requete.response;
                    let temperature = reponse.main.temp;
                    let ville       = reponse.name;
                    document.querySelector('#temperature_label').textContent = temperature;
                    document.querySelector('#ville').textContent = `Actuellement à ${ville} il fait `;
                }
                else {
                    alert('Un problème est intervenu, merci de revenir plus tard.');
                    
                }
            }
        }
        
    }, erreur, options )
}
else {
    villeChoisie ="Montréal";
    recevoirTemperature(villeChoisie);
}


function erreur () {
    villeChoisie = 'New York';
    recevoirTemperature(villeChoisie);
}


function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
    
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send(); 
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville       = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = `Actuellement à ${ville} il fait `;
            }
            else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}
