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
      <div class="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-4 w-full">
        <div
          v-for="s in sponsors"
          class="pb-8 lg:pb-0 m-auto"
        >
          <a :href="s.href" target="blank">
            <img :src="'/sponsors/' + s.file" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const sponsors = [
      { file: "michaux.jpg", href: "https://michauxassurances.be/" },
      { file: "uniwan.png", href: "https://uniwan.be/" },
      { file: "renard.jpg", href: "https://www.garagerenard.be/" },
      { file: "n5carwash.jpg", href: "https://www.n5carwash.be/fr" },
      { file: "cerfontaine.jpg", href: "https://www.cerfontaine.be/" },
      { file: "dero.jpg", href: "https://www.garagedero.be/" },
      { file: "beone.png", href: "https://www.beonegroup.be/" },
      { file: "drone2be.jpg", href: "https://facebook.com/Drone2be/" },
      { file: "alterius.jpg", href: "https://www.alterius.be/" },
      { file: "terradog.jpg", href: "https://www.terradog.be" },
      { file: "malpaix.png", href: "https://www.drinkmalpaix.be/" },
      { file: "cecili-z.png", href: "https://www.cecili-z.be/" },
      { file: "migeotte.jpg", href: "http://migeotte-conseil.be/fr/" },
      { file: "garage_sauvage.jpg", href: "http://www.garage-sauvage.be/" },
      { file: "deltaplac.jpg", href: "https://www.deltaplac.com/" },
      {
        file: "bougard.jpg", href: "http://www.bougard.be/fr/philippeville/assurances/",
      },
      { file: "lvp-piscines.jpg", href: "https://www.lvp-piscines.be/" },
    ];
    return {
      sponsors,
    };
  },
};
</script>
