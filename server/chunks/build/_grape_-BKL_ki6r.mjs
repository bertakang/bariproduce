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
  __name: "[grape]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    route.params;
    const product = route.params.grape;
    async function getGrapeData() {
      const { data } = await useFetch("https://bertakang.pythonanywhere.com/grape", "$MyQbWMjdsv");
      const grapesList = data.value.grape_info;
      for (let i = 0; i < grapesList.length; i++) {
        const grapeItem = grapesList[i];
        const name = grapeItem.name;
        if (product === name) {
          return grapeItem;
        }
      }
    }
    async function getGrapeImages() {
      const { data } = await useFetch("https://bertakang.pythonanywhere.com/images", {
        pick: ["grape_images"]
      }, "$rrfLfQCjpP");
      const imagesList = data.value.grape_images;
      const grapeFilePaths = ref([]);
      for (let i = 0; i < imagesList.length; i++) {
        const grapeImage = imagesList[i];
        const grapeOption = grapeImage.grape_options;
        if (product === grapeOption) {
          const grapeFilePath = grapeImage.file_path;
          grapeFilePaths.value.push(grapeFilePath);
        }
      }
      return grapeFilePaths.value;
    }
    const grapeData = ([__temp, __restore] = withAsyncContext(() => getGrapeData()), __temp = await __temp, __restore(), __temp);
    const grapeImages = ([__temp, __restore] = withAsyncContext(() => getGrapeImages()), __temp = await __temp, __restore(), __temp);
    const getImageURL = (filePath) => {
      return "https://www.pythonanywhere.com/user/bertakang/files/home/bertakang/mysite/" + filePath;
    };
    const modalBool = ref(false);
    const modalImage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grape-info" }, _attrs))} data-v-7d72ea29><div class="wrapper" data-v-7d72ea29><div class="wrapper-text" data-v-7d72ea29><div class="wrapper-header" data-v-7d72ea29><h1 data-v-7d72ea29>${ssrInterpolate(unref(grapeData).name)}</h1></div><div class="grape-details" data-v-7d72ea29><h3 data-v-7d72ea29>Health Benefits</h3><p data-v-7d72ea29>${ssrInterpolate(unref(grapeData).healthbenefits)}</p></div><div class="grape-details" data-v-7d72ea29><h3 data-v-7d72ea29>PLU Information</h3><p data-v-7d72ea29>${ssrInterpolate(unref(grapeData).PLUinfo)}</p></div><div class="grape-details" data-v-7d72ea29><h3 data-v-7d72ea29>Pack Style</h3><p data-v-7d72ea29>${ssrInterpolate(unref(grapeData).packstyle)}</p></div></div><div class="wrapper-gallery" data-v-7d72ea29><h3 data-v-7d72ea29>Photos</h3><p data-v-7d72ea29>Click to enlarge.</p><div class="wrapper-photos" data-v-7d72ea29><!--[-->`);
      ssrRenderList(unref(grapeImages), (filePath) => {
        _push(`<ul class="gallery" data-v-7d72ea29><li data-v-7d72ea29><div class="photo" data-v-7d72ea29><img${ssrRenderAttr("src", getImageURL(filePath))} alt="Image" data-v-7d72ea29></div></li></ul>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (unref(modalBool)) {
        _push(`<div class="modal" data-v-7d72ea29><div class="modal-photo" data-v-7d72ea29>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`<div class="x-wrapper" data-v-7d72ea29><span class="x-btn" data-v-7d72ea29>\xD7</span></div>`);
        if (unref(modalImage)) {
          _push(`<img${ssrRenderAttr("src", unref(modalImage))} data-v-7d72ea29>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/Grape/[grape].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _grape_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d72ea29"]]);

export { _grape_ as default };
//# sourceMappingURL=_grape_-BKL_ki6r.mjs.map
