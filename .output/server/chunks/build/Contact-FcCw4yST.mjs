import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "" + buildAssetsURL("bari-produce-logo.pdzm-d6Y.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "contact" }, _attrs))} data-v-150f2b38><div class="wrapper" data-v-150f2b38><div class="bari-produce-logo" data-v-150f2b38><img${ssrRenderAttr("src", _imports_0)} data-v-150f2b38></div><div class="contact-wrapper" data-v-150f2b38><div class="contact-navbar" data-v-150f2b38><nav class="contact-nav-links-wrapper" data-v-150f2b38><a data-v-150f2b38>Home</a><a data-v-150f2b38>About</a><a data-v-150f2b38>Product</a><a data-v-150f2b38>Recipe</a><a data-v-150f2b38>Contact</a></nav></div><div class="address-wrapper" data-v-150f2b38><div class="address-column-wrapper" data-v-150f2b38><div class="address" data-v-150f2b38><h2 data-v-150f2b38>Bari Produce LLC</h2><p data-v-150f2b38>680 W. Shaw Ave.<br data-v-150f2b38> Suite 208<br data-v-150f2b38> Fresno, CA 93704</p></div><div class="address" data-v-150f2b38><h2 data-v-150f2b38>Phone</h2><p data-v-150f2b38>Sales: (559) 560-5600<br data-v-150f2b38> Fax: (559) 674-4911</p></div></div><div class="address-column-wrapper" data-v-150f2b38><div class="address" data-v-150f2b38><h2 data-v-150f2b38>Peter&#39;s Fruit Farm</h2><p data-v-150f2b38><i data-v-150f2b38>Shed Address</i><br data-v-150f2b38> 41018 Road 56<br data-v-150f2b38> Reedley, CA 93654</p></div><div class="address" data-v-150f2b38><h2 data-v-150f2b38>Phone</h2><p data-v-150f2b38>Shipping: 559-638-8173</p></div></div></div><div class="email-wrapper" data-v-150f2b38><div class="email-wrapper-1" data-v-150f2b38><div class="email" data-v-150f2b38><h2 data-v-150f2b38>Ryan Logoluso</h2><button data-v-150f2b38><a href="mailto:RLogoluso@bariproduce.com" data-v-150f2b38>E-mail</a></button></div><div class="email" data-v-150f2b38><h2 data-v-150f2b38>Justin D. Bedwell</h2><button data-v-150f2b38><a href="mailto:JBedwell@bariproduce.com" data-v-150f2b38>E-mail</a></button></div><div class="email" data-v-150f2b38><h2 data-v-150f2b38>Sal Pacheco</h2><button data-v-150f2b38><a href="mailto:SPacheco@bariproduce.com" data-v-150f2b38>E-mail</a></button></div><div class="email" data-v-150f2b38><h2 data-v-150f2b38>Tina Haga</h2><button data-v-150f2b38><a href="mailto:THaga@bariproduce.com" data-v-150f2b38>E-mail</a></button></div><div class="email" data-v-150f2b38><h2 data-v-150f2b38>Jeff Olson</h2><button data-v-150f2b38><a href="mailto:JOlson@bariproduce.com" data-v-150f2b38>E-mail</a></button></div><div class="email" data-v-150f2b38><h2 data-v-150f2b38>Gene Bruce</h2><button data-v-150f2b38><a href="mailto:GBruce@bariproduce.com" data-v-150f2b38>E-mail</a></button></div></div><div class="email-wrapper-2" data-v-150f2b38><div class="email" data-v-150f2b38><h2 data-v-150f2b38>Jim Stilwell</h2><button data-v-150f2b38><a href="mailto:JStilwell@bariproduce.com" data-v-150f2b38>E-mail</a></button></div></div></div></div><div class="disclaimer-wrapper" data-v-150f2b38><div data-v-150f2b38><p data-v-150f2b38>Bari Produce does not collect visitor data from our site. Bari Produce does monitor the number of site views and other non-visitor specific data concerning the performance of the site in general. Regarding information that is provided to Bari Produce; Bari Produce does not sell, give, or trade any information to any third parties for data-mining, marketing, or any other purpose. Your privacy is of the utmost concern to Bari Produce. The information on our website, and any information we solicit from you, or that you provide to us in response to what you may read on our website, is not intended as an offer to sell, or the solicitation of an offer to buy, any goods or services. It is for informational purposes only.</p></div><div data-v-150f2b38><p data-v-150f2b38>\xA9 2024 Bari Produce LLC | Site designed by Berta Kang</p></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-150f2b38"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Contact-FcCw4yST.mjs.map
