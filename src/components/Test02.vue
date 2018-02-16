<template>
  <div>
    <h1>{{ header }}t</h1>
    <div>
      {{ body }}
      <p>
        {{ $route.params.uid }}
      </p>
        <div>
        The child says: {{ childContent }}
        <div>
          <child1 v-if="childContent === '1'"></child1>
          <child2 v-if="childContent === '2'"></child2>
        </div>
      </div>
    </div>
    <div>
      <global-comp @ploup='theChildSay' :propertyOne=Number($route.params.uid) :propertyTwo=this.sampleArray :propertyThree=this.person></global-comp>
    </div>
  </div>
</template>

<script>

import Test021 from './Test02.1.vue'
import Test022 from './Test02.2.vue'

export default {
  name: 'test02',
  props: {
    childComponent: Object
  },
  components: {
    'child1': Test021,
    'child2': Test022
  },

  data () {
    return {
      header: 'Test02',
      body: 'This is test02 content',
      sampleArray: [
        'one',
        'two',
        'three'
      ],
      person: {
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        age: 32
      },
      childContent: ''
    }
  },
  methods: {
    theChildSay: function (content) {
      this.childContent = content
      this.$emit('whatever', content)
    }
  }
}
</script>
