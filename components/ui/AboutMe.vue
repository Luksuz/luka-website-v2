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
              src="../../assets/images/ai-stories.webp"
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
                  <span class="font-bold">Fun Fact:</span> I am a pretty good
                  dancer 😁
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
                I am an exceptional software engineer with solid knowledge and
                experience in the ever-evolving realm of technology and as a
                person, I have a strong discipline to learn, improve, and
                evolve.
              </p>

              <p class="mt-2">
                My career has been marked by a dedication to technical
                excellence and my expertise lies within the JavaScript and Python
                ecosystem, where I've honed my skills to deliver efficient and
                user-centric software solutions. With a passion for solving
                complex problems, I am committed to pushing the boundaries of
                what's possible in software development.
              </p>

              <p class="mt-2">
                When I am not coding, I am either playing chess, video
                games, reading books or watching movies. Other times I am reading newsletters
                or upskilling.
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
