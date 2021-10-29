<template>
  <div class="max-w-3xl mx-auto">
    <div class="flex space-x-2 rounded-lg mx-auto my-10">
      <div class="hidden md:flex flex-1 w-2/3">
        <img src="/img/ticket.png" />
      </div>
      <div class="flex-1">
        <h2 class="text-left text-2xl font-bold m-6">Préventes 18€</h2>
        <p class="mx-6 mb-6">Cloture des préventes le 10 Novembre 2021.</p>
        <p class="mx-6 mb-6">Gratuit pour les moins de 12 ans</p>
        <p class="mx-6 text-sm font-semibold text-red-600">
          Covid Safe Ticket et pièce d'identité requis
        </p>
      </div>
    </div>
    <div class="w-10/12 lg:w-2/3 mx-auto">
      <Btn :link="'https://ticket.beonegroup.be/fr/event/details/4'"
        >Achetez vos préventes maintenant</Btn
      >
    </div>

    <div class="flex space-x-2 rounded-lg ml-3 my-10">
      <div class="flex-1">
        <h2 class="text-left text-2xl font-bold m-6">Sur place 22€</h2>

        <p class="mx-6 mb-6">
          Attention: la salle ne peut acceuillir plus de 800 personnes.
        </p>
      </div>
      <div class="hidden md:flex flex-1 w-2/3">
        <img src="/img/queue.svg" />
      </div>
    </div>
  </div>
</template>
<script>
import Btn from "../components/Btn.vue";
export default {
  components: {
    Btn,
  },
  setup() {},
};
</script>