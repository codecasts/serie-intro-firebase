
<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      submit () {
        const { email, password } = this
        if (email !== '' && password !== '') {
          this.$auth.signInWithEmailAndPassword(
            email, password
          )
        }
      }
    },
    mounted () {
      this.$auth.onAuthStateChanged(user => {
        if (user) {
          this.$router.push({ path: '/' })
        }
      })
    }
  }
</script>

<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="1">
        Autenticação
      </q-toolbar-title>
    </div>

    <div class="layout-view">
       <form class="container" @submit.prevent="submit">
        <div>
          <input type="email" v-model="email" placeholder="E-mail">
        </div>
        <div>
          <input type="password" v-model="password" placeholder="Password">
        </div>
        <div>
          <button class="primary" type="submit">Logar</button>
        </div>
      </form>
    </div>
  </q-layout>
</template>

<style scoped>
  form {
    padding: 20px;
  }
  input[type="email"], input[type="password"], .container button {
    width: 100%;
  }
  .container div {
    margin-bottom: 25px;
  }
  .container div:last-of-type {
    margin-bottom: -10px;
  }
</style>
