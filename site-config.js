/* =========================================================
   지점별 설정 — 제주점
   ---------------------------------------------------------
   관리 도구의 나머지 파일(index.html, columns-core.js, github-publish.js, tests/)은
   전주점·강남점·제주점이 똑같습니다. 지점마다 다른 값은 이 파일에만 둡니다.
   고친 뒤에는 어드민-제작-가이드.md 의 검증 두 가지를 꼭 실행하세요.

   ★ 도메인 jehoowart.co.kr 확정 (2026-10-19). 바꿀 일이 생기면 이 파일의
     domain · siteDomain 두 곳을 함께 바꾸세요. (홈페이지 쪽은 hoo-jeju-landing/README.md 참고)
========================================================= */
(function (root) {
  // 컬럼 페이지·목록 카드·발행에 쓰는 값
  const SITE = {
    domain: 'https://jehoowart.co.kr/',
    shortName: '제주',
    siteName: '후한의원 제주점',
    bizName: '후한의원 제주점',
    doctor: '이경원',
    phone: '064-725-7510',
    region: '제주특별자치도',
    city: '제주시',
    street: '노형로 407 노형타워 4층',
    twitterCard: 'summary_large_image',
    kakaoUrl: 'https://pf.kakao.com/_txkVNM',
    aboutCondition: '편평사마귀',
    defaultCategory: '편평사마귀',
    defaultImage: 'assets/images/doctor-lee.jpg',
    photoClass: ' object-top',          // 원장 사진이 세로라서 위쪽 기준으로 자른다 (얼굴이 잘리지 않게)
    copyright: 'JEJU',
    github: { owner: 'gkwngml1215-code', repo: 'jewart', branch: 'main' },
    tokenKey: 'hoo-jeju-admin-gh-token',   // 이 브라우저에 GitHub 키를 저장하는 이름
    storagePrefix: 'hoojeju',              // 이 브라우저에 설정·임시저장본을 저장하는 이름 앞부분
  };

  // 1~7번 SEO 설정 기본값 (이 브라우저에 저장된 값이 없을 때 쓰임)
  const DEFAULT_SETTINGS = {
    seoTitle: "제주편평사마귀·쥐젖·점제거 | 후한의원 제주점",
    seoDescription: "제주 노형동 후한의원 제주점 편평사마귀·쥐젖·비립종·점 제거 - 열을 쓰지 않는 침 치료로 흉터 부담을 줄이고 재발까지 관리합니다. 이경원 대표원장.",
    seoKeywords: "제주편평사마귀, 제주쥐젖, 제주점제거, 제주비립종, 제주사마귀, 후한의원 제주점, 노형동 한의원",
    siteDomain: "https://jehoowart.co.kr/",
    naverVerify: "6096ccf1503dbfa3bc6221d9e4d2e61494361a9a",
    googleVerify: "MfXwDdA0HUUOxo8OQ4z6zQC6Ccap6f5idQkpbAw5Ipk",
    ogImage: "",
    ogSiteName: "후한의원 제주점",
    ogType: "website",
    twitterCard: "summary_large_image",
    bizName: "후한의원 제주점",
    bizDoctor: "이경원",
    bizPhone: "064-725-7510",
    bizStreet: "노형로 407 노형타워 4층",
    bizCity: "제주시",
    bizRegion: "제주특별자치도",
    bizPostal: "",
    bizLat: "",
    bizLng: "",
    bizPriceRange: "₩₩ (5,000원~)",
    bizSpecialty: "한의원 · 피부 병변 클리닉 (편평사마귀·쥐젖·비립종·점 제거)",
    hours: [
      {day:'월', code:'Mo', closed:false, open:'08:00', close:'20:00'},
      {day:'화', code:'Tu', closed:false, open:'08:00', close:'20:00'},
      {day:'수', code:'We', closed:false, open:'08:00', close:'20:00'},
      {day:'목', code:'Th', closed:false, open:'08:00', close:'20:00'},
      {day:'금', code:'Fr', closed:false, open:'08:00', close:'20:00'},
      {day:'토', code:'Sa', closed:false, open:'09:00', close:'14:00'},
      {day:'일', code:'Su', closed:false, open:'09:00', close:'14:00'},
    ],
    faqItems: [
      {q:'편평사마귀 제거 후 어떻게 관리하나요?', a:'시술 부위가 아물기까지 7~10일 정도는 항생 연고나 습윤 밴드로 보호해 주세요. 딱지가 생기면 손으로 떼지 말고 자연스럽게 떨어질 때까지 기다려야 흉터·색소침착을 예방할 수 있습니다.'},
      {q:'쥐젖, 비립종, 점도 같이 제거되나요?', a:'네, 정확한 감별 진단 후 편평사마귀와 함께 쥐젖·비립종·점 등을 동시에 제거할 수 있습니다. 병변 종류와 범위에 따라 추가 비용이 발생할 수 있어 상담 시 함께 확인해 드립니다.'},
      {q:'쥐젖 제거는 흉터가 남나요?', a:'개인 피부 상태와 쥐젖 크기에 따라 차이가 있습니다. 열을 쓰지 않는 침 치료로 변성된 조직만 제거하므로 주변 피부 손상과 흉터 부담을 줄이도록 합니다.'},
      {q:'치료 후 화장은 언제부터 가능한가요?', a:'습윤 밴드를 붙인 경우 겉면 위로는 다음 날부터 가벼운 화장이 가능합니다. 밴드를 붙이지 않았다면 미세한 상처가 있을 수 있어 며칠간 자극을 피하는 것이 좋습니다. 정확한 시기는 시술 후 안내드립니다.'},
      {q:'주말에도 진료하나요?', a:'네, 후한의원 제주점은 토요일·일요일 09:00~14:00 진료합니다. 평일은 08:00~20:00 점심시간 없이 진료하며, 공휴일 진료 여부는 전화로 확인해 주세요.'},
    ],
    bots: [
      {name:'GPTBot', label:'GPTBot (OpenAI 학습/검색)', allow:true},
      {name:'ChatGPT-User', label:'ChatGPT-User (OpenAI 사용자 열람)', allow:true},
      {name:'OAI-SearchBot', label:'OAI-SearchBot (OpenAI 검색 노출)', allow:true},
      {name:'Google-Extended', label:'Google-Extended (Google AI 답변)', allow:true},
      {name:'PerplexityBot', label:'PerplexityBot (Perplexity)', allow:true},
      {name:'ClaudeBot', label:'ClaudeBot (Anthropic 크롤러)', allow:true},
      {name:'anthropic-ai', label:'anthropic-ai (Anthropic)', allow:true},
      {name:'Applebot-Extended', label:'Applebot-Extended (Apple Intelligence)', allow:true},
      {name:'CCBot', label:'CCBot (Common Crawl, 다수 LLM 학습원)', allow:true},
      {name:'Bytespider', label:'Bytespider (ByteDance)', allow:false},
    ],
    llmsSummary: "제주특별자치도 제주시 노형동에 위치한 후한의원 제주점은 열을 쓰지 않는 침 치료로 편평사마귀·쥐젖·비립종·점을 제거하고 재발까지 관리하는 한의원입니다.",
    llmsDetail: "",
    lastmod: "2026-10-15",
  };

  const api = {SITE: SITE, DEFAULT_SETTINGS: DEFAULT_SETTINGS};
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.HOO_SITE = SITE; root.HOO_DEFAULT_SETTINGS = DEFAULT_SETTINGS; }
})(typeof globalThis !== 'undefined' ? globalThis : this);
