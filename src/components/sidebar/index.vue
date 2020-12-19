<template>
  <v-list dense
          color="transparent"
          class="sidebar">
    <div v-for="item in items"
         :key="item.title">
      <v-list-group
          class="navigation-list__group"
          v-if="item.hasOwnProperty('items')"
          v-model="item.active"
          no-action>
        <template v-slot:activator>
          <v-list-item-content class="pt-0 pb-0">
            <v-list-item class="pl-0">
              <v-list-item-icon class="mr-3">
                <v-icon>{{ item.action }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title style="z-index: 10; position: relative;" v-text="item.title"></v-list-item-title>
            </v-list-item>
          </v-list-item-content>
        </template>

        <v-list-item
            style="padding-left: 52px;"
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="$localize({ name: subItem.to })"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item v-else :to="$localize({ name: item.to })">
        <v-list-item-icon class="mr-3">
          <v-icon>{{ item.action }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>

    </div>
  </v-list>
</template>
<style src="./index.scss" lang="scss"></style>
<script src="./index.js"></script>
