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
      <router-view></router-view>
    </v-main>
    <v-footer
      dark
      padless>
      <v-row>
        <v-col class="text-center">
          {{ new Date().getFullYear() }} — <strong>Roman Levunets</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<style src="./index.scss" lang="scss"></style>
<script src="./index.js"></script>
