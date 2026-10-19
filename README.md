# 후한의원 제주점 편평사마귀·쥐젖·점제거 랜딩페이지

전주점(`hoo-jeonju-landing`, jjhoowart.co.kr)과 동일한 구조로 만든 제주점 사이트입니다.
`index.html` 하나로 완성되어 있고(Tailwind CSS는 CDN), 전주점에는 없는 **쥐젖 · 비립종 · 점 제거** 섹션과
제주점 전후사진(쥐젖 2건, 비립종 2건)이 추가되어 있습니다.

---

## 1. VS Code에서 열기

1. 이 폴더(`hoo-jeju-landing`) 전체를 VS Code로 엽니다. (`파일 > 폴더 열기`)
2. 확장 프로그램에서 **Live Server** 설치
3. `index.html`을 열고, 우클릭 → **Open with Live Server**

---

## 2. 폴더 구조

```
hoo-jeju-landing/
├─ index.html              # 랜딩페이지 전체
├─ columns.html            # 원장 컬럼 목록 (아직 글 없음 — 어드민에서 발행하면 채워짐)
├─ columns/
│  ├─ index.json             # 컬럼 목록 원본 (비어 있음)
│  └─ data/                  # 글마다 편집용 원본 값
├─ assets/images/
│  ├─ hero-main.jpg          # 히어로 이벤트 이미지 (이미지/hero-main.svg.png → 1200px jpg)
│  ├─ doctor-lee.jpg         # 이경원 대표원장 사진
│  ├─ treatment-jeju.jpg     # 제주점 침 제거 시술 사진 (이미지/제주 침제거 사진.jpg) ※ 제주점은 레이저 없이 침치료만 — 레이저 문구/사진 넣지 말 것
│  ├─ skintag1·2-before/after.jpg   # 쥐젖 전후 (제주 폴더 '쥐젖전후사진')
│  ├─ milium1·2-before/after.jpg    # 비립종 전후 (제주 폴더 '비립종전후사진')
│  ├─ mole1~9-before/after.jpg      # 점제거 전후 (제주 폴더 점제거/20251010_점제거전후사진, 1200px로 축소)
│  ├─ mole-banner.jpg        # 점 제거 소개 배너 (이미지/점제거 사진 .png → 1600px jpg)
│  ├─ mole-process.jpg       # 점 제거 과정 일러스트 (제주 폴더 침제거 일러스트)
│  └─ wart1~4-before/after.jpg      # 편평사마귀 전후 (전주점 case1~4 와 동일)
├─ CNAME                   # jehoowart.co.kr (★ 실제 도메인 확정 후 수정)
├─ robots.txt / sitemap.xml / llms.txt
├─ .github/                # 컬럼 목록 자동 점검 (전주점과 동일)
└─ 사이트에-올리기.bat      # git add/commit/push 한 번에
```

---

## 3. 게시 전 반드시 확인·교체할 것

- [x] **도메인** — `jehoowart.co.kr` 확정 (가비아 구매, 2026-10-19). 연결 절차는 `도메인-깃허브-연결-순서.md`.
- [x] **비용(`#cost`)** — `제주점 수가.txt` 기준으로 반영 완료 (2026-10-14). 수가가 바뀌면 이 섹션만 고치면 됩니다.
- [x] **원장 사진·약력(`#doctor`)** — 이경원 대표원장 사진·학력·학회·경력 반영 완료 (2026-10-15).
- [x] **히어로 사진** — `hero-main.jpg` 반영 완료 (2026-10-15). og:image 도 같은 파일을 가리킵니다.
- [x] **진료시간** — "평일 08:00–20:00 / 토·일 09:00–14:00 / 점심시간 없음" 확인 완료.
- [x] **편평사마귀 전후사진 4건** — 전주점과 동일하게 사용 (확인 완료).
- [ ] **네이버 예약 버튼** — 현재 네이버 지도 검색(후한의원 제주점) 링크입니다. 네이버 예약 URL이 있으면 교체하세요.
- [ ] **서치콘솔 소유확인 메타태그** — `index.html` 상단 주석을 풀고 네이버/구글에서 발급한 코드를 넣으세요.
- [ ] **의료광고 고지 문구** — 전후사진 하단 "개인에 따라 시술 효과는 차이가…" 문구는 삭제하지 마세요.

---

## 4. 배포 (완료 — 2026-10-19)

1. GitHub `gkwngml1215-code/jewart` main 브랜치 ← 이 폴더 (완료)
2. Cloudflare Pages `jewart` + 도메인 jehoowart.co.kr·www (완료)
3. 이후 수정은 `사이트에-올리기.bat` 더블클릭
4. 컬럼 5편 발행됨 (2026-10-19). 이후 컬럼은 어드민(jewart-admin.pages.dev)에서 발행

어드민(컬럼 발행 도구)은 옆 폴더 `hoo-jeju-admin` 에 준비되어 있습니다 (강남점 v2.1 복제, `site-config.js` 만 제주점 값). 설치는 `hoo-jeju-admin/어드민-설치-순서.md` 를 따르세요. 저장소 이름은 `jewart`, 홈페이지는 `main` 브랜치, 어드민은 `admin` 브랜치입니다.
