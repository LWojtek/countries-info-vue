<template>
    <div class="container country">
        <div class="button__wrapper">
            <router-link to="/">
            <button>
                <i class="fas fa-arrow-left"></i>
                Back
            </button>
            </router-link>
        </div>
        <div class="country__wrapper">
            <div class="country__wrapper--left">
                <img :src="currentCountry[0].flag" alt="">
            </div>
            <div class="country__wrapper--right">
                <h2>{{currentCountry[0].name}}</h2>
                <div class="wrap">
                    <div class="country__right--body">
                        <div>
                            <p>Native Name: <span>{{currentCountry[0].nativeName}}</span></p>
                            <p>Population: <span>{{currentCountry[0].population}}</span></p>
                            <p v-if="currentCountry[0].region">Region: <span>{{currentCountry[0].region}}</span></p>
                            <p v-if="currentCountry[0].subregion">Sub Region: <span>{{currentCountry[0].subregion}}</span></p>
                            <p v-if="currentCountry[0].capital">Capital: <span>{{currentCountry[0].capital}}</span></p>
                        </div>            
                        <div>
                            <p>Top Level Domain: <span>{{currentCountry[0].topLevelDomain[0]}}</span></p>
                            <p>Currencies: <span 
                                v-for="(currency,index) in currentCountry[0].currencies" 
                                :key="index">
                                {{currency.name}}
                                </span></p>
                            <p>Languages: <span 
                                v-for="(language, index) in currentCountry[0].languages"
                                :key="index">
                                {{language.name}}
                                </span></p>
                        </div>            
                    </div>
                    <div class="country__right--footer" v-if="currentCountry[0].borders && currentCountry[0].borders.length > 0">
                        <p class="borders">Border Countries: </p>
                        <div v-if="currentCountry[0].borders">
                            <p class="border" v-for="(country, index) in currentCountry[0].borders" :key="index">{{country}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

    export default {
        data(){
            return {
                 id: this.$route.params.country,
            }
        },
        computed: {
            ...mapState([
                'countries'
            ]),
            currentCountry(){
                return this.countries.filter(country => {
                    return country.name === this.id
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.country {
    padding: 6rem 3rem;
    
    
    .dark-theme & {
        background-color: $very-dark-blue;
    }

    @media (prefers-color-scheme: dark) {
        background-color: $very-dark-blue;
    }
}

.button__wrapper {
    padding: 0rem 0 6rem;

    button {        
    padding: 1.5rem 4.5rem;    
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.10);
    transition: box-shadow 250ms;
    font-size: 1.6rem;

    
    .dark-theme &{
        background-color: $dark-blue;
        color: $dark-text;
    }

    @media (prefers-color-scheme: dark) {
        background-color: $dark-blue;
        color: $dark-text;
    }

        outline:none;
        border: none;
        cursor: pointer;

        i {
            transform: scale(1.2);
            margin-right: 1.3rem;
        }

        &:hover {
            box-shadow: 0 5px 10px rgba(0,0,0,.1);
        }

    }
}

.country__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

        
    .dark-theme &{
        color: $dark-text;
    }

    @media (prefers-color-scheme: dark) {
        color: $dark-text;
    }

    &--left {
        flex-basis: 50%;
        
        img {
            max-width: 600px;
        }
    }

    &--right {
        flex-basis: 45%;
        padding: 3rem 0;

    }

    h2 {
        font-size: 3.2rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 3.2rem;

        span {
            font-weight: normal;
        }
    }
}

.wrap {
    height: 100%;
    display: flex;
    flex-direction: column;


}

.country__right--body {
    display:flex;
    padding-bottom: 3rem;


    >div {
        flex-basis: 45%;
        &:nth-of-type(2) {
            margin-left: 10%;
        }
    }
}

.country__right--footer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    // width: 80%;

    >div {
        flex-basis: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 -0.5rem;
    }

    .borders {
        margin-bottom: 2rem;
    }

    .border { 
        margin: 0 0.5rem 1rem 0.5rem;
        font-weight: 300;
        padding: 0 2rem;
        box-shadow: 0 0 4px 2px rgba(202, 212, 241, 0.336);
        border-radius: 1rem;
        display: inline;
        flex-basis: 12%;
        text-align: center;

            
        .dark-theme &{
            box-shadow: 0 0 4px 2px rgba(0,0,0, 0.1);
        }

        @media (prefers-color-scheme: dark) {
            box-shadow: 0 0 4px 2px rgba(0,0,0, 0.336);
        }
    }

}


</style>