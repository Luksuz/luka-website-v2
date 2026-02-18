<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-kjColorLight">
      <div
        v-for="(project, index) in caseStudies"
        :key="index"
        class="relative pf-card rounded-lg bg-white dark:bg-kjColorBlack border border-gray-200 dark:border-gray-700 overflow-hidden"
        @mouseenter="activeCard = index"
        @mouseleave="activeCard = null"
      >
        <!-- Header with company logo and info -->
        <div class="p-6 pb-4">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden p-1">
              <img
                :src="project.imgUrl"
                :alt="project.name"
                class="max-w-full max-h-full object-contain"
              />
            </div>
            <div>
              <h3 class="font-bold text-lg">{{ project.name }}</h3>
              <p class="text-sm text-kjColorSecondary">{{ project.subtitle }}</p>
            </div>
          </div>

          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Stats -->
        <div class="px-6 pb-4">
          <div class="flex flex-wrap gap-3">
            <div
              v-for="(stat, sIndex) in project.stats"
              :key="sIndex"
              class="bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 text-center"
            >
              <p class="text-sm font-bold text-kjColorPrime">{{ stat.value }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Tech stack -->
        <div class="px-6 pb-4">
          <p class="text-xs text-kjColorSecondary">{{ project.techUsed }}</p>
        </div>

        <!-- Client testimonial on hover -->
        <transition name="slide">
          <div
            v-if="activeCard === index"
            class="absolute bottom-0 left-0 right-0 bg-kjColorSecondary bg-opacity-95 p-4 rounded-b-lg"
          >
            <div class="flex items-center gap-3">
              <img
                :src="project.clientImg"
                :alt="project.clientName"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p class="text-sm font-bold text-kjColorLight">{{ project.clientName }}</p>
                <p class="text-xs text-gray-300">{{ project.clientRole }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { caseStudies } from '~/docs/portfolios.js';

export default {
  data() {
    return {
      caseStudies,
      activeCard: null
    };
  }
};
</script>

<style lang="scss" scoped>
.pf-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
</style>
