<template>
  <v-form @submit.prevent="handleForm">
    <v-row>
      <v-col cols="8" sm="8" class="offset-sm-1 pr-0">
        <v-text-field
          class="fill-height"
          height="35"
          label="Enter package name"
          v-model.trim="searchInput"
          clear-icon="mdi-close-circle"
          clearable
          tile
          type="text"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="4" sm="2" class="pl-0">
        <v-btn block
               class="pl-1 pr-1"
               type="submit"
               x-large
               tile
               outlined>
          Search
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script src="./index.js"></script>
