<template>
  <div class="container mx-auto px-4 mt-4">
    <header>
      <h2 class="text-3xl md:text-5xl leading-tight">
        {{ article.content.title }}
      </h2>
      <div class="flex items-center mt-6">
        <img
          class="w-20 rounded-full border-4 border-kjColorSecondary"
          :src="author.content.Avatar.filename"
          :alt="author.content.name"
        />
        <div class="ml-6">
          <p class="text-xl font-bold">{{ author.name }}</p>
          <p class="text-sm mt-1">
            {{ article.content.date.toLocaleDateString() }}
          </p>
        </div>
      </div>
    </header>
    <div class="mt-4 flex flex-wrap">
      <nuxt-link
        v-for="tag in article.tag_list"
        :key="tag"
        :to="`/shelf/topics/${tagSlug(tag)}`"
        class="rounded-full text-kjColorLight bg-kjColorSecondary uppercase text-sm mr-2 mb-2 px-2 py-1"
        >{{ tag }}
      </nuxt-link>
    </div>
    <div v-html="$md.render(article.content.long_text)" class="prose mt-8">
      {{ article.content.long_text }}
    </div>
  </div>
</template>

<script>
import { createSEOMeta } from '@/utils/seo';
import kebabCase from 'lodash/kebabCase';

export default {
  async asyncData({ app, route, error }) {
    // Get the slug from the route
    const slug = route.params.slug;

    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      by_slugs: '*/' + slug,
      resolve_relations: 'author'
    });

    const article = res.data.stories[0];
    if (!article) return error(`Article with slug ${slug} not found`);

    article.content.date = new Date(article.content.date);

    return { article, author: article.content.author };
  },
  methods: {
    tagSlug(tag) {
      return kebabCase(tag);
    }
  },
  head() {
    const url = this.article.slug;
    const { title, intro, Asset } = this.article.content;

    return {
      title,
      meta: createSEOMeta({ title, intro, image: Asset.filename, url })
    };
  }
};
</script>
