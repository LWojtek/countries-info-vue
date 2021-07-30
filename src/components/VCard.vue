<template>
    <router-link :to="`/${country.name}`" style="text-decoration: none; color: inherit">

    <li class="card">
        <div class="card__img">
            <img :src="country.flag" alt="">
        </div>
        <div class="card__body">
            <h2>{{ country.name }}</h2>
            <div class="text">
                <p>Population: <span>{{ country.population }}</span></p>
                <p>Region: <span>{{ country.region }}</span></p>
                <p>Capital: <span>{{ country.capital }}</span></p>
            </div>
        </div>
    </li>

    </router-link>
</template>

<script>
    export default {
        name: 'VCard',
        props: [
            'country'
        ]
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.card {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.20);
    cursor: pointer;
    transition: box-shadow 250ms; 
    margin: 0 3rem 6rem 3rem;
    max-width: 30rem;
    max-height: 40rem;
    overflow: hidden;

    .dark-theme & {
        background-color: $dark-blue;
        color: $dark-text;
    }

    @media (prefers-color-scheme: dark) {
        background-color: $dark-blue;    
        color: $dark-text;
    }

    &:hover {
          box-shadow: 0 8px 15px 0 rgba(0,0,0, 0.20);
    }

    h2 {
        font-size: 1.8rem;
        // margin: 2rem 0;
    }

    p {
        font-weight: 600;
        font-size: 1.4rem;
        margin: 0.5rem 0;

        span {
            font-weight: normal;
        }
    }
}

.card__body {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 4rem;
    min-height: 20rem;
}

.card__img::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255, 0);
    transition: 250ms;
}

.card:hover > .card__img::after{
    background-color: rgba(255,255,255, 0.2);
}

.card__img {
    max-height: 20.1rem;
    border-bottom: 1px solid rgba(0,0,0, .2);
    overflow: hidden;
    position: relative;
}

.card__img img {
    transition: 250ms;
    width: 30rem;
    min-height: 20rem;
    max-height: 20rem;
}

.text {
    margin-top: auto;
}

</style>