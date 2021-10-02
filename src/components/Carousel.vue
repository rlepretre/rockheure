<template>
  <div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
      <!-- <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          :src="images[0]"
          alt=""
        /> -->
      <video
        autoplay
        muted
        @ended="onEnd"
        class="h-hull w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        :src="currentVid"
      ></video>
    </div>
    <!-- <button @click="toggle">show</button> -->
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import { TransitionRoot, TransitionChild } from "@headlessui/vue";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
  },
  setup() {
    const isShowing = ref(true);
    const step = ref(0);
    const timer = ref(null);
    const images = ["/img/carousel-1.jpg", "/img/carousel-2.jpg"];
    const videos = [
      "/videos/2.mp4",
      "/videos/3.mp4",
      "/videos/7.mp4",
      "/videos/17.mp4",
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

    const onEnd = () => {
      next();
    };

    const currentImg = computed(() => {
      return images[Math.abs(step.value) % images.length];
    });

    const currentVid = computed(() => {
      return videos[Math.abs(step.value) % videos.length];
    });

    return {
      onEnd,
      currentVid,
      step,
      next,
    };
  },
};
</script>

<style scoped>
</style>
