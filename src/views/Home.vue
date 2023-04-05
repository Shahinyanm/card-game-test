<template>
  <div class="min-h-screen pb-16 flex flex-col items-center gap-10">
    <button class="w-24 cursor-pointer text-white p-2 border-solid rounded-lg border-2 border-indigo-600 mt-10" @click="flip(1)">Click me</button>
    <card-container :cards="cards" />
  </div>
</template>


<script setup>
import { ref } from 'vue';
import CardContainer from '@/components/CardContainer.vue';

const cards = ref([
  {
    name: 'bg-ace',
    isFlipped: true,
    isActive: false
  },
  {
    name: 'bg-joker',
    isFlipped: true,
    isActive: false
  },
  {
    name: 'bg-ace-king',
    isFlipped: true,
    isActive: false
  }
]);

const flip = (idx) => {
  if (cards.value[idx].isActive) {
    return;
  }
  cards.value[idx].isFlipped = !cards.value[idx].isFlipped;
  cards.value[idx].isActive = true;
};

</script>