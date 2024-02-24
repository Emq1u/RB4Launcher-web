<script setup lang="ts">
import { lang } from '../Ilang';
import { ref } from 'vue';
import winlogo from '../assets/windows.ico';
import macoslogo from '../assets/macos.ico';
import linuxlogo from '../assets/linux.ico';

defineProps<{ lang: lang }>()
const downloadModalLinux = ref(false);
const downloadModalMacOS = ref(false);  
const downloadModalWindows = ref(false);

function download(os: string){
switch(os){
    case "linux":
        downloadModalLinux.value = true;
    break;
    case "macos":
        downloadModalMacOS.value = true;
    break;
    default:
        downloadModalWindows.value = true;

    }
}
</script>

<template>
  <div class="content">
    <div class="blurred-background2"></div>
<q-list
        padding no-scroll class="q-pa-xl" style="  
        align-items: stretch;
    height: 80%;
    display: flex;
    position: relative;
    font-size: 24px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-evenly;">
      <q-expansion-item
        group="somegroup"
        default-opened
        style="background-color: #3C3C3C;"
      >
      <template v-slot:header>
          <q-item-section avatar 
        class="text-white"
        
        label="">
        <div style="
            width: 200px;
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;">
           <a>Windows</a><q-img :src="winlogo" position="left bottom" 
      style="height: 50px; width: 50px"></q-img></div>
          </q-item-section>
        </template>
        <q-card class="card-content text-white"  style="background:none;">
          <q-card-section v-text="$props.lang.windowsDownload">
          </q-card-section>
          <q-card-section>
            
    <q-btn outline size="xl" style="height: 100px;"  
         @click="download('win')"> 
        <div style="
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;">
        {{ $props.lang.downFor }} Windows<q-img :src="winlogo" position="left bottom" 
      style="height: 50px; max-width: 50px"></q-img>
    </div>
    </q-btn>
          </q-card-section>
        </q-card> 
      </q-expansion-item>


      <q-expansion-item group="somegroup"
        class="text-white"
        style="background-color: #3C3C3C;"
        >
        <template v-slot:header>
          <q-item-section avatar 
        class="text-white"
        
        label="">
        <div style="
            width: 200px;
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;">
           <a>MacOS</a><q-img :src="macoslogo" position="left bottom" 
      style="height: 50px; width: 50px"></q-img></div>
          </q-item-section>
        </template>
        <q-card class="card-content" style="background:none;">
          <q-card-section v-text="$props.lang.macosDownload">
          </q-card-section>
          <q-card-section>
            
    <q-btn outline size="xl" style="height: 100px;"  
         @click="download('win')"> 
        <div style="
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;">
        {{ $props.lang.downFor }} MacOS<q-img :src="macoslogo" position="left bottom" 
      style="height: 50px; max-width: 50px"></q-img>
    </div>
    </q-btn>
          </q-card-section>
        </q-card> 
      </q-expansion-item>


      <q-expansion-item group="somegroup"
        label="Linux"
        class="text-white"
        style="background-color: #3C3C3C;"> 
        <template v-slot:header>
          <q-item-section avatar 
        class="text-white"
        
        label="">
        <div style="
            width: 200px;
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;">
           <a>Linux</a><q-img :src="linuxlogo" position="left bottom" 
      style="height: 50px; width: 50px"></q-img></div>
          </q-item-section>
        </template>
        <q-card class="card-content" style="background:none;">
          <q-card-section v-text="$props.lang.linuxDownload">
          </q-card-section>
          <q-card-section>
            
    <q-btn outline size="xl" style="height: 100px;"  
         @click="download('win')"> 
        <div style="
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;">
        {{ $props.lang.downFor }} Linux<q-img :src="linuxlogo" position="left bottom" 
      style="height: 50px; max-width: 50px"></q-img>
    </div>
    </q-btn>
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
  </div>
</template>

<style scoped>

</style>