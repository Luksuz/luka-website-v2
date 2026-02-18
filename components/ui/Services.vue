<template>
  <section class="mt-12 md:mt-32 services">
    <h1 class="capitalize text-3xl md:text-4xl font-bold leading-none">
      my top skills
    </h1>
    <p class="capitalize mt-2 text-lg">what i do</p>
    <CustomBorder />
    <div
      class="grid grid-cols-1 lg:grid-cols-2 mt-10 rounded-lg bg-kjColorLight dark:bg-kjColorBlack border-2 border-kjColorLight"
    >
      <div class="p-5 md:mx-8 services__data">
        <h2 class="text-lg font-black uppercase mb-3 data-2">
          End-to-End Applications
        </h2>
        <p class="mb-5 data-2">
          I specialize in designing and building complete end-to-end solutions. From front-end development using frameworks like React and Next.js to back-end services with Node.js or Django, I ensure the entire architecture is robust, scalable, and maintainable. By leveraging cloud platforms like AWS and GCP, I deliver secure, efficient applications with seamless integrations, responsive UIs, and optimized performance.
        </p>

        <h2 class="text-lg font-black uppercase mb-3 data-1">
          AI Development
        </h2>
        <p class="mb-5 data-1">
          I have deep expertise in AI, particularly in NLP and machine learning. I develop custom AI models for tasks like text analysis, chatbot systems, and intelligent agents. Using frameworks such as TensorFlow, PyTorch, and Hugging Face, I create solutions that enable predictive analytics, automation, and complex decision-making processes, always aiming for high accuracy and real-world applicability.
        </p>

        <!-- <h2 class="text-lg font-black uppercase mb-3 data-3">
          native
        </h2>
        <p class="data-3">
          Use Flutter for building simple native mobile applications. Flutter is
          modern, fast, cross-platform, and popular.
        </p> -->
        <div class="mt-8 see-project-btn">
          <Button displayTitle="SEE CASE STUDIES" linkTo="/portfolio" />
        </div>
      </div>
      <div class="hidden lg:block illustration">
        <img
          class="illustration__img illustration__img--1"
          src="../../assets/images/Illustrations/illustration-01.png"
          alt="illustration 1"
        />
        <img
          class="illustration__img illustration__img--2"
          src="../../assets/images/Illustrations/illustration-02.png"
          alt="illustration 2"
        />
        <img
          class="illustration__img illustration__img--3"
          src="../../assets/images/Illustrations/illustration-03.png"
          alt="illustration 3"
        />
        <img
          class="illustration__img illustration__img--4"
          src="../../assets/images/Illustrations/illustration-04.png"
          alt="illustration 4"
        />
        <img
          class="illustration__img illustration__img--5"
          src="../../assets/images/Illustrations/illustration-05.png"
          alt="illustration 5"
        />
        <img
          class="illustration__img illustration__img--6"
          src="../../assets/images/Illustrations/illustration-06.png"
          alt="illustration 6"
        />
        <img
          class="illustration__img illustration__img--7"
          src="../../assets/images/Illustrations/illustration-07.png"
          alt="illustration 7"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, Back, Elastic, Expo } from 'gsap';

export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'Web development',
          des: 'I build end-to-end AI-powered applications.'
        },
        {
          title: 'API development',
          des: "I build scalable server side API's"
        },
        {
          title: 'Artificial Inteligence',
          des: 'From Natural Language Processing to Computer Vision, i got you covered.'
        }
      ]
    };
  },
  mounted() {
    this.animateServices();
  },
  methods: {
    animateServices() {
  const { services } = this.$refs;
  let tl = new TimelineMax({ onUpdate: updatePercentage });

  tl.from('.illustration__img--1', 0.1, { scale: 0.5 }, 0)
    .from('.illustration__img--2', 0.1, { opacity: 0, y: -50 }, 0.1)
    .from('.illustration__img--3', 0.1, { opacity: 0, y: -50 }, 0.2)
    .from('.data-1', 0.2, { opacity: 0, stagger: 0.6 }, 0.3)
    .from('.illustration__img--5', 0.1, { opacity: 0, x: 100 }, 0.5)
    .from('.illustration__img--6', 0.1, { opacity: 0, x: -100 }, 0.7)
    .from('.data-2', 0.2, { opacity: 0, stagger: 0.6 }, 0.8)
    .from('.illustration__img--4', 0.1, { opacity: 0, x: -100 }, 1)
    .from('.illustration__img--7', 0.1, { opacity: 0, x: 100 }, 1.2)
    .from('.data-3', 0.2, { opacity: 0, stagger: 0.6 }, 1.4)
    .to('.see-project-btn', 0.2, { opacity: 1 }, 1.5);

      const scene = this.$scrollmagic
        .scene({
          triggerElement: '.services',
          triggerHook: 0,
          duration: '300%'
        })
        .setPin('.services')
        .setTween(tl);

      this.$scrollmagic.addScene(scene);

      function updatePercentage() {
        tl.progress();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.illustration {
  position: relative;
  height: 30rem;

  &__img {
    position: absolute;
    bottom: 0;
    width: 80%;

    &--1 {
      left: 0;
      z-index: 2;
    }

    &--2 {
      top: 25%;
      z-index: 1;
    }

    &--3 {
      top: -2%;
    }

    &--4 {
      top: -20%;
      left: -20%;
    }

    &--5 {
      top: -20%;
      right: -5%;
    }

    &--7 {
      top: -2%;
      right: -2%;
    }

    &--6 {
      top: 0;
      left: -22%;
    }
  }
}

.services {
  &__data {
    text-align: center;
  }
}

.see-project-btn {
  opacity: 0;
}
</style>
