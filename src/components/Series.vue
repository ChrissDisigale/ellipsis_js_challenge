<template>
<div>
    <SubHeader title="Series"/>
    <!--Main section starts-->
    <div class="d-md-flex container mx-lg-5">
        <div class="row mr-5">
           <template v-for="series in series" :key="series.title">
              <div v-if="series.programType==='series'" class="card col-md-3 mb-3">
              <img class="card-img-top" :src="series.images.posterArt.url" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title">{{series.title}}</h5>
              </div>
              </div>
           </template>
        </div>
    </div>
    <!--Main section ends-->
</div>
</template>
<script>
import sampleData from "../../public/sample.json"
import SubHeader from "./SubHeader.vue"
export default {
    name: 'Series',
    components:{SubHeader},
    data() {
    return {
      series: sampleData,
    };
  }
}
</script>
<style scoped>

</style>