<template>
  <div class="movie" @mouseover="mouseOver" @mouseleave="mouseLeave" :key="movie.key">
    <div class="movie__media">
      <video ref="videoElem" class="movie__video" muted="true">
        <source :src="movie.videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <img class="movie__img" :src="movie.imgSrc" alt=""  />
    </div>
    <MovieDetails :details="movie.details"/>
  </div>
</template>
<script>
import MovieDetails from './MovieDetails'
export default {
  name: 'MovieItem',
  props: ['movie'],
  methods: {
    mouseOver: function () {
      this.$refs.videoElem.play()
    },
    mouseLeave: function() {
      this.$refs.videoElem.pause()
    }
  },
  components: {
    MovieDetails
  }
}
</script>
<style scoped>
.movie {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 200px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}
.movie__img {
  opacity: 1;
  width: 250px;
  height: 200px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.movie__media {
  position: relative;
  width: 249px;
  height: 200px;
}
.movie__video {
  width: 250px;
  height: 200px;
  /*-o-object-fit: cover;*/
  /*object-fit: cover;*/
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.movie:hover .movie__img {
  opacity: 0;
}
.movie:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  opacity: 1;
}
.row__inner:hover .movie:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  opacity: 1;
}
.movie:hover ~ .movie {
  -webkit-transform: translate3d(125px, 0, 0);
  transform: translate3d(125px, 0, 0);
}
</style>
