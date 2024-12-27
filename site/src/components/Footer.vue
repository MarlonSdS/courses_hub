<template>
    <footer>
        <div class="container py-4">
            <div class="row py-5">
            <div class="col-sm-6 order-sm-1 col-lg-3 order-1 mb-4 mb-sm-0">
                <RouterLink  to="/">
                    <img class="logo" src="../assets/logo_portal.png" alt="logo ineves" />
                </RouterLink >
            </div>
            <div class="col-sm-6 order-sm-2 col-lg-3 order-3">
                <nav>
                <ul>
                    <li>
                    <RouterLink  to="/categories">Categories</RouterLink >
                    </li>
                    <li>
                    <RouterLink to="/courses">Courses</RouterLink >
                    </li>
                    <li>
                    <RouterLink to="/about">About us</RouterLink >
                    </li>
                </ul>
                </nav>
            </div>
            <div class="col-sm-6 order-sm-3 col-lg-3 order-2">
                <nav>
                <ul>
                    <li>
                    <RouterLink to="/privacy">Privacy policy</RouterLink >
                    </li>
                    <li>
                    <RouterLink  to="/terms">User terms</RouterLink >
                    </li>
                    <li>
                    <RouterLink  to="/autenticate">Autenticate certificate</RouterLink >
                    </li>
                </ul>
                </nav>
            </div>
            <div class="col-sm-6 order-sm-4 col-lg-3 order-4">
                <nav>
                <ul>
                    <li>
                    <RouterLink to="/help">Help center</RouterLink >
                    </li>
                    <li><RouterLink to="trust">Is this site trustable?</RouterLink ></li>
                </ul>
                </nav>
            </div>
            </div>
            <div class="row">
            <div class="col text-center">
                <p class="copyright">
                All rights reserved © 2025<br />
                COURSES HUB</p>
            </div>
            </div>
        </div>
    </footer>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    name: 'SiteFooter',
    components: {
        RouterLink
    }
}
</script>
<style>
    footer{
        background-color: dimgray;
        text-align: start;
        color: white;
    }

    footer .logo{
        height: 3rem;
        vertical-align: middle;
    }

    footer ul{
        list-style-type: none;
        padding: 0;
    }

    footer a{
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    footer .copyright{
        font-size: 0.8rem;
    }
</style>