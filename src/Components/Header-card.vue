<template>
  <div class="card relative">
    <img src="/logo.jpeg" class="w-40 rounded-full mx-auto shadow-lg" />
    <h1 class="
      title
      border-0
      ">
      {{ name }}
    </h1>
    <div class="px-1 mt-2">
      <hr class="border-stone-200">
    </div>
    <p class="
        mt-4
        text-stone-600
        font-vaizir
        text-sm
        md:text-base
      ">
      {{ desc }}
    </p>
  </div>
</template>


<script setup>
import { computed } from "@vue/runtime-core"

defineProps({
  name: String,
  desc: String
})

const test = import.meta.env.NAME;

</script>

<!-- dir="$page.props.dir" :class="$page.props.dir == 'rtl' ? 'text-right' : ''" -->