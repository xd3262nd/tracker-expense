<template>

    <div class="footer">
        

        <!-- Footer -->
        <footer class="page-footer">

        <!-- Footer Elements -->
        <div class="container">
            <div class="font-up-bold text-uppercase">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb indigo lighten-4">
                        <li class="breadcrumb-item"><router-link to="/"><strong>Main Page</strong></router-link></li>

                        <li class="breadcrumb-item"><router-link to="/Snapshot"><strong>Snapshot</strong></router-link></li>

                    </ol>

                </nav>

            </div>
            <p class="text-right credit p-2">Header image by 
                <a href="https://unsplash.com/photos/aGwT9nSiTWU">@kharp via Unsplash</a>
                
            </p>


            

        </div>
        <!-- Footer Elements -->

        

        </footer>
        <!-- Footer -->



    </div>

    

    
  
    
</template>

<script>
export default {
    name:'Footer'
    

}
</script>

<style scoped>


.footer{
    text-align: center;
    position:center;

}

.breadcrumb{
    background-color:lightgray;
    text-align: center;
}
li{
    text-align: center;
    display: inline;
    

}




</style>