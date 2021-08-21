<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title
          class="teste"
          bla="ax"
        >
          Simulations
        </q-toolbar-title>
        <q-btn
          flat
          icon="logout"
          @click="logout"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  methods: {
    logout() {
      localStorage.removeItem('login-teste')
      this.$router.push({name: 'login'})
    }
  },
}
</script>
