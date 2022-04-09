<template>
  <div class="container">
    <!--Header section-->
    <Header/>
    <!--Home section-->

    <!--Popular section-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="px-5 container">
    <a class="navbar-brand" href="#">Popular Titles</a>
    </div>
    </nav>
    <!--Popular section ends-->

    <Home/>
    <!--Footer section-->
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home  from './components/Home.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style scoped>

</style>
