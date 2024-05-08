import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { defineComponent, ref, provide, createElementBlock, useSSRContext, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BSFgMzag.mjs';
import { u as useFetch } from './fetch-DMdKca4P.mjs';
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

const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FruitCards",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://bertakang.pythonanywhere.com/", {
      pick: ["fruit_cards"]
    }, "$xAwpthsAUR")), __temp = await __temp, __restore(), __temp);
    const fruitCards = data.value.fruit_cards;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "FruitCard" }, _attrs))} data-v-7d84698d><ul class="cards-wrapper" data-v-7d84698d><!--[-->`);
      ssrRenderList(unref(fruitCards), (card) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: card.id,
          to: `/product/Fruit/${card.name}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card-wrapper" data-v-7d84698d${_scopeId}><div class="wrapper" data-v-7d84698d${_scopeId}><div class="header" data-v-7d84698d${_scopeId}><h3 data-v-7d84698d${_scopeId}>${ssrInterpolate(card.name)}</h3><p data-v-7d84698d${_scopeId}>${ssrInterpolate(card.type)}</p></div><div class="card-image" data-v-7d84698d${_scopeId}><img${ssrRenderAttr("src", "https://www.pythonanywhere.com/user/bertakang/files/home/bertakang/mysite/" + card.file_path)} data-v-7d84698d${_scopeId}></div><div class="text-wrapper" data-v-7d84698d${_scopeId}><div class="card-description" data-v-7d84698d${_scopeId}><p data-v-7d84698d${_scopeId}>${ssrInterpolate(card.description)}</p></div><div class="card-click" data-v-7d84698d${_scopeId}><p data-v-7d84698d${_scopeId}>Click to See More \xBB</p></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "card-wrapper" }, [
                  createVNode("div", { class: "wrapper" }, [
                    createVNode("div", { class: "header" }, [
                      createVNode("h3", null, toDisplayString(card.name), 1),
                      createVNode("p", null, toDisplayString(card.type), 1)
                    ]),
                    createVNode("div", { class: "card-image" }, [
                      createVNode("img", {
                        src: "https://www.pythonanywhere.com/user/bertakang/files/home/bertakang/mysite/" + card.file_path
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "text-wrapper" }, [
                      createVNode("div", { class: "card-description" }, [
                        createVNode("p", null, toDisplayString(card.description), 1)
                      ]),
                      createVNode("div", { class: "card-click" }, [
                        createVNode("p", null, "Click to See More \xBB")
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/FruitCards.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const FruitCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7d84698d"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FruitSection",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "Fruits" }, _attrs))} data-v-73a9b308><div class="menu-header" data-v-73a9b308><h2 data-v-73a9b308>Fruit Selection</h2></div>`);
      _push(ssrRenderComponent(FruitCard, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FruitSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-73a9b308"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GrapeCards",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://bertakang.pythonanywhere.com/", {
      pick: ["grape_cards"]
    }, "$6CY8XtSHfe")), __temp = await __temp, __restore(), __temp);
    const grapeCards = data.value.grape_cards;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "GrapeCard" }, _attrs))} data-v-39011d6c><ul class="cards-wrapper" data-v-39011d6c><!--[-->`);
      ssrRenderList(unref(grapeCards), (card) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: card.id,
          to: `/product/Grape/${card.name}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card-wrapper" data-v-39011d6c${_scopeId}><div class="wrapper" data-v-39011d6c${_scopeId}><div class="header" data-v-39011d6c${_scopeId}><h3 data-v-39011d6c${_scopeId}>${ssrInterpolate(card.name)}</h3><p data-v-39011d6c${_scopeId}>${ssrInterpolate(card.type)}</p></div><div class="card-image" data-v-39011d6c${_scopeId}><img${ssrRenderAttr("src", "https://www.pythonanywhere.com/user/bertakang/files/home/bertakang/mysite/" + card.file_path)} data-v-39011d6c${_scopeId}></div><div class="text-wrapper" data-v-39011d6c${_scopeId}><div class="card-description" data-v-39011d6c${_scopeId}><p data-v-39011d6c${_scopeId}>${ssrInterpolate(card.description)}</p></div><div class="card-click" data-v-39011d6c${_scopeId}><p data-v-39011d6c${_scopeId}>Click to See More \xBB</p></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "card-wrapper" }, [
                  createVNode("div", { class: "wrapper" }, [
                    createVNode("div", { class: "header" }, [
                      createVNode("h3", null, toDisplayString(card.name), 1),
                      createVNode("p", null, toDisplayString(card.type), 1)
                    ]),
                    createVNode("div", { class: "card-image" }, [
                      createVNode("img", {
                        src: "https://www.pythonanywhere.com/user/bertakang/files/home/bertakang/mysite/" + card.file_path
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "text-wrapper" }, [
                      createVNode("div", { class: "card-description" }, [
                        createVNode("p", null, toDisplayString(card.description), 1)
                      ]),
                      createVNode("div", { class: "card-click" }, [
                        createVNode("p", null, "Click to See More \xBB")
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/GrapeCards.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const GrapeCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-39011d6c"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GrapeSection",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "Grapes" }, _attrs))} data-v-d50e2d10><div class="menu-header" data-v-d50e2d10><h2 data-v-d50e2d10>Grape Selection</h2></div>`);
      _push(ssrRenderComponent(GrapeCard, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GrapeSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d50e2d10"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RecipeCards",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://bertakang.pythonanywhere.com/", {
      pick: ["recipe_cards"]
    }, "$iDiwI8pBfr")), __temp = await __temp, __restore(), __temp);
    const recipeCards = data.value.recipe_cards;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "RecipeCard" }, _attrs))} data-v-65f42ee5><ul class="cards-wrapper" data-v-65f42ee5><!--[-->`);
      ssrRenderList(unref(recipeCards), (card) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/Recipe/" + card.name,
          key: card.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card-wrapper" data-v-65f42ee5${_scopeId}><div class="wrapper" data-v-65f42ee5${_scopeId}><div class="header" data-v-65f42ee5${_scopeId}><h3 data-v-65f42ee5${_scopeId}>${ssrInterpolate(card.name)}</h3><p data-v-65f42ee5${_scopeId}>${ssrInterpolate(card.type)}</p></div><div class="card-image" data-v-65f42ee5${_scopeId}><img${ssrRenderAttr("src", "https://www.pythonanywhere.com/user/bertakang/files/home/bertakang/mysite/" + card.file_path)} data-v-65f42ee5${_scopeId}></div><div class="text-wrapper" data-v-65f42ee5${_scopeId}><div class="card-description" data-v-65f42ee5${_scopeId}><p data-v-65f42ee5${_scopeId}>${ssrInterpolate(card.description)}</p></div><div class="card-click" data-v-65f42ee5${_scopeId}><p data-v-65f42ee5${_scopeId}>Click to See More \xBB</p></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "card-wrapper" }, [
                  createVNode("div", { class: "wrapper" }, [
                    createVNode("div", { class: "header" }, [
                      createVNode("h3", null, toDisplayString(card.name), 1),
                      createVNode("p", null, toDisplayString(card.type), 1)
                    ]),
                    createVNode("div", { class: "card-image" }, [
                      createVNode("img", {
                        src: "https://www.pythonanywhere.com/user/bertakang/files/home/bertakang/mysite/" + card.file_path
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "text-wrapper" }, [
                      createVNode("div", { class: "card-description" }, [
                        createVNode("p", null, toDisplayString(card.description), 1)
                      ]),
                      createVNode("div", { class: "card-click" }, [
                        createVNode("p", null, "Click to See More \xBB")
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/RecipeCards.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RecipeCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-65f42ee5"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RecipeSection",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "recipes" }, _attrs))} data-v-e77ea875><div class="sticky" data-v-e77ea875><div class="text-block" data-v-e77ea875><h1 data-v-e77ea875>Recipes</h1><p data-v-e77ea875>We\u2019ve included some of our favorite recipes, using fresh fruit. Our list includes everything from the old-fashioned to fresh new twists. Learn how to include peaches in a power smoothie or a tasty desert to help cool off in the summer. We\u2019ve also included grandma\u2019s own peach pie recipe.</p><p data-v-e77ea875>Mmm Mmm! Our other recipes will show you new ways to enjoy nectarines in a fresh fruit salad or add apricots for a sweet, savory chicken dinner.</p></div></div><div class="scrollable" data-v-e77ea875>`);
      _push(ssrRenderComponent(RecipeCard, null, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RecipeSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e77ea875"]]);
const _imports_0 = "" + buildAssetsURL("cherry-devider.CClJoiCm.jpg");
const _imports_1 = "" + buildAssetsURL("about.BO54EAfX.jpg");
const _imports_2 = "" + buildAssetsURL("stonefruit.CppoFuww.png");
const _imports_3 = "" + buildAssetsURL("tablegrapes.3eeZvW1U.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FruitSection = __nuxt_component_0;
      const _component_GrapeSection = __nuxt_component_1;
      const _component_RecipeSection = __nuxt_component_2;
      _push(`<!--[--><section id="home" data-v-2c6378c3><div class="wrapper" data-v-2c6378c3><img${ssrRenderAttr("src", _imports_0)} alt="BARI Produce cherries." data-v-2c6378c3></div></section><section id="about" data-v-2c6378c3><div class="sticky-grid" data-v-2c6378c3><div class="image-wrapper" data-v-2c6378c3><div class="sticky" data-v-2c6378c3><img class="sticky"${ssrRenderAttr("src", _imports_1)} alt="Description of the image" data-v-2c6378c3></div></div><div class="scrollable-about" data-v-2c6378c3><div class="text-block" data-v-2c6378c3><h1 data-v-2c6378c3>About Us</h1><p data-v-2c6378c3>Bari Produce LLC was created to market high quality tree fruit and table grapes under the well known Bari\xAE and Logoluso\xAE brands. With Frank A. Logoluso Farms as our foundation, Bari Produce brings together other quality-minded growers to expand the Bari\xAE labels and to build upon the Mr. Logoluso\u2019s legacy.</p><p data-v-2c6378c3>\u201CGrowing grapes is a family tradition,\u201D says Frank Logoluso. He learned the trade from his father, Panteleao Logoluso who moved to Madera, CA from Bari, Italy around 1915.</p><p data-v-2c6378c3>When Panteleao was a child growing up in Bari, people shopped daily in the market square to buy the freshest available produce. Frank always had fond memories of his father\u2019s memories of the marketplace and created the Bari\xAE label as a tribute to not only his father, but to the \u201Cold school\u201D way of life.</p><p data-v-2c6378c3>The Bari\xAE brand grape label was created 60 years ago and is reserved for only the best of the best in terms of size, quality and taste. The Bari\xAE brand today means the same as it did in 1948\u2026.consistent, top-quality fruit!</p><p data-v-2c6378c3>Bari Produce LLC ships our produce domestically as well as internationally; reaching over 23 international markets. Our efforts in the field ensure consistently top-quality produce in today\u2019s marketplace.</p><p data-v-2c6378c3>Thank you for stopping by our website and familiarizing yourself with Bari Produce LLC. Our desire is to continue delivering our family touch in every piece of fruit we send across the globe.</p></div></div></div></section><section id="products" data-v-2c6378c3><div class="third-divided" data-v-2c6378c3><div class="two-thirds" data-v-2c6378c3><div class="text-block" data-v-2c6378c3><h1 data-v-2c6378c3>Quality, consistency and great eating quality are the expectation when apricots, peaches, plums and nectarines are placed in our label.</h1><p data-v-2c6378c3>Bari Produce stone fruit is packed in the premium BARI\xAE label. Certain varieties have greater consumer appeal, but our efforts in the field ensure each varieties\u2019 highest eating attributes and our efforts in packing boost quality on the shelf. Early May starts the season with apricots and several early peaches and nectarines. The Giant Lorna Apricot provides big size and big flavor in June. We provide most of our volume in yellow peaches and nectarines, with good amounts of white flesh, as well as plums and pluots.</p></div></div><div class="one-third-image" data-v-2c6378c3><div class="product-image-wrapper" data-v-2c6378c3><div class="product-image" data-v-2c6378c3><img${ssrRenderAttr("src", _imports_2)} alt="Description of the image" data-v-2c6378c3></div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_FruitSection, null, null, _parent));
      _push(`<div class="third-divided" data-v-2c6378c3><div class="two-thirds" data-v-2c6378c3><div class="text-block" data-v-2c6378c3><h1 data-v-2c6378c3>We put a lot of energy into our grapes during the off and growing seasons to bring out their highest eating attributes.</h1><p data-v-2c6378c3>Bari Produce is best known for our\xA0BARI\xAE\xA0and\xA0LOGOLUSO\xAE table grape brands that have been in existence for well over 50 years. Quality, consistency and great eating quality are the expectation when grapes are placed in these labels. Our blend of new varieties (Autumn King &amp; Scarlet Royals) as well as tried-and-true varieties (Thompson Seedless and Crimson Seedless) allows us to provide a full spectrum of great eating grapes.</p><p data-v-2c6378c3>Our table grape varieties include: Flames, Thomcords, Ivory, Champagne, Valley Pearls, Red Globes, Summer Royals, Autumn Royal, Autumn King, Scarlet Royal, and Vintage Red.</p></div></div><div class="one-third-image" data-v-2c6378c3><div class="product-image-wrapper" data-v-2c6378c3><div class="product-image" data-v-2c6378c3><img${ssrRenderAttr("src", _imports_3)} alt="Description of the image" data-v-2c6378c3></div></div></div></div>`);
      _push(ssrRenderComponent(_component_GrapeSection, null, null, _parent));
      _push(ssrRenderComponent(_component_RecipeSection, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c6378c3"]]);

export { index as default };
//# sourceMappingURL=index-Bq_byTqe.mjs.map
