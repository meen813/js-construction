# Restaurant/Bar Web App Boilerplate - UI/UX Guidelines (v2.2)

이 문서는 **레스토랑 및 바(Bar) 웹사이트** 구축에 적용할 수 있는 **화이트라벨(White-label)** 디자인 시스템과 **2025년 웹 트렌드**를 반영한 UI/UX 가이드라인입니다.
또한 셋업 가이드의 기준 스택(Next.js 15 + React 18 + Tailwind + shadcn + Framer Motion + Lenis + Embla + Lightbox + Vaul/Sonner + RHF/Zod + Google Maps)을 실제 구현으로 자연스럽게 이어지도록 **라이브러리 매핑/컴포넌트 표준/체크리스트**를 포함합니다.

## 목차

1. [디자인 시스템 (Design System)](#디자인-시스템-design-system)
2. [Implementation Stack Mapping](#implementation-stack-mapping)
3. [네비게이션바 전략 (Navbar Strategy)](#네비게이션바-전략-navbar-strategy)
4. [섹션별 구성 가이드 (Section Composition)](#섹션별-구성-가이드-section-composition)
5. [2025 트렌드 패턴 (Trendy UI Patterns)](#2025-트렌드-패턴-trendy-ui-patterns)
6. [접근성 (Accessibility / ADA)](#접근성-accessibility--ada)
7. [컴포넌트 표준 (Component Standards)](#컴포넌트-표준-component-standards)
8. [구현 체크리스트 (Design / Implementation / QA)](#구현-체크리스트-design--implementation--qa)

---

## 디자인 시스템 (Design System)

모든 스타일은 **의미론적 변수(Semantic Variables)**로 관리합니다.
브랜드 변경은 가능한 한 `globals.css`의 CSS 변수만 교체하여 전체 톤을 일괄 변경할 수 있게 설계합니다.

### 🎨 색상 팔레트 (Color Palette)

> 권장: Tailwind 연동과 투명도 처리를 위해 컬러는 RGB triplet(`R G B`)로 관리합니다.

```css
:root {
  /* Backgrounds */
  --bg-main: 13 17 23;         /* #0D1117 */
  --bg-surface: 26 31 46;      /* #1A1F2E */
  --bg-glass: 13 17 23;        /* 글래스 배경은 bg + alpha로 처리 */

  /* Typography */
  --text-primary: 250 250 250; /* #FAFAFA */
  --text-secondary: 161 161 170; /* #A1A1AA */

  /* Brand */
  --brand-primary: 212 175 55;   /* #D4AF37 */
  --brand-secondary: 139 21 56;  /* #8B1538 */

  /* Borders */
  --border: 48 54 61;            /* #30363D */
}

.dark {
  /* 기본적으로 다크를 기준 테마로 사용할 경우 그대로 유지 */
}
```

---

## Implementation Stack Mapping

UI 패턴을 구현할 때 “어떤 라이브러리로 구현해야 하는지”를 고정하여 팀/외주가 들어와도 결과물이 흔들리지 않도록 합니다.

| UI 패턴 / 요구사항 | 권장 구현(기준 스택) | 비고 |
|---|---|---|
| Navbar 2-state (Transparent → Glass Sticky) | Tailwind + CSS variables + `backdrop-blur` | 스크롤 트리거/로고 축소 규칙 표준화 |
| Hover scale / 카드 인터랙션 | Framer Motion | `whileHover`, `layout` 등으로 일관성 유지 |
| Floating thumbnail(메뉴 hover 이미지) | Framer Motion + `next/image` | Hover 시 프리로드/레이아웃 시프트 방지 |
| Smooth Scroll | Lenis | `prefers-reduced-motion`이면 비활성화 |
| Carousel | Embla Carousel | 모바일 우선 터치 UX |
| 갤러리 확대(Modal) | Yet Another React Lightbox | 썸네일 → 확대 표준 플로우 |
| 모바일 하단 CTA/메뉴 | Vaul | Thumb zone 하단 액션(전화/예약) |
| 성공/실패 피드백 | Sonner | 예약 완료/문의 접수/복사 완료 등 |
| 예약 폼 | React Hook Form + Zod | 에러/포커스/aria 규칙 표준화 |
| 지도 섹션 | `@vis.gl/react-google-maps` | 다지점 확장 고려 |

---

## 네비게이션바 전략 (Navbar Strategy)

네비게이션은 사용자의 스크롤 위치에 따라 **두 가지 상태(State)**로 변형됩니다.

### 1) 상태별 디자인 (States)

**A. 투명 모드 (Top / Transparent)**
- 배경: 투명(예: `bg-transparent`) — Hero 섹션의 비디오가 그대로 비쳐 보여야 함
- 로고: 원본 크기 유지(대형)
- 높이: 넉넉한 여백(예: `h-24`)
- 보더: 없음

**B. 스티키 모드 (Scrolled / Sticky)**
- 트리거: 스크롤이 `100px` 이상 내려갔을 때 전환
- 배경: 글래스모피즘(`bg-[rgba(...)]` + `backdrop-blur`) + 낮은 불투명도
- 로고: 크기 축소(`scale-75`), 필요시 심볼 중심으로 간소화
- 높이: 컴팩트(예: `h-16`)
- 보더: 하단에 브랜드 컬러 기반 1px 구분선(낮은 opacity)

### 2) 레이아웃 구성 (Layout)

**데스크톱 (Desktop)**
- Left: 브랜드 로고
- Center: 주요 섹션 링크(Home, Menu, Locations, Events)
- Hover: 밑줄이 중심에서 양 옆으로 퍼지는 애니메이션
- Right: `Reserve Now` CTA + SNS 아이콘

**모바일 (Mobile)**
- Right: 햄버거 메뉴
- Open state: 메뉴 클릭 시 전체 화면 오버레이 또는 Vaul 기반 Drawer
- 터치 편의: 큰 타이포(`text-4xl` 수준) + 터치 타겟 최소 44px
- Thumb zone: 하단에 `전화 걸기`, `예약하기` 큰 버튼

---

## 섹션별 구성 가이드 (Section Composition)

각 섹션은 목적에 맞는 최적의 레이아웃과 트렌드를 반영합니다.

### 1) Hero 섹션 (The Hook)

- 배경: 고화질 Cinematic Video Loop(무음/자동재생)
- 내용: 시그니처 메뉴 조리 과정, 칵테일 쉐이킹, 매장 분위기
- 콘텐츠: 화면 중앙 정렬
- Main Copy: 브랜드 슬로건(Display Font)
- Sub Copy: 한 줄 소개
- Action: `Book a Table` & `View Menu` 듀얼 버튼
- 연결: 하단에 Gradient Fade로 다음 섹션과 자연스럽게 이어짐

### 2) Experience 섹션 (Bento Grid)

- 구조: 3~4열 그리드
- 배치 예시
  - 2x2 Large: 대표 메뉴 클로즈업 비디오
  - 1x1 Small: “Private Room Available”(아이콘 + 텍스트)
  - 1x2 Tall: 칵테일/와인 리스트(세로 이미지)
  - 2x1 Wide: Happy Hour 정보(타이포 중심)
- 인터랙션: Hover 시 카드 확대 + 비디오 재생

### 3) Menu Preview 섹션 (Interactive List)

- 레이아웃: 텍스트 리스트이되 인터랙티브하게
- 작동: 메뉴명 Hover → 커서 옆 Floating Thumbnail이 따라다님
- CTA: “View Full Menu(PDF)” 또는 디지털 메뉴 링크

### 4) Location & Contact 섹션

- 레이아웃: 좌(정보) / 우(지도) 분할
- 좌측
  - 지점 탭(2개 이상일 때): [Plano] [Dallas]
  - 주소/전화/영업시간
  - 파킹/발렛 안내(아이콘)
- 우측
  - Google Maps
  - 다크 테마/사이트 분위기와 맵 톤 일치

---

## 2025 트렌드 패턴 (Trendy UI Patterns)

### 1) 마퀴 (Marquee)

- 위치: Hero ↔ Experience 사이
- 내용 예시: “HAPPY HOUR MON-FRI 50% OFF • LIVE DJ EVERY FRIDAY • BOOK YOUR PRIVATE PARTY •”
- 효과: 끊임없이 흐르는 텍스트 띠로 분위기 강조

### 2) 스크롤리텔링 (Scrollytelling)

- About 섹션: 스크롤에 따라 재료 → 숙성 → 조리 → 완성 순서로 배경 이미지 Cross-fade

---

## 접근성 (Accessibility / ADA)

트렌디한 디자인일수록 다음 사항을 엄격히 준수합니다.

### Motion Safety (Framer/Lenis 공통)

- `prefers-reduced-motion: reduce`인 경우
  - Lenis 비활성화(또는 native scroll로 폴백)
  - Marquee/Scrollytelling 애니메이션 최소화(정지 또는 duration 크게)
  - 반복(loop) 애니메이션 제한

### Contrast & Readability

- 투명 Navbar는 배경 영상이 밝아질 수 있으므로 텍스트 가독성 보강 필요
  - 예: `drop-shadow` 또는 텍스트 배경 그라데이션

### Keyboard Navigation

- Bento Grid의 모든 카드는 Tab으로 접근 가능해야 함
- Enter/Space로 동작(모달/상세 보기 등)을 트리거할 수 있어야 함
- 포커스 링은 기본(shadcn 포함)을 유지하거나 WCAG를 충족하는 형태로 커스터마이징

### Video Accessibility

- Hero 비디오에는 반드시 Pause 버튼 제공
- Pause 버튼은 키보드 포커스 가능해야 하며, 스크린 리더용 레이블 제공

---

## 컴포넌트 표준 (Component Standards)

보일러플레이트의 가치는 “같은 UI를 항상 같은 방식으로 구현”하는 데 있습니다.
아래는 기준 스택에 맞춘 권장 컴포넌트 책임/상태 표준입니다.

- `components/layout/navbar.tsx`
  - 상태: `top` / `scrolled`
  - 모바일 메뉴/하단 액션: Vaul Drawer를 기본 채택

- `components/sections/hero.tsx`
  - 비디오 배경 + 그라데이션 페이드 + Pause 컨트롤
  - LCP 대상이면 이미지/포스터 우선 로드 전략 포함

- `components/sections/bento-grid.tsx`
  - Hover 모션은 Framer Motion 표준 패턴으로 통일
  - 키보드 포커스/Enter 동작 제공

- `components/sections/menu-showcase.tsx`
  - Embla Carousel + Lightbox 연결 표준
  - 썸네일 클릭 → Lightbox 오픈 플로우 고정

- `components/sections/reservation-form.tsx`
  - React Hook Form + Zod
  - 에러 메시지/aria/focus 이동 규칙 포함
  - 성공/실패 피드백: Sonner Toast 사용

- `components/sections/location-contact.tsx`
  - `@vis.gl/react-google-maps`로 지도 섹션 구현
  - 다지점 확장(탭/리스트) 고려

---

## 구현 체크리스트 (Design / Implementation / QA)

### Design

- [ ] `src/config/site.ts`에서 브랜드 정보/기능 플래그 정의
- [ ] `globals.css`에서 브랜드 컬러(`--brand-primary`) 및 텍스트 대비 확인
- [ ] Navbar 2-state 전환 규칙(높이/로고/보더/블러) 확정

### Implementation

- [ ] Motion 정책: `prefers-reduced-motion` 대응(Framer/Lenis/Marquee)
- [ ] Scroll: Lenis가 성능 저하 없이 부드러운가(긴 페이지)
- [ ] Mobile: Vaul 기반 바텀시트(전화/예약) 기본 패턴 적용
- [ ] Menu/Gallery: Embla + Lightbox 연결(썸네일 → 확대)
- [ ] Reservation: RHF + Zod, 에러 상태/포커스/aria 규칙 준수
- [ ] Feedback: 주요 전환 포인트에 Sonner 토스트 적용
- [ ] Images: `next.config.ts`의 `images.remotePatterns` 설정 확인
- [ ] Dependencies: React 버전 강제용 `package.json` `overrides` 확인

### QA

- [ ] Lighthouse 접근성 점수 95점 이상
- [ ] 모바일 터치 타겟 최소 44px 준수
- [ ] Tab 네비게이션 순서 논리적/일관적
- [ ] Hero 비디오 Pause 버튼 동작 및 키보드 접근 가능