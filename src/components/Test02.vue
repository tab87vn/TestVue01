<template>
    <div>
        <h1>{{ header }}t</h1>
    <div>
        {{ body }}
        <p>
          {{ $route.params.uid }}
        </p>
    </div>
    <div>
      <global-comp :propertyOne=Number($route.params.uid) :propertyTwo=this.sampleArray :propertyThree=this.person></global-comp>
    </div>
    </div>
</template>

<script>
export default {
  name: 'test02',
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
      }
    }
  }
}
</script>
