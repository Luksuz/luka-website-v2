import MarkdownIt from 'markdown-it'

const handlePlugin = (plugin) => plugin.default || plugin

export default ({ app }, inject) => {
  const md = new MarkdownIt('default', {"html":true})

  md.use(handlePlugin(require('markdown-it-prism')))

  inject('md', md)
}
