<template>
    <header>
        <div class="container flex">
            <h1>Where in the world?...</h1>
            <div class="switch">
                <input type="checkbox" class="switch__input" id="Switch"  v-model="darkmode">
                <label class="switch__label" for="Switch">
                    <span class="switch__indicator"></span>
                    <span class="switch__decoration"></span>
                </label>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'VHeader',
        data(){
            return {
                darkmode: false,
            }
        },
        watch: {
            darkmode(newVal){
                this.bus.$emit('darkmode', newVal);
            }
        }, 
        created () {
            this.bus.$on('darkmode', (on) => {
            this.darkmode = on;
            });
        },
    }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

    header {
    background-color: #fff;
    min-width: 100vw;
    box-shadow: 0 2px 6px 0 rgba(0,0,0, 0.1);

    .dark-theme & {
        background-color: $dark-blue;
        color: $dark-text;
    }

    @media (prefers-color-scheme: dark) {
        background-color: $dark-blue;
        color: $dark-text;
    }

    }

    .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    }

  body {
  padding: 50px;
}

.switch {
    display: inline-block;
    position: relative;
}

.switch__input {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
}

.switch__label {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 60px;
    background-color: #8FB5F5;
    border: 5px solid #e7e7e7;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(.46,.03,.52,.96);
}

.switch__indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(72%);
    display: block;
    width: 40px;
    height: 40px;
    background-color: rgb(255, 217, 0);
    border-radius: 9999px;
    box-shadow: 0 0 4px 1px #ffee00;


    &::before,
    &::after {
        display: none;
    }
}

.switch__decoration {
        position: absolute;
        top: 65%;
        left: 50%;
        display: block;
        background-color: white;
        top: 50%;
        transform: translate(0%, -50%);
        animation: cloud 8s linear infinite;
        width: 20px;
        height: 20px;

        
        &::before,
        &::after {
            position: absolute;
            display: block;
            content: '';
            width: 3px;
            height: 3px;
            background-color: #FFFFFF;
            border-radius: 9999px;
        }


        &::before {
            width: 10px;
            height: 10px;
            top: auto;
            bottom: 0;
            left: -10px;
            animation: none;
        }

        &::after {
            width: 15px;
            height: 15px;
            top: auto;
            bottom: 0;
            left: 16px;
            animation: none;
        }

        &,
        &::before,
        &::after {
            border-radius: 9999px 9999px 0 0;
        }

        &::after {
            border-bottom-right-radius: 9999px;
        }
    }



@keyframes twinkle {
    50% { opacity: 0.6; }
}

.switch__indicator {
    &,
    &::before,
    &::after {
        transition: all 0.4s cubic-bezier(.46,.03,.52,.96);
    }
}

.switch__input:checked + .switch__label {
    background-color:  #2B2B2B;
    border: 5px solid #5B5B5B;

    .dark-theme & {
        border-color: $very-dark-blue;
    }

    @media (prefers-color-scheme: dark) {
        border-colo: $very-dark-blue;
    }
    

    .switch__indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) translateX(-72%);
        display: block;
        width: 40px;
        height: 40px;
        background-color: rgba(#ffffff, 0.1);
        box-shadow: 13px 0px 0 0 rgba(#ffffff, 1) inset;

    }




    .switch__decoration {
        position: absolute;
        top: 65%;
        left: 50%;
        display: block;
        width: 2px;
        height: 2px;
        background-color: #FFFFFF;
        border-radius: 9999px;
        animation: twinkle 1.5s infinite -0.8s;

        &::before,
        &::after {
            position: absolute;
            display: block;
            content: '';
            width: 3px;
            height: 3px;
            background-color: #FFFFFF;
            border-radius: 9999px;
        }

        &::before {
            top: -20px;
            left: 10px;
            opacity: 1;
            animation: twinkle 1.5s infinite 0.2s;
        }

        &::after {
            top: -7px;
            left: 30px;
            animation: twinkle 1.5s infinite -0.4s;
        }
    }
}

@keyframes cloud {
    0% {
        transform: translate(0%, -50%);
    }
    50% {
        transform: translate(-50%, -50%);
    }
    100% {
        transform: translate(0%, -50%);
    }
}

</style>