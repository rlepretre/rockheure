<template>
  <div class="rounded-md shadow-xl">
    <a
      :href="link"
      target="_blank"
      class="
        w-full
        flex
        items-center
        justify-center
        px-8
        py-3
        border border-transparent
        text-base
        font-medium
        rounded-md
        text-white
        bg-red-600
        hover:bg-red-700
        md:py-4
        md:text-lg
        md:px-10
      "
      ><slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      default: "#",
    },
  },
  setup() {
    return {};
  },
};
</script>
