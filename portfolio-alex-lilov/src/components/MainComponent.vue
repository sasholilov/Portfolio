<template>
  <navigation-component />
</template>

<script setup>
import { ref } from "vue";
import NavigationComponent from "./NavigationComponent.vue";

defineProps({
  msg: String,
});
</script>

<style scoped></style>
