import { useSSRContext, defineComponent, withAsyncContext, ref, mergeProps, unref } from 'vue';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { u as useFetch } from './fetch-DMdKca4P.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
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
  __name: "[fruit]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    route.params;
    const product = route.params.fruit;
    async function getFruitData() {
      const { data } = await useFetch("https://bertakang.pythonanywhere.com/fruit", "$Uhi0jbfRXq");
      const fruitsList = data.value.fruit_info;
      for (let i = 0; i < fruitsList.length; i++) {
        const fruitItem = fruitsList[i];
        const name = fruitItem.name;
        if (product === name) {
          return fruitItem;
        }
      }
    }
    async function getFruitImages() {
      const { data } = await useFetch("https://bertakang.pythonanywhere.com/images", {
        pick: ["fruit_images"]
      }, "$4lXfcE3sIK");
      const imagesList = data.value.fruit_images;
      const fruitFilePaths = ref([]);
      for (let i = 0; i < imagesList.length; i++) {
        const fruitImage = imagesList[i];
        const fruitOption = fruitImage.fruit_options;
        if (product === fruitOption) {
          const fruitFilePath = fruitImage.file_path;
          fruitFilePaths.value.push(fruitFilePath);
        }
      }
      return fruitFilePaths.value;
    }
    const fruitData = ([__temp, __restore] = withAsyncContext(() => getFruitData()), __temp = await __temp, __restore(), __temp);
    const fruitImages = ([__temp, __restore] = withAsyncContext(() => getFruitImages()), __temp = await __temp, __restore(), __temp);
    const getImageURL = (filePath) => {
      return "https://www.pythonanywhere.com/user/bertakang/files/home/bertakang/mysite/" + filePath;
    };
    const modalBool = ref(false);
    const modalImage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fruit-info" }, _attrs))} data-v-7444afd8><div class="wrapper" data-v-7444afd8><div class="wrapper-text" data-v-7444afd8><div class="wrapper-header" data-v-7444afd8><h1 data-v-7444afd8>${ssrInterpolate(unref(fruitData).name)}</h1></div><div class="fruit-details" data-v-7444afd8><h3 data-v-7444afd8>Health Benefits</h3><p data-v-7444afd8>${ssrInterpolate(unref(fruitData).healthbenefits)}</p></div><div class="fruit-details" data-v-7444afd8><h3 data-v-7444afd8>PLU Information</h3><p data-v-7444afd8>${ssrInterpolate(unref(fruitData).PLUinfo)}</p></div><div class="fruit-details" data-v-7444afd8><h3 data-v-7444afd8>Pack Style</h3><p data-v-7444afd8>${ssrInterpolate(unref(fruitData).packstyle)}</p></div></div><div class="wrapper-gallery" data-v-7444afd8><h3 data-v-7444afd8>Photos</h3><p data-v-7444afd8>Click to enlarge.</p><div class="wrapper-photos" data-v-7444afd8><!--[-->`);
      ssrRenderList(unref(fruitImages), (filePath) => {
        _push(`<ul class="gallery" data-v-7444afd8><li data-v-7444afd8><div class="photo" data-v-7444afd8><img${ssrRenderAttr("src", getImageURL(filePath))} alt="Image" data-v-7444afd8></div></li></ul>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (unref(modalBool)) {
        _push(`<div class="modal" data-v-7444afd8><div class="modal-photo" data-v-7444afd8>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`<div class="x-wrapper" data-v-7444afd8><span class="x-btn" data-v-7444afd8>\xD7</span></div>`);
        if (unref(modalImage)) {
          _push(`<img${ssrRenderAttr("src", unref(modalImage))} data-v-7444afd8>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/Fruit/[fruit].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _fruit_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7444afd8"]]);

export { _fruit_ as default };
//# sourceMappingURL=_fruit_-CeALDCpw.mjs.map
