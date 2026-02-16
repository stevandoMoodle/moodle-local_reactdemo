import React from "react";
import {Button} from "@moodlehq/design-system";
import { withProfiler } from "@moodle/lms/core/profiler";

function requireAmd(mod) {
  return new Promise((resolve, reject) => {
    require([mod], resolve, reject);
  });
}

async function getString(key, component, params = {}) {
  const str = await requireAmd("core/str");
  return str.get_string(key, component, params);
}

const loadModalForm = async(event) => {
  event?.preventDefault();
  const ModalForm = await requireAmd("core_form/modalform");
  const contextid = window.M.cfg.contextid ?? 1;
  const modalHeader = await getString("modal_header", "local_reactdemo");
  const form = new ModalForm({
    formClass: "local_reactdemo\\simple2complex_form",
    args: { contextid: contextid },
    modalConfig: { title: modalHeader },
    returnFocus: event?.currentTarget ?? null,
  });
  form.show();
};

function App() {
  const [tick, setTick] = React.useState(0);
  window.console.log(tick);
  React.useEffect(() => {
    setTimeout(() => setTick(t => t + 1), 500);
  }, []);

  const [label, setLabel] = React.useState("");

  React.useEffect(() => {
    async function load() {
      const text = await getString("text", "local_reactdemo");
      setLabel(text);
    }

    load().catch((error) =>
      window.console.error("Failed to load string", error)
    );
  }, []);

  return (
    <div>
      {label || "Hello from my new file"}
      <br />
      <Button label="Modal form?" onClick={loadModalForm} />
    </div>
  );
}

export default function init(props = {}) {
  const ProfiledApp = withProfiler(App, "App");
  return <ProfiledApp {...props} />;
}