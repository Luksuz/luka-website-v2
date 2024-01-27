<template>
  <section class="max-w-xs m-auto mt-12 md:mt-32 text-center">
    <div class="capitalize font-bold text-lg">
      keep in touch
    </div>
    <div class="text-gray-600 text-sm mt-8">
      Varaždin, Croatia
    </div>
    <div class="mt-4 font-medium text-xl">
      <a href="mailto:lukamindjek@gmail.com">
        lukamindjek@gmail.com
      </a>
    </div>
    <div class="text-sm mt-4">
      <a href="tel:+2348133930845">
        (+385) 095 - 767 - 4099
      </a>
    </div>
    <div class="mt-12 flex justify-center">

      <div class="w-8 h-8 rounded-full ml-5">
        <a href="https://www.instagram.com/mindekluka/" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="text-2xl hidden md:block"
          />
        </a>
      </div>
      <div class="w-8 h-8 rounded-full ml-5 lg:block hidden">
        <a
          target="_blank"
          title="Contact Luka On WhatsApp"
          href="https://web.whatsapp.com/send?phone=+3850957674099&amp;text=Hi, I would like to get more information..."
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl" />
        </a>
      </div>
    </div>
  </section>
</template>
