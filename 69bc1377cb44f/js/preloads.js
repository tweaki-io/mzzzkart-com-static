
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.Cb9lHEF0.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.CDZEnvyV.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor-legacy.BPGW4kqO.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.Cjbbcohg.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground-legacy.B_oe3CgW.js","/cdn/shopifycloud/checkout-web/assets/c1/object-legacy.B8qeWjiy.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer-legacy.DtRYy6Nf.js","/cdn/shopifycloud/checkout-web/assets/c1/alternativePaymentCurrency-legacy.Be1V5Lv1.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal-legacy.CmxF-69X.js","/cdn/shopifycloud/checkout-web/assets/c1/useHasOrdersFromMultipleShops-legacy.CR_vToF2.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.CxY6vI9s.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.rQzQROhY.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.CR-SpMgd.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-legacy.CRq0-6zb.js","/cdn/shopifycloud/checkout-web/assets/c1/useForceShopPayUrl-legacy.BmjnyLNB.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo-legacy.D8ZhllCJ.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.D8hs6LeU.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.B4j291qL.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummary-legacy.C93tUD-h.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.DSyVsxn2.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo-legacy.Bd27eRCx.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-legacy.C5wfioSR.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton-legacy.B6HLrN13.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin-legacy.DKQlRHv7.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.Bkpwhm9Y.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.Bq5SXvhQ.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery-legacy.aRhkyX9i.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.DdcDb1Js.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.DQqbICC1.js","/cdn/shopifycloud/checkout-web/assets/c1/flags-legacy.eiwumyI5.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.XOXN2B27.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.B9AvzqMq.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options-legacy.CTrRct9V.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.upiGlQIK.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.1f49WGt7.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.Bnw7VLAX.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.BvHJ9OeC.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions-legacy.CWy-xs1v.js","/cdn/shopifycloud/checkout-web/assets/c1/rendering-extension-targets-legacy.Bj3vsfSN.js","/cdn/shopifycloud/checkout-web/assets/c1/v4-legacy.On_frbc2.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.ogmPlZ62.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0983/0606/4565/files/Mzzz_logo_1_x320.png?v=1761502249"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  