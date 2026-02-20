var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// public/local/reactdemo/js/react/src/helper.ts
function requireAmd(mod) {
  return new Promise((resolve, reject) => {
    __require([mod], resolve, reject);
  });
}
__name(requireAmd, "requireAmd");

// public/local/reactdemo/js/react/src/local_reactdemo_modal_test.tsx
import React from "react";
import { Button } from "@moodlehq/design-system";
async function getString(key, component, params = {}) {
  const str = await requireAmd("core/str");
  return str.get_string(key, component, params);
}
__name(getString, "getString");
var loadModalForm = /* @__PURE__ */ __name(async (props, event) => {
  event?.preventDefault();
  const ModalForm = await requireAmd("core_form/modalform");
  const modalHeader = await getString("modal_header", "local_reactdemo");
  const form = new ModalForm({
    formClass: "local_reactdemo\\simple2complex_form",
    args: { contextid: props.contextid },
    modalConfig: { title: modalHeader },
    returnFocus: event?.currentTarget ?? null
  });
  form.show();
}, "loadModalForm");
function App(props) {
  const [tick, setTick] = React.useState(0);
  window.console.log(tick);
  React.useEffect(() => {
    setTimeout(() => setTick((t) => t + 1), 500);
  }, []);
  const [label, setLabel] = React.useState("");
  React.useEffect(() => {
    async function load() {
      const text = await getString("text", "local_reactdemo");
      setLabel(text);
    }
    __name(load, "load");
    load().catch(
      (error) => window.console.error("Failed to load string", error)
    );
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, label || "Hello from my new file", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Button, { label: "Modal form?", onClick: () => loadModalForm(props) }));
}
__name(App, "App");
function init(props = {}) {
  return /* @__PURE__ */ React.createElement(App, { ...props });
}
__name(init, "init");
export {
  init as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2hlbHBlci50cyIsICIuLi9zcmMvbG9jYWxfcmVhY3RkZW1vX21vZGFsX3Rlc3QudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIExvYWRzIGEgcmVxdWVzdGVkIG1vZHVsZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kIGlzIG1vZHVsZSBuYW1lLlxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVBbWQobW9kOiBzdHJpbmcpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBVc2UgYW55IHRvIGF2b2lkIFR5cGVTY3JpcHQgZXJyb3JzIHdpdGggcmVxdWlyZS5cbiAgICAgICAgKHJlcXVpcmUgYXMgYW55KShbbW9kXSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAbW9vZGxlaHEvZGVzaWduLXN5c3RlbVwiO1xuaW1wb3J0IHJlcXVpcmVBbWQgZnJvbSAnLi9oZWxwZXInO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IGlzIGEgc3RyaW5nIGtleVxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudCBpcyBhIGNvbXBvbmVudCBuYW1lXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgaXMgYXJyYXkgb2YgZGF0YVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFN0cmluZyhrZXksIGNvbXBvbmVudCwgcGFyYW1zID0ge30pIHtcbiAgY29uc3Qgc3RyID0gYXdhaXQgcmVxdWlyZUFtZChcImNvcmUvc3RyXCIpO1xuICByZXR1cm4gc3RyLmdldF9zdHJpbmcoa2V5LCBjb21wb25lbnQsIHBhcmFtcyk7XG59XG5cbi8qKlxuICogTG9hZHMgYSBtb2RhbCBmb3JtLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBvYmplY3QgcHJvcGVydGllcyBzZW50IGZyb20gcmVuZGVyZXJcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKi9cbmNvbnN0IGxvYWRNb2RhbEZvcm0gPSBhc3luYyhwcm9wcywgZXZlbnQpID0+IHtcbiAgZXZlbnQ/LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IE1vZGFsRm9ybSA9IGF3YWl0IHJlcXVpcmVBbWQoXCJjb3JlX2Zvcm0vbW9kYWxmb3JtXCIpO1xuICBjb25zdCBtb2RhbEhlYWRlciA9IGF3YWl0IGdldFN0cmluZyhcIm1vZGFsX2hlYWRlclwiLCBcImxvY2FsX3JlYWN0ZGVtb1wiKTtcbiAgY29uc3QgZm9ybSA9IG5ldyBNb2RhbEZvcm0oe1xuICAgIGZvcm1DbGFzczogXCJsb2NhbF9yZWFjdGRlbW9cXFxcc2ltcGxlMmNvbXBsZXhfZm9ybVwiLFxuICAgIGFyZ3M6IHsgY29udGV4dGlkOiBwcm9wcy5jb250ZXh0aWQgfSxcbiAgICBtb2RhbENvbmZpZzogeyB0aXRsZTogbW9kYWxIZWFkZXIgfSxcbiAgICByZXR1cm5Gb2N1czogZXZlbnQ/LmN1cnJlbnRUYXJnZXQgPz8gbnVsbCxcbiAgfSk7XG4gIGZvcm0uc2hvdygpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHJlYWN0IGNvbXBvbmVudHMuXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEByZXR1cm5zIEEgSlNYLkVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQgVUlcbiAqL1xuZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gIGNvbnN0IFt0aWNrLCBzZXRUaWNrXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICB3aW5kb3cuY29uc29sZS5sb2codGljayk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRUaWNrKHQgPT4gdCArIDEpLCA1MDApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgZ2V0U3RyaW5nKFwidGV4dFwiLCBcImxvY2FsX3JlYWN0ZGVtb1wiKTtcbiAgICAgIHNldExhYmVsKHRleHQpO1xuICAgIH1cblxuICAgIGxvYWQoKS5jYXRjaCgoZXJyb3IpID0+XG4gICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHN0cmluZ1wiLCBlcnJvcilcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2xhYmVsIHx8IFwiSGVsbG8gZnJvbSBteSBuZXcgZmlsZVwifVxuICAgICAgPGJyIC8+XG4gICAgICA8QnV0dG9uIGxhYmVsPVwiTW9kYWwgZm9ybT9cIiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9kYWxGb3JtKHByb3BzKX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLyoqXG4gKiBFeHBvcnQgdGhlIEFwcC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHJldHVybnMgQSBKU1guRWxlbWVudCByZXByZXNlbnRpbmcgdGhlIGNvbXBvbmVudCBVSVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KHByb3BzID0ge30pIHtcbiAgcmV0dXJuIDxBcHAgey4uLnByb3BzfSAvPjtcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBTWUsU0FBUixXQUE0QixLQUFhO0FBRTVDLFNBQU8sSUFBSSxRQUFhLENBQUMsU0FBUyxXQUFXO0FBRXpDLElBQUMsVUFBZ0IsQ0FBQyxHQUFHLEdBQUcsU0FBUyxNQUFNO0FBQUEsRUFDM0MsQ0FBQztBQUNMO0FBTndCOzs7QUNOeEIsT0FBTyxXQUFXO0FBQ2xCLFNBQVEsY0FBYTtBQVVyQixlQUFlLFVBQVUsS0FBSyxXQUFXLFNBQVMsQ0FBQyxHQUFHO0FBQ3BELFFBQU0sTUFBTSxNQUFNLFdBQVcsVUFBVTtBQUN2QyxTQUFPLElBQUksV0FBVyxLQUFLLFdBQVcsTUFBTTtBQUM5QztBQUhlO0FBV2YsSUFBTSxnQkFBZ0IsOEJBQU0sT0FBTyxVQUFVO0FBQzNDLFNBQU8sZUFBZTtBQUN0QixRQUFNLFlBQVksTUFBTSxXQUFXLHFCQUFxQjtBQUN4RCxRQUFNLGNBQWMsTUFBTSxVQUFVLGdCQUFnQixpQkFBaUI7QUFDckUsUUFBTSxPQUFPLElBQUksVUFBVTtBQUFBLElBQ3pCLFdBQVc7QUFBQSxJQUNYLE1BQU0sRUFBRSxXQUFXLE1BQU0sVUFBVTtBQUFBLElBQ25DLGFBQWEsRUFBRSxPQUFPLFlBQVk7QUFBQSxJQUNsQyxhQUFhLE9BQU8saUJBQWlCO0FBQUEsRUFDdkMsQ0FBQztBQUNELE9BQUssS0FBSztBQUNaLEdBWHNCO0FBa0J0QixTQUFTLElBQUksT0FBTztBQUNsQixRQUFNLENBQUMsTUFBTSxPQUFPLElBQUksTUFBTSxTQUFTLENBQUM7QUFDeEMsU0FBTyxRQUFRLElBQUksSUFBSTtBQUN2QixRQUFNLFVBQVUsTUFBTTtBQUNwQixlQUFXLE1BQU0sUUFBUSxPQUFLLElBQUksQ0FBQyxHQUFHLEdBQUc7QUFBQSxFQUMzQyxHQUFHLENBQUMsQ0FBQztBQUVMLFFBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSSxNQUFNLFNBQVMsRUFBRTtBQUUzQyxRQUFNLFVBQVUsTUFBTTtBQUNwQixtQkFBZSxPQUFPO0FBQ3BCLFlBQU0sT0FBTyxNQUFNLFVBQVUsUUFBUSxpQkFBaUI7QUFDdEQsZUFBUyxJQUFJO0FBQUEsSUFDZjtBQUhlO0FBS2YsU0FBSyxFQUFFO0FBQUEsTUFBTSxDQUFDLFVBQ1osT0FBTyxRQUFRLE1BQU0seUJBQXlCLEtBQUs7QUFBQSxJQUNyRDtBQUFBLEVBQ0YsR0FBRyxDQUFDLENBQUM7QUFFTCxTQUNFLG9DQUFDLGFBQ0UsU0FBUywwQkFDVixvQ0FBQyxVQUFHLEdBQ0osb0NBQUMsVUFBTyxPQUFNLGVBQWMsU0FBUyxNQUFNLGNBQWMsS0FBSyxHQUFHLENBQ25FO0FBRUo7QUEzQlM7QUFrQ00sU0FBUixLQUFzQixRQUFRLENBQUMsR0FBRztBQUN2QyxTQUFPLG9DQUFDLE9BQUssR0FBRyxPQUFPO0FBQ3pCO0FBRndCOyIsCiAgIm5hbWVzIjogW10KfQo=
