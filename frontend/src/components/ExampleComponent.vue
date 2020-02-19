<template>
  <div class="container">
    <h1>Codecov Frontend Exercise</h1>
    <p align="center">
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI1LjAxNCAwQzExLjIzLjAxLjAxIDExLjE0OSAwIDI0LjgzMnYuMDYybDQuMjU0IDIuNDgyLjA1OC0uMDM5YTEyLjIzOCAxMi4yMzggMCAwIDEgOS4wNzgtMS45MjggMTEuODQ0IDExLjg0NCAwIDAgMSA1Ljk4IDIuOTc1bC43My42OC40MTMtLjkwNGMuNC0uODc0Ljg2Mi0xLjY5NiAxLjM3NC0yLjQ0My4yMDYtLjMuNDMzLS42MDQuNjkyLS45MjlsLjQyNy0uNTM1LS41MjYtLjQ0YTE3LjQ1IDE3LjQ1IDAgMCAwLTguMS0zLjc4MSAxNy44NTMgMTcuODUzIDAgMCAwLTguMzc1LjQ5YzIuMDIzLTguODY4IDkuODItMTUuMDUgMTkuMDI3LTE1LjA1NyA1LjE5NSAwIDEwLjA3OCAyLjAwNyAxMy43NTIgNS42NTIgMi42MTkgMi41OTggNC40MjIgNS44MzUgNS4yMjQgOS4zNzJhMTcuOTA4IDE3LjkwOCAwIDAgMC01LjIwOC0uNzlsLS4zMTgtLjAwMWExOC4wOTYgMTguMDk2IDAgMCAwLTIuMDY3LjE1M2wtLjA4Ny4wMTJjLS4zMDMuMDQtLjU3LjA4MS0uODEzLjEyNi0uMTE5LjAyLS4yMzcuMDQ1LS4zNTUuMDY4LS4yOC4wNTctLjU1NC4xMTktLjgxNi4xODVsLS4yODguMDczYy0uMzM2LjA5LS42NzUuMTkxLTEuMDA2LjNsLS4wNjEuMDJjLS43NC4yNTEtMS40NzguNTU4LTIuMTkuOTE0bC0uMDU3LjAyOWMtLjMxNi4xNTgtLjYzNi4zMzMtLjk3OC41MzRsLS4wNzUuMDQ1YTE2Ljk3IDE2Ljk3IDAgMCAwLTQuNDE0IDMuNzhsLS4xNTcuMTkxYy0uMzE3LjM5NC0uNTY3LjcyNy0uNzg3IDEuMDQ4LS4xODQuMjctLjM2OS41Ni0uNi45NDJsLS4xMjYuMjE3Yy0uMTg0LjMxOC0uMzQ4LjYyMi0uNDg3LjlsLS4wMzMuMDYxYy0uMzU0LjcxMS0uNjYxIDEuNDU1LS45MTcgMi4yMTRsLS4wMzYuMTExYTE3LjEzIDE3LjEzIDAgMCAwLS44NTUgNS42NDRsLjAwMy4yMzRhMjMuNTY1IDIzLjU2NSAwIDAgMCAuMDQzLjgyMmMuMDEuMTMuMDIzLjI1OS4wMzYuMzg4LjAxNS4xNTguMDM0LjMxNi4wNTMuNDcxbC4wMTEuMDg4LjAyOC4yMTRjLjAzNy4yNjQuMDguNTI1LjEzLjc4Ny41MDMgMi42MzcgMS43NiA1LjI3NCAzLjYzNSA3LjYyNWwuMDg1LjEwNi4wODctLjEwNGMuNzQ4LS44ODQgMi42MDMtMy42ODcgMi43Ni01LjM2OWwuMDAzLS4wMzEtLjAxNS0uMDI4YTExLjczNiAxMS43MzYgMCAwIDEtMS4zMzMtNS40MDdjMC02LjI4NCA0Ljk0LTExLjUwMiAxMS4yNDMtMTEuODhsLjQxNC0uMDE1YzIuNTYxLS4wNTggNS4wNjQuNjczIDcuMjMgMi4xMzZsLjA1OC4wMzkgNC4xOTctMi40NC4wNTUtLjAzM3YtLjA2MmMuMDA2LTYuNjMyLTIuNTkyLTEyLjg2NS03LjMxNC0xNy41NTFDMzcuOTcgMi41NzYgMzEuNjk1IDAgMjUuMDE0IDAiIGZpbGw9IiNGMDFGN0EiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==">
    </p>
    <p>
    <h2> Some Icons </h2>
    <Octicon :icon="markGithub" />
    <Octicon :icon="archive" />
    </p>

    <p>
    <h2> An Api Response </h2>
      <pre>{{ response }}</pre>
    </p>
  </div>
</template>

<script lang="ts">

// calling the backend directly from a vue component is a bad example, 
// this is here just to demonstrate the backend loading data
import axios from 'axios';
import Octicon, { markGithub, archive } from 'octicons-vue'
export default {
  name: 'FirstComponent',
  components: { Octicon },
  data: function() {
         return  {
           response: [],
           markGithub,
           archive
         }
    },
    created: function(){
        axios.get('https://codecov.io/api/gh/ansible').then(response => this.response = response.data);
    }
}
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
