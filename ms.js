const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzRiYTFiZTljMWM0YzdhZGI2N2ZhMjEzY2YyN2MzMCIsInN1YiI6IjY2MmEwM2Y4OGZkZGE5MDExY2RjZDM1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aFwI9AajUE9ZVmUbTs1RLCc3dlm_Vypd49LqOMLyXqA'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

let el = document.getElementById("card");
let mid = () => { alert(`영화 ID : ${id}`)};
el.onclick = mid;

// let row = doc.data();
// console.log(row);

// let poster_path = row['poster_path']
// let elem.title = row['elem.title']
// let vote_average = row['vote_average']
// let elem.overview = row['elem.overview']
// let id = row['id']

// let temp_html = '
// <div class="card" id="card">
// <img src="${poster_path}" alt="movieimg" />
//             <div class="movietext">
//                 <h2>${elem.title}</h2>
//                 <hr style="border: solid 1px white; width: 40%;">
//                 <h3>${vote_average}</h3>
//                 <p>${elem.overview}</p>
//             </div>
// </div> '