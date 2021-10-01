<template>
  <div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <transition-group name="fade" tag="div">
        <div v-for="i in [step]" :key="i">
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            :src="currentImg"
            alt=""
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import { TransitionRoot } from "@headlessui/vue";

export default {
  components: {
    TransitionRoot,
  },
  setup() {
    const step = ref(0);
    const timer = ref(null);
    const images = [
      "/img/carousel-1.jpg",
      "/img/carousel-2.jpg",
      "/img/carousel-1.jpg",
      "/img/carousel-2.jpg",
    ];

    const startSlide = () => {
      timer.value = setInterval(next, 4000);
    };

    const next = () => {
      step.value += 1;
    };

    onMounted(() => {
      startSlide();
    });

    const currentImg = computed(() => {
      console.log(images[Math.abs(step.value) % images.length]);
      return images[Math.abs(step.value) % images.length];
    });

    return {
      currentImg,
      step,
      next,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
</style>
