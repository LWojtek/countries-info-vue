<template>
    <div class="container flex">
        <div class="loader"></div>
    </div>
</template>



<style lang="scss" scoped>

@import '@/assets/scss/variables.scss';

.flex {
    transform: translateY(10rem);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
    
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: rgb(112, 112, 112); 
  background: -moz-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
  background: -webkit-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
  background: -o-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
  background: -ms-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
  background: linear-gradient(to right, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
  position: relative;
  -webkit-animation: load3 500ms infinite linear;
  animation: load3 500ms infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

    .dark-theme & {
        background: rgb(112, 112, 112); 
        background: -moz-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
        background: -webkit-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
        background: -o-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
        background: -ms-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
        background: linear-gradient(to right, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
  }

  @media (prefers-color-scheme: dark) {
        background: rgb(112, 112, 112); 
        background: -moz-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
        background: -webkit-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
        background: -o-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
        background: -ms-linear-gradient(left, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
        background: linear-gradient(to right, rgb(112, 112, 112) 10%, rgba(171,171,171, 0) 42%);
  }
}
.loader:before {
  width: 50%;
  height: 50%;
  background: rgb(112, 112, 112);
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: $very-light-grey;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .dark-theme & {
    background: $very-dark-blue;      
  }

  @media (prefers-color-scheme: dark) {
    background: $very-dark-blue;
  }
  


}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


</style>