
<script>
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
    }
  }
</script>

<template>
  <q-layout>
    <div slot="header" class="toolbar">
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
