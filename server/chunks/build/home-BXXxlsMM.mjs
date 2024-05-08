import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BSFgMzag.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { u as useFetch } from './fetch-DMdKca4P.mjs';
import { useSSRContext, defineComponent, withAsyncContext, ref, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './Contact-FcCw4yST.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("logo-white.CbXdkkuG.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://bertakang.pythonanywhere.com/", "$menIYoEDp6")), __temp = await __temp, __restore(), __temp);
    const fruitCards = data.value.fruit_cards;
    const grapeCards = data.value.grape_cards;
    const recipeCards = data.value.recipe_cards;
    const productDropdownBool = ref(false);
    const fruitdropdownBool = ref(false);
    const grapedropdownBool = ref(false);
    const navBool = ref(false);
    const recipeDropdownBool = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-bb1177d0><div class="navbar" data-v-bb1177d0><div class="wrapper" data-v-bb1177d0><div class="logo-wrapper" data-v-bb1177d0><img${ssrRenderAttr("src", _imports_0)} alt="White version of the BARI Produce logo." data-v-bb1177d0></div></div><div class="mobile-navlinks-wrapper" data-v-bb1177d0><div class="mobile-navlinks" data-v-bb1177d0><button class="mobile-menu-btn" data-v-bb1177d0>MENU</button></div></div><div class="navlinks-wrapper" data-v-bb1177d0><nav data-v-bb1177d0><ul class="navlinks" data-v-bb1177d0><li data-v-bb1177d0><a data-v-bb1177d0>HOME</a></li><li data-v-bb1177d0><a data-v-bb1177d0>ABOUT</a></li><div class="dropdown" data-v-bb1177d0><li data-v-bb1177d0><a data-v-bb1177d0>PRODUCT</a></li><div class="primary-dropdown" data-v-bb1177d0><div class="primary-link-wrapper" style="${ssrRenderStyle(productDropdownBool.value ? null : { display: "none" })}" data-v-bb1177d0><div class="primary-link" data-v-bb1177d0><li data-v-bb1177d0>Fruits</li></div><div class="secondary-dropdown" style="${ssrRenderStyle(fruitdropdownBool.value ? null : { display: "none" })}" data-v-bb1177d0><!--[-->`);
      ssrRenderList(unref(fruitCards), (fruitCard) => {
        _push(`<li${ssrRenderAttr("to", "/product/" + fruitCard.type + "/" + fruitCard.name)} data-v-bb1177d0>`);
        _push(ssrRenderComponent(_component_NuxtLink, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(fruitCard.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(fruitCard.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></div></div><div class="primary-link-wrapper" style="${ssrRenderStyle(productDropdownBool.value ? null : { display: "none" })}" data-v-bb1177d0><div class="primary-link" data-v-bb1177d0><li data-v-bb1177d0>Grapes</li></div><div class="secondary-dropdown" style="${ssrRenderStyle(grapedropdownBool.value ? null : { display: "none" })}" data-v-bb1177d0><!--[-->`);
      ssrRenderList(unref(grapeCards), (grapeCard) => {
        _push(`<li${ssrRenderAttr("to", "/product/" + grapeCard.type + "/" + grapeCard.name)} data-v-bb1177d0>`);
        _push(ssrRenderComponent(_component_NuxtLink, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(grapeCard.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(grapeCard.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></div></div></div></div><div class="dropdown" data-v-bb1177d0><li data-v-bb1177d0><a data-v-bb1177d0>RECIPES</a></li><div class="primary-dropdown" data-v-bb1177d0><div class="primary-link-wrapper" style="${ssrRenderStyle(recipeDropdownBool.value ? null : { display: "none" })}" data-v-bb1177d0><div class="primary-link" data-v-bb1177d0><!--[-->`);
      ssrRenderList(unref(recipeCards), (recipeCard) => {
        _push(`<li${ssrRenderAttr("to", "/recipe/" + recipeCard.name)} data-v-bb1177d0>`);
        _push(ssrRenderComponent(_component_NuxtLink, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(recipeCard.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(recipeCard.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></div></div></div></div><li data-v-bb1177d0><a data-v-bb1177d0>CONTACT</a></li></ul></nav></div></div><div class="primary-bg" style="${ssrRenderStyle(navBool.value ? null : { display: "none" })}" data-v-bb1177d0></div><div class="nav-bg" data-v-bb1177d0></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bb1177d0"]]);
const _sfc_main = {
  components: { NavBar: __nuxt_component_0, Contact: __nuxt_component_1 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = __nuxt_component_0;
  const _component_Contact = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { home as default };
//# sourceMappingURL=home-BXXxlsMM.mjs.map
