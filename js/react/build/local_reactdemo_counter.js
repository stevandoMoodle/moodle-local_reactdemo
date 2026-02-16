var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// public/local/reactdemo/js/react/src/local_reactdemo_counter.tsx
import React from "react";
function Counter({ initial }) {
  const [count, setCount] = React.useState(initial);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Counter"), /* @__PURE__ */ React.createElement("div", null, "Count: ", count), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setCount((c) => c + 1) }, "+"));
}
__name(Counter, "Counter");
export {
  Counter as default
};
//# sourceMappingURL=local_reactdemo_counter.js.map
