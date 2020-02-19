<template>
  <div class="container">
    <h2 class="menu-item">
      <Octicon :icon="repo" />
      Repositories
    </h2>
    <div>
      <Octicon :icon="search" />
     <input type="text" v-model="filter" placeholdeer="Search files">
    </div>

    <div v-for="repository in filteredRepos" v-bind:key="repository.name" >
      <Octicon :icon="repo" />
      <h3 >{{repository.name}}</h3>
      <div>
        Latest commit
        {{repository.cache.commit.timestamp}} <!-- TODO format date -->
        by
        <GithubAvatar v-bind:serviceId="repository.cache.commit.author.service_id" />
        {{repository.cache.commit.author.username}}
        <div class="button-group">
          <Button type="primary" v-bind:label="`${repository.cache.commit.totals[5]}%`" />
          <Button label="ø">
            <!-- TODO compute this value -->
          </Button>
          <Button label="ø">
            <!-- TODO compute this value -->
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import axios from 'axios'
import Octicon, { repo, search } from 'octicons-vue'
import GithubAvatar from './GithubAvatar.vue'
import Button from './Button.vue'

export default {
  name: 'FirstComponent',
  components: { Octicon, GithubAvatar, Button },
  data: function () {
    return {
      filter: '',
      repos: [],
      repo,
      search
    }
  },
  created: function () {
    // TODO move fetching data to Vuex
    axios.get('https://codecov.io/api/gh/ansible').then(response => { this.repos = response.data.repos })
  },
  computed: {
    filteredRepos () {
      return this.repos.filter(repo => {
        return repo.name.toLowerCase().indexOf(this.filter.toLowerCase()) > -1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu-item {
    font-family: Lato;
    font-size: 14px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #081d2f;
    padding: 12px;
    border-bottom: solid 2px #394754;
    display: inline-block;
  }
</style>
