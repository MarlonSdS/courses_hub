<template lang="">
    <div class="presentation">
        <div>
            <h1>Online courses made exclusively for educators.</h1>
            <router-link to="/courses" class="btn laranja">See courses</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Site-Home'
    }
</script>
<style>
    .presentation div{
        width: 50%;
        padding-top: 10%;
        padding-left: 4%;
        color: white;
    }

    .presentation h1{
        font-size: 3rem;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        text-align: start;
    }

    .presentation a{
        width: 20%;
    }
</style>