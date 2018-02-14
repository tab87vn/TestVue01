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
  name: 'globalcomponent',
  data () {
    return {
      header: 'Global Component',
      body: 'This component is registered globally'
    }
  }
}
</script>
