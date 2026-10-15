/* SHOOTDORI 경기기록시스템 — 홈 화면 설치용 서비스 워커
   화면(페이지)만 네트워크에서 받아 오고, 시트 데이터 등 다른 요청은 건드리지 않는다. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request));
});
