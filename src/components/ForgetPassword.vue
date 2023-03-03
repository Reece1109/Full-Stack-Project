<template>
    <div>
  
    </div>
  </template>
  
  <script>
  import { computed } from '@vue/runtime-core'
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore()

      store.dispatch("users")

      const users = computed(() => store.state.user)
      return {
        users
      }
    }
  }
  </script>
  
  <style scoped>
  </style>