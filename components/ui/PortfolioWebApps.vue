<template>
  <div>
    <AlertMessage
      v-if="showAlert"
      @alertJimmy="showHideAlert"
      :message="message"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-kjColorLight">
      <a :href="containers.link" target="_blank">
        <div
          class="relative pf-card rounded-lg"
          @mouseenter="showDetails(1)"
          @mouseleave="hideDetails"
        >
          <transition name="slide">
            <div
              v-if="showDetials1"
              class="py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"
            >
              <h2 class="font-bold text-lg text-kjColorLight capitalize">
                {{ containers.name }}
              </h2>
              <p class="text w-2/3 text-kjColorLight mt-2">
                {{ containers.techUsed }}
              </p>
            </div>
          </transition>

          <img src="../../assets/images/containers.png" alt="containers app" class="rounded-lg" />
        </div>
      </a>

      <a :href="ai_stories.link" target="_blank">
        <div
          class="relative pf-card rounded-lg"
          @mouseenter="showDetails(2)"
          @mouseleave="hideDetails"
        >
          <transition name="slide">
            <div
              v-if="showDetials2"
              class="py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"
            >
              <h2 class="font-bold text-lg text-kjColorLight capitalize">
                {{ ai_stories.name }}
              </h2>
              <p class="text w-2/3 text-kjColorLight mt-2">
                {{ ai_stories.techUsed }}
              </p>
            </div>
          </transition>

          <!-- <video class="rounded-lg" autoplay muted loop>
            <source :src="spasora.videoLink" type="video/mp4" />
            Your browser is not supported!
          </video> -->
          <img src="../../assets/images/ai-stories.webp" alt="ai_stories" class="rounded-lg" />
        </div>
      </a>
    
<!--@click="showHideAlert" for alert-->


      <a :href="intelliquery.link" target="_blank">
        <div
          class="relative pf-card rounded-lg"
          @mouseenter="showDetails(3)"
          @mouseleave="hideDetails"
        >
          <transition name="slide">
            <div
              v-if="showDetials3"
              class="py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"
            >
              <h2 class="font-bold text-lg text-kjColorLight capitalize">
                {{ intelliquery.name }}
              </h2>
              <p class="text w-2/3 text-kjColorLight mt-2">
                {{ intelliquery.techUsed }}
              </p>
            </div>
          </transition>

          <!-- <video class="rounded-lg" autoplay muted loop>
            <source :src="hairdresser_pozgaj.videoLink" type="video/mp4" />
            Your browser is not supported!
          </video> -->
          <img src="../../assets/images/intelliquery.png" alt="intelliquery" class="rounded-lg" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { intelliquery, containers, ai_stories } from '~/docs/portfolios.js';

export default {
  data() {
    return {
      showDetials1: false,
      showDetials2: false,
      showDetials3: false,
      showDetials4: false,
      showDetials5: false,
      showDetials6: false,
      ai_stories,
      containers,
      intelliquery,
      message: 'Luka appreciates you 😎. Thanks for visiting! :)',
      showAlert: false
    };
  },
  methods: {
    showDetails(num) {
      if (num == 1) {
        this.showDetials1 = true;
      }

      if (num == 2) {
        this.showDetials2 = true;
      }

      if (num == 3) {
        this.showDetials3 = true;
      }

      if (num == 4) {
        this.showDetials4 = true;
      }

      if (num == 5) {
        this.showDetials5 = true;
      }

      if (num == 6) {
        this.showDetials6 = true;
      }
    },
    hideDetails() {
      this.showDetials1 = false;
      this.showDetials2 = false;
      this.showDetials3 = false;
      this.showDetials4 = false;
      this.showDetials5 = false;
      this.showDetials6 = false;
    },
    showHideAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(10%);
  transition: all 150ms ease-in 0s;
}
</style>
