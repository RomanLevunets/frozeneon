<template>
  <v-row>
    <v-col cols="12">
      <the-package-search-form></the-package-search-form>
    </v-col>
    <v-col cols="12"
           v-show="!!queryParams.text"
           class="pa-0">
      <v-row>
        <v-col cols="12"
               sm="6"
               v-show="!!queryParams.text"
               style="display: flex; align-items: center;">
          <p class="text-left pl-3">
            <strong>{{ totalListLength }}</strong> packages found
          </p>
        </v-col>
        <v-col cols="12"
               sm="6"
               class="justify-end"
               style="display: flex;">
          <v-pagination
            v-if="totalListLength > queryParams.size"
            v-model="page"
            :length="Math.ceil(totalListLength / queryParams.size)"
            next-icon="mdi-chevron-right"
            prev-icon="mdi-chevron-left"
            @input="handlePagination($event)"
            :total-visible="7"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12"
           sm="6"
           md="4"
           v-for="(item, index) in list"
           :key="index">
      <the-package-list-item :item="item"></the-package-list-item>
    </v-col>
    <v-col cols="12" class="justify-center v-responsive">
      <v-pagination
        v-if="totalListLength > queryParams.size"
        v-model="page"
        :length="Math.ceil(totalListLength / queryParams.size)"
        next-icon="mdi-chevron-right"
        prev-icon="mdi-chevron-left"
        @input="handlePagination($event)"
        :total-visible="7"
      ></v-pagination>
    </v-col>
    <v-col cols="12" v-show="queryParams.text.length > 2 && !isListLoading && !totalListLength">
      <the-empty-data></the-empty-data>
    </v-col>
    <v-col cols="12"
           class="pa-0"
           v-show="!queryParams.text.length">
      <the-intro-view></the-intro-view>
    </v-col>
  </v-row>
</template>
<script src="./index.js"></script>
