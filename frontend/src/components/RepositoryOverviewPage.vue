<template>
  <div class="container">
    <!-- TODO move menu to its own component -->
    <h2 class="menu-item">
      <Octicon :icon="repo" />
      Overview
    </h2>
    <h3>Recent Commits</h3>
      <div v-for="commit in commits" v-bind:key="commit.commitid" >
        <div class="box">
          <GithubAvatar v-bind:serviceId="commit.author.service_id" />
          <span>
            <div>
              {{commit.message.split('\n')[0]}}
            </div>
            <div>
            <span>
              {{commit.timestamp}}
            </span>
            <span ng-if="commit.pullid">
              <Octicon :icon="gitPullRequest" />
              {{commit.pullid}}
            </span>
            <span>
              <Octicon :icon="gitCommit" />
              {{commit.commitid.substr(0, 6)}}
            </span>
            <span ng-if="commit.ci_passed">
              <Octicon :icon="check" />
               CI Passed
            </span>
            </div>
          </span>
        </div>
      </div>
  </div>
</template>

<script lang="ts">

import axios from 'axios'
import Octicon, { repo, gitCommit, gitPullRequest, check } from 'octicons-vue'
import GithubAvatar from './GithubAvatar.vue'

export default {
  name: 'FirstComponent',
  components: { Octicon, GithubAvatar },
  data: function () {
    return {
      commits: [],
      repo,
      check,
      gitCommit,
      gitPullRequest
    }
  },
  created: function () {
    // TODO move fetching data to Vuex
    axios.get(`https://codecov.io/api/gh/ansible/${this.$route.params.repo}/commits`).then(response => { this.commits = response.data.commits.slice(0, 3) })
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

  .box {
    border-radius: 5px;
    box-shadow: 0 2px 15px 0 rgba(14, 27, 41, 0.05);
    background-color: #ffffff;
    margin-top: 10px;
    padding: 10px 30px;
  }
</style>

