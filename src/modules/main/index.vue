<template>
  <v-app id="inspire">
<!--    <v-navigation-drawer-->
<!--        align-content="space-between"-->
<!--        :class="{ 'dark': $vuetify.theme.dark }"-->
<!--        v-model="drawer"-->
<!--        app-->
<!--    >-->
<!--      <the-main-sidebar/>-->
<!--    </v-navigation-drawer>-->
    <v-app-bar app color="primary" dark>
<!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>-->
      <v-toolbar-title>Nethernite</v-toolbar-title>
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
    <v-main class="mt-5 mr-4 ml-4 pb-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<style src="./index.scss" lang="scss"></style>
<script src="./index.js"></script>
