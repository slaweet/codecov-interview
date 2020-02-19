<template>
  <div class="container">
    <!-- TODO move menu to its own component -->
    <h2 class="menu-item">
      <Octicon :icon="repo" />
      Repositories
    </h2>
    <div class="box">
      <Octicon :icon="search" />
     <input class="filter" type="text" v-model="filter" placeholder="Search files">
    </div>

    <div class="box"> <!-- TODO make box its own component -->
      <div v-for="repository in filteredRepos" v-bind:key="repository.name" >
        <RepositoryRow v-bind:repository="repository" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import axios from 'axios'
import Octicon, { repo, search } from 'octicons-vue'
import RepositoryRow from './RepositoryRow.vue'

export default {
  name: 'FirstComponent',
  components: { Octicon, RepositoryRow },
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
  input.filter {
    font-family: Lato;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: italic;
    line-height: 1.19;
    letter-spacing: normal;
    width: 90%;
    padding: 10px;
    border: 0;
    color: #0e1b29; /* TODO use variables for colors */
  }

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

  .box {
    border-radius: 5px;
    box-shadow: 0 2px 15px 0 rgba(14, 27, 41, 0.05);
    background-color: #ffffff;
    margin-top: 10px;
    padding: 20px 30px;
  }
</style>
