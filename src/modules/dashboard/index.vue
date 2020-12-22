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
               v-show="!!queryParams.text && list.length > 0"
               style="display: flex; align-items: center;">
          <p class="text-left pl-3">
            <strong>{{ totalListLength }}</strong> packages found
          </p>
        </v-col>
        <v-spacer></v-spacer>
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
      <the-package-list-item
        :item="item"
        @handle-button="showDialogDetail">
      </the-package-list-item>
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
    <dialog-view :show="showDialogView"
                 :title="currentItem ? packageMetadata.name: ''"
                 :loading="isLoading"
                 v-if="showDialogView"
                 @close-dialog="showDialogView = false">
      <template #content>
        <div v-if="currentItem" class="pt-5">
          <p v-show="!packageMetadata.readme" class="mb-4 text-h6">
            <span>{{ packageMetadata.description }}</span><br>
            The more information this package ->
            <a :href="packageGithub.homepage" target="_blank" class="text-h5">
              link
            </a>
          </p>
          <vue-markdown
            class="markdown"
            :breaks="false"
            :source="packageMetadata.readme"></vue-markdown>
        </div>
      </template>
    </dialog-view>
  </v-row>
</template>
<script src="./index.js"></script>
