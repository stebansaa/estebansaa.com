import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Clock,
  Color,
  IcosahedronGeometry,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from 'three';

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  attribute float aSeed;
  varying float vGlow;

  void main() {
    vec3 p = position;
    float wave = sin(p.y * 2.4 + uTime * 0.9 + aSeed * 6.2831) * 0.12
               + sin(p.x * 3.1 - uTime * 0.6) * 0.08;
    p += normalize(position) * wave;
    p.xy += uPointer * 0.15 * (0.5 + aSeed);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.0 + aSeed * 3.0) * (6.0 / -mv.z);
    vGlow = 0.4 + 0.6 * (wave + 0.2) / 0.4;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vGlow;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float alpha = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(mix(uColorA, uColorB, clamp(vGlow, 0.0, 1.0)), alpha * 0.9);
  }
`;

export function startHeroScene(canvas: HTMLCanvasElement) {
  const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 4.2;

  // Point cloud sampled from a subdivided icosahedron.
  const base = new IcosahedronGeometry(1.4, 24);
  const positions = base.getAttribute('position').array as Float32Array;
  base.dispose();
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));
  const seeds = new Float32Array(positions.length / 3).map(() => Math.random());
  geometry.setAttribute('aSeed', new BufferAttribute(seeds, 1));

  const styles = getComputedStyle(document.documentElement);
  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uPointer: { value: [0, 0] },
      uColorA: { value: new Color(styles.getPropertyValue('--accent-2').trim() || '#8a7cff') },
      uColorB: { value: new Color(styles.getPropertyValue('--accent').trim() || '#7cf0c5') },
    },
  });

  const points = new Points(geometry, material);
  scene.add(points);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Push the sphere to the right on wide screens so it sits beside the text.
    points.position.x = camera.aspect > 1.2 ? 1.1 : 0;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  const pointer = { x: 0, y: 0 };
  const onPointer = (e: PointerEvent) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  // Only render while the hero is visible and the tab is active.
  let visible = true;
  const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
  io.observe(canvas);

  const clock = new Clock();
  const smooth = { x: 0, y: 0 };
  let raf = 0;

  const tick = () => {
    raf = requestAnimationFrame(tick);
    if (!visible || document.hidden) return;
    const t = clock.getElapsedTime();
    smooth.x += (pointer.x - smooth.x) * 0.05;
    smooth.y += (pointer.y - smooth.y) * 0.05;
    material.uniforms.uTime.value = t;
    material.uniforms.uPointer.value = [smooth.x, smooth.y];
    points.rotation.y = t * 0.08 + smooth.x * 0.3;
    points.rotation.x = smooth.y * 0.2;
    renderer.render(scene, camera);
  };
  tick();
  canvas.dataset.ready = '';

  // Clean up when navigating away with view transitions.
  document.addEventListener(
    'astro:before-swap',
    () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onPointer);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    },
    { once: true },
  );
}
