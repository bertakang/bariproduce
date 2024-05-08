import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref } from 'vue';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { u as useFetch } from './fetch-DMdKca4P.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[recipe]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    route.params;
    const product = route.params.recipe;
    async function getrecipeData() {
      const { data } = await useFetch("https://bertakang.pythonanywhere.com/", "$2ClcP1RzMu");
      const recipesList = data.value.recipe_cards;
      for (let i = 0; i < recipesList.length; i++) {
        const recipeItem = recipesList[i];
        const name = recipeItem.name;
        if (product === name) {
          return recipeItem;
        }
      }
    }
    const recipeData = ([__temp, __restore] = withAsyncContext(() => getrecipeData()), __temp = await __temp, __restore(), __temp);
    const ingredients = recipeData.ingredients;
    const directions = recipeData.directions;
    const ingredientsList = ingredients.split(".").map((item) => item.trim());
    const directionsList = directions.split(".").map((item) => item.trim());
    console.log(ingredientsList);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "recipes-page" }, _attrs))} data-v-21141a46><div class="recipes-description" data-v-21141a46><div class="header" data-v-21141a46><h1 data-v-21141a46>${ssrInterpolate(unref(recipeData).name)}</h1><h2 data-v-21141a46>${ssrInterpolate(unref(recipeData).time)}</h2></div><div class="recipe-ingredients" data-v-21141a46><h3 data-v-21141a46>Ingredients</h3><!--[-->`);
      ssrRenderList(unref(ingredientsList), (ingredient) => {
        _push(`<ul data-v-21141a46><li data-v-21141a46>${ssrInterpolate(ingredient)}</li></ul>`);
      });
      _push(`<!--]--></div><div class="recipe-directions" data-v-21141a46><h3 data-v-21141a46>Directions</h3><ol data-v-21141a46><!--[-->`);
      ssrRenderList(unref(directionsList), (direction) => {
        _push(`<li data-v-21141a46>${ssrInterpolate(direction)}</li>`);
      });
      _push(`<!--]--></ol></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recipe/[recipe].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _recipe_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21141a46"]]);

export { _recipe_ as default };
//# sourceMappingURL=_recipe_-BhC7mmbG.mjs.map
