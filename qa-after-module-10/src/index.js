import './styles.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './images/pict1.webp';
import './images/pict2.jpg';
import './images/pict3.jpg';
import './images/pict4.jpg';
import './images/pict5.jpg';
import './images/pict6.jpg';
import media from './scripts/media';
import movieApi from './scripts/movieApi';
import heroList from './heroList.json';
import heroListTemplate from './templates/hero-list.hbs';

const bar = heroListTemplate(heroList);

const movieList = movieApi.fetchMovies();

const foozBar = value => {
  if(value % 15 === 0) return 'foozBaz' 
  if(value % 3 === 0) return 'fooz'
  if(value % 5 === 0) return 'Baz'

  return value
}

localStorage.setItem('user_list', JSON.stringify([
  {
    name: 'Alex',
    salary: 1000
  },
  {
    name: 'John',
    salary: 1000
  },
]))

const userList = JSON.parse(localStorage.getItem('user_list'));
userList.pop();
// console.log(zoro);

localStorage.setItem('user_list', JSON.stringify(userList))

const imageList = `
  <img class="image" loading="lazy" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" alt="">
  <img class="image" loading="lazy" src="https://subhamdey.files.wordpress.com/2011/06/nature-pict-2.jpg" alt="">
  <img class="image" loading="lazy" src="https://lh3.googleusercontent.com/proxy/EY-e_xTBRm7tKcNfjOAzgxc7wv4nEisEqcCCMoY3q3F3-EVtCa0I0sXQ2Wi8z-5qH-9B-KhM2W07M20qF-9CwHl1pKlsrqzLBAVbaGZZNTgDQPXTWD-Op24" alt="">
  <img class="image" loading="lazy" src="https://i.pinimg.com/originals/7b/d4/99/7bd4990aedaae8bb38bec8ddc07b5b11.jpg" alt="">
`

const checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('change', event => {
  const { target } = event;
  const { checked } = target;

  if(checked) console.log(target.value);
})