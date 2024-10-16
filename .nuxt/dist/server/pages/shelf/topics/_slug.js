exports.ids = [6];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shelf/topics/_slug.vue?vue&type=template&id=4a4f566a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1 class=\"mt-6 text-2xl font-bold capitalize\"><span class=\"text-3xl font-bold mr-3\">"+_vm._ssrEscape("#"+_vm._s(_vm.topic.name))+"</span> <span class=\"text-sm uppercase\">"+_vm._ssrEscape(_vm._s(_vm.topic.taggings_count)+" articles")+"</span></h1> "),_c('CustomBorder'),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"mt-8\">","</section>",[_vm._ssrNode("<div class=\"container mx-auto px-1 md:px-4\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4\">","</div>",_vm._l((_vm.articles),function(article){return _c('ArticleCard',{key:article.content.title,attrs:{"slug":("/shelf/" + (article.slug)),"title":article.content.title,"description":article.content.intro,"author":article.content.author,"date":article.content.date.toDateString()}})}),1)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shelf/topics/_slug.vue?vue&type=template&id=4a4f566a&

// EXTERNAL MODULE: external "lodash/kebabCase"
var kebabCase_ = __webpack_require__(61);
var kebabCase_default = /*#__PURE__*/__webpack_require__.n(kebabCase_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shelf/topics/_slug.vue?vue&type=script&lang=js&
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
// import { createSEOMeta } from '@/utils/seo';

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    app,
    params
  }) {
    // Find tag based on the slug
    const {
      data: tagsData
    } = await app.$storyapi.get('cdn/tags/');
    const topic = tagsData.tags.find(t => kebabCase_default()(t.name) === params.slug); // Fetch articles

    const {
      data: articlesData
    } = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      resolve_relations: 'author',
      with_tag: topic.name
    });
    const articles = articlesData.stories.map(story => {
      story.content.date = new Date(story.content.date);
      return story;
    });
    return {
      topic,
      articles
    };
  },

  head() {
    return {
      title: `${this.topic.name} - Kenneth Jimmy`
    };
  }

});
// CONCATENATED MODULE: ./pages/shelf/topics/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var topics_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/shelf/topics/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  topics_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4048551c"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CustomBorder: __webpack_require__(63).default,ArticleCard: __webpack_require__(83).default})


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("8c9d61c6", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/utility/CustomBorder.vue?vue&type=template&id=24ddb798&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-4 w-32 bg-kjColorPrime kj-border"},[_vm._ssrNode("<div class=\"w-2 h-2 rounded-full bg-kjColorPrime kj-border__elips\" data-v-24ddb798></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utility/CustomBorder.vue?vue&type=template&id=24ddb798&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/utility/CustomBorder.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24ddb798",
  "25710734"
  
)

/* harmony default export */ var CustomBorder = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kj-border[data-v-24ddb798]{position:relative;height:.2rem}.kj-border__elips[data-v-24ddb798]{position:absolute;top:-.2rem;left:-.2rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/ArticleCard.vue?vue&type=template&id=5d0caf4b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"card p-4 md:p-8",attrs:{"to":_vm.slug}},[_c('header',{staticClass:"text-2xl font-bold capitalize mb-3 leading-8"},[_vm._v("\n    "+_vm._s(_vm.title)+"\n  ")]),_vm._v(" "),_c('p',{staticClass:"text-lg"},[_vm._v(_vm._s(_vm.description))]),_vm._v(" "),_c('footer',{staticClass:"flex items-center absolute bottom-0 mb-3"},[_c('img',{staticClass:"w-10 rounded-full border-4 border-kjColorSecondary",attrs:{"src":_vm.author.content.Avatar.filename,"alt":_vm.author.content.name}}),_vm._v(" "),_c('div',{staticClass:"ml-6"},[_c('p',{staticClass:"font-bold text-sm"},[_vm._v(_vm._s(_vm.author.name))]),_vm._v(" "),_c('p',{staticClass:"text-xs"},[_vm._v(_vm._s(_vm.date))])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ui/ArticleCard.vue?vue&type=template&id=5d0caf4b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/ArticleCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ArticleCardvue_type_script_lang_js_ = ({
  props: {
    title: String,
    slug: String,
    description: String,
    author: Object,
    date: String
  }
});
// CONCATENATED MODULE: ./components/ui/ArticleCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_ArticleCardvue_type_script_lang_js_ = (ArticleCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ui/ArticleCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_ArticleCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4378e891"
  
)

/* harmony default export */ var ArticleCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map