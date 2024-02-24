<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import logo from './assets/Home.png';
import HomeTab from './components/HomeTab.vue';
import ScreenshotsTab from './components/ScreenshotsTab.vue';
import DownloadTab from './components/DownloadTab.vue';
import languageMappings from './assets/lang.json';
const currentItem = ref("home");  
const curLang = ref();  
const curOs = ref();  
const langs = ref();
langs.value = [
  {code: "ua", title: "Ukrainian"},
  {code: "en", title: "English"}
];

window.addEventListener('hashchange', () => {
  currentItem.value = window.location.hash.substring(1);
})

onBeforeMount(() => {detectParams()});

function changeHash(str: string){
  window.location.hash = str;
}

function getOperatingSystem() {
      const platform = navigator.platform.toLowerCase();

      if (platform.includes('mac')) {
        return 'macOS';
      } else if (platform.includes('linux')) {
        return 'Linux';
      } else  {
        return 'Windows';
      }
    }

function detectParams(): any{
  if(window.location.hash.substring(1)){
    currentItem.value = window.location.hash.substring(1);
  }
  curOs.value = getOperatingSystem();
  curLang.value = getLang();
}

function getLang(lang: string | void) {
  
let browserLanguage = localStorage.getItem('lang');
if(!browserLanguage){
   browserLanguage = navigator.language.toLowerCase();
}
  if(lang != null){
    console.log("lang is "+ lang);
    browserLanguage = lang;
    localStorage.setItem('lang', lang);
    location.reload();
  }
  if (browserLanguage.startsWith('uk') || browserLanguage === 'ua') {
        return languageMappings.ua;
      } else {
        return languageMappings.en;
      }
}

</script>

<template>
  <div class="header">
    <q-tabs 
    style="width: 50%; "
    v-model="currentItem" color="primary">
      <q-tab name="home" class="text-white" @click="changeHash('home')">
        <q-img
        :src="logo">
        </q-img>
      </q-tab>
      <q-tab name="screenshots" class="text-white" :label="curLang.screenshot" @click="changeHash('screenshots')">  </q-tab>
      <q-tab name="download" class="text-white" :label="curLang.download" @click="changeHash('download')">  </q-tab>
    </q-tabs>

    <q-btn-dropdown flat class="text-white" style="left: 25%; opacity: 0.85;" :label="curLang.lang">
          <q-list style="min-width: 100px; color: #3C3C3C">
            <q-item clickable v-close-popup>
              <q-item-section @click="getLang('en')">English</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section @click="getLang('ua')">Українська</q-item-section>
            </q-item>
          </q-list>
      </q-btn-dropdown>
  </div>


  <q-tab-panels v-model="currentItem" animated style="background: none;">
      <q-tab-panel name="home">
        <HomeTab :lang="curLang" :os="curOs"></HomeTab>
      </q-tab-panel>
      <q-tab-panel name="screenshots">
        <ScreenshotsTab :lang="curLang"></ScreenshotsTab>
      </q-tab-panel>
      <q-tab-panel name="download">
        <DownloadTab :lang="curLang"></DownloadTab>
      </q-tab-panel>
    </q-tab-panels>
</template>

<style scoped>

</style>
