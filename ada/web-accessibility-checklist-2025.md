# Web Accessibility Implementation Checklist (US / California, 2025 기준)

> 이 문서는 미국 연방(ADA) 및 캘리포니아(Unruh, CCPA/CPRA) 법 환경과  
> WCAG 2.1 / 2.2 Level AA를 바탕으로,  
> **웹 개발자가 실제로 구현 시 참고할 수 있는 기술 체크리스트**를 정리한 것입니다.  
> 법률 자문은 아니며, 리스크를 줄이기 위한 실무 가이드입니다.

---

## 0. 목표 수준 (Baseline)

- **기본 타겟:** WCAG 2.1 Level AA **이상**
- **권장:** 가능하면 WCAG 2.2 Level AA까지 고려
- **법적 리스크 관점:**  
  - 미국 DOJ, 캘리포니아 법원, 접근성 소송·합의에서 **사실상 WCAG 2.1 AA를 기준**으로 보는 경우가 많음
  - 캘리포니아는 Unruh Civil Rights Act, AB 434, AB 1757·SB 1486(제안) 등으로 **웹 접근성 기준을 더 강화하려는 움직임**이 있음

> ✅ 실무적으로는 “**WCAG 2.1 AA를 최소 기준으로 보고, 2.2 추가 항목도 가능하면 따라간다**”를 기본 전략으로 삼는다.

---

## 1. 구조 & 시맨틱 (HTML / ARIA)

### 1.1 페이지 구조

- 모든 페이지에 **유일한 `<h1>`** 존재
- 제목 구조를 위계적으로 사용
  - `<h1>` → `<h2>` → `<h3>` … (숫자 건너뛰지 않기)
- `header`, `nav`, `main`, `aside`, `footer` 등 **시맨틱 태그 적극 사용**
- 반복되는 레이아웃 요소(헤더/푸터/사이드바)는 **매 페이지 일관성 유지 (위치, 내용)**

### 1.2 Landmark & Role

- `<header>` → 필요 시 `role="banner"` (선택)
- `<nav>` → 필요시 `aria-label`로 영역 구분  
  예: `aria-label="Main navigation"`, `aria-label="Footer navigation"`
- `<main>` → 페이지 당 1개, 메인 콘텐츠 영역
- `<footer>` → 필요 시 `role="contentinfo"`
- 주요 영역은 스크린리더의 Landmark 탐색으로 **쉽게 이동 가능하도록** 구성

### 1.3 ARIA 사용 원칙

- **가능하면 native HTML 먼저**, ARIA는 부족한 부분 보완용
- 의미 없는 `div`/`span`에 `role="button"`을 줄 경우:
  - `tabindex="0"` + Space/Enter로도 동작 처리
  - `aria-pressed`(토글 버튼), `aria-expanded`(열림/닫힘) 등 상태 전달
- ARIA 속성 사용 시:
  - `aria-label` / `aria-labelledby`
  - `aria-describedby`
  - `aria-current="page"` (현재 페이지 네비게이션 항목)

---

## 2. 키보드 접근성 & 포커스

### 2.1 키보드만으로 사용 가능해야 하는 것

- 모든 인터랙티브 요소:
  - 링크, 버튼, 폼 필드, 드롭다운, 탭, 모달, 토글, 슬라이더 등
- SPA/모달/드로어 내 네비게이션
- 햄버거 메뉴, 모바일 네비게이션
- 커스텀 컴포넌트(`div`로 만든 버튼 등)는  
  **Tab 포커스 + 키보드 조작(Enter/Space/Arrow 등)** 동작 구현

### 2.2 포커스 관리

- 모든 인터랙티브 요소에 **눈에 띄는 포커스 스타일** 적용
  - 예: `outline` 사용 (기본 제거하지 말 것), 제거 시 대체 스타일 반드시 구현
- 모달 열릴 때:
  - 포커스를 모달 내부 첫 포커스 가능한 요소로 이동
- 모달 닫을 때:
  - 포커스를 **모달을 열었던 트리거 요소**로 되돌리기
- 라우트 전환(SPA) 시:
  - 메인 콘텐츠 시작 부분으로 포커스 이동  
    → `document.getElementById('main-content').focus()`

### 2.3 Skip Link

- 페이지 최상단에 `"Skip to main content"` 링크 제공
  - 첫 Tab에서 포커스되도록
  - 평소에는 숨기고, 포커스 시에만 보이도록 스타일링
- 링크 타겟은 `<main id="main-content">` 와 같이 명확한 메인 영역

---

## 3. 네비게이션 & 링크

### 3.1 내비게이션

- 헤더 내 nav:
  - `<nav aria-label="Main navigation">` 등으로 레이블링
- 현재 페이지 메뉴 항목:
  - `aria-current="page"`

### 3.2 링크 텍스트

- **“여기 클릭”, “자세히 보기”** 같은 모호한 텍스트 지양
  - 대신: “View menu”, “See pricing details” 등 **맥락 없이도 의미가 통하는 텍스트**
- 아이콘만 있는 링크/버튼:
  - `aria-label` 또는 **시각적으로 숨겨진 텍스트** 제공

### 3.3 새 탭 / 새 창

- 새 탭에서 열리는 링크:
  - 시각적으로: “(opens in new tab)” 등 텍스트 추가
  - 스크린리더: `aria-label="XXX (opens in new tab)"` 등으로 알리기

---

## 4. 이미지 & 미디어

### 4.1 이미지

- 의미 있는 이미지: `alt`에 **짧고 명확한 설명**
  - 제품 이미지: “Strawberry mochi donut, top view”
- 링크 역할을 하는 이미지:
  - `alt`에 **링크 목적**이 드러나게 작성
- 순수 장식용 이미지:
  - `alt=""` (빈 문자열) 또는 `role="presentation"` 사용

### 4.2 아이콘

- 정보 전달 아이콘 (경고, 성공, 에러 등):
  - 텍스트 레이블 또는 `aria-label` / `aria-hidden` 조합으로 접근성 고려
- 단순 장식 아이콘:
  - `aria-hidden="true"`

### 4.3 비디오 & 오디오

- 자동 재생 시:
  - **Pause/Stop/Mute 컨트롤 제공 필수**
- 의미 있는 비디오:
  - **자막 제공 (캡션)**: WCAG 2.1 AA에서는 필수
- 배경 비디오:
  - `aria-hidden="true"`로 스크린리더에서 제외
  - `prefers-reduced-motion` 감지 후:
    - 애니메이션/비디오 재생 줄이기 또는 정적인 이미지로 대체

---

## 5. 폼(Form) 접근성

### 5.1 레이블 & 구조

- 모든 폼 필드에 `<label>` 연결:
  - `for="field-id"` + `<input id="field-id">`
- 시각적으로 레이블을 숨겨야 할 경우:
  - `sr-only` / `visually-hidden` 클래스 사용 (스크린리더용 텍스트 유지)
- 그룹화:
  - 라디오 버튼/체크박스 그룹: `<fieldset>` + `<legend>` 사용

### 5.2 에러 처리

- 에러 메시지:
  - 해당 입력 필드와 연결  
    - `aria-describedby="field-error-id"`
    - 에러 메시지 요소에 `id="field-error-id"`
  - 에러 상태: `aria-invalid="true"`
- 폼 제출 시 에러가 있으면:
  - **에러 요약 영역**을 최상단에 제공  
  - 포커스를 에러 요약으로 이동해 사용자에게 알려주기

### 5.3 자동완성 & 힌트

- 브라우저 자동완성을 활용:
  - `autocomplete="email"`, `autocomplete="name"`, `autocomplete="address-line1"` 등
- placeholder는 **레이블 대체 X**
  - 항상 `<label>` 또는 시각적으로 숨겨진 텍스트 사용

---

## 6. 색상, 대비, 타이포그래피

### 6.1 색상 대비

- 텍스트 vs 배경 대비:
  - 일반 텍스트: 최소 **4.5:1**
  - 큰 텍스트(18pt+ 또는 14pt bold+): 최소 **3:1**
- 아이콘 / 의미 전달 그래픽:
  - 대비가 충분하거나 텍스트/패턴 등 보조 수단 제공

### 6.2 색상에만 의존 금지

- “빨간 박스는 오류, 초록은 성공”처럼 **색상만으로 상태 구분하지 말 것**
  - 아이콘 + 텍스트 레이블 함께 제공  
  - 예: “Error: Invalid email address”

### 6.3 폰트 & 줄간격

- 텍스트 크기 확대(최소 200%) 시 레이아웃 깨지지 않도록
- 라인 높이, 문자 간격 등을 적절하게 유지해 읽기 쉽도록

---

## 7. 동적 콘텐츠 & SPA (React / Next.js 등)

### 7.1 라우팅 & 페이지 전환

- SPA/Next.js에서 라우트 변경 시:
  - 메인 콘텐츠 `<main>` 영역에 포커스 이동
  - 페이지 제목(`<h1>`)이 변경되어 **스크린리더가 새 페이지임을 인식**하게 하기
- 페이지 전환 애니메이션이 지나치게 과하지 않도록

### 7.2 모달 / 드로어 / 오버레이

- 열릴 때:
  - 포커스를 모달 내부 첫 요소로 이동
  - 배경 콘텐츠는 `aria-hidden="true"` 또는 focus trap으로 차단
- 닫을 때:
  - 원래 포커스 위치로 복귀
- ESC 키로 닫기 지원

### 7.3 라이브 영역 (Live Region)

- 실시간 변경되는 상태(토스트, 알림, 에러 등):
  - `role="status"` 또는 `aria-live="polite"` / `assertive` 사용
- 예:
  ```html
  <div role="status" aria-live="polite" id="form-status">
    <!-- "Saved successfully", "Error occurred" 등 -->
  </div>
8. 언어와 콘텐츠
8.1 언어 설정

HTML 루트에:

<html lang="en">


다국어 콘텐츠:

특정 단어/문장을 다른 언어로 사용할 때:

<span lang="ko">모찌</span>

8.2 링크/버튼 명확성

버튼 텍스트는 명령형 + 구체적 동사 사용

“Sign up”, “Place order”, “View cart”

aria-label에 실제 행동을 구체적으로 설명

aria-label="Open shopping cart"

9. 캘리포니아 CCPA/CPRA 관련 UI (프라이버시)

CCPA/CPRA는 프라이버시 법이지만,
프라이버시 권리 행사 UI(공지, opt-out, 설정 페이지 등)를 장애인도 이용 가능하게 만들 것을 요구.

9.1 필수 영역

Privacy Policy 페이지

“Do Not Sell or Share My Personal Information” / Opt-out 페이지

Cookie Consent / Tracking 설정 모달

9.2 구현 체크

위 페이지/모달도 일반 페이지와 동일한 WCAG 2.1 AA 기준 적용

키보드 접근성

Screen reader 레이블

명확한 에러 메시지

충분한 색상 대비

Opt-out/삭제 요청 플로우:

장애 사용자가 스크린리더, 키보드만으로도 동일한 권리를 행사할 수 있어야 함

10. 테스트 전략 (필수 실천 항목)
10.1 자동화 도구

개발 중/PR 시:

Lighthouse, axe DevTools, eslint-plugin-jsx-a11y 등 활용

CI/CD에 접근성 검사 단계 추가 고려

10.2 수동 테스트

키보드-only 테스트:

마우스 없이 Tab/Shift+Tab/Enter/Space/Arrow로 전체 주요 플로우 수행

스크린리더 테스트:

macOS: VoiceOver

Windows: NVDA (무료), JAWS (상용)

브라우저/디바이스 조합:

Chrome, Safari, Firefox, 모바일 브라우저 등

11. 최소 체크리스트 (요약)

“소송 리스크를 줄이고 기본적인 접근성을 확보하기 위한 최소 구현 항목”

 WCAG 2.1 Level AA를 기준으로 개발 (가능하면 2.2 항목도 포함)

 페이지당 유일한 <h1> + 시맨틱 HTML 구조

 “Skip to main content” 링크 구현

 모든 인터랙티브 요소에 키보드 접근 가능 & 포커스 스타일 적용

 모든 의미 있는 이미지에 적절한 alt 텍스트

 색상 대비 4.5:1 이상 확인

 폼 필드 label 연결 + 에러 상태 aria-invalid / aria-describedby

 모달/드로어 focus trap + ESC 닫기

 외부 링크의 새 탭 열림을 텍스트/ARIA로 안내

 Privacy/Opt-out/정책 페이지에도 동일한 접근성 기준 적용

 최소 1회 이상: 키보드-only + 스크린리더 수동 테스트 수행

12. 마무리

미국/캘리포니아 기준에서 “안전한” 웹 서비스를 목표로 할 경우:

“디자인/기획 단계부터 WCAG 2.1 AA를 요구사항으로 포함”

“개발 단계마다 체크리스트에 맞춰 구현”

“릴리즈 전 접근성 QA + 주기적인 재점검”

특히 캘리포니아에서는 Unruh법과 CCPA/CPRA,
AB 1757 / SB 1486 등의 법제 움직임으로 인해
웹 접근성은 선택이 아니라 “법적 리스크 관리”의 핵심 요소가 되고 있습니다.

이 체크리스트를 매 프로젝트의 “Definition of Done” 또는 “Front-end Guidelines”에 넣고 관리하는 것을 권장합니다.