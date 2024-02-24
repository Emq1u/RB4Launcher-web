<script setup lang="ts">
import { ref } from 'vue';
import { lang } from '../Ilang';

const props = defineProps<{ 
      lang: lang,
}>();
const images = ref();
const slide = ref('./src/assets/screenshots/0.png');
images.value = [
          {
            src: './src/assets/screenshots/0.png',
            caption: props.lang.screen0
          },
          {
            src: './src/assets/screenshots/1.png',
            caption: props.lang.screen1
          },
          {
            src: './src/assets/screenshots/2.png',
            caption: props.lang.screen2
          },
          {
            src: './src/assets/screenshots/3.png',
            caption: props.lang.screen3
          },
          {
            src: './src/assets/screenshots/4.png',
            caption: props.lang.screen4
          },
          {
            src: './src/assets/screenshots/5.png',
            caption: props.lang.screen5
          },
          {
            src: './src/assets/screenshots/6.png',
            caption: props.lang.screen6
          },
          {
            src: './src/assets/screenshots/7.png',
            caption: props.lang.screen7
          },
          {
            src: './src/assets/screenshots/8.png',
            caption: props.lang.screen8
          },
        ]   
</script>

<template>
    <div class="content">
      <q-carousel
        arrows
        :autoplay="10000"
        navigation
        infinite
        v-model="slide"
        swipeable
        animated
        control-color="white"
        navigation-icon="radio_button_unchecked"
        padding
        transition-prev="jump-right"
        transition-next="jump-left" class="text-white shadow-box shadow-20 rounded-borders absolute-center"
        style="width: 100%; height: 80%; top: 45%">
        <q-carousel-slide v-for="item in images"
        :name="item.src"
        :img-src="item.src"> 
        <div class="absolute-bottom custom-caption"> 
          <div class="text-h2">
            {{ item.caption }}</div>
            <div class="text-subtitle1" style="visibility: hidden;"> .
            . </div>
          </div>

        </q-carousel-slide>
      </q-carousel>

</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>