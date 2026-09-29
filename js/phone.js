// The phone number never appears in markup or text. It lives here XOR-scrambled, is decoded
// only on an explicit click (or for the printed CV), and is drawn to pixels — never to the DOM.
const CODES = [113, 42, 71, 12, 116, 111, 38, 87, 27, 117, 108, 51, 78, 28, 97, 98, 42];
const KEY = [0x5a, 0x13, 0x77, 0x2c, 0x41];

export const decodePhone = () => String.fromCharCode(...CODES.map((c, i) => c ^ KEY[i % KEY.length]));

const SYSTEM = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Geist", "Helvetica Neue", Arial, sans-serif';

export const phoneCanvas = (value, { size = 21, color = '#1d1d1f', weight = 400, family = SYSTEM, scale } = {}) => {
  const k = scale ?? Math.max(2, Math.ceil(window.devicePixelRatio || 1));
  const canvas = document.createElement('canvas');
  const g = canvas.getContext('2d');
  const font = `${weight} ${size}px ${family}`;
  g.font = font;
  const w = Math.ceil(g.measureText(value).width) + 4;
  const h = Math.ceil(size * 1.35);
  canvas.width = w * k;
  canvas.height = h * k;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  g.scale(k, k);
  g.font = font;
  g.fillStyle = color;
  g.textBaseline = 'middle';
  g.fillText(value, 2, h / 2 + 1);
  return canvas;
};

export const phoneImage = (value, options) => {
  const canvas = phoneCanvas(value, options);
  const img = new Image(parseFloat(canvas.style.width), parseFloat(canvas.style.height));
  img.src = canvas.toDataURL('image/png');
  img.alt = 'Phone number (image — use Copy)';
  img.draggable = false;
  return img;
};
