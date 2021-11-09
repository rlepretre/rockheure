<template>
  <div class="w-full px-4 pt-16">
    <div class="w-full max-w-3xl p-2 mx-auto bg-white rounded-2xl">
      <h1 class="m-4 text-3xl font-bold">Des questions ?</h1>

      <!-- <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="
            flex
            justify-between
            w-full
            px-4
            py-2
            text-sm
            font-medium
            text-left text-blue-900
            bg-blue-100
            rounded-lg
            hover:bg-blue-200
            focus:outline-none
            focus-visible:ring
            focus-visible:ring-blue-500
            focus-visible:ring-opacity-75
          "
        >
          <span class="text-lg font-semibold"
            >Comment accéder à la salle la Silène ?</span
          >
          <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-blue-500"
          />
        </DisclosureButton>
        <DisclosurePanel
          class="px-4 pt-4 pb-2 text-sm text-gray-700 bg-blue-50"
        >
          Super instructions écrites par quelqu'un d'autre que Romain Leprêtre
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="
            flex
            justify-between
            w-full
            px-4
            py-2
            text-sm
            font-medium
            text-left text-blue-900
            bg-blue-100
            rounded-lg
            hover:bg-blue-200
            focus:outline-none
            focus-visible:ring
            focus-visible:ring-blue-500
            focus-visible:ring-opacity-75
          "
        >
          <span class="text-lg font-semibold"
            >Puis-je faire me faire rembourser après avoir acheté des préventes
            ?</span
          >
          <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-blue-500"
          />
        </DisclosureButton>
        <DisclosurePanel
          class="px-4 pt-4 pb-2 text-sm text-gray-700 bg-blue-50"
        >
          Je sais pas faut demander au chef ¯\_(ツ)_/¯
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="
            flex
            justify-between
            w-full
            px-4
            py-2
            text-sm
            font-medium
            text-left text-blue-900
            bg-blue-100
            rounded-lg
            hover:bg-blue-200
            focus:outline-none
            focus-visible:ring
            focus-visible:ring-blue-500
            focus-visible:ring-opacity-75
          "
        >
          <span class="text-lg font-semibold"
            >Comment devenir devenir sponsor ?</span
          >
          <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-blue-500"
          />
        </DisclosureButton>
        <DisclosurePanel
          class="px-4 pt-4 pb-2 text-sm text-gray-700 bg-blue-50"
        >
          Si vous aussi vous souhaitez donner moins d'argent à l'État et plus
          d'argent à l'ASBL Rock'Heure, faut aussi demander au chef
        </DisclosurePanel>
      </Disclosure> -->
      <p class="my-2">
        N'hésitez pas à
        nous envoyer un e-mail à
        <a
          class="text-red-600"
          href="mailto:contact@rockheure.be?subject=RockHeure.be&amp;body=Bonjour"
          >contact@rockheure.be</a
        >
        ou retrouvez nous sur notre
        <a class="text-red-600" href="https://www.facebook.com/rockheure" target="_blank">
          page Facebook</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },
};
</script>
