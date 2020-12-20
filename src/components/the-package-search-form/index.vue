<template>
  <v-form @submit.prevent="handleForm">
    <v-row>
      <v-col cols="8" sm="8" class="offset-sm-1 pr-0">
        <v-text-field
          label="Enter package name"
          v-model="searchInput"
          height="39"
          clearable
          dense
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="4" sm="2" class="pl-0">
        <v-btn block
               type="submit"
               large
               tile
               class="fill-height"
               outlined>
          Search
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script src="./index.js"></script>
