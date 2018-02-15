<template>
  <div>
    <h1>{{ header }}t</h1>
    <div>
        {{ body }}
    </div>
    <div>
      Content retrieved from parent:
      <ul>
        <li v-if="this.propertyOne > 0">Property 1: {{ propertyOne }}</li>
        <li v-if="Array.isArray(propertyTwo)">
          Property 2:
          <span v-for="(x, index) in propertyTwo" :key="index">
            {{ x }}<span v-if="index <  propertyTwo.length - 1">,</span>
          </span>
        </li>
        <li v-if="this.propertyThree">Property 3: Hello, {{ this.propertyThree.firstName }} {{ this.propertyThree.lastName }} ({{ this.propertyThree.age}})</li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="content" />
      <button @click="sendBackToParent">Click</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'globalcomponent',
  props: {
    propertyOne: {
      type: Number,
      required: true
    },
    propertyTwo: Array,
    propertyThree: Object
  },
  data () {
    return {
      header: 'Global Component',
      body: 'This component is registered globally',
      content: ''
    }
  },
  methods: {
    sendBackToParent: function () {
      this.$emit('ploup', this.content)
    }
  }
}
</script>
