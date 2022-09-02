import VueCesium from "vue-cesium";

export default boot(({ app }) => {
  app.use(VueCesium, {
    // cesiumPath is the web service address that guides the use of Cesium.js, which can be a local or CDN address such as
    // cesiumPath: /static/Cesium/Cesium.js
    // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
    // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js'
    cesiumPath:
      "https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js",
    // If you need to use Cesium ion resources, you need to specify it. Go to https://cesium.com/ion/ to apply for an account and get Access Token. If it is not specified, it may cause the loading of CesiumIon's online images and terrain to fail.
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmODFlZGIwZC1jZmRjLTRlNTMtYWE1Ny05NDU2NDI1NmQxNGMiLCJpZCI6MTA2MTU2LCJpYXQiOjE2NjE3MjU2ODd9.HH62kKOVF9pNPWgs2g_OYj60R-2N0T328g3p5J0CB_o",
  });
});
