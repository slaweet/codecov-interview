<template>
  <span>
    <img v-bind:src="`https://avatars0.githubusercontent.com/u/${serviceId}?v=3&s=25`" class="avatar" />
  </span>
</template>

<script lang="ts">

export default {
  name: 'GithubAvatar',
  props: ['serviceId']
}
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  vertical-align: middle;
  margin: 5px;
}
</style>
