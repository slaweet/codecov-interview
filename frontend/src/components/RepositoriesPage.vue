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
      <p>
        Latest commit
        {{repository.cache.commit.timestamp}} <!-- TODO format date -->
        by
        <!-- TODO add user avatar -->
        {{repository.cache.commit.author.username}}
        <!-- TODO show coverage -->
      </p>
    </div>
  </div>
</template>

<script lang="ts">

import axios from 'axios'
import Octicon, { repo, search } from 'octicons-vue'

export default {
  name: 'FirstComponent',
  components: { Octicon },
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
