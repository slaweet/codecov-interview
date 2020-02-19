<template>
  <button v-bind:class="['button', type].join(' ')">
   {{label}}
  </button>
</template>

<script lang="ts">

export default {
  name: 'Button',
  props: ['label', 'type']
}
</script>

<style lang="scss" scoped>
  .button {
    color: #ebeceb;
    border-radius: 0px;
    border: solid 1px #ebeceb;
    background-color: #ffffff;
    padding: 6px 12px;
    min-width: 100px;
  }

  .button:first-child {
    border-radius: 5px 0 0 5px;
  }

  .button:last-child {
    border-radius: 0 5px 5px 0;
  }

  .button:not(:first-child) {
    border-left: 0;
  }

  .primary {
    color: #f01f7a;
    border-color: #f01f7a;
  }
</style>
