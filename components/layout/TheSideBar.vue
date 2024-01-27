<template>
  <div>
    <div class="w-32">
      <nuxt-link to="/">
        <img
          class="w-14 pb-2 inline-block"
          src="~/assets/images/logo.png"
          alt="logo"
        />
      </nuxt-link>
      <div class="md:mt-64">
        <div class="md:h-6 md:w-6 hidden md:block">
          <a href="https://www.linkedin.com/in/luka-min%C4%91ek-a46012262/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl" />
          </a>
        </div>
        <div class="md:h-6 md:w-6 md:mt-5 hidden md:block">
          <a href="https://github.com/luksuz" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" class="text-2xl" />
          </a>
        </div>
        <div class="md:h-6 md:w-6 md:mt-5 hidden md:block">
          <a href="https://twitter.com/luksuzWL" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" class="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
