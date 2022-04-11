<template>

    <!--SubHeading section starts-->
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
           <div class="px-5 container">
               <a class="navbar-brand" href="#">{{title}}</a>
           </div>
       </nav>
    <!--SubHeading section ends-->
    
</template>

<!--for js-->
<script>
export default {
    name: 'SubHeader',
    props: {
    title: String
  }
}
</script>

<!--for css-->
<style scoped>

</style>