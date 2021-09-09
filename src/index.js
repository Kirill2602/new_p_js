import './style/style.css';
import { items } from './picArr.js';
import { music } from './audioArr.js';
import { videos } from './videoArr.js';

let item = document.getElementById('items');
let audio = document.getElementById('audio');
let video = document.getElementById('video');

items.forEach(e => item.innerHTML += `
<div class="card">
<p class="title">${e.title}</p>
<img class="img" src=${e.src}/>
</div>
`);

music.forEach(e => audio.innerHTML += `
<div class="card"><p class="title">${e.title}</p><audio class="audio img" controls src=${e.src}></audio>
`);

videos.forEach(e => video.innerHTML += `
<div class="card"><p class="title">${e.title}</p><video loop class="img" controls src=${e.src}></video>
`)
