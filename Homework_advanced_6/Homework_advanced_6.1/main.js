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

formSearch.btnSearch.addEventListener('click',function(){
    searchMovie();
});

let users = [];

function searchMovie(){
    let xml = new XMLHttpRequest();
    xml.open('GET',`http://www.omdbapi.com/?s=${movie.value}&page=1-5&apikey=23a8b660`,false)
    xml.send();
    const resp = xml.responseText;
    const parsedRes = JSON.parse(resp);

    users.push(parsedRes)
    console.log(users)

    for(let i = 0; i < users[0].Search.length; i++){
        // main
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('container-movie');
        contRes.appendChild(mainDiv);
        // poster
        let divPoster = document.createElement('div');
        divPoster.classList.add('container-movie__poster');
        divPoster.style.backgroundImage = `url(${users[0].Search[i].Poster})`
        mainDiv.appendChild(divPoster);
        // title
        let divTitle = document.createElement('div');
        divTitle.classList.add('container-movie__title');
        divTitle.innerHTML = users[0].Search[i].Title;
        mainDiv.appendChild(divTitle);
        //  Date
        let divDate = document.createElement('div');
        divDate.classList.add('container-movie__date');
        divDate.innerHTML = users[0].Search[i].Year;
        mainDiv.appendChild(divDate);
        // btn-more
        let btnMore = document.createElement('button');
        btnMore.classList.add('container-movie__btn-more');
        btnMore.innerHTML = 'more details';
        mainDiv.appendChild(btnMore)
        // more details
        btnMore.addEventListener('click',function(){            
            contMoreDetail.style.display = 'flex';
            let xmlDetails = new XMLHttpRequest();
            xmlDetails.open('GET',`http://www.omdbapi.com/?i=${parsedRes.Search[i].imdbID}&page=1&apikey=23a8b660`,false)
            xmlDetails.send();
            const respDetails = xmlDetails.responseText;
            const parsedDetails = JSON.parse(respDetails);
            console.log(parsedDetails)
            
            detailsPoster.style.backgroundImage = `url(${parsedDetails.Poster})`
            getSel('.title-details').innerHTML = parsedDetails.Title;
            genre.innerHTML = `${parsedDetails.Rated},   ${parsedDetails.Year},   ${parsedDetails.Genre}`;
            plot.innerHTML = `${parsedDetails.Plot}`
            writer.innerHTML = `<b>Written by: </b>${parsedDetails.Writer}`
            director.innerHTML = `<b>Directed by: </b>${parsedDetails.Director}`
            actors.innerHTML = `<b>Starrings: </b>${parsedDetails.Actors}`
            boxOffice.innerHTML = `<b>Box Office: </b>${parsedDetails.BoxOffice}`
            awards.innerHTML = `<b>Awards: </b>${parsedDetails.Awards}`
            
            for(let i = 0; i < parsedDetails.Ratings.length; i++){
                ratings.innerHTML += `<br>${parsedDetails.Ratings[i].Source}  -  ${parsedDetails.Ratings[i].Value}`;
            };
        });
    };
    // for(let i = 0; i < parsedRes.Search.length; i++){
    //     // main
    //     let mainDiv = document.createElement('div');
    //     mainDiv.classList.add('container-movie');
    //     contRes.appendChild(mainDiv);
    //     // poster
    //     let divPoster = document.createElement('div');
    //     divPoster.classList.add('container-movie__poster');
    //     divPoster.style.backgroundImage = `url(${parsedRes.Search[i].Poster})`
    //     mainDiv.appendChild(divPoster);
    //     // title
    //     let divTitle = document.createElement('div');
    //     divTitle.classList.add('container-movie__title');
    //     divTitle.innerHTML = parsedRes.Search[i].Title;
    //     mainDiv.appendChild(divTitle);
    //     //  Date
    //     let divDate = document.createElement('div');
    //     divDate.classList.add('container-movie__date');
    //     divDate.innerHTML = parsedRes.Search[i].Year;
    //     mainDiv.appendChild(divDate);
    //     // btn-more
    //     let btnMore = document.createElement('button');
    //     btnMore.classList.add('container-movie__btn-more');
    //     btnMore.innerHTML = 'more details';
    //     mainDiv.appendChild(btnMore)
    //     // more details
    //     btnMore.addEventListener('click',function(){            
    //         contMoreDetail.style.display = 'flex';
    //         let xmlDetails = new XMLHttpRequest();
    //         xmlDetails.open('GET',`http://www.omdbapi.com/?i=${parsedRes.Search[i].imdbID}&page=1&apikey=23a8b660`,false)
    //         xmlDetails.send();
    //         const respDetails = xmlDetails.responseText;
    //         const parsedDetails = JSON.parse(respDetails);
    //         console.log(parsedDetails)
            
    //         detailsPoster.style.backgroundImage = `url(${parsedDetails.Poster})`
    //         getSel('.title-details').innerHTML = parsedDetails.Title;
    //         genre.innerHTML = `${parsedDetails.Rated},   ${parsedDetails.Year},   ${parsedDetails.Genre}`;
    //         plot.innerHTML = `${parsedDetails.Plot}`
    //         writer.innerHTML = `<b>Written by: </b>${parsedDetails.Writer}`
    //         director.innerHTML = `<b>Directed by: </b>${parsedDetails.Director}`
    //         actors.innerHTML = `<b>Starrings: </b>${parsedDetails.Actors}`
    //         boxOffice.innerHTML = `<b>Box Office: </b>${parsedDetails.BoxOffice}`
    //         awards.innerHTML = `<b>Awards: </b>${parsedDetails.Awards}`
            
    //         for(let i = 0; i < parsedDetails.Ratings.length; i++){
    //             ratings.innerHTML += `<br>${parsedDetails.Ratings[i].Source}  -  ${parsedDetails.Ratings[i].Value}`;
    //         };
    //     });
    // };
};

contMoreDetail.addEventListener('click',function(){
    contMoreDetail.style.display = 'none';
});



