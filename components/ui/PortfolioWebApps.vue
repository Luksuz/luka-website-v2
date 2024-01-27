<template>
  <div>
    <AlertMessage
      v-if="showAlert"
      @alertJimmy="showHideAlert"
      :message="message"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-kjColorLight">
      <a :href="book_reviews.link" target="_blank">
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
                {{ book_reviews.name }}
              </h2>
              <p class="text w-2/3 text-kjColorLight mt-2">
                {{ book_reviews.techUsed }}
              </p>
            </div>
          </transition>

          <img src="../../assets/images/book-reviews.webp" alt="book_reviews" class="rounded-lg" />
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


      <a :href="hairdresser_pozgaj.link" target="_blank">
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
                {{ hairdresser_pozgaj.name }}
              </h2>
              <p class="text w-2/3 text-kjColorLight mt-2">
                {{ hairdresser_pozgaj.techUsed }}
              </p>
            </div>
          </transition>

          <!-- <video class="rounded-lg" autoplay muted loop>
            <source :src="hairdresser_pozgaj.videoLink" type="video/mp4" />
            Your browser is not supported!
          </video> -->
          <img src="../../assets/images/getactive-ai.webp" alt="hairdresser_pozgaj" class="rounded-lg" />
        </div>
      </a>

      <a :href="blog.link" target="_blank">
        <div
          class="relative pf-card rounded-lg"
          @mouseenter="showDetails(4)"
          @mouseleave="hideDetails"
        >
          <transition name="slide">
            <div
              v-if="showDetials4"
              class="py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"
            >
              <h2 class="font-bold text-lg text-kjColorLight capitalize">
                {{ blog.name }}
              </h2>
              <p class="text w-2/3 text-kjColorLight mt-2">
                {{ blog.techUsed }}
              </p>
            </div>
          </transition>

          <!-- <video class="rounded-lg" autoplay muted loop>
            <source :src="blog.videoLink" type="video/mp4" />
            Your browser is not supported!
          </video> -->
          <img src="../../assets/images/luka-blog.webp" alt="blog" class="rounded-lg" />
        </div>
      </a>

      <a :href="hairdresser_pozgaj.link" target="_blank">
        <div
          class="relative pf-card rounded-lg"
          @mouseenter="showDetails(5)"
          @mouseleave="hideDetails"
        >
          <transition name="slide">
            <div
              v-if="showDetials5"
              class="py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"
            >
              <h2 class="font-bold text-lg text-kjColorLight capitalize">
                {{ hairdresser_pozgaj.name }}
              </h2>
              <p class="text w-2/3 text-kjColorLight mt-2">
                {{ hairdresser_pozgaj.techUsed }}
              </p>
            </div>
          </transition>

          <!-- <video class="rounded-lg" autoplay muted loop>
            <source :src="hairdresser_pozgaj.videoLink" type="video/mp4" />
            Your browser is not supported!
          </video> -->
          <img src="../../assets/images/salon-pozgaj.webp" alt="hairdresser_pozgaj" class="rounded-lg" />
        </div>
      </a>


    </div>
  </div>
</template>

<script>
import { hairdresser_pozgaj, get_active, ai_stories, book_reviews, blog } from '~/docs/portfolios.js';

export default {
  data() {
    return {
      showDetials1: false,
      showDetials2: false,
      showDetials3: false,
      showDetials4: false,
      showDetials5: false,
      showDetials6: false,
      hairdresser_pozgaj,
      get_active,
      ai_stories,
      book_reviews,
      blog,
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
