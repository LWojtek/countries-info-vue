<template>
    <div class="container">
            <div class="wrapper">
                <div>
                    <div class="icon__wrapper">
                        <i class="fas fa-7x fa-search"></i>
                    </div>
                    <div class="text__wrapper">
                        <p>No Results Found</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .dark-theme & {
           color: $dark-text;
        }

        @media (prefers-color-scheme: dark) {
           color: $dark-text
        }
    }
}

.icon__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 10rem;
    height: 10rem;

    border-radius: 1rem;
    margin-bottom: 3rem;

    i {
        .dark-theme & {
           color: $dark-text;
        }

        @media (prefers-color-scheme: dark) {
           color: $dark-text
        }
    }
}

.text__wrapper {
    text-align: center;

    p {
        font-size: 3rem;
    }
}

i {
    color: #000;
}

</style>