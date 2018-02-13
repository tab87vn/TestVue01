<template>
    <div>
        <h1>{{ header }}t</h1>
    <div>
        {{ body }}
    </div>
    </div>
</template>

<script>
export default {
  name: 'test032',
  data () {
    return {
      header: 'This is the header of the Test03.2 component',
      body: 'This is just some body text from the test032'
    }
  }
}
</script>
