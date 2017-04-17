
<script>
  import Firebase from 'firebase'
  import CcForm from './expenses/form.vue'
  import CcList from './expenses/list.vue'
  import { map } from 'lodash'
  export default {
    components: { CcForm, CcList },
    mounted () {
      this.$db.ref('expenses').on('value', data => {
        const obj = data.val()
        this.list = map(obj, (expense, index) => {
          expense.id = index
          return expense
        })
      })
    },
    data () {
      return {
        list: []
      }
    },
    methods: {
      logout () {
        Firebase.auth().signOut()
      }
    }
  }
</script>

<template>
  <q-layout>
    <q-drawer ref="drawer">
      <button @click="logout" class="primary" style="width: 100%">Logout</button>
    </q-drawer>
    <div slot="header" class="toolbar">
      <button class="hide-on-drawer-visible"
        @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="0">
        Despesas em Dinheiro Vivo
      </q-toolbar-title>
    </div>
    <div class="container">
      <cc-form></cc-form>
      <hr v-show="list.length > 0">
      <cc-list :list="list"></cc-list>
    </div>
  </q-layout>
</template>

<style scoped>
  .container {
    padding: 20px;
  }
</style>
