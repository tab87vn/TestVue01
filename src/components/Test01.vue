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
  name: 'test01',
  data () {
    return {
      header: 'This is the header of the Test01 component',
      body: 'This is just some body text'
    }
  }
}
</script>
