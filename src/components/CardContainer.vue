<template>
  <ul class="flex items-end justify-center gap-5 h-full grow " >
    <li v-for="card in cards">
      <card
        :card-config="card"
      />
    </li>
  </ul>
</template>

<script setup>
import Card from "../components/Card.vue";

const props = defineProps({
  cards:{
    type: Array,
    required: true
  }
})
</script>

<style>
.card {
   width: 200px;
   height: 300px;
   position: relative;
   perspective: 1000px;
   cursor: pointer;
   transition: all 0.3s ease-in-out;
 }
.card.active {
  position: absolute;
  top: calc(50% - 300px);
  left: calc(50% - 100px);
  animation: card-anim 0.5s ease-out forwards;
}
.card .flipper {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.card .front, .card .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.card .front {
  padding: 20px;
  box-sizing: border-box;
  transform: rotateY(0deg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid black;
  border-radius: 5px;
}
.card .back {
  padding: 20px;
  box-sizing: border-box;
  transform: rotateY(-180deg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.card.flipped .flipper {
  transform: rotateY(-180deg);
}
@keyframes card-anim {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@media (max-width: 575px) {
  .card {
    width: 100px;
    height: 150px;
  }
  .card.active {
    top: calc(50% - 100px);
    left: calc(50% - 60px);
  }
}

</style>
