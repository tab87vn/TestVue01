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
  name: 'test030',
  data () {
    return {
      header: 'Default Test03',
      body: 'Default text for Test03'
    }
  }
}
</script>
