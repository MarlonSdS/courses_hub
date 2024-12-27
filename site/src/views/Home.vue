<template lang="">
    <div class="presentation">
        <div>
            <h1>Online courses made exclusively for educators.</h1>
            <router-link to="/courses" class="btn laranja">See courses</router-link>
        </div>
    </div>
    <section class="nossas-vantagens">
        <h2 class="text-center mb-5">Advantages to you</h2>
        <div class="container-md no-padding justify-content-center">
            <div class="row mr-0">
                <div class="d-flex col-12 col-md-4 text-center no-padding mb-4 align-items-center">
                    <div class="col-4 ">
                        <Cert :size="90"/>
                    </div>
                    <div class="col-8 no-padding my-auto">
                        <h1 class="text-green mb-1">Certification</h1>
                        <h2 style="font-size: 15.5px;font-weight: 400;text-align: left;height:40px;" class="adv-sub">Certificates with E-MEC seal</h2>
                    </div>
                </div>
                <div class="d-flex col-12 col-md-4 text-center no-padding mb-4 align-items-center">
                    <div class="col-4 ">
                        <Clock :size="90"/>
                    </div>
                    <div class="col-8 no-padding my-auto">
                        <h1 class="text-green mb-1">No schedule</h1>
                        <h2 style="font-size: 15.5px;font-weight: 400;text-align: left;height:40px;" class="adv-sub">Available 24 hours per day</h2>
                    </div>
                </div>
                <div class="d-flex col-12 col-md-4 text-center no-padding mb-4 align-items-center">
                    <div class="col-4">
                        <Usd :size="90"/>
                    </div>
                    <div class="col-8 no-padding my-auto">
                        <h1 class="text-green mb-1">Cost-beneffit</h1>
                        <h2 style="font-size: 15.5px;font-weight: 400;text-align: left;height:40px;" class="adv-sub">Leader in cost-beneffit</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="col-12 text-center d-flex justify-content-center mb-5">
        <router-link to="/courses" class="btn laranja">See courses</router-link>
    </div>
</template>
<script>
    import Cert from 'vue-material-design-icons/BadgeAccountHorizontalOutline.vue';
    import Clock from 'vue-material-design-icons/ClockOutline';
    import Usd from 'vue-material-design-icons/CurrencyUsd'
    export default {
        name: 'Site-Home',
        components: {
            Cert,
            Clock,
            Usd
        }
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

    @media (max-width: 768px){
        .presentation div{
            width: 100%;
            padding-top: 120%;
            padding-left: 2%;
        }

        .presentation h1{
            font-size: 2.5rem;
        }

        .presentation a{
            max-width: 38vw;
            width: 37%;
            margin-top: 5vh;
        }
    }
    .nossas-vantagens{
        color: mediumaquamarine;
        padding-top: 1vh;
    }

    .nossas-vantagens h2{
        font-size: 2.5rem;
        font-weight: bolder;
    }

    .nossas-vantagens h1{
        text-align: start;
        
    }

    .nossas-vantagens .adv-sub{
        color: darkgray;
        font-weight: bold !important;
    }

</style>