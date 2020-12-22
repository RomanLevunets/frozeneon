<template>
  <v-app id="inspire">
    <v-progress-linear
      v-show="isLoading"
      color="teal accent-5"
      indeterminate
      fixed
      style="z-index: 8;"
      top
      height="3"
    ></v-progress-linear>
    <v-app-bar app color="primary" dark>
      <v-img max-width="111" class="mr-3" src="https://static.tildacdn.com/tild6364-3937-4930-b233-653664646633/logso-frozeneon.png"></v-img>
      <v-toolbar-title>packages</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme()"
             class="ma-2 button--theme"
             text
             small
             fab
             icon>
        <v-icon>
          mdi-theme-light-dark
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="mt-5 mr-4 ml-4">
      <dashboard></dashboard>
    </v-main>
    <v-footer
      dark
      padless>
      <v-row>
        <v-col class="text-center">
          <strong>Roman Levunets</strong>
          <p>
           this project <a href="https://github.com/RomanLevunets/frozeneon" target="_blank" style="color: #009688">repo</a>
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<style src="./index.scss" lang="scss"></style>
<script src="./index.js"></script>
