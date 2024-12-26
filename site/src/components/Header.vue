<template>
    <header>
        <img src="../assets/logo_portal.png" alt="Courses Hub" @click="goHome">
        <div class="section-buttons" :class="{'active': isActive}">
            <form action="">
                <input type="text" name="search" id="search" placeholder="Search for courses">
                <button type="submit">
                    <Magnify/>
                </button>
            </form>
            <a href="" class="link">Online courses</a>
            <a href="" class="login"><Account/>Login</a>
            <a href="" class="register">Register</a>
            <a href="" class="cart"><Cart/></a>
        </div>
        <button class="menu-button">
            <Menu class="menu" :size="48" @click="toggleMenu"/>
        </button>
    </header>
</template>

<script>
    import Magnify from 'vue-material-design-icons/Magnify.vue';
    import Account from 'vue-material-design-icons/Account.vue';
    import Cart from 'vue-material-design-icons/CartOutline.vue';
    import Menu from 'vue-material-design-icons/Menu.vue';
    export default {
        name: 'SiteHeader',
        components: {
            Magnify,
            Account,
            Cart,
            Menu
        },
        data() {
            return{
                isActive: false
            }
        },
        methods: {
            toggleMenu(){
                this.isActive = !this.isActive
            },
            goHome(){
                window.location.href='/'
            }
        }
    }
</script>

<style>
    *{
        margin: 0;
    }
    header{
        background-color: mediumaquamarine;
        display: flex;
        padding: 10px;
        color: white;
        box-shadow: 5px 5px 20px grey;
        display: flex;
        justify-content: space-around;
    }

    header img{
        width: 15%;
        cursor: pointer;
    }

    form{
        width: 30%;
        height: 30px;
        position: relative;
        background-color: white;
        border-radius: 20px;
        margin: auto;
    }

    form input{
        border: none;
        border-radius: 20px;
        height: 90%;
        left: 0;
    }

    form input:focus{
        border: none;
        outline: none;
    }
    
    form button{
        position: absolute;
        right: 1%;
        width: 12%;
        height: auto;
        max-height: 100%;
        border-radius: 50%;
        background-color: mediumaquamarine;
        color: white;
        border: none;
    }

    .section-buttons{
        display: flex;
        flex-direction: row;
        width: 50%;
        justify-content: space-around;
        align-content: center;
        align-items: center;
    }

    .section-buttons a{
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        align-content: center;
        align-items: center;
        padding: 6px;
        height: 40%;
        display: flex;
        border-radius: 20px;
        margin-left: 1%;
    }

    .section-buttons .login{
        border: 2px solid orangered;
    }

    .section-buttons .register{
        background-color: orangered;
    }

    .menu-button{
        display: none;
    }

    @media (max-width: 1280px){
        form button{
            right: 1%;
            width: 20%;
        }
    }

    @media (max-width: 768px){
        .section-buttons{
            position: fixed;
            z-index: 10;
            top: 0;
            right: 0;
            height: 100;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 15%;
            padding-bottom: 15%;
            transform: translateX(100%);
            transition: transform 0.3s ease; 
            background-color: mediumaquamarine;
            box-shadow: 5px 5px 20px grey;
        }

        .section-buttons.active{
            transform: translateX(0);
        }

        .section-buttons a{
            margin-top: 2vh;
        }

        .section-buttons form{
            width: 90%;
        }

        form button{
            width: 12%;
        }

        header{
            justify-content: space-between;
            z-index: 20;
            position: fixed;
            top: 0;
            right: 0;
        }

        header img{
            width: 40%;
        }

        .menu-button{
            display: block;
            background: none;
            border: none;
            color: white;
            position: relative;
            z-index: 21;
        }
        
    }
</style>