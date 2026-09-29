// Master timeline for the reel (seconds). Visuals and soundtrack both read from here,
// so the picture and the score can never drift apart.

export const DURATION = 20;
export const FPS = 60;
export const BPM = 120;
export const BEAT = 60 / BPM;

// Full-time since July 2018 (Onbiron R&D) — recomputed so the number never goes stale.
export const yearsOfExperience = (now = new Date()) => {
  const start = new Date(2018, 6, 1);
  return Math.floor((now - start) / (365.25 * 24 * 3600 * 1000));
};

// The system grows in stages; the camera pulls back as each one lands.
export const STAGES = [
  { id: 'server', at: 0.6, title: 'One server', detail: 'Mobile app, API and a database' },
  { id: 'realtime', at: 2.2, title: 'Real-time', detail: 'WebSocket gateway · presence in Redis' },
  { id: 'scale', at: 3.6, title: 'Scale out', detail: 'Load balancer · gateway replicas · message router' },
  { id: 'offline', at: 5.2, title: 'Offline delivery', detail: 'Message store · RabbitMQ · push notifications' },
  { id: 'media', at: 7.0, title: 'Media', detail: 'Encrypted object storage · CDN · thumbnails' },
  { id: 'groups', at: 8.4, title: 'Groups & contacts', detail: 'Fan-out workers · contact discovery' },
  { id: 'security', at: 9.6, title: 'Security', detail: 'Auth · end-to-end key server · rate limits' },
  { id: 'platform', at: 10.8, title: 'Platform', detail: 'Kubernetes · Jenkins CI/CD · Datadog · Kibana' },
  { id: 'regions', at: 12.0, title: 'Global', detail: 'Multi-region, with replicated storage' },
];

export const T = {
  identityIn: 0.25,
  split: 12.3, // regions B and C divide off region A
  rollout: [14.2, 15.8], // a deploy wave sweeps the whole system
  identityOut: 16.0,
  endcard: 16.4,
  fadeOut: 19.4,
};

export const CHAPTERS = [
  { id: 'build', label: 'One server', start: 0 },
  { id: 'scale', label: 'Scale out', start: 3.6 },
  { id: 'features', label: 'Media & groups', start: 7.0 },
  { id: 'platform', label: 'Platform', start: 9.6 },
  { id: 'global', label: 'Global', start: 12.0 },
  { id: 'contact', label: 'Contact', start: 16.4 },
];

export const chapterAt = (t) => {
  let current = CHAPTERS[0];
  for (const c of CHAPTERS) if (t >= c.start) current = c;
  return current;
};
