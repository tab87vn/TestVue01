<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>My test navigation</h2>
    <ul>
      <li>
        <router-link to='/test01'>Test01 raw</router-link> |
        <router-link to='/test02'>Test02</router-link> |
        <router-link to='/test02/userid/123'>Test02 with param</router-link> |
        <router-link :to="{ name: 'Test01', params: { userid: 123 }}">Test01</router-link>
        <a @click="goTest01">Go test01 using push</a> |
        <a @click="goTest02">Go test02 using push</a> |
      </li>
    </ul>
    <div>
      <ul>
        <li v-for="(user, uid) in users" v-bind:key="uid" >
          {{user.firstname}} {{user.lastname}}
        </li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="input_val">
    </div>
    This is the output: <span v-text="input_val"></span>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to the awesome VueJS application',
      users: [
        {uid: 1, firstname: 'Sebastian', lastname: 'Eschweiler'},
        {uid: 2, firstname: 'Bill', lastname: 'Smith'},
        {uid: 3, firstname: 'John', lastname: 'Porter'}
      ],
      input_val: ''
    }
  },
  methods: {
    goTest01: function () {
      this.$router.push({name: 'Test01'})
    },
    goTest02: function () {
      this.$router.push({name: 'Test02', params: {uid: 123}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
  color: #0000FF;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
