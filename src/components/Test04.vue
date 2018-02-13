<template>
    <div>
        <h1>{{ header }}t</h1>
    <div>
        {{ body }}
        <p>
          UID retrieved using props: {{ uid }}
        </p>
        <div>
          <router-view></router-view>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'test04',
  props: ['uid'],
  data () {
    return {
      header: 'Test04',
      body: 'This is test04 content'
    }
  }
}
</script>
