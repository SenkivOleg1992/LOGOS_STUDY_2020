let getSel = x => document.querySelector(x);
let contRes = getSel('.container-result');
let formSearch = document.forms['formSearch'];
let contMoreDetail = getSel('.container__more-details');

let detailsPoster = getSel('.container__more-details__poster');
let genre = getSel('.container__more-details__info__genre')
let plot = getSel('.container__more-details__info__post')
let writer = getSel('.container__more-details__info__written')
let director = getSel('.container__more-details__info__directed')
let actors = getSel('.container__more-details__info__starring')
let boxOffice = getSel('.container__more-details__info__box-office')
let awards = getSel('.container__more-details__info__awards');
let ratings = getSel('.container__more-details__info__ratings')
let movie = getSel('.searchMovie');

async function searchMovie() {
    const response = await fetch(`http://www.omdbapi.com/?s=${movie.value}&page=1-5&apikey=23a8b660`);
    if (response.ok) {
        contRes.innerHTML = '';
        const parsedRes = await response.json();
        for (let i = 0; i < parsedRes.Search.length; i++) {
            // main
            let mainDiv = document.createElement('div');
            mainDiv.classList.add('container-movie');
            contRes.appendChild(mainDiv);
            // poster
            let divPoster = document.createElement('div');
            divPoster.classList.add('container-movie__poster');
            divPoster.style.backgroundImage = `url(${parsedRes.Search[i].Poster})`
            mainDiv.appendChild(divPoster);
            // title
            let divTitle = document.createElement('div');
            divTitle.classList.add('container-movie__title');
            divTitle.innerHTML = parsedRes.Search[i].Title;
            mainDiv.appendChild(divTitle);
            //  Date
            let divDate = document.createElement('div');
            divDate.classList.add('container-movie__date');
            divDate.innerHTML = parsedRes.Search[i].Year;
            mainDiv.appendChild(divDate);
            // btn-more
            let btnMore = document.createElement('button');
            btnMore.classList.add('container-movie__btn-more');
            btnMore.innerHTML = 'more details';
            mainDiv.appendChild(btnMore);

            btnMore.addEventListener('click', async function () {
                const responseDetails = await fetch(`http://www.omdbapi.com/?i=${parsedRes.Search[i].imdbID}&page=1&apikey=23a8b660`);
                if(responseDetails.ok){
                    contMoreDetail.style.display = 'flex';
                    const parsedDetails = await responseDetails.json();

                    detailsPoster.style.backgroundImage = `url(${parsedDetails.Poster})`
                    getSel('.title-details').innerHTML = parsedDetails.Title;
                    genre.innerHTML = `${parsedDetails.Rated},   ${parsedDetails.Year},   ${parsedDetails.Genre}`;
                    plot.innerHTML = `${parsedDetails.Plot}`
                    writer.innerHTML = `<b>Written by: </b>${parsedDetails.Writer}`
                    director.innerHTML = `<b>Directed by: </b>${parsedDetails.Director}`
                    actors.innerHTML = `<b>Starrings: </b>${parsedDetails.Actors}`
                    boxOffice.innerHTML = `<b>Box Office: </b>${parsedDetails.BoxOffice}`
                    awards.innerHTML = `<b>Awards: </b>${parsedDetails.Awards}`

                    for (let i = 0; i < parsedDetails.Ratings.length; i++) {
                        ratings.innerHTML += `<br>${parsedDetails.Ratings[i].Source}  -  ${parsedDetails.Ratings[i].Value}`;
                    };
                }
                else{
                    contMoreDetail.style.background = 'red';
                }
            })
        }
    } 
    else {
        contRes.innerHTML = `<h1>Sorry, Something went wrong</h1>`;
    }
};

formSearch.btnSearch.addEventListener('click', function () {
    searchMovie()
});


contMoreDetail.addEventListener('click',function(){
    contMoreDetail.style.display = 'none';
});