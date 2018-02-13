<template>
    <div>
        <h1>{{ header }}t</h1>
    <div>
        {{ body }}
        <p>
          {{ $route.params.uid }}
        </p>
        <div>
          <router-view></router-view>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'test03',
  data () {
    return {
      header: 'Test03',
      body: 'This is test03 content'
    }
  }
}
</script>
