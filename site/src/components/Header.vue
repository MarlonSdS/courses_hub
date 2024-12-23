<template>
    <header>
        <img src="../assets/logo_portal.png" alt="Courses Hub">
        <form action="">
            <input type="text" name="search" id="search" placeholder="Search for courses">
            <button type="submit">
                <Magnify/>
            </button>
        </form>
    </header>
</template>

<script>
    import Magnify from 'vue-material-design-icons/Magnify.vue';
    export default {
        name: 'SiteHeader',
        components: {
            Magnify
        }
    }
</script>

<style>
    *{
        margin: 0;
    }
    header{
        background-color: rgb(71, 190, 160);
        display: flex;
        padding: 10px;
        color: white;
        box-shadow: 5px 5px 20px grey;
    }

    header img{
        width: 15%;
        
    }

    form{
        width: 15%;
        height: 30px;
        position: relative;
        background-color: white;
        border-radius: 20px;
    }

    form input{
        border: none;
        width: 80%;
        height: 90%;
        left: 0;
    }

    form input:focus{
        border: none;
        outline: none;
    }
    
    form button{
        position: absolute;
        right: 5%;
        top: 2%;
        width: 12%;
        height: auto;
        max-height: 100%;
        border-radius: 50%;
        background-color: rgb(71, 190, 160);
        color: white;
        border: none;
    }

</style>