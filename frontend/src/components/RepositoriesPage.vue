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
        <div class="button-group">
        <button class="button primary">
          {{parseFloat(repository.cache.commit.totals[5]).toFixed(2)}}%
        </button>
        <button class="button">
        <!-- TODO compute this value -->
        ø
        </button>
        <button class="button">
        ø
        </button>
        </div>
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

  .button-group {
    color: #ebeceb;
  }

  .button {
    border-radius: 0px;
    border: solid 1px #ebeceb;
    background-color: #ffffff;
    padding: 6px 12px;
    min-width: 60px;
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
