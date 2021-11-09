<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from "./layouts/Home.vue";
</script>

<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        :class="{ 'lg:max-w-2xl': $route.name == 'Home' }"
        class="
          relative
          z-10
          pb-8
          bg-white
          sm:pb-16
          md:pb-20
          lg:w-full
          lg:pb-28
          xl:pb-32
        "
      >
        <svg
          v-if="$route.name == 'Home'"
          class="
            hidden
            lg:block
            absolute
            right-0
            inset-y-0
            h-full
            w-48
            text-white
            transform
            translate-x-1/2
          "
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Popover>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="
                relative
                flex
                items-center
                justify-between
                sm:h-10
                lg:justify-start
              "
              aria-label="Global"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span class="sr-only">Rock'Heure</span>
                    <img class="w-auto sm:h-10 lg:h-20" src="/img/logo.jpg" />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton
                      class="
                        bg-white
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500
                        hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2 focus:ring-inset focus:ring-indigo-500
                      "
                    >
                      <span class="sr-only">Ouvrir le menu prncipal</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  class="font-medium text-gray-500 hover:text-gray-900"
                  >{{ item.name }}</router-link
                >
              </div>
            </nav>
          </div>

          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="
                absolute
                z-10
                top-0
                inset-x-0
                p-2
                transition
                transform
                origin-top-right
                md:hidden
              "
            >
              <div
                class="
                  rounded-lg
                  shadow-md
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  overflow-hidden
                "
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="sm:h-10 lg:h-20 w-auto" src="/public/img/logo.jpg" alt="" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="
                        bg-white
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500
                        hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2 focus:ring-inset focus:ring-indigo-500
                      "
                    >
                      <span class="sr-only">Close main menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.href"
                    class="
                      block
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-gray-700
                      hover:text-gray-900
                      hover:bg-gray-50
                    "
                    >{{ item.name }}</router-link
                  >
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <router-view></router-view>
      </div>
    </div>
    <Carousel v-show="$route.name == 'Home'"></Carousel>
  </div>
  <div class="mx-auto justify-center" ><LogoCloud></LogoCloud></div>
  
</template>
<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import Carousel from "./components/Carousel.vue";
import LogoCloud from "./components/LogoCloud.vue";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Tickets", href: "/tickets" },
  { name: "FAQ", href: "/faq" },
  { name: "Historique", href: "/history" },
];

export default {
  components: {
    Carousel,
    LogoCloud,
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

<style>
</style>
