<template>
  <div class="movie__details">
    <div class="movie__title">
      {{ details.title | truncate(30, '...') }}
    </div>
    <div>
      <span class="movie__age">{{details.age}}+</span><span class="movie__seasons">{{details.seasonsQty}} seasons</span>
    </div>
    <div class="movie__genre">
      {{ details.genres | listGenres() }}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MovieDetails',
    props: ['details'],
    filters: {
      truncate: function (text, length, suffix) {
        return text.length > length ? (text.substring(0, length) + suffix) : text
      },
      listGenres: function (genres) {
        return genres.join(' * ')
      }
    }
  }
</script>
<style scoped>
  .movie__details {
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    font-size: 10px;
    opacity: 0;
    margin-left: -1px;
    transition: 450ms opacity;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
  }
  .movie__details:after,
  .movie__details:before {
    content: '';
    position: absolute;
    bottom: 41%;
    left: 4%;
    display: #000;
    text-align: left;
  }
  .movie__details:after {
    width: 20px;
    height: 20px;
    border: 1px solid #ecf0f1;
    line-height: 50px;
    border-radius: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1;
  }
  .movie__details:before {
    content: '▶';
    /*left: 0;*/
    width: 100%;
    font-size: 11px;
    margin-left: 8px;
    margin-bottom: 3px;
    z-index: 2;
    color: #e50914;
  }
  .movie:hover .movie__details {
    opacity: 1;
  }
  .movie:hover .movie__img {
    opacity: 0;
  }
  .movie__title {
    position: absolute;
    bottom: 27%;
    padding: 10px;
    color: white;
    font-weight: bold;
    font-size: 13px;
  }
  .movie__age {
    display: inline-block;
    position: absolute;
    bottom: 23%;
    padding: 0 2px;
    color: white;
    font-weight: bold;
    border: 1px solid grey;
    left: 7%;
    font-size: 10px;
  }
  .movie__seasons {
    display: inline-block;
    position: absolute;
    bottom: 23%;
    padding: 1px 2px;
    color: white;
    font-weight: bold;
    left: 20%;
    font-size: 10px;
  }
  .movie__genre {
    position: absolute;
    bottom: 14%;
    padding: 0px 2px;
    color: white;
    font-weight: bold;
    left: 3%;
    font-size: 10px;
  }
  .row__inner:hover .movie:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 1;
  }
</style>
