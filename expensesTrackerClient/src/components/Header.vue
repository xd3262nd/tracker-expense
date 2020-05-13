<template>

    <div class="header">
    
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-4" id="title">Expenses Tracker</h1>
            <p class="lead font-weight-bold text-muted">Use this app to track your daily expenses.</p>
        </div>
    </div>
    
    </div>
    
</template>

<script>
export default {
    name: 'Header'
    

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Changa+One&family=Raleway&display=swap');
.jumbotron {
    background-image: url('../assets/header-image.png');
    background-position: center;
    background-size: cover;
    opacity:0.9;
}

p{
font-family: 'Raleway', sans-serif;
}

#title {
font-weight: 500;
color: rgb(173, 155, 155);
font-family: 'Changa One', cursive;
}

div.container, h1, p{
    margin: 20px;
    text-align: left;
    font-weight: bolder;
}

</style>