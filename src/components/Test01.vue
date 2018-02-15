<template>
  <div>
    <h1>{{ header }}t</h1>
    <div>
        {{ body }}
    </div>
    <div>
      <button @click="doCount">Click</button>
      Counting: {{ counter }}
    </div>
    <div>
      <button @click.stop="sayHello">Button 2</button>
    </div>
    <div>
      Pops every five: {{ everyFivePop }}
    </div>
    <div>
      <global-comp></global-comp>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test01',
  data () {
    return {
      header: 'This is the header of the Test01 component',
      body: 'This is just some body text',
      counter: 0,
      name: 'whatever'
    }
  },
  computed: {
    everyFivePop: function () {
      if (this.counter !== 0 && this.counter % 5 === 0) {
        return 'pop'
      } else {
        return ''
      }
    }
  },
  methods: {
    doCount: function () {
      this.counter++
    },
    sayHello: function () {
      alert('Hello world, ' + this.name)
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>
