<template>
  <section class="section">
    <h2 class="title is-3">
      Tests
    </h2>
    <div class="block">
      Test
    </div>
    <ul>
      <li
        v-for="(f, k) of fonts"
        :key="k"
      >
        {{ f.name }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const fonts = await $axios.$get('/api/fonts')
    return { fonts: fonts.data }
  }
}
</script>
