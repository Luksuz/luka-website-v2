exports.ids = [4];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shelf/_slug.vue?vue&type=template&id=616984f6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container mx-auto px-4 mt-4"},[_vm._ssrNode("<header><h2 class=\"text-3xl md:text-5xl leading-tight\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.article.content.title)+"\n    ")+"</h2> <div class=\"flex items-center mt-6\"><img"+(_vm._ssrAttr("src",_vm.author.content.Avatar.filename))+(_vm._ssrAttr("alt",_vm.author.content.name))+" class=\"w-20 rounded-full border-4 border-kjColorSecondary\"> <div class=\"ml-6\"><p class=\"text-xl font-bold\">"+_vm._ssrEscape(_vm._s(_vm.author.name))+"</p> <p class=\"text-sm mt-1\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.article.content.date.toLocaleDateString())+"\n        ")+"</p></div></div></header> "),_vm._ssrNode("<div class=\"mt-4 flex flex-wrap\">","</div>",_vm._l((_vm.article.tag_list),function(tag){return _c('nuxt-link',{key:tag,staticClass:"rounded-full text-kjColorLight bg-kjColorSecondary uppercase text-sm mr-2 mb-2 px-2 py-1",attrs:{"to":("/shelf/topics/" + (_vm.tagSlug(tag)))}},[_vm._v(_vm._s(tag)+"\n    ")])}),1),_vm._ssrNode(" <div class=\"prose mt-8\">"+(_vm._s(_vm.$md.render(_vm.article.content.long_text)))+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shelf/_slug.vue?vue&type=template&id=616984f6&

// CONCATENATED MODULE: ./utils/seo.js
const createSEOMeta = data => [{
  hid: 'og:title',
  property: 'og:title',
  content: data.title
}, {
  hid: 'description',
  name: 'description',
  content: data.intro
}, {
  hid: 'og:description',
  property: 'og:description',
  content: data.intro
}, {
  hid: 'og:image',
  property: 'og:image',
  content: data.image
}, {
  hid: 'og:url',
  property: 'og:url',
  content: process.env.HOST_NAME + '/' + data.url
}, {
  hid: 'twitter:card',
  name: 'twitter:card',
  content: data.cardType || 'summary_large_image'
}];
// EXTERNAL MODULE: external "lodash/kebabCase"
var kebabCase_ = __webpack_require__(61);
var kebabCase_default = /*#__PURE__*/__webpack_require__.n(kebabCase_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shelf/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    app,
    route,
    error
  }) {
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
    return {
      article,
      author: article.content.author
    };
  },

  methods: {
    tagSlug(tag) {
      return kebabCase_default()(tag);
    }

  },

  head() {
    const url = this.article.slug;
    const {
      title,
      intro,
      Asset
    } = this.article.content;
    return {
      title,
      meta: createSEOMeta({
        title,
        intro,
        image: Asset.filename,
        url
      })
    };
  }

});
// CONCATENATED MODULE: ./pages/shelf/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var shelf_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/shelf/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shelf_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "179c9c92"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map