<script setup lang="ts">;
import { ref } from 'vue';
import { lang } from '../Ilang';
import winlogo from '../assets/windows.ico';
import macoslogo from '../assets/macos.ico';
import linuxlogo from '../assets/linux.ico';

const downloadModalWindows = ref(false);
const props = defineProps<{ 
      lang: lang,
      os: string
}>();
function changeHash(str: string){
  window.location.hash = str;
}


function download(){
        downloadModalWindows.value = true;
}

</script>

<template>
    <div class="outer-div">
        <div class="blurred-background"></div>  
        <div class="inner-div" >
            <h1 style="font-size: 100px;">RB<a style="color: #A45DDC;">4</a>Launcher</h1> 
            <p style="text-align: left; font-size: 24px;" v-text="props.lang.description"></p>
            <div class="q-pa-xl q-gutter-xl">
<q-btn v-if="props.os === 'linux'" @click="download"> 
<div style="
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;">
    {{ props.lang.downFor }} Linux<q-img :src="linuxlogo" position="left bottom" 
      style="height: 50px; max-width: 50px"></q-img>
      </div>
    </q-btn>
    <q-btn v-else-if="props.os === 'macos'" @click="download"> 
        <div style="
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;">
        {{ props.lang.downFor }} MacOS<q-img :src="macoslogo" position="left bottom" 
      style="height: 50px; max-width: 50px"></q-img>
        </div>
    </q-btn>
    <q-btn outline size="xl" style="height: 100px;"  
        v-else @click="download"> 
        <div style="
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;">
        {{ props.lang.downFor }} Windows<q-img :src="winlogo" position="left bottom" 
      style="height: 50px; max-width: 50px"></q-img>
    </div>
    </q-btn>
    <q-btn outline size="xl" style="height: 100px; width: 100px;" @click="changeHash('download')"> 
        ...
    </q-btn>
    </div>
        </div>
    </div>
    <q-dialog v-model="downloadModalWindows">
        <q-card flat bordered class="my-card" :class="'bg-grey-9'">
            <q-card-section v-if="props.os === 'macOS'">
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6 text-white">{{ props.lang.downFor }} MacOS</div>
          </div>
        </div>
      </q-card-section><q-card-section v-else-if="props.os === 'Linux'">
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6 text-white">{{ props.lang.downFor }} Linux</div>
          </div>
        </div>
      </q-card-section><q-card-section v-else>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6 text-white"> {{ props.lang.downFor }} Windows</div>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="text-white">
        {{ props.lang.windowsDownload }}
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat class="text-white" :disable="true">{{ props.lang.download }}</q-btn>
        <q-btn flat class="text-white" @click="changeHash('download')">Other choices</q-btn>
      </q-card-actions>
    </q-card>
    </q-dialog>
 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>