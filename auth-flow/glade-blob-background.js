(function () {
  function createNoise(seed) {
    let state = (seed >>> 0) || 1;
    const rand = () => {
      state = (1664525 * state + 1013904223) >>> 0;
      return state / 4294967296;
    };

    const p = Array.from({ length: 256 }, (_v, i) => i);
    for (let i = p.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rand() * (i + 1));
      const tmp = p[i];
      p[i] = p[j];
      p[j] = tmp;
    }
    const perm = p.concat(p);
    const g3 = [
      [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
      [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
      [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]
    ];
    const dot3 = (g, x, y, z) => g[0] * x + g[1] * y + g[2] * z;
    const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (a, b, t) => a + t * (b - a);

    return function (x, y, z) {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const Z = Math.floor(z) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      z -= Math.floor(z);
      const u = fade(x);
      const v = fade(y);
      const w = fade(z);
      const A = perm[X] + Y;
      const AA = perm[A] + Z;
      const AB = perm[A + 1] + Z;
      const B = perm[X + 1] + Y;
      const BA = perm[B] + Z;
      const BB = perm[B + 1] + Z;

      return lerp(
        lerp(
          lerp(dot3(g3[perm[AA] % 12], x, y, z), dot3(g3[perm[BA] % 12], x - 1, y, z), u),
          lerp(dot3(g3[perm[AB] % 12], x, y - 1, z), dot3(g3[perm[BB] % 12], x - 1, y - 1, z), u),
          v
        ),
        lerp(
          lerp(dot3(g3[perm[AA + 1] % 12], x, y, z - 1), dot3(g3[perm[BA + 1] % 12], x - 1, y, z - 1), u),
          lerp(dot3(g3[perm[AB + 1] % 12], x, y - 1, z - 1), dot3(g3[perm[BB + 1] % 12], x - 1, y - 1, z - 1), u),
          v
        ),
        w
      );
    };
  }

  const STORAGE_KEY = "gladeBlobTuning:v2";
  const UI_KEY = "gladeBlobTuning:ui";

  const DEFAULTS = {
    noiseSeed: 133742,
    innerRadius: 0.92,
    shellRadius: 1.19,
    shellDetail: 5,
    dotSize: 5,
    dotOpacity: 0.65,
    dotDensity: 0.71,

    oct1Freq: 1.1,
    oct1Amp: 0.16,
    oct2Freq: 2.5,
    oct2Amp: 0.04,
    oct3Freq: 4.5,
    oct3Amp: 0.005,

    noiseScale: 1.1,
    noiseStrength: 0.18,
    noiseOctaves: 5,
    noiseLacunarity: 2.35,
    noisePersistence: 0.25,
    noiseWarp: 0.64,
    noiseWarpFreq: 1.35,
    noiseFlow: 0.22,
    noiseStretchY: 0.93,
    noiseRidgeMix: 0.29,
    surfaceCurviness: 0.5,
    shellChunkiness: 0.62,
    shellBanding: 0.39,
    shellLopsidedness: 0.28,
    shellBottomWeight: 0.16,
    shellRidgeStrength: 0.21,
    shellSteps: 12,

    swirlSpeed: 0.19,
    swirlRadius: 0.65,
    driftSpeed: 0.16,
    breathAmp: 0.06,
    breathSpeed: 0.68,

    rotSpeed: 0.28,
    tiltAmp: 0.38,
    timeStep: 0.005,

    baseOpacity: 0.09,
    edgeMult: 0.25,
    fresnelPow: 2.56,
    specIntensity: 0.18,
    specWidth: 1.65,
    frostAmount: 0.275,
    foldStrength: 0.105,
    backBaseOpacity: 0.18,
    backEdgeMult: 0.67,

    glowOpacity: 0.12,
    glow2Opacity: 0.07,
    glow3Opacity: 0.05,

    innerSaturation: 1.28,
    innerColor1: "#ff7a5f",
    innerColor2: "#f156b2",
    innerColor3: "#ffc2a0",
    innerColor4: "#ff8dc0",
    innerColor5: "#9a79ff",
    innerColor6: "#3f7dff",

    shellTopColor: "#ffffff",
    shellBottomColor: "#ffffff",
    shellSideColor: "#f3e6f8",
    shellNoiseDarkColor: "#9f95b0",
    shellNoiseTintColor: "#cec5da",

    backTopColor: "#efe3fa",
    backBottomColor: "#e4ecfb",

    glowTop1: "#dbbffd",
    glowBottom1: "#b9d6ff",
    glowTop2: "#d4b7fa",
    glowBottom2: "#c4dcff",
    glowTop3: "#cfadf7",
    glowBottom3: "#cfe4ff",

    bgTop: "#e8f1fe",
    bgBottom: "#e2eefb",
    hazeOpacity: 0.3
  };

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  function toHex(color) {
    const c = color.getHexString();
    return `#${c}`;
  }

  function toVec3(hex, THREE) {
    return new THREE.Color(hex);
  }

  function loadSavedParams() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return {};
      return parsed;
    } catch (_e) {
      return {};
    }
  }

  function saveParams(params) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    } catch (_e) {}
  }

  function saveUiState(state) {
    try {
      localStorage.setItem(UI_KEY, JSON.stringify(state));
    } catch (_e) {}
  }

  function loadUiState() {
    try {
      const raw = localStorage.getItem(UI_KEY);
      if (!raw) return {};
      return JSON.parse(raw) || {};
    } catch (_e) {
      return {};
    }
  }

  function initGladeBlobBackground(container, options) {
    if (!container || !window.THREE) return function () {};

    const THREE = window.THREE;
    const saved = loadSavedParams();

    const settings = Object.assign({
      groupScale: 2.42,
      groupX: 1.52,
      groupY: -1.65,
      cameraX: 0.3,
      cameraY: 0.1,
      cameraZ: 5.2,
      showControls: false,
      useSaved: false
    }, options || {});

    const persisted = settings.useSaved ? saved : {};
    const p = Object.assign({}, DEFAULTS, persisted, options && options.params ? options.params : {});
    const noise = createNoise(p.noiseSeed);
    if (!Object.prototype.hasOwnProperty.call(saved, "noiseScale")) {
      p.noiseScale = p.oct1Freq;
    }
    if (!Object.prototype.hasOwnProperty.call(saved, "noiseStrength")) {
      p.noiseStrength = p.oct1Amp;
    }
    if (!Object.prototype.hasOwnProperty.call(saved, "noiseLacunarity")) {
      p.noiseLacunarity = p.oct1Freq > 0 ? p.oct2Freq / p.oct1Freq : DEFAULTS.noiseLacunarity;
    }
    if (!Object.prototype.hasOwnProperty.call(saved, "noisePersistence")) {
      p.noisePersistence = p.oct1Amp > 0 ? p.oct2Amp / p.oct1Amp : DEFAULTS.noisePersistence;
    }

    // Keep outer membrane and texture readable in production even if values drift.
    p.dotOpacity = clamp(p.dotOpacity, 0.5, 1);
    p.dotDensity = clamp(p.dotDensity, 0.55, 1);
    p.baseOpacity = clamp(p.baseOpacity, 0.1, 0.5);
    p.edgeMult = clamp(p.edgeMult, 0.28, 1.2);
    p.backBaseOpacity = clamp(p.backBaseOpacity, 0.05, 0.4);
    p.backEdgeMult = clamp(p.backEdgeMult, 0.12, 1);
    p.glowOpacity = clamp(p.glowOpacity, 0.05, 0.25);
    p.glow2Opacity = clamp(p.glow2Opacity, 0.03, 0.2);
    p.glow3Opacity = clamp(p.glow3Opacity, 0.02, 0.18);
    p.shellRadius = Math.max(p.shellRadius, p.innerRadius + 0.19);
    p.surfaceCurviness = clamp(p.surfaceCurviness, 0, 1);
    p.shellChunkiness = clamp(p.shellChunkiness, 0, 1);
    p.shellBanding = clamp(p.shellBanding, 0, 1);
    p.shellLopsidedness = clamp(p.shellLopsidedness, 0, 1);
    p.shellBottomWeight = clamp(p.shellBottomWeight, 0, 1);
    p.shellRidgeStrength = clamp(p.shellRidgeStrength, 0, 1);
    p.shellSteps = clamp(Math.round(p.shellSteps), 0, 12);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(settings.cameraX, settings.cameraY, settings.cameraZ);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.position.set(settings.groupX, settings.groupY, 0);
    group.scale.setScalar(settings.groupScale);
    scene.add(group);

    const innerUni = {
      uTime: { value: 0 },
      uSaturation: { value: p.innerSaturation },
      uColor1: { value: toVec3(p.innerColor1, THREE) },
      uColor2: { value: toVec3(p.innerColor2, THREE) },
      uColor3: { value: toVec3(p.innerColor3, THREE) },
      uColor4: { value: toVec3(p.innerColor4, THREE) },
      uColor5: { value: toVec3(p.innerColor5, THREE) },
      uColor6: { value: toVec3(p.innerColor6, THREE) }
    };

    const innerMat = new THREE.ShaderMaterial({
      uniforms: innerUni,
      transparent: true,
      depthWrite: false,
      vertexShader: `
        varying vec3 vON;
        varying vec3 vN;
        varying vec3 vV;
        void main() {
          vON = normalize(position);
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uSaturation;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform vec3 uColor4;
        uniform vec3 uColor5;
        uniform vec3 uColor6;
        varying vec3 vON;
        varying vec3 vN;
        varying vec3 vV;
        void main() {
          vec3 n = normalize(vON);
          float t = uTime;

          vec3 d0 = normalize(vec3(cos(t*0.10), sin(t*0.08), cos(t*0.07+1.0)));
          vec3 d1 = normalize(vec3(sin(t*0.09+1.5), cos(t*0.07), sin(t*0.10+0.5)));
          vec3 d2 = normalize(vec3(cos(t*0.07+3.0), sin(t*0.09+1.0), cos(t*0.08+2.0)));
          vec3 d3 = normalize(vec3(sin(t*0.08+4.5), cos(t*0.10+2.0), sin(t*0.07+3.5)));
          vec3 d4 = normalize(vec3(cos(t*0.06+2.0), sin(t*0.11+0.8), cos(t*0.09+4.0)));
          vec3 d5 = normalize(vec3(sin(t*0.11+5.0), cos(t*0.08+3.0), sin(t*0.06+1.0)));

          float pw = 2.5;
          float w0 = pow(max(dot(n,d0)*0.5+0.5, 0.0), pw);
          float w1 = pow(max(dot(n,d1)*0.5+0.5, 0.0), pw);
          float w2 = pow(max(dot(n,d2)*0.5+0.5, 0.0), pw);
          float w3 = pow(max(dot(n,d3)*0.5+0.5, 0.0), pw);
          float w4 = pow(max(dot(n,d4)*0.5+0.5, 0.0), pw);
          float w5 = pow(max(dot(n,d5)*0.5+0.5, 0.0), pw);
          float wT = w0+w1+w2+w3+w4+w5 + 0.001;
          vec3 col = (uColor1*w0 + uColor2*w1 + uColor3*w2 + uColor4*w3 + uColor5*w4 + uColor6*w5) / wT;

          float g = dot(col, vec3(0.299, 0.587, 0.114));
          col = mix(vec3(g), col, uSaturation);

          float facing = abs(dot(vN, vV));
          float edgeFade = smoothstep(0.0, 0.5, facing);
          gl_FragColor = vec4(col, edgeFade * 0.93);
        }
      `
    });

    const shellVS = `
      attribute float disp;
      attribute float frost;
      attribute float randv;
      varying vec3 vN;
      varying vec3 vV;
      varying vec3 vWN;
      varying float vDisp;
      varying float vFrost;
      varying float vRand;
      void main() {
        vDisp = disp;
        vFrost = frost;
        vRand = randv;
        vN = normalize(normalMatrix * normal);
        vWN = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `;

    const frontUni = {
      uBaseOpacity: { value: p.baseOpacity },
      uEdgeMult: { value: p.edgeMult },
      uFresnelPow: { value: p.fresnelPow },
      uSpecIntensity: { value: p.specIntensity },
      uSpecWidth: { value: p.specWidth },
      uFrostAmount: { value: p.frostAmount },
      uFoldStrength: { value: p.foldStrength },
      uShellTopColor: { value: toVec3(p.shellTopColor, THREE) },
      uShellBottomColor: { value: toVec3(p.shellBottomColor, THREE) },
      uShellSideColor: { value: toVec3(p.shellSideColor, THREE) },
      uShellNoiseDarkColor: { value: toVec3(p.shellNoiseDarkColor, THREE) },
      uShellNoiseTintColor: { value: toVec3(p.shellNoiseTintColor, THREE) }
    };

    const shellFrontMat = new THREE.ShaderMaterial({
      uniforms: frontUni,
      vertexShader: shellVS,
      fragmentShader: `
        uniform float uBaseOpacity;
        uniform float uEdgeMult;
        uniform float uFresnelPow;
        uniform float uSpecIntensity;
        uniform float uSpecWidth;
        uniform float uFrostAmount;
        uniform float uFoldStrength;
        uniform vec3 uShellTopColor;
        uniform vec3 uShellBottomColor;
        uniform vec3 uShellSideColor;
        uniform vec3 uShellNoiseDarkColor;
        uniform vec3 uShellNoiseTintColor;
        varying vec3 vN;
        varying vec3 vV;
        varying vec3 vWN;
        varying float vDisp;
        varying float vFrost;
        void main() {
          float f = 1.0 - abs(dot(vN, vV));
          float edge = pow(f, uFresnelPow);

          float angle = dot(vWN, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
          vec3 col = mix(uShellTopColor, uShellBottomColor, angle);
          col = mix(col, uShellSideColor, max(dot(vWN, vec3(1.0, 0.0, 0.0)), 0.0) * 0.15);
          col += mix(uShellNoiseDarkColor, uShellNoiseTintColor, gl_FragCoord.y / 900.0);

          vec3 l1 = normalize(vec3(-0.4, 0.8, 0.6));
          vec3 l2 = normalize(vec3(0.5, 0.3, 0.8));
          vec3 l3 = normalize(vec3(-0.6, -0.3, 0.7));
          float spec = pow(max(dot(vN, normalize(l1 + vV)), 0.0), uSpecWidth) * uSpecIntensity
                     + pow(max(dot(vN, normalize(l2 + vV)), 0.0), uSpecWidth + 0.5) * uSpecIntensity * 0.77
                     + pow(max(dot(vN, normalize(l3 + vV)), 0.0), uSpecWidth) * uSpecIntensity * 0.6;
          col += vec3(spec);

          float cb = smoothstep(-0.3, 0.4, vDisp) * 0.10;
          float fa = (vFrost * 0.5 + 0.5) * uFrostAmount;
          float fold = pow(max(dot(vWN, l1), 0.0), 2.5) * uFoldStrength;
          float alpha = uBaseOpacity + edge * uEdgeMult + cb + fa + fold;
          alpha = max(alpha, uBaseOpacity * 1.35 + 0.02);
          gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.85));
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false
    });

    const backUni = {
      uBaseOpacity: { value: p.backBaseOpacity },
      uEdgeMult: { value: p.backEdgeMult },
      uBackTopColor: { value: toVec3(p.backTopColor, THREE) },
      uBackBottomColor: { value: toVec3(p.backBottomColor, THREE) }
    };

    const shellBackMat = new THREE.ShaderMaterial({
      uniforms: backUni,
      vertexShader: shellVS,
      fragmentShader: `
        uniform float uBaseOpacity;
        uniform float uEdgeMult;
        uniform vec3 uBackTopColor;
        uniform vec3 uBackBottomColor;
        varying vec3 vN;
        varying vec3 vV;
        varying vec3 vWN;
        varying float vFrost;
        void main() {
          float f = 1.0 - abs(dot(vN, vV));
          float edge = pow(f, 1.8);
          float fa = (vFrost * 0.5 + 0.5) * 0.015;
          float yf = dot(vWN, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
          vec3 col = mix(uBackBottomColor, uBackTopColor, yf);
          float alpha = uBaseOpacity + edge * uEdgeMult + fa;
          alpha = max(alpha, uBaseOpacity * 1.15 + 0.01);
          gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.6));
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false
    });

    const dotUni = {
      uDotOpacity: { value: p.dotOpacity },
      uDotSize: { value: p.dotSize },
      uDotDensity: { value: p.dotDensity }
    };

    const dotMat = new THREE.ShaderMaterial({
      uniforms: dotUni,
      transparent: true,
      depthWrite: false,
      vertexShader: `
        uniform float uDotSize;
        attribute float disp;
        attribute float frost;
        attribute float randv;
        varying vec3 vDN;
        varying vec3 vDV;
        varying float vM;
        varying float vRand;
        void main() {
          vM = (frost * 0.5 + 0.5) * 0.5 + max(disp, 0.0) * 1.5;
          vRand = randv;
          vDN = normalize(normalMatrix * normalize(position));
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vDV = normalize(-mv.xyz);
          gl_PointSize = uDotSize * (4.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform float uDotOpacity;
        uniform float uDotDensity;
        varying vec3 vDN;
        varying vec3 vDV;
        varying float vM;
        varying float vRand;
        void main() {
          if (vRand > uDotDensity) discard;
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float soft = 1.0 - smoothstep(0.2, 0.5, d);
          float facing = abs(dot(vDN, vDV));
          float vf = smoothstep(0.08, 0.55, facing);
          float mf = 1.0 - vM * 0.35;
          gl_FragColor = vec4(1.0, 1.0, 1.0, soft * vf * mf * uDotOpacity);
        }
      `
    });

    const glowVS = `
      varying vec3 vWN;
      void main() {
        vWN = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const glowFS = `
      uniform float uOp;
      uniform vec3 uTop;
      uniform vec3 uBottom;
      varying vec3 vWN;
      void main() {
        vec3 n = normalize(vWN);
        float yf = n.y * 0.5 + 0.5;
        float xf = n.x * 0.5 + 0.5;
        vec3 col = mix(uBottom, uTop, yf);
        col = mix(col, vec3(0.98, 0.90, 0.94), xf * 0.2);
        gl_FragColor = vec4(col, uOp);
      }
    `;

    const glowConfigs = [
      { dr: 0.18, sub: 5, opKey: "glowOpacity", topKey: "glowTop1", botKey: "glowBottom1" },
      { dr: 0.35, sub: 4, opKey: "glow2Opacity", topKey: "glowTop2", botKey: "glowBottom2" },
      { dr: 0.55, sub: 3, opKey: "glow3Opacity", topKey: "glowTop3", botKey: "glowBottom3" }
    ];

    let innerMesh = null;
    let shellFrontMesh = null;
    let shellBackMesh = null;
    let dotPoints = null;
    let shellGeo = null;
    let shellBackGeo = null;
    let shellOrig = null;
    let shellBackOrig = null;
    let glowData = [];

    function getMinDisplacement() {
      return (p.innerRadius + 0.09) / p.shellRadius;
    }

    function randomFromXYZ(x, y, z) {
      const v = Math.sin(x * 12.9898 + y * 78.233 + z * 45.164) * 43758.5453;
      return v - Math.floor(v);
    }

    function disposeGeometry() {
      if (innerMesh) {
        group.remove(innerMesh);
        innerMesh.geometry.dispose();
        innerMesh = null;
      }
      if (shellFrontMesh) {
        group.remove(shellFrontMesh);
        shellFrontMesh.geometry.dispose();
        shellFrontMesh = null;
      }
      if (shellBackMesh) {
        group.remove(shellBackMesh);
        shellBackMesh.geometry.dispose();
        shellBackMesh = null;
      }
      if (dotPoints) {
        group.remove(dotPoints);
        dotPoints = null;
      }
      glowData.forEach((g) => {
        group.remove(g.mesh);
        g.geo.dispose();
      });
      glowData = [];
    }

    function buildShellAttributes(geo) {
      const count = geo.attributes.position.count;
      geo.setAttribute("disp", new THREE.BufferAttribute(new Float32Array(count), 1));
      geo.setAttribute("frost", new THREE.BufferAttribute(new Float32Array(count), 1));
      const rand = new Float32Array(count);
      const pos = geo.attributes.position.array;
      for (let i = 0; i < count; i += 1) {
        const idx = i * 3;
        rand[i] = randomFromXYZ(pos[idx], pos[idx + 1], pos[idx + 2]);
      }
      geo.setAttribute("randv", new THREE.BufferAttribute(rand, 1));
    }

    function buildGeometry() {
      disposeGeometry();

      innerMesh = new THREE.Mesh(new THREE.SphereGeometry(p.innerRadius, 64, 64), innerMat);
      group.add(innerMesh);

      shellGeo = new THREE.IcosahedronGeometry(p.shellRadius, p.shellDetail);
      buildShellAttributes(shellGeo);
      shellOrig = shellGeo.attributes.position.array.slice();
      shellFrontMesh = new THREE.Mesh(shellGeo, shellFrontMat);
      group.add(shellFrontMesh);

      shellBackGeo = new THREE.IcosahedronGeometry(p.shellRadius, p.shellDetail);
      buildShellAttributes(shellBackGeo);
      shellBackOrig = shellBackGeo.attributes.position.array.slice();
      shellBackMesh = new THREE.Mesh(shellBackGeo, shellBackMat);
      group.add(shellBackMesh);

      dotPoints = new THREE.Points(shellGeo, dotMat);
      group.add(dotPoints);

      glowData = glowConfigs.map((cfg) => {
        const geo = new THREE.IcosahedronGeometry(p.shellRadius + cfg.dr, cfg.sub);
        const orig = geo.attributes.position.array.slice();
        const uni = {
          uOp: { value: p[cfg.opKey] },
          uTop: { value: toVec3(p[cfg.topKey], THREE) },
          uBottom: { value: toVec3(p[cfg.botKey], THREE) }
        };
        const mat = new THREE.ShaderMaterial({
          uniforms: uni,
          vertexShader: glowVS,
          fragmentShader: glowFS,
          transparent: true,
          side: THREE.BackSide,
          depthWrite: false
        });
        const mesh = new THREE.Mesh(geo, mat);
        group.add(mesh);
        return { geo, orig, mat, uniforms: uni };
      });
    }

    function samplePerlinFBM(nx, ny, nz, t, ampScale) {
      const flowT = t * p.noiseFlow;
      const baseX = nx * p.noiseScale;
      const baseY = ny * p.noiseScale * p.noiseStretchY;
      const baseZ = nz * p.noiseScale;

      const warpFreq = p.noiseWarpFreq;
      const wX = noise(baseX * warpFreq + flowT * 0.83 + 11.0, baseY * warpFreq - flowT * 0.47, baseZ * warpFreq + flowT * 0.31);
      const wY = noise(baseX * warpFreq - flowT * 0.29 + 29.0, baseY * warpFreq + flowT * 0.58, baseZ * warpFreq - flowT * 0.71);
      const wZ = noise(baseX * warpFreq + flowT * 0.41 + 47.0, baseY * warpFreq + flowT * 0.22, baseZ * warpFreq + flowT * 0.66);

      const x = baseX + wX * p.noiseWarp;
      const y = baseY + wY * p.noiseWarp;
      const z = baseZ + wZ * p.noiseWarp;

      let total = 0;
      let norm = 0;
      let freq = 1;
      let amp = 1;
      const octaves = Math.max(1, Math.round(p.noiseOctaves));
      for (let i = 0; i < octaves; i += 1) {
        const n = noise(
          x * freq + flowT * (0.9 + i * 0.08),
          y * freq + flowT * (0.6 + i * 0.05),
          z * freq - flowT * (0.7 + i * 0.06)
        );
        const ridge = (1 - Math.abs(n)) * 2 - 1;
        const shaped = n * (1 - p.noiseRidgeMix) + ridge * p.noiseRidgeMix;
        total += shaped * amp;
        norm += amp;
        amp *= p.noisePersistence;
        freq *= p.noiseLacunarity;
      }

      const normalized = norm > 0 ? total / norm : 0;
      return normalized * p.noiseStrength * (ampScale || 1);
    }

    function displaceShell(origArr, geo, t) {
      if (!geo || !origArr) return;
      const pos = geo.attributes.position.array;
      const dA = geo.attributes.disp.array;
      const fA = geo.attributes.frost.array;

      const sw = t * p.swirlSpeed;
      const sx = Math.sin(sw) * p.swirlRadius;
      const sz = Math.cos(sw) * p.swirlRadius;
      const dr = t * p.driftSpeed;
      const fx = Math.sin(t * 0.12) * Math.cos(t * 0.084) * 0.35;
      const b1 = Math.sin(t * p.breathSpeed);
      const b2 = Math.sin(t * p.breathSpeed * 0.6);
      const breath = 1 + b1 * b1 * Math.sign(b1) * p.breathAmp + b2 * b2 * Math.sign(b2) * p.breathAmp * 0.4;
      const minD = getMinDisplacement();

      for (let i = 0; i < origArr.length; i += 3) {
        const ox = origArr[i];
        const oy = origArr[i + 1];
        const oz = origArr[i + 2];
        const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
        if (len === 0) continue;
        const nx = ox / len;
        const ny = oy / len;
        const nz = oz / len;

        const curvy = p.surfaceCurviness;
        const macro = samplePerlinFBM(nx + sx + fx, ny + dr, nz + sz, t, 1);
        const micro = samplePerlinFBM(
          nx * (1.65 + curvy * 0.9) + sx * 0.5,
          ny * (1.5 + curvy * 0.7) + dr * 0.4,
          nz * (1.65 + curvy * 0.9) + sz * 0.5,
          t * (1.2 + curvy * 0.8),
          0.35
        );
        const chunk = samplePerlinFBM(
          nx * (1.7 + p.shellChunkiness * 1.1) + sx * 0.32,
          ny * (1.45 + p.shellChunkiness * 0.95) + dr * 0.2,
          nz * (1.7 + p.shellChunkiness * 1.1) + sz * 0.32,
          t * 0.78,
          0.55
        );
        const lat = (ny * 0.5 + 0.5);
        const bandFreq = 4.5 + p.shellBanding * 16.0;
        const band = Math.sin(lat * bandFreq * 3.14159265 + t * 0.14);
        const lopside = (nx * 0.62 - nz * 0.22 - ny * 0.35);
        const bottom = Math.max(0.0, -ny);
        const ridge = Math.sign(band) * Math.pow(Math.abs(band), 2.4);

        let n = macro * (0.8 + curvy * 0.22) + micro * (0.14 + curvy * 0.2);
        n += chunk * (0.06 + p.shellChunkiness * 0.1);
        n += band * (0.02 + p.shellBanding * 0.07);
        n += ridge * (p.shellRidgeStrength * 0.05);
        n += lopside * (p.shellLopsidedness * 0.08);
        n += (bottom * bottom) * (p.shellBottomWeight * 0.08);
        n = clamp(n, -p.noiseStrength * 0.55, p.noiseStrength * 0.95);

        const idx = i / 3;
        dA[idx] = n;
        fA[idx] = noise(nx * 3.2 + t * 0.04, ny * 3.2 + t * 0.035, nz * 3.2 + t * 0.045);

        let d = breath + n;
        if (p.shellSteps > 0) {
          const stepAmp = 0.12 + p.noiseStrength * 0.42;
          const stepSize = stepAmp / p.shellSteps;
          d = Math.round(d / stepSize) * stepSize;
        }
        d = Math.max(d, minD);
        pos[i] = ox * d;
        pos[i + 1] = oy * d;
        pos[i + 2] = oz * d;
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.disp.needsUpdate = true;
      geo.attributes.frost.needsUpdate = true;
      geo.computeVertexNormals();
    }

    function displaceGlow(origArr, geo, t, nScale) {
      if (!geo || !origArr) return;
      const tgt = geo.attributes.position.array;
      const sw = t * p.swirlSpeed;
      const sx = Math.sin(sw) * p.swirlRadius;
      const sz = Math.cos(sw) * p.swirlRadius;
      const dr = t * p.driftSpeed;
      const fx = Math.sin(t * 0.12) * Math.cos(t * 0.084) * 0.35;
      const b1 = Math.sin(t * p.breathSpeed);
      const b2 = Math.sin(t * p.breathSpeed * 0.6);
      const breath = 1 + b1 * b1 * Math.sign(b1) * p.breathAmp + b2 * b2 * Math.sign(b2) * p.breathAmp * 0.4;

      for (let i = 0; i < origArr.length; i += 3) {
        const ox = origArr[i];
        const oy = origArr[i + 1];
        const oz = origArr[i + 2];
        const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
        if (len === 0) continue;
        const nx = ox / len;
        const ny = oy / len;
        const nz = oz / len;

        const n = samplePerlinFBM(nx + sx + fx, ny + dr, nz + sz, t, nScale / Math.max(p.noiseStrength, 0.0001));
        const d = breath + n;
        tgt[i] = ox * d;
        tgt[i + 1] = oy * d;
        tgt[i + 2] = oz * d;
      }
      geo.attributes.position.needsUpdate = true;
    }

    function applyPlacement() {
      const isMobile = window.innerWidth < 900;
      group.scale.setScalar(isMobile ? 1.65 : settings.groupScale);
      group.position.set(isMobile ? 0.2 : settings.groupX, isMobile ? -1.6 : settings.groupY, 0);
    }

    function applyVisualUniforms() {
      innerUni.uSaturation.value = p.innerSaturation;
      innerUni.uColor1.value.set(p.innerColor1);
      innerUni.uColor2.value.set(p.innerColor2);
      innerUni.uColor3.value.set(p.innerColor3);
      innerUni.uColor4.value.set(p.innerColor4);
      innerUni.uColor5.value.set(p.innerColor5);
      innerUni.uColor6.value.set(p.innerColor6);

      frontUni.uBaseOpacity.value = p.baseOpacity;
      frontUni.uEdgeMult.value = p.edgeMult;
      frontUni.uFresnelPow.value = p.fresnelPow;
      frontUni.uSpecIntensity.value = p.specIntensity;
      frontUni.uSpecWidth.value = p.specWidth;
      frontUni.uFrostAmount.value = p.frostAmount;
      frontUni.uFoldStrength.value = p.foldStrength;
      frontUni.uShellTopColor.value.set(p.shellTopColor);
      frontUni.uShellBottomColor.value.set(p.shellBottomColor);
      frontUni.uShellSideColor.value.set(p.shellSideColor);
      frontUni.uShellNoiseDarkColor.value.set(p.shellNoiseDarkColor);
      frontUni.uShellNoiseTintColor.value.set(p.shellNoiseTintColor);

      backUni.uBaseOpacity.value = p.backBaseOpacity;
      backUni.uEdgeMult.value = p.backEdgeMult;
      backUni.uBackTopColor.value.set(p.backTopColor);
      backUni.uBackBottomColor.value.set(p.backBottomColor);

      dotUni.uDotOpacity.value = p.dotOpacity;
      dotUni.uDotSize.value = p.dotSize;
      dotUni.uDotDensity.value = p.dotDensity;

      glowData.forEach((g, idx) => {
        const opKey = idx === 0 ? "glowOpacity" : idx === 1 ? "glow2Opacity" : "glow3Opacity";
        const topKey = idx === 0 ? "glowTop1" : idx === 1 ? "glowTop2" : "glowTop3";
        const botKey = idx === 0 ? "glowBottom1" : idx === 1 ? "glowBottom2" : "glowBottom3";
        g.uniforms.uOp.value = p[opKey];
        g.uniforms.uTop.value.set(p[topKey]);
        g.uniforms.uBottom.value.set(p[botKey]);
      });

      container.style.background = `linear-gradient(180deg, ${p.bgTop} 0%, ${p.bgBottom} 100%)`;
      const haze = container.parentElement && container.parentElement.querySelector(".bg-haze");
      if (haze) haze.style.opacity = String(p.hazeOpacity);
    }

    function exportConfigText() {
      const output = {};
      Object.keys(DEFAULTS).forEach((k) => {
        output[k] = p[k];
      });
      return JSON.stringify(output, null, 2);
    }

    function createControlPanel() {
      if (!settings.showControls) return null;

      const existing = document.querySelector(".blob-controls");
      if (existing) existing.remove();

      const panel = document.createElement("aside");
      panel.className = "blob-controls";
      panel.innerHTML = `
        <div class="blob-controls-head">
          <strong>Blob Tuning</strong>
          <button type="button" data-action="collapse">-</button>
        </div>
        <div class="blob-controls-body"></div>
      `;

      const body = panel.querySelector(".blob-controls-body");

      function addSection(title) {
        const sec = document.createElement("div");
        sec.className = "blob-controls-section";
        sec.innerHTML = `<h4>${title}</h4>`;
        body.appendChild(sec);
        return sec;
      }

      function addRange(sec, label, key, min, max, step, rebuild) {
        const row = document.createElement("label");
        row.className = "blob-controls-row";
        row.innerHTML = `
          <span>${label}</span>
          <div>
            <input type="range" min="${min}" max="${max}" step="${step}" value="${p[key]}">
            <input type="number" min="${min}" max="${max}" step="${step}" value="${p[key]}">
          </div>
        `;
        const [slider, number] = row.querySelectorAll("input");
        const update = (value) => {
          const next = clamp(Number(value), Number(min), Number(max));
          p[key] = next;
          slider.value = String(next);
          number.value = String(next);
          saveParams(p);
          if (rebuild) buildGeometry();
          applyVisualUniforms();
        };
        slider.addEventListener("input", (e) => update(e.target.value));
        number.addEventListener("input", (e) => update(e.target.value));
        sec.appendChild(row);
      }

      function addColor(sec, label, key) {
        const row = document.createElement("label");
        row.className = "blob-controls-row";
        row.innerHTML = `
          <span>${label}</span>
          <div>
            <input type="color" value="${toHex(new THREE.Color(p[key]))}">
            <input type="text" value="${p[key]}">
          </div>
        `;
        const [picker, text] = row.querySelectorAll("input");
        const update = (value) => {
          const next = /^#[0-9a-fA-F]{6}$/.test(value) ? value : p[key];
          p[key] = next;
          picker.value = toHex(new THREE.Color(next));
          text.value = next;
          saveParams(p);
          applyVisualUniforms();
        };
        picker.addEventListener("input", (e) => update(e.target.value));
        text.addEventListener("change", (e) => update(e.target.value));
        sec.appendChild(row);
      }

      const geometry = addSection("Geometry + Density");
      addRange(geometry, "Inner radius", "innerRadius", 0.4, 1.4, 0.01, true);
      addRange(geometry, "Outer radius", "shellRadius", 0.8, 1.8, 0.01, true);
      addRange(geometry, "Shell detail", "shellDetail", 2, 6, 1, true);
      addRange(geometry, "Shell vertex size", "dotSize", 1, 16, 0.2, false);
      addRange(geometry, "Vertex opacity", "dotOpacity", 0, 1, 0.01, false);
      addRange(geometry, "Form density", "dotDensity", 0.05, 1, 0.01, false);

      const perlin = addSection("Perlin Noise");
      addRange(perlin, "Noise scale", "noiseScale", 0.2, 3.5, 0.01, false);
      addRange(perlin, "Noise strength", "noiseStrength", 0.01, 0.35, 0.005, false);
      addRange(perlin, "Noise octaves", "noiseOctaves", 1, 6, 1, false);
      addRange(perlin, "Lacunarity", "noiseLacunarity", 1.2, 3.2, 0.01, false);
      addRange(perlin, "Persistence", "noisePersistence", 0.1, 0.95, 0.01, false);
      addRange(perlin, "Domain warp", "noiseWarp", 0, 1.2, 0.01, false);
      addRange(perlin, "Warp frequency", "noiseWarpFreq", 0.4, 3.2, 0.01, false);
      addRange(perlin, "Flow speed", "noiseFlow", 0.01, 0.8, 0.005, false);
      addRange(perlin, "Vertical stretch", "noiseStretchY", 0.4, 1.8, 0.01, false);
      addRange(perlin, "Ridge mix", "noiseRidgeMix", 0, 1, 0.01, false);
      addRange(perlin, "Surface curviness", "surfaceCurviness", 0, 1, 0.01, false);
      addRange(perlin, "Shell chunkiness", "shellChunkiness", 0, 1, 0.01, false);
      addRange(perlin, "Shell banding", "shellBanding", 0, 1, 0.01, false);
      addRange(perlin, "Shell ridge strength", "shellRidgeStrength", 0, 1, 0.01, false);
      addRange(perlin, "Shell lopsidedness", "shellLopsidedness", 0, 1, 0.01, false);
      addRange(perlin, "Shell bottom weight", "shellBottomWeight", 0, 1, 0.01, false);
      addRange(perlin, "Shell stepping", "shellSteps", 0, 12, 1, false);

      const glass = addSection("Glass + Motion");
      addRange(glass, "Glass base opacity", "baseOpacity", 0, 0.5, 0.005, false);
      addRange(glass, "Glass edge boost", "edgeMult", 0, 1.2, 0.01, false);
      addRange(glass, "Fresnel power", "fresnelPow", 0.2, 3.5, 0.01, false);
      addRange(glass, "Specular intensity", "specIntensity", 0, 1, 0.01, false);
      addRange(glass, "Specular width", "specWidth", 0.3, 5, 0.05, false);
      addRange(glass, "Frost amount", "frostAmount", 0, 0.35, 0.005, false);
      addRange(glass, "Fold strength", "foldStrength", 0, 0.35, 0.005, false);
      addRange(glass, "Back glass opacity", "backBaseOpacity", 0, 0.4, 0.005, false);
      addRange(glass, "Back edge boost", "backEdgeMult", 0, 1, 0.01, false);
      addRange(glass, "Swirl speed", "swirlSpeed", 0.02, 0.7, 0.005, false);
      addRange(glass, "Swirl radius", "swirlRadius", 0, 1.8, 0.01, false);
      addRange(glass, "Drift speed", "driftSpeed", 0.02, 0.6, 0.005, false);
      addRange(glass, "Breath amount", "breathAmp", 0, 0.25, 0.005, false);
      addRange(glass, "Breath speed", "breathSpeed", 0.1, 1.2, 0.01, false);
      addRange(glass, "Rotation speed", "rotSpeed", 0, 1.2, 0.01, false);

      const colors = addSection("Colors");
      addColor(colors, "Inner color 1", "innerColor1");
      addColor(colors, "Inner color 2", "innerColor2");
      addColor(colors, "Inner color 3", "innerColor3");
      addColor(colors, "Inner color 4", "innerColor4");
      addColor(colors, "Inner color 5", "innerColor5");
      addColor(colors, "Inner color 6", "innerColor6");
      addRange(colors, "Inner saturation", "innerSaturation", 0, 2.2, 0.01, false);

      addColor(colors, "Shell top", "shellTopColor");
      addColor(colors, "Shell bottom", "shellBottomColor");
      addColor(colors, "Shell side tint", "shellSideColor");
      addColor(colors, "Shell dark noise", "shellNoiseDarkColor");
      addColor(colors, "Shell noise tint", "shellNoiseTintColor");
      addColor(colors, "Back top", "backTopColor");
      addColor(colors, "Back bottom", "backBottomColor");

      const glow = addSection("Glow + Background");
      addRange(glow, "Glow 1 opacity", "glowOpacity", 0, 0.25, 0.005, false);
      addRange(glow, "Glow 2 opacity", "glow2Opacity", 0, 0.2, 0.005, false);
      addRange(glow, "Glow 3 opacity", "glow3Opacity", 0, 0.18, 0.005, false);
      addColor(glow, "Glow 1 top", "glowTop1");
      addColor(glow, "Glow 1 bottom", "glowBottom1");
      addColor(glow, "Glow 2 top", "glowTop2");
      addColor(glow, "Glow 2 bottom", "glowBottom2");
      addColor(glow, "Glow 3 top", "glowTop3");
      addColor(glow, "Glow 3 bottom", "glowBottom3");
      addColor(glow, "Background top", "bgTop");
      addColor(glow, "Background bottom", "bgBottom");
      addRange(glow, "Haze opacity", "hazeOpacity", 0, 1, 0.01, false);

      const tools = document.createElement("div");
      tools.className = "blob-controls-tools";
      tools.innerHTML = `
        <button type="button" data-action="copy">Copy config</button>
        <button type="button" data-action="reset">Reset</button>
        <button type="button" data-action="hide">Hide menu</button>
      `;
      body.appendChild(tools);

      panel.addEventListener("click", async (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const action = target.getAttribute("data-action");
        if (!action) return;

        if (action === "collapse") {
          panel.classList.toggle("is-collapsed");
          target.textContent = panel.classList.contains("is-collapsed") ? "+" : "-";
          saveUiState({ hidden: false, collapsed: panel.classList.contains("is-collapsed") });
          return;
        }

        if (action === "copy") {
          const text = exportConfigText();
          try {
            await navigator.clipboard.writeText(text);
            target.textContent = "Copied";
            setTimeout(() => { target.textContent = "Copy config"; }, 1200);
          } catch (_e) {
            target.textContent = "Copy failed";
            setTimeout(() => { target.textContent = "Copy config"; }, 1200);
          }
          return;
        }

        if (action === "reset") {
          Object.keys(DEFAULTS).forEach((k) => { p[k] = DEFAULTS[k]; });
          saveParams(p);
          buildGeometry();
          applyVisualUniforms();
          panel.remove();
          createControlPanel();
          return;
        }

        if (action === "hide") {
          saveUiState({ hidden: true, collapsed: false });
          panel.remove();
        }
      });

      document.body.appendChild(panel);
      const ui = loadUiState();
      if (ui && ui.collapsed) {
        panel.classList.add("is-collapsed");
        const collapseButton = panel.querySelector('[data-action="collapse"]');
        if (collapseButton) collapseButton.textContent = "+";
      }
      return panel;
    }

    buildGeometry();
    applyVisualUniforms();
    applyPlacement();

    if (settings.showControls) {
      saveUiState({ hidden: false, collapsed: false });
      createControlPanel();
    }

    let time = 0;
    let raf = 0;

    function animate() {
      time += p.timeStep;
      innerUni.uTime.value = time;

      group.rotation.y = time * p.rotSpeed;
      group.rotation.x = Math.sin(time * 0.18) * p.tiltAmp;
      group.rotation.z = Math.cos(time * 0.14) * 0.04;

      displaceShell(shellOrig, shellGeo, time);
      displaceShell(shellBackOrig, shellBackGeo, time);
      if (glowData[0]) displaceGlow(glowData[0].orig, glowData[0].geo, time, 0.1);
      if (glowData[1]) displaceGlow(glowData[1].orig, glowData[1].geo, time, 0.06);
      if (glowData[2]) displaceGlow(glowData[2].orig, glowData[2].geo, time, 0.03);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }
    animate();

    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      applyPlacement();
    }

    window.addEventListener("resize", onResize);

    return function cleanup() {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      disposeGeometry();
      renderer.dispose();
      innerMat.dispose();
      shellFrontMat.dispose();
      shellBackMat.dispose();
      dotMat.dispose();
    };
  }

  window.initGladeBlobBackground = initGladeBlobBackground;
})();
