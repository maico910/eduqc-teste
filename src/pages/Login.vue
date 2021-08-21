<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title
          class="teste"
          bla="ax"
        >
          EduQC Teste
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page
        class="login-page bg-grey-4"
        padding
      >
        <q-card class="q-pa-md">
          <q-form
            class="login-form"
            @submit.prevent="login"
          >
            <q-input
              v-model="user.login"
              filled
              label="Login"
              color="primary"
            />

            <q-input
              v-model="user.password"
              filled
              label="Senha"
              color="primary"
              type="password"
            />

            <q-btn
              type="submit"
              label="Login"
              color="primary"
            />
          </q-form>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      user: {
        login: '',
        password: ''
      }
    }
  },

  methods: {
    login() {
      if (this.user.login === 'teste@teste.com' && this.user.password === '12345678') {
        this.$router.push({name: 'index'})
      }

      this.$q.notify({
        message: 'Autenticação negado',
        color: 'negative'
      })
    }
  },
}
</script>

<style lang="scss">
  .login-form > *:not(:last-child) {
    margin-bottom: 16px
  }
</style>
