<template>

    <div class="header">
    
    <div class="jumbotron jumbo_text">
        
        <h1 class="display-4" id="title">Expenses Tracker</h1>
        <p class="lead text-center font-weight-bold text-muted">Use this app to track your daily expenses.</p>
    </div>
    
    </div>
    
</template>

<script>
export default {
    name: 'Header'
    

}
</script>

<style scoped>
.jumbotron {
    background-image: url('../assets/header-image.jpg');
    background-position: center;
    background-size: cover;
    opacity: 0.5;
}

#title {
font-weight: 500;
color: rgb(173, 155, 155);
}

</style>