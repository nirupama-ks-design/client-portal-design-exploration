(function () {
  const STORAGE_KEY = "gladeSplineTune:v2";
  const UI_KEY = "gladeSplineTune:ui:v1";
  const DEFAULTS = {
    zoom: 1.63,
    x: -21.1,
    y: -18.3,
    rotate: -2.6,
    opacity: 1
  };

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULTS };
      const parsed = JSON.parse(raw);
      return {
        zoom: Number.isFinite(parsed.zoom) ? parsed.zoom : DEFAULTS.zoom,
        x: Number.isFinite(parsed.x) ? parsed.x : DEFAULTS.x,
        y: Number.isFinite(parsed.y) ? parsed.y : DEFAULTS.y,
        rotate: Number.isFinite(parsed.rotate) ? parsed.rotate : DEFAULTS.rotate,
        opacity: Number.isFinite(parsed.opacity) ? parsed.opacity : DEFAULTS.opacity
      };
    } catch (_e) {
      return { ...DEFAULTS };
    }
  }

  function save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_e) {}
  }

  function apply(viewer, state) {
    const zoom = clamp(state.zoom, 0.5, 2.2);
    const x = clamp(state.x, -40, 40);
    const y = clamp(state.y, -40, 40);
    const rotate = clamp(state.rotate, -35, 35);
    const opacity = clamp(state.opacity, 0.2, 1);

    viewer.style.transformOrigin = "50% 50%";
    viewer.style.transform = `translate3d(${x}vw, ${y}vh, 0) scale(${zoom}) rotate(${rotate}deg)`;
    viewer.style.opacity = String(opacity);
  }

  function createPanel(state, onChange, onReset, onCopy) {
    const panel = document.createElement("aside");
    panel.className = "spline-controls";
    panel.innerHTML = `
      <div class="spline-controls-head">
        <strong>Spline Composition</strong>
      </div>
      <div class="spline-controls-body"></div>
      <div class="spline-controls-tools">
        <button type="button" data-action="reset">Reset</button>
        <button type="button" data-action="copy">Copy JSON</button>
      </div>
    `;

    const body = panel.querySelector(".spline-controls-body");

    const rows = [
      { key: "zoom", label: "Zoom", min: 0.5, max: 2.2, step: 0.01 },
      { key: "x", label: "X Offset (vw)", min: -40, max: 40, step: 0.1 },
      { key: "y", label: "Y Offset (vh)", min: -40, max: 40, step: 0.1 },
      { key: "rotate", label: "Rotation (deg)", min: -35, max: 35, step: 0.1 },
      { key: "opacity", label: "Opacity", min: 0.2, max: 1, step: 0.01 }
    ];

    rows.forEach((row) => {
      const wrap = document.createElement("label");
      wrap.className = "spline-controls-row";
      wrap.innerHTML = `
        <span>${row.label}</span>
        <div>
          <input type="range" min="${row.min}" max="${row.max}" step="${row.step}" value="${state[row.key]}">
          <input type="number" min="${row.min}" max="${row.max}" step="${row.step}" value="${state[row.key]}">
        </div>
      `;
      const [range, number] = wrap.querySelectorAll("input");
      const sync = (val) => {
        const n = Number(val);
        state[row.key] = Number.isFinite(n) ? n : state[row.key];
        range.value = String(state[row.key]);
        number.value = String(state[row.key]);
        onChange();
      };
      range.addEventListener("input", () => sync(range.value));
      number.addEventListener("input", () => sync(number.value));
      body.appendChild(wrap);
    });

    panel.querySelector('[data-action="reset"]').addEventListener("click", onReset);
    panel.querySelector('[data-action="copy"]').addEventListener("click", onCopy);
    return panel;
  }

  function initSplineTune() {
    const params = new URLSearchParams(window.location.search);
    const forced = params.get("tune") === "1";
    const viewer = document.querySelector(".bg-stage spline-viewer");
    if (!viewer) return;

    const state = load();
    apply(viewer, state);

    if (forced) {
      try { localStorage.setItem(UI_KEY, "open"); } catch (_e) {}
    }

    const isOpen = forced || (() => {
      try { return localStorage.getItem(UI_KEY) === "open"; } catch (_e) { return false; }
    })();

    const onChange = () => {
      apply(viewer, state);
      save(state);
    };

    const onReset = () => {
      Object.assign(state, DEFAULTS);
      save(state);
      apply(viewer, state);
      document.querySelectorAll(".spline-controls-row").forEach((row, idx) => {
        const key = ["zoom", "x", "y", "rotate", "opacity"][idx];
        const [range, number] = row.querySelectorAll("input");
        range.value = String(state[key]);
        number.value = String(state[key]);
      });
    };

    const onCopy = async () => {
      const text = JSON.stringify(state, null, 2);
      try {
        await navigator.clipboard.writeText(text);
      } catch (_e) {
        console.log(text);
      }
    };

    const launcher = document.createElement("button");
    launcher.type = "button";
    launcher.className = "spline-controls-launcher";
    launcher.textContent = "Tune";
    document.body.appendChild(launcher);

    let panel = null;
    const openPanel = () => {
      if (panel) return;
      panel = createPanel(state, onChange, onReset, onCopy);
      const head = panel.querySelector(".spline-controls-head");
      const close = document.createElement("button");
      close.type = "button";
      close.className = "spline-controls-close";
      close.textContent = "Close";
      close.addEventListener("click", () => {
        try { localStorage.setItem(UI_KEY, "closed"); } catch (_e) {}
        panel.remove();
        panel = null;
      });
      head.appendChild(close);
      document.body.appendChild(panel);
      try { localStorage.setItem(UI_KEY, "open"); } catch (_e) {}
    };

    launcher.addEventListener("click", openPanel);
    if (isOpen) openPanel();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSplineTune, { once: true });
  } else {
    initSplineTune();
  }
})();
