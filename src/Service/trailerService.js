// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
// import { startLoader, stopLoader } from './loader';
// import Axios from 'axios';
import { fetchById } from '../service';

const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=Cars&key=AIzaSyCVJtDEpn2VDC8Gaxpc6gAfbCDhDbwjKfA&type=video

function getMoviesTrailer(movieTitle) {
  fetch(
    `${BASE_URL}/search?part=snippet&maxResults=1&q=${movieTitle}&key=AIzaSyCVJtDEpn2VDC8Gaxpc6gAfbCDhDbwjKfA&type=video`
  )
    .then(res => res.json())
    .catch(console.log);
}
export async function watchFilmTrailer(filmId) {
  try {
    const resultData = await fetchById(filmId);
    getMovieTitle(resultData.data);
  } catch (error) {
    console.log(error);
  }
}

function getMovieTitle(result) {
  const trailerTitle = result.title.replaceAll(' ', '+').concat('+trailer');
  onTrailerClick(trailerTitle);
}

async function onTrailerClick(movieTitle) {
  try {
    const youTubeQuery = await getMoviesTrailer(movieTitle);
    // startLoader();
    const youTubeData = youTubeQuery.items;
    const videoData = youTubeData[0].id.videoId;
    renderTrailer(videoData);
  } catch (eror) {
    console.log(eror);
  }
}

let instance;

function renderTrailer(videoId) {
  const markup = `<iframe class="trailer-container" width="420" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
  //   instance = basicLightbox.create(markup);
  //   stopLoader();
  //   instance.show();
}
