<template>
    <div class="container filters">
        <div class="filters__search">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#858585" fill-rule="nonzero"/></svg>
            <input 
                type="text" 
                placeholder="Search for a country..."
                v-model="search"
                @keyup="filterCountries"
                >
        </div>
        <div class="filters__dropdown">
            <div class="filters__select">
                <select @click="toggle" v-model="selectedArea" @change="filterCountries">
                    <option value="" selected>All</option>
                    <option 
                        v-for="(category, index) in filteringCategories"
                        :key="index"
                    >{{category}}</option>
                </select>
                <span class="custom__arrow">
                    <i class="fas fa-2x fa-chevron-down"></i>
                </span>
            </div>

        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

    export default {
        data(){
            return {
                active: false,
                search: '',
                selectedArea: '',
                
            }
        },
        computed:{
            ...mapState([
                'countries',
                'filteredCountries'
            ]),
            filteringCategories(){
                const uniqCountries = [... this.$store.state.countries.reduce(( map, obj ) =>
                map.set(obj.region, obj), new Map()).values() ];
                
                let categories = []

                for (let i = 0; i < uniqCountries.length; i++) {
                    const element = uniqCountries[i].region;
                    if (element !== '') {
                        categories.push(element)
                    }
                }
                   
                return categories;
            }
        },

        methods: {
            toggle(){
                if (this.active === false ) {
                    this.active = true;
                } else {
                    this.active = false;
                }
            },
            filterCountries(){
                this.$store.state.filteredCountries = this.countries.filter((country) => {
                    return country.name.toLowerCase().match(this.search.toLowerCase())
                    && country.region.toLowerCase().match(this.selectedArea.toLowerCase())
                })
            },
        },
    } 


</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.filters {
    padding: 5rem 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.filters__search {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-basis: 30%;
    min-width: 30rem;
    padding: 1rem;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.10);
    height: 5.8rem;


    
    .dark-theme & {
        background-color: $dark-blue;
    }

    @media (prefers-color-scheme: dark) {
        background-color: $dark-blue;    
    }


    @media screen and (max-width: 767px) {
        flex-basis: 100%;
        margin-bottom: 5rem;
    }
    
    input {
        height: 3rem;
        flex-basis: 90%;

        outline: none;
        border: none;
        font-size: 1.6rem;
        font-family: 'Nunito Sans', sans-serif;
        letter-spacing: 1px;

            .dark-theme & {
                background-color: $dark-blue;
                color: $dark-text;
            }

            @media (prefers-color-scheme: dark) {
                background-color: $dark-blue;
                color: $dark-text;
            }

        &::placeholder {
            .dark-theme & {
                color: $dark-text;
            }

            @media (prefers-color-scheme: dark) {
                color: $dark-text;
            }

        }

    }

    svg path {
        .dark-theme & {
            fill: $dark-text;
        }

        @media (prefers-color-scheme: dark) {
            fill: $dark-text;
        }
    }
}

.filters__dropdown {
    position: relative;
    flex-basis: 30%;
    padding: 1rem 0;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.10);
    height: 5.8rem;
    min-width: 30rem;

    .dark-theme & {
        background-color: $dark-blue;
    }

    @media (prefers-color-scheme: dark) {
        background-color: $dark-blue; 
    }

}

select {
    position: relative;
    width: 100%;

    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.6rem;
    color: rgba(0,0,0, 0.75);
    
    padding: 0.8rem 1.2rem 0.8rem 2rem;
    outline: none;
    border: none;
    cursor: pointer;

    appearance: none;
    box-shadow: none;

    letter-spacing: 1px;

    .dark-theme & {
        background-color: $dark-blue;
        color: $dark-text;
    }

    @media (prefers-color-scheme: dark) {
        background-color: $dark-blue;
        color: $dark-text;
    }
}

select * {
    font-family: 'Nunito Sans', sans-serif;
}

.custom__arrow {
    position: absolute;
    top: 0;
    right: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
    height: 100%;
    width: 5rem;
    pointer-events: none;
    padding: 1rem;

    .dark-theme & {
        background-color: $dark-blue;
    }

    @media (prefers-color-scheme: dark) {
        background-color: $dark-blue;    
    }

    i {
        .dark-theme & {
           color: $dark-text;
        }

        @media (prefers-color-scheme: dark) {
           color: $dark-text;    
        }
    }
}

</style>