exports.ids = [1];
exports.modules = Array(62).concat([
/* 62 */
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
/* 63 */
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
  "b521afd4"
  
)

/* harmony default export */ var CustomBorder = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomBorder_vue_vue_type_style_index_0_id_24ddb798_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kj-border[data-v-24ddb798]{position:relative;height:.2rem}.kj-border__elips[data-v-24ddb798]{position:absolute;top:-.2rem;left:-.2rem}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ca0e3e24", content, true, context)
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6dcb04f3", content, true, context)
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/book-reviews.1bc31e4.webp";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ai-stories.30f2c12.webp";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/getactive-ai.0117b5a.webp";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/luka-blog.85fe339.webp";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/salon-pozgaj.df78a0f.webp";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ipa-mastery.246981f.jpg";

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioWebApps_vue_vue_type_style_index_0_id_c9203976_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioWebApps_vue_vue_type_style_index_0_id_c9203976_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioWebApps_vue_vue_type_style_index_0_id_c9203976_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioWebApps_vue_vue_type_style_index_0_id_c9203976_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioWebApps_vue_vue_type_style_index_0_id_c9203976_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortfolioWebApps_vue_vue_type_style_index_0_id_c9203976_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".slide-enter-active[data-v-c9203976],.slide-leave-active[data-v-c9203976]{transition:transform .2s ease}.slide-enter[data-v-c9203976],.slide-leave-to[data-v-c9203976]{transform:translateY(10%);transition:all .15s ease-in 0s}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertMessage_vue_vue_type_style_index_0_id_72631810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertMessage_vue_vue_type_style_index_0_id_72631810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertMessage_vue_vue_type_style_index_0_id_72631810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertMessage_vue_vue_type_style_index_0_id_72631810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertMessage_vue_vue_type_style_index_0_id_72631810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertMessage_vue_vue_type_style_index_0_id_72631810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".alert[data-v-72631810]{top:0;left:50%;transform:translateX(-50%)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("303fe36d", content, true, context)
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7c1dab98", content, true, context)
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/PortfolioWebApps.vue?vue&type=template&id=c9203976&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.showAlert)?_c('AlertMessage',{attrs:{"message":_vm.message},on:{"alertJimmy":_vm.showHideAlert}}):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-kjColorLight\" data-v-c9203976>","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.book_reviews.link))+" target=\"_blank\" data-v-c9203976>","</a>",[_vm._ssrNode("<div class=\"relative pf-card rounded-lg\" data-v-c9203976>","</div>",[_c('transition',{attrs:{"name":"slide"}},[(_vm.showDetials1)?_c('div',{staticClass:"py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"},[_c('h2',{staticClass:"font-bold text-lg text-kjColorLight capitalize"},[_vm._v("\n                "+_vm._s(_vm.book_reviews.name)+"\n              ")]),_vm._v(" "),_c('p',{staticClass:"text w-2/3 text-kjColorLight mt-2"},[_vm._v("\n                "+_vm._s(_vm.book_reviews.techUsed)+"\n              ")])]):_vm._e()]),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",__webpack_require__(68)))+" alt=\"book_reviews\" class=\"rounded-lg\" data-v-c9203976>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.ai_stories.link))+" target=\"_blank\" data-v-c9203976>","</a>",[_vm._ssrNode("<div class=\"relative pf-card rounded-lg\" data-v-c9203976>","</div>",[_c('transition',{attrs:{"name":"slide"}},[(_vm.showDetials2)?_c('div',{staticClass:"py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"},[_c('h2',{staticClass:"font-bold text-lg text-kjColorLight capitalize"},[_vm._v("\n                "+_vm._s(_vm.ai_stories.name)+"\n              ")]),_vm._v(" "),_c('p',{staticClass:"text w-2/3 text-kjColorLight mt-2"},[_vm._v("\n                "+_vm._s(_vm.ai_stories.techUsed)+"\n              ")])]):_vm._e()]),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",__webpack_require__(69)))+" alt=\"ai_stories\" class=\"rounded-lg\" data-v-c9203976>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.hairdresser_pozgaj.link))+" target=\"_blank\" data-v-c9203976>","</a>",[_vm._ssrNode("<div class=\"relative pf-card rounded-lg\" data-v-c9203976>","</div>",[_c('transition',{attrs:{"name":"slide"}},[(_vm.showDetials3)?_c('div',{staticClass:"py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"},[_c('h2',{staticClass:"font-bold text-lg text-kjColorLight capitalize"},[_vm._v("\n                "+_vm._s(_vm.hairdresser_pozgaj.name)+"\n              ")]),_vm._v(" "),_c('p',{staticClass:"text w-2/3 text-kjColorLight mt-2"},[_vm._v("\n                "+_vm._s(_vm.hairdresser_pozgaj.techUsed)+"\n              ")])]):_vm._e()]),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",__webpack_require__(70)))+" alt=\"hairdresser_pozgaj\" class=\"rounded-lg\" data-v-c9203976>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.blog.link))+" target=\"_blank\" data-v-c9203976>","</a>",[_vm._ssrNode("<div class=\"relative pf-card rounded-lg\" data-v-c9203976>","</div>",[_c('transition',{attrs:{"name":"slide"}},[(_vm.showDetials4)?_c('div',{staticClass:"py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"},[_c('h2',{staticClass:"font-bold text-lg text-kjColorLight capitalize"},[_vm._v("\n                "+_vm._s(_vm.blog.name)+"\n              ")]),_vm._v(" "),_c('p',{staticClass:"text w-2/3 text-kjColorLight mt-2"},[_vm._v("\n                "+_vm._s(_vm.blog.techUsed)+"\n              ")])]):_vm._e()]),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",__webpack_require__(71)))+" alt=\"blog\" class=\"rounded-lg\" data-v-c9203976>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.hairdresser_pozgaj.link))+" target=\"_blank\" data-v-c9203976>","</a>",[_vm._ssrNode("<div class=\"relative pf-card rounded-lg\" data-v-c9203976>","</div>",[_c('transition',{attrs:{"name":"slide"}},[(_vm.showDetials5)?_c('div',{staticClass:"py-4 px-8 w-full bg-kjColorSecondary bg-opacity-75 absolute bottom-0 z-50 rounded-br-lg rounded-bl-lg"},[_c('h2',{staticClass:"font-bold text-lg text-kjColorLight capitalize"},[_vm._v("\n                "+_vm._s(_vm.hairdresser_pozgaj.name)+"\n              ")]),_vm._v(" "),_c('p',{staticClass:"text w-2/3 text-kjColorLight mt-2"},[_vm._v("\n                "+_vm._s(_vm.hairdresser_pozgaj.techUsed)+"\n              ")])]):_vm._e()]),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",__webpack_require__(72)))+" alt=\"hairdresser_pozgaj\" class=\"rounded-lg\" data-v-c9203976>")],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ui/PortfolioWebApps.vue?vue&type=template&id=c9203976&scoped=true&

// CONCATENATED MODULE: ./docs/portfolios.js
// WEB APPS
const book_reviews = {
  name: 'Book reviews',
  link: 'http://book-reviews.s3-website-us-east-1.amazonaws.com/',
  techUsed: 'Django MySql Bootstrap AWS',
  imgUrl: '@/assets/images/book-reviews.png'
};
const get_active = {
  name: "Get-active",
  link: 'http://get-active-frontend.s3-website-us-east-1.amazonaws.com',
  techUsed: "Flask MongoDB Bootstrap AWS",
  imgUrl: '@/assets/images/getactive-ai.webp'
};
const ai_stories = {
  name: 'AI stories',
  link: 'http://ai-stories-frontend.s3-website-us-east-1.amazonaws.com/',
  techUsed: 'Node.js Express Bootstrap AWS',
  imgUrl: '@/assets/images/ai-stories.webp'
};
const hairdresser_pozgaj = {
  name: 'Hairdressing saloon Požgaj',
  link: 'https://prismatic-treacle-631255.netlify.app/',
  techUsed: 'Javascript Tailwind',
  imgUrl: '@/assets/images/salon-požgaj.webp'
};
const blog = {
  name: 'Personal blog',
  link: 'https://luka-blog.netlify.app/',
  techUsed: 'Javascript Tailwind',
  imgUrl: '@/assets/images/luka-blog.webp'
}; // NATIVE APPS

const ipaMastery = {
  name: 'IPA Mastery',
  bgImage: __webpack_require__(73),
  link: '@/assets/images/book-reviews.png',
  techUsed: 'Flutter'
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/PortfolioWebApps.vue?vue&type=script&lang=js&
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

/* harmony default export */ var PortfolioWebAppsvue_type_script_lang_js_ = ({
  data() {
    return {
      showDetials1: false,
      showDetials2: false,
      showDetials3: false,
      showDetials4: false,
      showDetials5: false,
      showDetials6: false,
      hairdresser_pozgaj: hairdresser_pozgaj,
      get_active: get_active,
      ai_stories: ai_stories,
      book_reviews: book_reviews,
      blog: blog,
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
});
// CONCATENATED MODULE: ./components/ui/PortfolioWebApps.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_PortfolioWebAppsvue_type_script_lang_js_ = (PortfolioWebAppsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ui/PortfolioWebApps.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_PortfolioWebAppsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c9203976",
  "6deeb773"
  
)

/* harmony default export */ var PortfolioWebApps = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AlertMessage: __webpack_require__(84).default})


/***/ }),
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/AlertMessage.vue?vue&type=template&id=72631810&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex justify-center items-center h-24 w-screen md:w-2/4 bg-kjColorGold fixed z-50 text-kjColorLight md:text-xl px-5 text-center alert"},[_vm._ssrNode(_vm._ssrEscape("\n  "+_vm._s(_vm.message)+"\n"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ui/AlertMessage.vue?vue&type=template&id=72631810&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/AlertMessage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var AlertMessagevue_type_script_lang_js_ = ({
  props: {
    message: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/ui/AlertMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_AlertMessagevue_type_script_lang_js_ = (AlertMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ui/AlertMessage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_AlertMessagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "72631810",
  "d439c600"
  
)

/* harmony default export */ var AlertMessage = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/talkButton.e935a8f.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/luka-web.2617249.png";

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_632c53df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_632c53df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_632c53df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_632c53df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_632c53df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_632c53df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".letter[data-v-632c53df]{font-size:0;margin:-6px}.callout[data-v-632c53df]{height:18px;width:80px;background-image:-moz-linear-gradient(top,#2b2929,#2b2929);position:relative;padding:10px;border-radius:3px;margin:25px;min-height:50px;border:1px solid #2b2929;text-shadow:0 0 1px #000;transform:scale(0)}.callout[data-v-632c53df]:before{content:\"\";width:0;height:0;border:.8em solid transparent;position:absolute}.callout.top-right[data-v-632c53df]:before{right:7px;bottom:-20px;border-top:10px solid #2b2929}.des[data-v-632c53df]{transform:translateY(70px);opacity:0}.message[data-v-632c53df]{transform:translateY(100px);opacity:0}.talk-wrapper[data-v-632c53df]{position:relative;opacity:0}.talk[data-v-632c53df]{position:relative;right:-55px;z-index:2;display:flex;align-items:center;justify-content:center;border:1px solid #fff;background:#f3877e;border-radius:50%;height:100px;width:100px}.talk-pulse[data-v-632c53df]{position:absolute;z-index:1;height:120px;width:120px;top:50%;left:50%;margin-top:-60px;margin-left:-60px;background:#e45447;border-radius:50%;opacity:0;transform:scale(0)}.talk-img[data-v-632c53df]{height:70%}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illustration-01.003c594.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illustration-02.7569b61.png";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illustration-03.9f50b6c.png";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illustration-04.19646a2.png";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illustration-05.461c827.png";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illustration-06.9b5625f.png";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illustration-07.ecbfddb.png";

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_ace9118e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_ace9118e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_ace9118e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_ace9118e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_ace9118e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_ace9118e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".illustration[data-v-ace9118e]{position:relative;height:30rem}.illustration__img[data-v-ace9118e]{position:absolute;bottom:0;width:80%}.illustration__img--1[data-v-ace9118e]{left:0;z-index:2}.illustration__img--2[data-v-ace9118e]{top:25%;z-index:1}.illustration__img--3[data-v-ace9118e]{top:-2%}.illustration__img--4[data-v-ace9118e]{top:-20%;left:-20%}.illustration__img--5[data-v-ace9118e]{top:-20%;right:-5%}.illustration__img--7[data-v-ace9118e]{top:-2%;right:-2%}.illustration__img--6[data-v-ace9118e]{top:0;left:-22%}.services__data[data-v-ace9118e]{text-align:center}.see-project-btn[data-v-ace9118e]{opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/luka.fb9474d.jpeg";

/***/ }),
/* 103 */,
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/Hero.vue?vue&type=template&id=632c53df&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"md:flex mt-10"},[_vm._ssrNode("<div class=\"md:flex-1\" data-v-632c53df><div class=\"text-center md:text-left\" data-v-632c53df><div class=\"callout top-right inline-block bg-kjColorDark text-kjColorLight shadow\" data-v-632c53df>\n        It's me\n      </div> <h1 class=\"text-5xl font-black leading-none mb-4\" data-v-632c53df><span class=\"letter\" data-v-632c53df>L</span> <span class=\"letter\" data-v-632c53df>u</span> <span class=\"letter\" data-v-632c53df>k</span> <span class=\"letter\" data-v-632c53df>a</span> <span class=\"letter\" data-v-632c53df> </span> <span class=\"letter\" data-v-632c53df>M</span> <span class=\"letter\" data-v-632c53df>i</span> <span class=\"letter\" data-v-632c53df>n</span> <span class=\"letter\" data-v-632c53df>đ</span> <span class=\"letter\" data-v-632c53df>e</span> <span class=\"letter\" data-v-632c53df>k</span></h1></div> <p class=\"uppercase font-bold des text-center md:text-left px-5 md:px-0\" data-v-632c53df>\n      SOFTWARE DEVELOPER\n    </p> <p class=\"text-kjColorGray dark:text-kjColorLight text-sm mt-10 text-center md:text-left px-5 md:px-0 md:w-64 message\" data-v-632c53df>\n      Software Developer from Varaždin, Croatia with rock-solid\n      experience in building complex applications with cutting-edge\n      technologies.\n    </p> <div class=\"mt-10 talk-wrapper\" data-v-632c53df><a href=\"mailto:lukamindjek@gmail.com\" target=\"_blank\" data-v-632c53df><div class=\"talk\" data-v-632c53df><img"+(_vm._ssrAttr("src",__webpack_require__(89)))+" alt=\"talk button\" class=\"talk-img\" data-v-632c53df> <div class=\"talk-pulse\" data-v-632c53df></div></div></a></div></div> <div class=\"mt-10 md:flex-1\" data-v-632c53df><img"+(_vm._ssrAttr("src",__webpack_require__(90)))+" alt=\"luka photo\" class=\"ml-auto mr-auto md:ml-0 md:mr-0\" data-v-632c53df></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/Hero.vue?vue&type=template&id=632c53df&scoped=true&

// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/Hero.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Herovue_type_script_lang_js_ = ({
  mounted() {
    this.animateHero();
  },

  methods: {
    animateHero() {
      const {
        talk,
        talkPulse
      } = this.$refs;
      const tl = gsap["gsap"].timeline();
      tl.to('.callout', {
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
      }, 0.5).to('.letter', {
        fontSize: '3rem',
        duration: 0.05,
        stagger: 0.1
      }).to('.des', {
        opacity: 1,
        y: 0,
        duration: 0.7
      }, 4).to('.message', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      }, '-=.5').to('.talk-wrapper', {
        opacity: 1
      }).to(talk, {
        duration: 0.4,
        scale: 0.8,
        rotation: 16,
        ease: gsap["Back"].easeOut.config(1.7)
      }, 5).to(talkPulse, {
        duration: 0.5,
        scale: 0.9,
        opacity: 1
      }, '-=0.6').to(talk, {
        duration: 1.2,
        scale: 1,
        rotation: '-=16',
        ease: gsap["Elastic"].easeOut.config(2.5, 0.5)
      }).to(talkPulse, {
        duration: 1.1,
        scale: 3,
        opacity: 0,
        ease: gsap["Expo"].easeOut
      }, '-=1.2');
    }

  }
});
// CONCATENATED MODULE: ./components/layout/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "632c53df",
  "38fe92ce"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/Services.vue?vue&type=template&id=ace9118e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"mt-12 md:mt-32 services"},[_vm._ssrNode("<h1 class=\"capitalize text-3xl md:text-4xl font-bold leading-none\" data-v-ace9118e>\n    my top skills\n  </h1> <p class=\"capitalize mt-2 text-lg\" data-v-ace9118e>what i do</p> "),_c('CustomBorder'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid grid-cols-1 lg:grid-cols-2 mt-10 rounded-lg bg-kjColorLight dark:bg-kjColorBlack border-2 border-kjColorLight\" data-v-ace9118e>","</div>",[_vm._ssrNode("<div class=\"p-5 md:mx-8 services__data\" data-v-ace9118e>","</div>",[_vm._ssrNode("<h2 class=\"text-lg font-black uppercase mb-3 data-2\" data-v-ace9118e>\n        backend\n      </h2> <p class=\"mb-5 data-2\" data-v-ace9118e>\n        I build scalable and maintainable backend applications using\n        cutting-edge technologies like Django, Node.js, Docker, MySql, MongoDB, and cloud technologies in AWS and GCP\n        \n      </p> <h2 class=\"text-lg font-black uppercase mb-3 data-1\" data-v-ace9118e>\n        frontend\n      </h2> <p class=\"mb-5 data-1\" data-v-ace9118e>\n        I build client-side applications with modern features like SPA and\n        maintain semantic coding style among other best practices for SEO\n        optimisation, using modern tech like Next.js (React), Bootstrap,\n        tailwind and farmerMotion.\n      </p> "),_vm._ssrNode("<div class=\"mt-8 see-project-btn\" data-v-ace9118e>","</div>",[_c('Button',{attrs:{"displayTitle":"SEE MY WORKS","linkTo":"/portfolio"}})],1)],2),_vm._ssrNode(" <div class=\"hidden lg:block illustration\" data-v-ace9118e><img"+(_vm._ssrAttr("src",__webpack_require__(93)))+" alt=\"illustration 1\" class=\"illustration__img illustration__img--1\" data-v-ace9118e> <img"+(_vm._ssrAttr("src",__webpack_require__(94)))+" alt=\"illustration 2\" class=\"illustration__img illustration__img--2\" data-v-ace9118e> <img"+(_vm._ssrAttr("src",__webpack_require__(95)))+" alt=\"illustration 3\" class=\"illustration__img illustration__img--3\" data-v-ace9118e> <img"+(_vm._ssrAttr("src",__webpack_require__(96)))+" alt=\"illustration 4\" class=\"illustration__img illustration__img--4\" data-v-ace9118e> <img"+(_vm._ssrAttr("src",__webpack_require__(97)))+" alt=\"illustration 5\" class=\"illustration__img illustration__img--5\" data-v-ace9118e> <img"+(_vm._ssrAttr("src",__webpack_require__(98)))+" alt=\"illustration 6\" class=\"illustration__img illustration__img--6\" data-v-ace9118e> <img"+(_vm._ssrAttr("src",__webpack_require__(99)))+" alt=\"illustration 7\" class=\"illustration__img illustration__img--7\" data-v-ace9118e></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ui/Services.vue?vue&type=template&id=ace9118e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/Services.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Servicesvue_type_script_lang_js_ = ({
  name: 'Services',

  data() {
    return {
      services: [{
        title: 'Web development',
        des: 'I build websites and web applications.'
      }, {
        title: 'Ux/ui design',
        des: 'I design application user interface.'
      }, {
        title: 'Graphic design',
        des: 'I design logos, flyers, cards, etc.'
      }]
    };
  },

  mounted() {
    this.animateServices();
  },

  methods: {
    animateServices() {
      const {
        services
      } = this.$refs;
      let tl = new TimelineMax({
        onUpdate: updatePercentage
      });
      tl.from('.illustration__img--1', 0.5, {
        scale: 0.5
      }, 0).from('.illustration__img--2', 0.5, {
        opacity: 0,
        y: -50
      }, 0.2).from('.illustration__img--3', 0.5, {
        opacity: 0,
        y: -50
      }, 0.5).from('.data-1', 1, {
        opacity: 0,
        stagger: 1
      }, 0.7).from('.illustration__img--5', 0.5, {
        opacity: 0,
        x: 100
      }, 1.4).from('.illustration__img--6', 0.5, {
        opacity: 0,
        x: -100
      }, 1.7).from('.data-2', 1, {
        opacity: 0,
        stagger: 1
      }, 1.9).from('.illustration__img--4', 0.5, {
        opacity: 0,
        x: -100
      }, 2.6).from('.illustration__img--7', 0.5, {
        opacity: 0,
        x: 100
      }, 2.9).from('.data-3', 1, {
        opacity: 0,
        stagger: 1
      }, 3.1).to('.see-project-btn', 1, {
        opacity: 1
      }, 3.5);
      const scene = this.$scrollmagic.scene({
        triggerElement: '.services',
        triggerHook: 0,
        duration: '300%'
      }).setPin('.services').setTween(tl);
      this.$scrollmagic.addScene(scene);

      function updatePercentage() {
        tl.progress();
      }
    }

  }
});
// CONCATENATED MODULE: ./components/ui/Services.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_Servicesvue_type_script_lang_js_ = (Servicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ui/Services.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(100)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_Servicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ace9118e",
  "1e383353"
  
)

/* harmony default export */ var Services = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CustomBorder: __webpack_require__(63).default,Button: __webpack_require__(31).default})


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/AboutMe.vue?vue&type=template&id=da8c9d18&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"md:w-3/4 px-2 py-4 mt-12 md:mt-32 m-auto"},[_vm._ssrNode("<div class=\"select-none mb-6 w-full\">","</div>",[_vm._ssrNode("<div class=\"px-4 relative\">","</div>",[_vm._ssrNode("<div class=\"bg-kjColorLight dark:bg-kjColorBlack rounded-lg shadow-2xl border-2 border-kjColorLight\">","</div>",[_vm._ssrNode("<div class=\"p-4 grid md:gap-5 grid-cols-1 md:grid-cols-2\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" class=\"w-128 rounded-lg\"> "),_vm._ssrNode("<div class=\"pt-10\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('font-awesome-icon',{staticClass:"text-lg inline-block",attrs:{"icon":['fas', 'microscope']}}),_vm._ssrNode(" <p class=\"inline-block ml-1\">\n                Building\n                <a target=\"_blank\" class=\"font-bold underline\">AI</a></p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('font-awesome-icon',{staticClass:"text-lg inline-block",attrs:{"icon":['fas', 'users']}}),_vm._ssrNode(" <p class=\"inline-block ml-1\">\n                Scaling\n                <a target=\"_blank\" class=\"font-bold underline\">infrastructure</a></p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('font-awesome-icon',{staticClass:"text-lg inline-block",attrs:{"icon":['fas', 'seedling']}}),_vm._ssrNode(" <p class=\"inline-block ml-1\">\n                Fancy Web3\n              </p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('font-awesome-icon',{staticClass:"text-lg inline-block",attrs:{"icon":['fas', 'chess-knight']}}),_vm._ssrNode(" <p class=\"inline-block ml-1\">\n                Play amateur chess\n              </p>")],2),_vm._ssrNode(" <div class=\"mt-2\"><p class=\"inline-block ml-1\"><span class=\"font-bold\">Fun Fact:</span> I am a pretty good\n                dancer 😁\n              </p></div>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-4\">","</div>",[_vm._ssrNode("<div class=\"mt-10\">","</div>",[_vm._ssrNode("<div class=\"text-lg mb-5\">","</div>",[_vm._ssrNode("<span class=\"font-medium uppercase\">README</span> "),_c('CustomBorder')],2),_vm._ssrNode(" <p>\n              I am an exceptional software engineer with solid knowledge and\n              experience in the ever-evolving realm of technology and as a\n              person, I have a strong discipline to learn, improve, and\n              evolve.\n            </p> <p class=\"mt-2\">\n              My career has been marked by a dedication to technical\n              excellence and my expertise lies within the JavaScript and Python\n              ecosystem, where I've honed my skills to deliver efficient and\n              user-centric software solutions. With a passion for solving\n              complex problems, I am committed to pushing the boundaries of\n              what's possible in software development.\n            </p> <p class=\"mt-2\">\n              When I am not coding, I am either playing chess, video\n              games, reading books or watching movies. Other times I am reading newsletters\n              or upskilling.\n            </p>")],2)])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ui/AboutMe.vue?vue&type=template&id=da8c9d18&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/AboutMe.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var AboutMevue_type_script_lang_js_ = ({
  data() {
    return {
      numOfYears: 5
    };
  },

  mounted() {
    this.numOfYears = new Date().getFullYear() - 2022;
  }

});
// CONCATENATED MODULE: ./components/ui/AboutMe.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_AboutMevue_type_script_lang_js_ = (AboutMevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ui/AboutMe.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_AboutMevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3c3af720"
  
)

/* harmony default export */ var AboutMe = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CustomBorder: __webpack_require__(63).default})


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/MyWorks.vue?vue&type=template&id=b5cf6570&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"mt-12 md:mt-32 services"},[_vm._ssrNode("<h1 class=\"capitalize text-3xl md:text-4xl font-bold leading-none\">\n    My Works\n  </h1> <p class=\"capitalize mt-2 text-lg\">few of my past and present projects</p> "),_c('CustomBorder'),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h1 class=\"mt-6 text-2xl font-bold capitalize\">Web Applications</h1> "),_vm._ssrNode("<div class=\"mt-8\">","</div>",[_c('PortfolioWebApps')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"max-w-xl shadow-2xl h-40 py-5 md:py-0 px-5 md:px-10 mt-10 md:flex justify-between items-center\">","</div>",[_vm._ssrNode("<p class=\"text-lg font-bold mb-3 md:mb-0\">\n        I cook with these ingredients 👉\n      </p> "),_c('Button',{attrs:{"displayTitle":"MY RESUME","linkTo":"/resume"}})],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ui/MyWorks.vue?vue&type=template&id=b5cf6570&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ui/MyWorks.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c3f57c5e"
  
)

/* harmony default export */ var MyWorks = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CustomBorder: __webpack_require__(63).default,PortfolioWebApps: __webpack_require__(82).default,Button: __webpack_require__(31).default})


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/StayConnected.vue?vue&type=template&id=df75de46&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"max-w-xs m-auto mt-12 md:mt-32 text-center"},[_vm._ssrNode("<div class=\"capitalize font-bold text-lg\">\n    keep in touch\n  </div> <div class=\"text-gray-600 text-sm mt-8\">\n    Varaždin, Croatia\n  </div> <div class=\"mt-4 font-medium text-xl\"><a href=\"mailto:lukamindjek@gmail.com\">\n      lukamindjek@gmail.com\n    </a></div> <div class=\"text-sm mt-4\"><a href=\"tel:+2348133930845\">\n      (+385) 095 - 767 - 4099\n    </a></div> "),_vm._ssrNode("<div class=\"mt-12 flex justify-center\">","</div>",[_vm._ssrNode("<div class=\"w-8 h-8 rounded-full ml-5\">","</div>",[_vm._ssrNode("<a href=\"https://www.instagram.com/mindekluka/\" target=\"_blank\">","</a>",[_c('font-awesome-icon',{staticClass:"text-2xl hidden md:block",attrs:{"icon":['fab', 'instagram']}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-8 h-8 rounded-full ml-5 lg:block hidden\">","</div>",[_vm._ssrNode("<a target=\"_blank\" title=\"Contact Luka On WhatsApp\" href=\"https://web.whatsapp.com/send?phone=+3850957674099&text=Hi, I would like to get more information...\">","</a>",[_c('font-awesome-icon',{staticClass:"text-2xl",attrs:{"icon":['fab', 'whatsapp']}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ui/StayConnected.vue?vue&type=template&id=df75de46&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ui/StayConnected.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f5f83ea"
  
)

/* harmony default export */ var StayConnected = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=10994fd5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Hero'),_vm._ssrNode(" "),_c('Services'),_vm._ssrNode(" "),_c('AboutMe'),_vm._ssrNode(" "),_c('MyWorks'),_vm._ssrNode(" "),_c('StayConnected')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=10994fd5&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6e43dfb8"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Hero: __webpack_require__(104).default,Services: __webpack_require__(105).default,AboutMe: __webpack_require__(106).default,MyWorks: __webpack_require__(107).default,StayConnected: __webpack_require__(108).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map