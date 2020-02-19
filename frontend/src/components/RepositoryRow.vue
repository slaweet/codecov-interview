<template>
  <div class="container">
    <div class="row">
      <Octicon :icon="repo" />
      <div class="column">
        <h3 >{{repository.name}}</h3>
        <div class="commit">
          <span class="commit-message">
            Latest commit at
            {{repository.cache.commit.timestamp}} <!-- TODO format date -->
            by
          </span>
          <GithubAvatar v-bind:serviceId="repository.cache.commit.author.service_id" />
          {{repository.cache.commit.author.username}}
        </div>
      </div>
    </div>
    <div>
      <div class="button-group">
        <Button type="primary" v-bind:label="`${parseFloat(absolute).toFixed(2)}%`" />
          <!-- TODO implement the background progress bar -->
        <Button v-bind:label="relative ? `< ${parseFloat(relative).toFixed(2)}% >` : 'ø'" />
        <Button label="ø">
          <!-- TODO compute this value -->
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Octicon, { repo } from 'octicons-vue'
import GithubAvatar from './GithubAvatar.vue'
import Button from './Button.vue'

export default {
  name: 'FirstComponent',
  components: { Octicon, GithubAvatar, Button },
  props: ['repository'],
  data: function () {
    return {
      repo
    }
  },
  computed: {
    absolute () {
      return this.repository.cache.commit.totals[5]
    },
    relative () {
      return this.repository.cache.commit.totals[12][5]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
}

.row {
  display: flex;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
}

h3 {
  margin: 0 10px;
}

.commit {
  font-family: Lato;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0 10px;
}

.commit-message {
  color: #999fa7;
}
</style>
