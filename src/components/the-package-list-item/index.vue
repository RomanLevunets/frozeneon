<template>
  <v-card
    class="mx-auto fill-height flex"
    style="display: flex; flex-direction: column; justify-content: space-between;"
  >
    <v-card-text>
      <!--          <div class="mb-1">{{ item.package.name }}</div>-->
      <p class="display-1 text--primary mb-3">
        {{ item.package.name }}
      </p>
      <p class="mb-2">Version: {{ item.package.version }}</p>
      <div class="text--primary mb-3">
        Description: {{ item.package.description }}
      </div>
      <div>
        <v-chip
          v-for="(keyword, i) in item.package.keywords"
          :key="i"
          small
          class="mr-2 mt-1 mb-1"
          color="teal"
          outlined
          @click.prevent="handleTag(keyword)"
        >
          {{ keyword }}
        </v-chip>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click.prevent=""
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script src="./index.js"></script>
