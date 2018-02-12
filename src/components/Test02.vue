<template>
    <div>
        <h1>{{ header }}t</h1>
    <div>
        {{ body }}
        <p>
          {{ $route.params.uid }}
        </p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'test02',
  data () {
    return {
      header: 'Test02',
      body: 'This is test02 content'
    }
  }
}
</script>
