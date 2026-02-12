const apiUrl = ''
const apiKey = ''

function getCinema(){
    let title = document.querySelector('input[type="text"]').value;
    fetch(`${apiUrl}?t=${title}&apikey=${apiKey}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            renderCinema(data);
        })
    }

function renderCinema(film){
    document.querySelector('.desc').innerHTML=`
        <img src="${film.Poster}" alt="">
            <table>
                <tr>
                    <td>Year</td>
                    <td>${film.Year}</td>
                </tr>
                <tr>
                    <td>Rated</td>
                    <td>${film.Rated}</td>
                </tr>
                <tr>
                    <td>Genre</td>
                    <td>${film.Genre}</td>
                </tr>
                <tr>
                    <td>Writer</td>
                    <td>${film.Writer}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>${film.Country}</td>
                </tr>
                <tr>
                    <td>Metascore</td>
                    <td>${film.Metascore}</td>
                </tr>
                <tr>
                    <td>Type</td>
                    <td>${film.Type}</td>
                </tr>
                <tr>
                    <td>Plot</td>
                    <td>${film.Plot}</td>
                </tr>
            </table>
        </div> `;
    document.querySelector('.bg-image').style.backgroundImage = `url(${film.Poster})`;
}

document.querySelector('button').onclick = getCinema;
    