var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// public/lib/js/react/src/profiler.ts
import { createElement, Profiler } from "react";
var isProfilerEnabled = /* @__PURE__ */ __name(() => {
  return Boolean(window.M?.cfg?.reactprofiling);
}, "isProfilerEnabled");
var onRenderCallback = /* @__PURE__ */ __name((id, phase, actualDuration, baseDuration, startTime, commitTime) => {
  if (!isProfilerEnabled()) return;
  console.groupCollapsed(`[${phase}] ${id} - ${actualDuration.toFixed(2)}ms`);
  console.table({
    Component: id,
    Phase: phase,
    "Duration (ms)": actualDuration.toFixed(2),
    "Base Duration (ms)": baseDuration.toFixed(2),
    "Start Time": startTime.toFixed(2),
    "Commit Time": commitTime.toFixed(2)
  });
  if (actualDuration > 16) {
    console.warn(
      `Slow render: ${actualDuration.toFixed(2)}ms (target: <16ms for 60fps)`
    );
  }
  if (actualDuration > 50) {
    console.error(
      `Very slow render: ${actualDuration.toFixed(
        2
      )}ms - Consider optimization!`
    );
  }
  console.groupEnd();
}, "onRenderCallback");
var getProfilerCallback = /* @__PURE__ */ __name(() => {
  return isProfilerEnabled() ? onRenderCallback : void 0;
}, "getProfilerCallback");
function withProfiler(Component, id) {
  if (!isProfilerEnabled()) {
    return Component;
  }
  const componentId = id || Component.displayName || Component.name || "Component";
  const ProfiledComponent = /* @__PURE__ */ __name((props) => createElement(
    Profiler,
    { id: componentId, onRender: onRenderCallback },
    createElement(Component, props)
  ), "ProfiledComponent");
  ProfiledComponent.displayName = `withProfiler(${componentId})`;
  return ProfiledComponent;
}
__name(withProfiler, "withProfiler");

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
  const ProfiledApp = withProfiler(App, "App");
  return /* @__PURE__ */ React.createElement(ProfiledApp, { ...props });
}
__name(init, "init");
export {
  init as default
};
//# sourceMappingURL=local_reactdemo_modal_test.js.map
