export const createSEOMeta = data => [
  { hid: 'og:title', property: 'og:title', content: data.title },
  { hid: 'description', name: 'description', content: data.intro },
  {
    hid: 'og:description',
    property: 'og:description',
    content: data.intro
  },
  { hid: 'og:image', property: 'og:image', content: data.image },
  {
    hid: 'og:url',
    property: 'og:url',
    content: process.env.HOST_NAME + '/' + data.url
  },
  { hid: 'og:type', property: 'og:type', content: 'website' },
  { hid: 'og:site_name', property: 'og:site_name', content: 'Luka Minđek | AI Engineer' },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: data.cardType || 'summary_large_image'
  },
  { hid: 'twitter:title', name: 'twitter:title', content: data.title },
  { hid: 'twitter:description', name: 'twitter:description', content: data.intro },
  { hid: 'twitter:image', name: 'twitter:image', content: data.image },
  { hid: 'keywords', name: 'keywords', content: 'AI engineer, machine learning, NLP, computer vision, PyTorch, TensorFlow, Hugging Face, agentic systems, custom AI models, Luka Minđek, MindX' },
  { hid: 'author', name: 'author', content: 'Luka Minđek' },
  { hid: 'robots', name: 'robots', content: 'index, follow' }
];
