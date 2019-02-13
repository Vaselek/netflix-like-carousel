<template>
  <div class="contain">
    <h1>Netflix Like Carousel</h1>
    <div class="row">
      <div class="row__inner">
        <MovieItem
          v-for="movie in movies"
          v-bind:movie="movie"
          v-bind:key="movie.id" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem'
import {movieSeeds} from '../utilities'
export default {
  name: 'MovieCarousel',
  data () {
    return {
      movies: movieSeeds
    }
  },
  components: {
    MovieItem
  }
}

</script>

<style scoped>
  body,
  html {
    padding: 0 10px;
    margin: 0;
    background: #0e0f11;
    color: #ecf0f1;
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  * {
    box-sizing: border-box;
  }
  h1,
  p {
    text-align: center;
  }
  p {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
  a:link,
  a:hover,
  a:active,
  a:visited {
    transition: color 150ms;
    color: #95a5a6;
    text-decoration: none;
  }
  a:hover {
    color: #7f8c8d;
    text-decoration: underline;
  }
  .contain {
    width: 100%;
  }
  .row {
    overflow: scroll;
    width: 100%;
  }
  .row::-webkit-scrollbar {
    display: none;
  }
  .row__inner {
    transition: 450ms -webkit-transform;
    transition: 450ms transform;
    transition: 450ms transform, 450ms -webkit-transform;
    font-size: 0;
    white-space: nowrap;
    margin: 70.3125px 0;
    padding-bottom: 10px;
    margin-left: 60px;
  }
  .row__inner:hover {
    -webkit-transform: translate3d(-62.5px, 0, 0);
    transform: translate3d(-62.5px, 0, 0);
  }
</style>
