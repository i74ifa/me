<script setup>
import HeaderCard from "@/Components/Header-card.vue";
import { computed, onMounted, ref } from "@vue/runtime-core";
import LinuxIcon from "../Components/LinuxIcon.vue";
import Navigation from "../Components/navigation.vue";
import router from "../router";
import data from './../data';

const aboutMe = data.aboutMe;
const experiences = {
  php: '<span>خبرة<span class="badge-basic">3</span>سنوات عملت على الكثير منالمشاريع الصغيرة المتوسطة</span>',
  Laravel:
    "لدي خبرة في هذا الاطار اكثر من سنتين وعملت على مشاريع متوسطة وكبيرة",
  mySQL: "خبرة في تخطيط وربط الجداول",
  VueJS: "خبرة متوسطة وتم العمل على مشاريع كثيرة مع laravel 👌🏻",
  TailwindCSS:
    'عمل ماهو مطلوب مني بحكم ان لدي خبرة في <span class="badge-green">html</span> <span class="badge-green">CSS</span>',
};
const accounts = { twitter: "تويتر", github: "قيت هُب", telegram: "تيليقرام" };
const accountsUrl = {
  telegram: 'https://t.me/i74ifa',
  twitter: 'https://twitter.com/i74ifa',
  github: 'https://github.com/i74ifa'
}

const isOpened = ref(false) 

</script>

<script>

export default {
  data() {
    return {
      app: Object,
    }
  },
  mounted() {
    this.app = computed(() => this.$page.props).value
  },
  methods: {
    gotoAccount(event) {
      if (!this.isOpened) { // return before opened
        return;
      }
      const key = event.target.dataset.account
      router.go(this.accountsUrl[key])
      window.open("https://www.mozilla.org/", "mozillaTab");
      // window.open(this.accountsUrl[key], '_blank');
    }
  }
}

</script>
<template>
  <Navigation :dir="app.dir" />

  <div class="renders-classes hidden badge-basic"></div>
  <div class="main pt-6 mt-20">
    <HeaderCard :name="aboutMe.name" :desc="aboutMe.desc" />
    <div
      class="card mt-5"
      :class="app.dir == 'rtl' ? 'text-right' : ''"
      :dir="app.dir"
      id="experiences"
    >
      <h3 class="title">{{ app.lang == "ar" ? "الخِبرات" : "Experiences" }}</h3>
      <ul class="gap-x-2 text-gray-600 mt-3">
        <div class="grid grid-cols-[7.5rem_1fr] gap-y-1.5">
          <template v-for="(exp, title) in experiences" :key="title">
            <div class="mb-2">
              <span class="badge-green text-center">{{ title }}</span>
            </div>
            <span
              class="border-b border-stone-200 inline-block text-right mr-3"
              v-html="exp"
            ></span>
          </template>
        </div>
        <div class="px-2 mt-3">
          <h3
            class="
              text-right
              font-cairo
              text-lg
              font-bold
              border-b
              pb-1
              text-stone-600
            "
          >
            ديف اوبس (DevOps)
          </h3>
          <div class="flex flex-wrap gap-x-3 gap-y-2 mt-2" :dir="app.dir">
            <div class="badge-blue text-sm md:text-base">
              <LinuxIcon class="w-10" />
            </div>
            <div class="badge-blue">
              <svg
                class="w-10"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
                  fill="#DE4C36"
                />
              </svg>
            </div>
            <div class="badge-blue text-sm md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-10"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                />
              </svg>
            </div>
            <div class="badge-blue text-sm md:text-base">
              <svg
                class="w-10"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>NGINX icon</title>
                <path
                  d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z"
                />
              </svg>
            </div>
          </div>
        </div>
      </ul>
    </div>
    <div class="close-account-buttons fixed w-screen h-screen z-5 bg-transparent top-0 left-0" @click="isOpened = false" v-if="isOpened"></div>
    <div @click="isOpened = true" class="fixed top-50 bottom-1 flex flex-col items-center close-buttons" :class="{'open-buttons': isOpened}">
      <a href="https://twitter.com/i74ifa"
        class="z-10 block p-3 button-account hover:scale-110 text-white bg-blue-500 rounded-full transition-all active:bg-green-50 focus:outline-none focus:ring"
        :class="{'pointer-events-none': !isOpened}"
        target="_blank"
      >
      <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            />
          </svg>
        </a>
      <a href="https://t.me/i74ifa"
        class="z-20 block p-3 text-white bg-[#0088cc] rounded-full transition-all button-account hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
        :class="{'pointer-events-none': !isOpened}"
        target="_blank"
      >
      <span class="sr-only">تيليقرام</span>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
            />
          </svg>

        </a>
      <a href="https://github.com/i74ifa"
        class="z-30 block p-3 button-account hover:scale-110 text-white bg-neutral-800 rounded-full transition-all active:bg-blue-50 focus:outline-none focus:ring"
        :class="{'pointer-events-none': !isOpened}"
        target="_blank"
      >
      <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
    </div>
    <div class="h-12"></div>
  </div>
</template>
