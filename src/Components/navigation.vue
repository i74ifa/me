<script>

export default {

}

</script>
<template>
    <header class="bg-white left-0 top-0 shadow-gray-200 fixed w-full z-50 bg-opacity-80 backdrop-blur-md">
        <div class="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
            <router-link class="block text-teal-600" to="/">
                <span class="sr-only">Home</span>
            </router-link>

            <div class="flex items-center  flex-1 md:justify-between whitespace-nowrap flex-nowrap overflow-x-auto overflow-y-hidden">
                <nav class="block" aria-labelledby="header-navigation">
                    <h2 class="sr-only" id="header-navigation">اعلى الموقع</h2>
                    <ul class="flex items-center gap-6 text-sm font-cairo">
                        <li>
                            <router-link class="text-stone-500 transition hover:text-stone-500/75" to="/">
                                نبذة عني
                            </router-link>
                        </li>

                        <li>
                            <a href="/#experience" class="text-stone-500 transition hover:text-stone-500/75" to="/#experiences">
                                الخِبرات
                            </a>
                        </li>

                        <li>
                            <router-link to="/websites" class="text-stone-500 transition hover:text-stone-500/75">
                                مواقع مفيدة
                            </router-link>
                        </li>

                        <li>
                            <a class="text-stone-500 transition hover:text-stone-500/75" href="/">
                                مشاريع
                            </a>
                        </li>

                        <li>
                            <a class="text-stone-500 transition hover:text-stone-500/75" href="/">
                                حِساباتي
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>