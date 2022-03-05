<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      thing: 'hello'
    };
  }
});
</script>

<template>
  <h1>Hexle <span>Color</span></h1>

  <div>Random color here</div>

  <div>User guess here</div>

  <div>Random {{ thing }}</div>
</template>
