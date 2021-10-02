<template>
  <div class="w-full flex flex-col items-center justify-center px-4 mb-8">
    <div class="w-full lg:w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
    <h1 class="text-4xl font-bold mt-6">Nos partenaires</h1>

    <div
      class="
        flex
        lg:flex-row
        flex-col
        items-center
        justify-between
        pt-16
        border-brands
        lg:w-11/12
        xl:w-9/12
        f-f-l
      "
    >
      <div class="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 w-full">
        <div v-for="s in sponsors" class="pb-8 lg:pb-0">
          <img :src="'/sponsors/' + s + '.jpg'" width="143" height="46" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const sponsors = [
      "classic21",
      "bara",
      "buror",
      "cerfontaine",
      "werion",
      "skylane",
      "sunbrero",
      "superdesfagnes",
    ];
    return {
      sponsors,
    };
  },
};
</script>
