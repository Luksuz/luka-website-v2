<template>
  <div class="md:w-3/4 px-2 py-4 mt-12 md:mt-32 m-auto">
    <div class="select-none mb-6 w-full">
      <div class="px-4 relative">
        <div
          class="bg-kjColorLight dark:bg-kjColorBlack rounded-lg shadow-2xl border-2 border-kjColorLight"
        >
          <div class="p-4 grid md:gap-5 grid-cols-1 md:grid-cols-2">
            <img
              class="w-128 rounded-lg"
              src="../../assets/images/luka.jpeg"
            />
            <div class="pt-10">
              <div>
                <font-awesome-icon
                  :icon="['fas', 'microscope']"
                  class="text-lg inline-block"
                />
                <p class="inline-block ml-1">
                  Building
                  <a
                    target="_blank"
                    class="font-bold underline"
                    >AI</a
                  >
                </p>
              </div>

              <div>
                <font-awesome-icon
                  :icon="['fas', 'users']"
                  class="text-lg inline-block"
                />
                <p class="inline-block ml-1">
                  Scaling
                  <a
                    target="_blank"
                    class="font-bold underline"
                    >infrastructure</a
                  >
                </p>
              </div>

              <div class="mt-2">
                <font-awesome-icon
                  :icon="['fas', 'seedling']"
                  class="text-lg inline-block"
                />
                <p class="inline-block ml-1">
                  Fancy Web3
                </p>
              </div>

              <div class="mt-2">
                <font-awesome-icon
                  :icon="['fas', 'chess-knight']"
                  class="text-lg inline-block"
                />
                <p class="inline-block ml-1">
                  Play amateur chess
                </p>
              </div>

              <div class="mt-2">
                <p class="inline-block ml-1">
                  <span class="font-bold">Fun Fact:</span> This photo is AI generated
                </p>
              </div>
            </div>
          </div>

          <div class="p-4">
            <div class="mt-10">
              <div class="text-lg mb-5">
                <span class="font-medium uppercase">README</span>
                <CustomBorder />
              </div>

              <p>
                I am an AI engineer with 8+ years of experience designing, training, and deploying
                custom AI systems across CPUs, GPUs (NVIDIA and AMD), and TPUs.
              </p>

              <p class="mt-2">
                My expertise spans Natural Language Processing, Computer Vision, agentic systems,
                and custom AI models built with PyTorch, TensorFlow, and Hugging Face.
                I've delivered 50+ projects with 30+ ML models achieving 95%+ accuracy.
              </p>

              <p class="mt-2">
                Outside of coding, I enjoy working out, hiking, playing chess, and continuously finding ways to improve myself.
              </p>

              <p class="mt-4">
                Learn more at <a href="https://mindx.global" target="_blank" rel="noopener" class="font-bold underline text-kjColorPrime">mindx.global</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numOfYears: 5
    };
  },
  mounted() {
    this.numOfYears = new Date().getFullYear() - 2022;
  }
};
</script>
