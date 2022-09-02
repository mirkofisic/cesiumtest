<template>
  <q-page class="flex flex-center">
    <vc-config-provider :cesium-path="vcConfig.cesiumPath" :access-token="vcConfig.accesstToken">
        <vc-viewer ref="viewerRef" class="main-viewer" @ready="onViewerReady" @cesiumReady="onCesiumReady"></vc-viewer>
    </vc-config-provider>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  VcConfigProvider,
  VcViewer
} from 'vue-cesium'

const viewerRef = ref(null)
const onViewerReady = (readyObj) => {
  console.log(readyObj.Cesium) // Cesium namespace object
  console.log(readyObj.viewer) // instanceof Cesium.Viewer
}

const onCesiumReady = (readyObj) => {
  console.log('cesium ready')
}

const vcConfig = reactive({
    cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmODFlZGIwZC1jZmRjLTRlNTMtYWE1Ny05NDU2NDI1NmQxNGMiLCJpZCI6MTA2MTU2LCJpYXQiOjE2NjE3MjU2ODd9.HH62kKOVF9pNPWgs2g_OYj60R-2N0T328g3p5J0CB_o'
})
</script>
