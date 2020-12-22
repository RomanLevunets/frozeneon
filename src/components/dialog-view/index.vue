<template>
  <v-dialog
    :retain-focus="false"
    fullscreen
    style="overflow-x: hidden; background-color: #fff;"
    v-model="dialog"
    persistent
    scrollable
  >
    <v-card tile>
      <v-toolbar
        style="flex: 0 1 auto;"
        height="60px"
        flat
        dark
        color="primary"
      >
        <v-btn
          icon
          dark
          @click="closeDialog()"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title style="text-transform: capitalize;">
          Package: {{ title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click.prevent="closeDialog()"
               color="silver"
               class="mr-1"
        >
          close
        </v-btn>
      </v-toolbar>
      <v-card-text v-if="!loading">
        <slot name="content"></slot>
      </v-card-text>
      <v-card-text v-show="loading">
        <v-row
          align="center"
          class="fill-height ml-0 mr-0"
          align-content="center"
          style="min-height: 150px;"
          justify="center">
          <v-progress-circular
            :size="60"
            :width="5"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script src="./index.js"></script>
