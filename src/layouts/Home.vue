<template>
  <main
    class="
      mt-10
      mx-auto
      max-w-7xl
      px-4
      sm:mt-12
      sm:px-6
      md:mt-16
      lg:mt-20
      lg:px-8
      xl:mt-28
    "
  >
    <div class="sm:text-center lg:text-left">
      <h1
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-gray-900
          sm:text-5xl
          md:text-6xl
        "
      >
        <span class="block xl:inline">Samedi 13 Novembre</span>
        {{ " " }}
        <span class="block text-red-600 xl:inline">Rock'Heure </span>
      </h1>
      <p
        class="
          mt-3
          text-base text-gray-500
          sm:mt-5
          sm:text-lg
          sm:max-w-xl
          sm:mx-auto
          md:mt-5
          md:text-xl
          lg:mx-0
        "
      >
        Le Samedi 13 Novembre 2021 à la salle de la Silène de Silenrieux, le
        festival Rock'Heure accueillera Nokia Da, Elise in Chains et Saule.
      </p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <Btn :link="'https://ticket.beonegroup.be/fr/event/details/4'"
          >Achetez vos tickets</Btn
        >
      </div>
    </div>
  </main>
  <Carousel v-if="routeName == 'Home'"></Carousel>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import Btn from "../components/Btn.vue";

const navigation = [
  { name: "Accueil", href: "#" },
  { name: "Tickets", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Historique", href: "#" },
];

export default {
  components: {
    Btn,
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },

  setup() {
    return {
      navigation,
    };
  },
};
</script>