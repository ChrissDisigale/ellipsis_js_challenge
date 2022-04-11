<template>
<div>
    <SubHeader title="Movies"/>
    <!--Main section starts-->
    <div class="d-md-flex container mx-lg-5">
        <div class="row mr-5">
           <div v-for="movie in movies" :key="movie.title" class="col-md-3 mb-3">
              <div v-if="movie.programType==='movie'" class="card">
              <img class="card-img-top" :src="movie.images.posterArt.url" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title">{{movie.title}}</h5>
              </div>
              </div>
           </div>
        </div>
    </div>
    <!--Main section ends-->
</div>
</template>
<script>
import sampleData from "../../public/sample.json"
import SubHeader from "./SubHeader.vue"
export default {
    name: 'Movie',
    components:{SubHeader},
    data() {
    return {
      movies: sampleData,
    };
  }
}
</script>
<style scoped>

</style>