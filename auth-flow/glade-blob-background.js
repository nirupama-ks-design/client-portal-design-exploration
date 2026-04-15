(function () {
  function createNoise() {
    const p = [];
    for (let i = 0; i < 256; i += 1) p[i] = Math.floor(Math.random() * 256);
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

  const DEFAULTS = {
    oct1Freq: 1.1, oct1Amp: 0.16,
    oct2Freq: 2.5, oct2Amp: 0.04,
    oct3Freq: 4.5, oct3Amp: 0.005,
    swirlSpeed: 0.22, swirlRadius: 0.8, driftSpeed: 0.16,
    breathAmp: 0.09, breathSpeed: 0.45,
    rotSpeed: 0.4, tiltAmp: 0.38, timeStep: 0.005,
    baseOpacity: 0.14, edgeMult: 0.45, fresnelPow: 0.8,
    specIntensity: 0.18, specWidth: 1.5,
    frostAmount: 0.05, foldStrength: 0.09,
    backBaseOpacity: 0.06, backEdgeMult: 0.25,
    glowOpacity: 0.09, glow2Opacity: 0.05, glow3Opacity: 0.025,
    dotOpacity: 0.8, dotSize: 5
  };

  const INNER_R = 0.92;
  const SHELL_R = 1.22;
  const MIN_D = (INNER_R + 0.03) / SHELL_R;

  function initGladeBlobBackground(container, options) {
    if (!container || !window.THREE) return function () {};

    const THREE = window.THREE;
    const settings = Object.assign({
      groupScale: 2.42,
      groupX: 1.52,
      groupY: -1.65,
      cameraX: 0.3,
      cameraY: 0.1,
      cameraZ: 5.2
    }, options || {});

    const p = Object.assign({}, DEFAULTS);
    const noise = createNoise();
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

    const innerUni = { uTime: { value: 0 } };
    const innerMat = new THREE.ShaderMaterial({
      uniforms: innerUni,
      transparent: true,
      depthWrite: false,
      vertexShader: `
        uniform float uTime;
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

          vec3 cP = vec3(0.98, 0.52, 0.62);
          vec3 cK = vec3(0.88, 0.42, 0.82);
          vec3 cV = vec3(0.58, 0.38, 0.95);
          vec3 cB = vec3(0.25, 0.48, 0.94);
          vec3 cC = vec3(0.30, 0.78, 0.92);
          vec3 cW = vec3(0.96, 0.58, 0.72);

          float pw = 2.5;
          float w0 = pow(max(dot(n,d0)*0.5+0.5, 0.0), pw);
          float w1 = pow(max(dot(n,d1)*0.5+0.5, 0.0), pw);
          float w2 = pow(max(dot(n,d2)*0.5+0.5, 0.0), pw);
          float w3 = pow(max(dot(n,d3)*0.5+0.5, 0.0), pw);
          float w4 = pow(max(dot(n,d4)*0.5+0.5, 0.0), pw);
          float w5 = pow(max(dot(n,d5)*0.5+0.5, 0.0), pw);
          float wT = w0+w1+w2+w3+w4+w5 + 0.001;
          vec3 col = (cP*w0 + cK*w1 + cV*w2 + cB*w3 + cC*w4 + cW*w5) / wT;

          float g = dot(col, vec3(0.299, 0.587, 0.114));
          col = mix(vec3(g), col, 1.3);

          float facing = abs(dot(vN, vV));
          float edgeFade = smoothstep(0.0, 0.5, facing);
          gl_FragColor = vec4(col, edgeFade * 0.93);
        }
      `
    });
    group.add(new THREE.Mesh(new THREE.SphereGeometry(INNER_R, 64, 64), innerMat));

    const shellGeo = new THREE.IcosahedronGeometry(SHELL_R, 5);
    const vCount = shellGeo.attributes.position.count;
    shellGeo.setAttribute("disp", new THREE.BufferAttribute(new Float32Array(vCount), 1));
    shellGeo.setAttribute("frost", new THREE.BufferAttribute(new Float32Array(vCount), 1));
    const shellOrig = shellGeo.attributes.position.array.slice();

    const shellBackGeo = new THREE.IcosahedronGeometry(SHELL_R, 5);
    const bCount = shellBackGeo.attributes.position.count;
    shellBackGeo.setAttribute("disp", new THREE.BufferAttribute(new Float32Array(bCount), 1));
    shellBackGeo.setAttribute("frost", new THREE.BufferAttribute(new Float32Array(bCount), 1));
    const shellBackOrig = shellBackGeo.attributes.position.array.slice();

    const shellVS = `
      attribute float disp;
      attribute float frost;
      varying vec3 vN;
      varying vec3 vV;
      varying vec3 vWN;
      varying float vDisp;
      varying float vFrost;
      void main() {
        vDisp = disp;
        vFrost = frost;
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
      uFoldStrength: { value: p.foldStrength }
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
        varying vec3 vN;
        varying vec3 vV;
        varying vec3 vWN;
        varying float vDisp;
        varying float vFrost;
        void main() {
          float f = 1.0 - abs(dot(vN, vV));
          float edge = pow(f, uFresnelPow);

          float angle = dot(vWN, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
          vec3 col = mix(vec3(0.93, 0.95, 1.0), vec3(1.0, 0.93, 0.96), angle);
          col = mix(col, vec3(0.98, 0.90, 0.94), max(dot(vWN, vec3(1.0, 0.0, 0.0)), 0.0) * 0.15);
          col += mix(vec3(0.02), vec3(0.04, 0.01, 0.03), gl_FragCoord.y / 900.0);

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
          gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.85));
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false
    });
    group.add(new THREE.Mesh(shellGeo, shellFrontMat));

    const backUni = {
      uBaseOpacity: { value: p.backBaseOpacity },
      uEdgeMult: { value: p.backEdgeMult }
    };

    const shellBackMat = new THREE.ShaderMaterial({
      uniforms: backUni,
      vertexShader: shellVS,
      fragmentShader: `
        uniform float uBaseOpacity;
        uniform float uEdgeMult;
        varying vec3 vN;
        varying vec3 vV;
        varying vec3 vWN;
        varying float vFrost;
        void main() {
          float f = 1.0 - abs(dot(vN, vV));
          float edge = pow(f, 1.8);
          float fa = (vFrost * 0.5 + 0.5) * 0.015;
          float yf = dot(vWN, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
          vec3 col = mix(vec3(0.94, 0.95, 0.97), vec3(0.97, 0.94, 0.97), yf);
          gl_FragColor = vec4(col, clamp(uBaseOpacity + edge * uEdgeMult + fa, 0.0, 0.6));
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false
    });
    group.add(new THREE.Mesh(shellBackGeo, shellBackMat));

    const dotUni = { uDotOpacity: { value: p.dotOpacity }, uDotSize: { value: p.dotSize } };
    const dotMat = new THREE.ShaderMaterial({
      uniforms: dotUni,
      transparent: true,
      depthWrite: false,
      vertexShader: `
        uniform float uDotSize;
        attribute float disp;
        attribute float frost;
        varying vec3 vDN;
        varying vec3 vDV;
        varying float vM;
        void main() {
          vM = (frost * 0.5 + 0.5) * 0.5 + max(disp, 0.0) * 1.5;
          vDN = normalize(normalMatrix * normalize(position));
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vDV = normalize(-mv.xyz);
          gl_PointSize = uDotSize * (4.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform float uDotOpacity;
        varying vec3 vDN;
        varying vec3 vDV;
        varying float vM;
        void main() {
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
    group.add(new THREE.Points(shellGeo, dotMat));

    const glowVS = `
      varying vec3 vWN;
      void main() {
        vWN = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    function makeGlowFS(topC, botC) {
      return `
        uniform float uOp;
        varying vec3 vWN;
        void main() {
          vec3 n = normalize(vWN);
          float yf = n.y * 0.5 + 0.5;
          float xf = n.x * 0.5 + 0.5;
          vec3 top = vec3(${topC});
          vec3 bot = vec3(${botC});
          vec3 col = mix(bot, top, yf);
          col = mix(col, vec3(0.98, 0.90, 0.94), xf * 0.2);
          gl_FragColor = vec4(col, uOp);
        }
      `;
    }

    const glowConfigs = [
      { dr: 0.18, sub: 5, op: p.glowOpacity, top: "0.88,0.82,0.96", bot: "0.78,0.88,0.98" },
      { dr: 0.35, sub: 4, op: p.glow2Opacity, top: "0.85,0.80,0.95", bot: "0.80,0.88,0.96" },
      { dr: 0.55, sub: 3, op: p.glow3Opacity, top: "0.84,0.78,0.94", bot: "0.82,0.88,0.95" }
    ];

    const glowData = glowConfigs.map((cfg) => {
      const geo = new THREE.IcosahedronGeometry(SHELL_R + cfg.dr, cfg.sub);
      const orig = geo.attributes.position.array.slice();
      const uni = { uOp: { value: cfg.op } };
      const mat = new THREE.ShaderMaterial({
        uniforms: uni,
        vertexShader: glowVS,
        fragmentShader: makeGlowFS(cfg.top, cfg.bot),
        transparent: true,
        side: THREE.BackSide,
        depthWrite: false
      });
      group.add(new THREE.Mesh(geo, mat));
      return { geo, orig };
    });

    function displaceShell(origArr, geo, t) {
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

      for (let i = 0; i < origArr.length; i += 3) {
        const ox = origArr[i];
        const oy = origArr[i + 1];
        const oz = origArr[i + 2];
        const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
        if (len === 0) continue;
        const nx = ox / len;
        const ny = oy / len;
        const nz = oz / len;

        const n = noise(nx * p.oct1Freq + sx + fx, ny * p.oct1Freq + dr, nz * p.oct1Freq + sz) * p.oct1Amp
          + noise(nx * p.oct2Freq + sx * 1.4 + 10, ny * p.oct2Freq + dr * 1.6, nz * p.oct2Freq + sz * 1.4 + 10) * p.oct2Amp
          + noise(nx * p.oct3Freq + sx * 0.9 + 20, ny * p.oct3Freq + dr * 0.7, nz * p.oct3Freq + sz * 0.9 + 20) * p.oct3Amp;

        const idx = i / 3;
        dA[idx] = n;
        fA[idx] = noise(nx * 3.2 + t * 0.04, ny * 3.2 + t * 0.035, nz * 3.2 + t * 0.045);

        const d = Math.max(breath + n, MIN_D);
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

        const n = noise(nx * p.oct1Freq + sx + fx, ny * p.oct1Freq + dr, nz * p.oct1Freq + sz) * nScale;
        const d = breath + n;
        tgt[i] = ox * d;
        tgt[i + 1] = oy * d;
        tgt[i + 2] = oz * d;
      }
      geo.attributes.position.needsUpdate = true;
    }

    function updatePlacement() {
      const isMobile = window.innerWidth < 900;
      group.scale.setScalar(isMobile ? 1.65 : settings.groupScale);
      group.position.set(isMobile ? 0.2 : settings.groupX, isMobile ? -1.6 : settings.groupY, 0);
    }
    updatePlacement();

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
      displaceGlow(glowData[0].orig, glowData[0].geo, time, 0.1);
      displaceGlow(glowData[1].orig, glowData[1].geo, time, 0.06);
      displaceGlow(glowData[2].orig, glowData[2].geo, time, 0.03);

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
      updatePlacement();
    }
    window.addEventListener("resize", onResize);

    return function cleanup() {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
      shellGeo.dispose();
      shellBackGeo.dispose();
      glowData.forEach((g) => g.geo.dispose());
      innerMat.dispose();
      shellFrontMat.dispose();
      shellBackMat.dispose();
      dotMat.dispose();
    };
  }

  window.initGladeBlobBackground = initGladeBlobBackground;
})();
