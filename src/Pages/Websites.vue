<script setup>
import HeaderCard from "@/Components/Header-card.vue";
import LinuxIcon from "../Components/LinuxIcon.vue";
import Navigation from "../Components/navigation.vue";


defineProps({
  name: String,
  desc: String,
  title: String,
  dir: String,
  lang: String,
  experiences: Object,
  accounts: Object,
});

const websites = [
  {
    id: "icons",
    title: "ايقونات",
    data: [
      {
        title: "HeroIcon",
        description:
          "الايقونات تم علمها لـ Tailwindcss تستطيع استخدماها في اي مشروع",
        url: "https://heroicons.com/",
      },
      {
        title: "Feather",
        description: "موقع ايقونات يحتوي على اكثر من 200 ايقونة بترخيص مجاني",
        url: "https://feathericons.com/",
      },
      {
        title: "CSS Icon",
        description:
          "موقع مميز جدا يتم رسم الايقونات بأستخدام CSS (تستطيع نسخها بصيغة SVG)",
        url: "https://css.gg/app",
      },
      {
        title: "Remix Icon",
        description: "الموقع المفضل 💞 مرتين اكثر من 2200 ايقونة مفتوحة المصدر",
        url: "https://remixicon.com/",
      },
      {
        title: "Iconhub",
        description:
          "وهذا برضوا مفضل ثلاث مرات لديه اكثر من 14 الف ايقونة تستطيع استخدامها 😉",
        url: "",
      },
      {
        title: "Icons Bootstrap",
        description:
          "واكيد ايقونات بوتستراب طبعا تقدر تستخدمها بدون استخدام بوتستراب",
        url: "https://icons.getbootstrap.com/",
      },
      {
        title: "Forge Icon",
        description:
          "ايقونات بتصميم جميل تحتوي على ايقونات المنتاجر مواقع التواصل الاجتماعي والتطبيقات",
        url: "https://icons.theforgesmith.com/",
      },
    ],
  },
  {
    id: "colors",
    title: "تنسيق واختيار الالوان",
    data: [
      {
        title: "ColorBox",
        description:
          "يمكنك من تنسيق الالوان بإستخدام الخوارزميات مع امكانية تصدير الالوان كـJSON",
        url: "",
      },
      {
        title: "GradientArt",
        description:
          "موقع او اداة لإنشاء خليفية بلونين (Gradient) بأسلوب البرامج",
        url: "",
      },
      {
        title: "Gradient Backgrounds",
        description: "انشاء او نسخ الوان جاهزة (Gradient)",
        url: "https://cssgradient.io/gradient-backgrounds/",
      },
      {
        title: "Adobe Color",
        description:
          "تصفح الالاف الالوان من مجموعة الوان Adobe او انشئ مجموعة الوان خاصة بك بإستخدام عجلة الالوان",
        url: "https://color.adobe.com/create",
      },
      {
        title: "Color Scheme",
        description: "مخطط الالوان مفتوح المصدر",
        url: "https://yeun.github.io/open-color/",
      },
      {
        title: "Duo",
        description: "ابحث عن الوان ثنائية متناسقة مع بعضها",
        url: "https://duo.alexpate.uk/",
      },
      {
        title: "Huey",
        description: "لوحة الوان سريعة (عشوائية) عبر قوس قزح",
        url: "https://huey.design/",
      },
    ],
  },
  {
    id: "illustrations",
    title: "الرسوم التوضيحية او Illustrations",
    data: [
      {
        title: "unDraw",
        description:
          "رسوم توضيحية مفتوحة المصدر مع امكانية اختيار الوانها لتناسب تصميمك",
        url: "https://undraw.co/illustrations",
      },
      {
        title: "ManyPixels",
        description: "اكثر من 2500 رسم توضيحي للتنزيل",
        url: "https://www.manypixels.co/gallery",
      },
      {
        title: "IRA Design",
        description: "رسوم توضيحية لتعزيز مشروعك",
        url: "https://iradesign.io/gallery/illustrations",
      },
      {
        title: "Illustration Kit",
        description: "رسوم توضيحية مفتوحة المصدر",
        url: "https://illustrationkit.com/illustrations",
      },
    ],
  },
  {
    id: "images",
    title: "صور عالية الدقة",
    data: [
      {
        title: "Unsplash",
        description: "اكثر من مليوني صورة بدقة عالية",
        url: "https://unsplash.com/",
      },
      {
        title: "shotstash",
        description: "صورة مجانية رايقة💞",
        url: "https://shotstash.com/",
      },
      {
        title: "barnimages",
        description: "صورة فوتوغرافية",
        url: "https://barnimages.com/",
      },

      {
        title: "Burst",
        description: "صورة بواسطة Shopify",
        url: "https://burst.shopify.com/",
      },

      {
        title: "Picjumbo",
        description: "صورة جميلة كثيرة🖤",
        url: "https://picjumbo.com/",
      },

      {
        title: "",
        description: "",
        url: "",
      },

      {
        title: "",
        description: "",
        url: "",
      },
    ],
  },
];


/**
 * 
 * before added 
 * make face
    * https://www.friendlyfaces.co/
 */
</script>

<template>
  <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=7" />
    <meta name="title" :content="title" />
    <meta
      name="description"
      content="افضل الموقع المجانية للمساعدة في تصميم وبرمجة المواقع"
    />
    <meta
      name="keywords"
      content="موقع تصميم, مواقع تنسيق الالوان, مواقع عمل الوان ثنائية"
    />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="ar" />
    <meta name="revisit-after" content="1 days" />
    <meta name="author" content="حذيفة جابر" />
    <title>{{ "مواقع تساعد في تصميم وبرمجة المواقع" }}</title>
  </Head>

  <Navigation dir="rtl" />
  <!-- background-color: #85FFBD;
background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
 -->
  <div
    class="
      w-40
      h-40
      md:w-72 md:h-72
      blur-lg
      rounded-full
      bg-gradient-to-tr
      from-[#D9AFD9]
      to-red-300
      lg:opacity-60
      fixed
      top-1/2
      right-1/4
      z-0
      -translate-y-60
    "
  ></div>
  <div
    class="
      w-32
      h-32
      md:w-52 md:h-52
      blur-lg
      rounded-full
      bg-gradient-to-tr
      from-[#85FFBD]
      to-[#FFFB7D]
      lg:opacity-60
      fixed
      top-1/2
      right-1/2
      z-1
      translate-x-1/2 translate-y-1/2
    "
  ></div>

  <div dir="rtl" class="relative mt-20">
    <div class="pt-6 max-w-screen-lg mx-auto">
      <div
        class="mb-7"
        v-for="category in websites"
        :key="category.title"
        :id="category.id"
      >
        <div class="text-stone-600 text-xl font-cairo font-medium mb-3 mr-2">
          {{ category.title }}
        </div>
        <div
          class="
            mx-1
            font-vaizir
            text-stone-500
            font-medium
            grid grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-x-5 gap-y-4
          "
        >
          <div
            class="card-website"
            v-for="website in category.data"
            :key="website.title"
          >
            <a :href="website.url" target="_blank">
              <h3 class="text-xl lg:text-2xl py-5 font-bold text-stone-500">
                {{ website.title }}
              </h3>
              <p class="md:text-sm text-xs">{{ website.description }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
body {
  background: #f2f2f2;
}

.card-website {
  @apply py-4 rounded-2xl hover:bg-white cursor-pointer px-5 text-center;
  border-radius: 28px;
  background: linear-gradient(145deg, #ffffffe2, #fefefee2);
  box-shadow: 10px 10px 25px #e1e1e19a, -10px -10px 25px #f9f9f99a;
}

@media (min-width: 756px) {
  body {
    background: #fafafa;
  }
  .card-website {
    background: linear-gradient(145deg, #fefefef4, #f2f2f2f4);
    box-shadow: 10px 10px 35px #e1e1e18c, -10px -10px 35px #f9f9f98c;
  }
}
</style>