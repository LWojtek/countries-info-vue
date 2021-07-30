<template>
    <div class="container content" ref="wrapper">
        <ul class="card__wrapper">
            <VCard 
                v-for="country in filteredCountries"
                :key="country.flag"
                :country="country"
            />
        </ul>
        <div class="button__wrapper">
            <div class="back__top">
                <!-- <span>Back to top</span> -->
                <i class="fas fa-3x fa-arrow-up"></i>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import VCard from '@/components/VCard.vue';


    export default {
        components: {
            VCard,
        
        },
        data() {
            return {
                showButton: true,
                lastScrollPosition: 0
            }
        },
        computed: {
            ...mapState([
                'countries',
                'filteredCountries'
            ]),
        }, 

    }
</script>



<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.content {
    padding: 5rem 3rem;
}

ul {
    list-style-type: none;
}

.card__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -3rem;
}

.button__wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    left: 50%;
    position: fixed;
    width: 50rem;
    height: 10rem;
    margin-left: -25.8rem;
    bottom: 3rem;
    transform: translate3d(0, 0, 0);
}

.button__wrapper.button--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.back__top {
    display: flex;
    align-items:center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 5rem;
    background-color: #8FB5F5;
    box-shadow: 0 8px 15px 0 rgba(0,0,0, 0.3);
    cursor: pointer;
    transition: opacity 250ms;
    opacity: 1;

    animation: pulsate linear 1750ms infinite;

    .dark-theme & {
        background-color: $very-dark-blue;
    }

    @media (prefers-color-scheme: dark) {
        background-color: $very-dark-blue;
    }


    &:hover {
        opacity: 0.8;
    }
}

i {
    color: rgba(241, 241, 241, 0.822)
}

span {
    font-size: 1.6rem;
    margin-right: 2.5rem;
}

@keyframes pulsate {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

</style>