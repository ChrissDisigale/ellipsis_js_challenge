<template>
<div>
  <!--Nav section starts-->
     <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container px-5">
            <router-link to="/"><a class="navbar-brand ml-auto" href="#">DEMO Streaming</a></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
            </button>
         <div class="collapse navbar-collapse" id="navbarText">
            <ul class="ml-auto navbar-nav">
               <li class="nav-item active mr-3">
                  <a class="nav-link" href="#">Log in</a>
               </li>
               <li class="nav-item active">
                  <a class="nav-link btn btn-dark btn-sm" href="#">Start your free trial</a>
               </li>
            </ul>
         </div>
        </div>
     </nav>
  <!--Nav section ends-->
</div>

</template>
<script>
export default{
   name: 'Header'
}
</script>
<style scoped>

</style>