# UI Overhaul Plan for `js-construction`

## Goal

`design_benchmark_report`의 방향성을 바탕으로, 현재 사이트를 "블루 계열의 일반적인 시공사 사이트"에서 "절제된 프리미엄 건축/시공 브랜드 경험"으로 전면 개편한다.

핵심 목표는 다음 4가지다.

1. 브랜드 인상을 더 고급스럽고 또렷하게 만든다.
2. 프로젝트 중심의 포트폴리오 경험으로 구조를 재정렬한다.
3. 모션과 인터랙션을 줄이기보다, 더 정교하고 절제된 방식으로 재설계한다.
4. 디자인 시스템을 먼저 정비해서 이후 페이지 개편 속도를 높인다.

---

## Benchmark Summary

`design_benchmark_report`에서 반복적으로 보이는 방향은 아래와 같다.

1. 히어로는 "정보"보다 "브랜드 무드"를 먼저 전달한다.
2. 타이포는 Serif와 Sans의 대비로 프레스티지와 신뢰를 동시에 만든다.
3. 포트폴리오는 동일 카드 반복보다 위계 있는 비정형 그리드가 더 강하다.
4. 컬러는 블루/그린 중심의 범용 SaaS 톤보다, 블랙/오프화이트/골드 또는 스틸 계열이 더 적합하다.
5. 인터랙션은 많아야 좋은 것이 아니라, 느리고 부드럽고 의도적인 전환이 중요하다.

---

## Current UI Diagnosis

현재 UI는 완성도 자체는 나쁘지 않지만, 벤치마크 리포트의 방향과는 몇 가지 중요한 간극이 있다.

### 1. Visual language mismatch

- 홈 히어로와 CTA, 링크, 강조색이 전반적으로 블루/에메랄드 중심이다.
- 이 조합은 "신뢰감 있는 현대적 기업 사이트"에는 잘 맞지만, 보고서가 지향하는 "에디토리얼 + 프리미엄 건축 브랜드" 인상과는 다르다.
- 특히 버튼, 그라디언트, 카드 hover 효과가 다소 많아서 고급스러운 긴장감보다 "강조가 많은 상태"로 보일 가능성이 크다.

### 2. Portfolio hierarchy is still too uniform

- 프로젝트 카드 자체는 잘 만들어져 있지만, 홈과 프로젝트 페이지 모두 기본적으로 균일한 카드 반복 구조에 가깝다.
- 리포트의 핵심 제안인 벤토형 위계, 대표 프로젝트 강조, 큐레이션 구조가 아직 약하다.

### 3. Typography is functional, not distinctive

- 전체 사이트가 `Outfit` 단일 폰트 기반이라 읽기성은 좋지만, 브랜드 시그니처가 약하다.
- "프로젝트명/헤드라인 = Serif", "설명/정보 = Sans" 구조로 바꾸면 훨씬 프리미엄한 인상을 줄 수 있다.

### 4. Motion exists, but brand-directed motion is weak

- 현재도 애니메이션은 풍부하지만, 개별 효과 중심이다.
- 리포트가 말하는 방향은 "브랜드 무드에 봉사하는 느린 전환", "스크롤리텔링", "작품 전시처럼 보이는 reveal"에 가깝다.

### 5. Navigation architecture is still conventional

- 현재 헤더는 잘 동작하지만, 정보형 네비게이션에 가깝다.
- 리포트 기준으로는 풀스크린 오버레이 메뉴나 좀 더 에디토리얼한 내비게이션 경험이 더 어울린다.

---

## Target Design Direction

### Brand concept

`Quiet Prestige Construction`

- 조용하지만 비싸 보이는 인상
- 기술력보다 작품성과 신뢰를 먼저 전달
- "시공"보다는 "공간을 완성하는 파트너"에 가까운 톤

### Visual principles

1. 대비는 크되, 색 사용은 적게 한다.
2. 화면에 항상 "숨 쉴 여백"이 보이도록 한다.
3. 강조는 색보다 크기, 간격, 타이포, 이미지 선택으로 만든다.
4. 모션은 빠른 반응보다 느린 감상형 전환을 우선한다.

### Proposed palette

- Base: `#0A0A0A`
- Surface: `#FBFBFB`
- Soft surface: `#F3F0EA`
- Accent: `#C5A059`
- Secondary accent: `#7D7D7D`
- Body text: `#1A1A1A`
- Muted text: `#6B6B6B`

### Proposed typography

- Display / hero / project titles: high-contrast Serif
- Body / navigation / metadata: clean Sans-serif

후보 예시:

- Serif: `Cormorant Garamond`, `Bodoni Moda`, `Playfair Display`
- Sans: `Outfit` 유지 또는 `Manrope`, `Plus Jakarta Sans`

권장 방향은 "Sans 전면 교체"보다 "Serif 추가 + Sans 정리"다.

---

## Information Architecture Changes

전면 개편은 단순 스타일 교체보다, 홈 구조 재편이 함께 가야 효과가 크다.

### New home structure

1. Hero
2. Brand statement / philosophy
3. Signature projects
4. Service capabilities
5. Trust / process / credentials
6. Contact CTA

### Notes

- 지금의 `ProjectPreview -> Introduction -> ContactForm` 순서는 기능적으로는 맞지만, 브랜드 서사의 밀도가 약하다.
- 개편 후에는 "우리가 누구인지"와 "무엇을 만들었는지"를 더 앞에 배치해야 한다.
- 서비스 소개는 현재처럼 카드 나열형보다는, 선택된 대표 카테고리를 깊게 보여주는 방식이 더 적합하다.

---

## Page-by-Page Overhaul Plan

## 1. Global Design System

가장 먼저 손봐야 할 영역이다. 여기서 방향을 잘 잡아야 나머지 페이지가 빨라진다.

### Work items

1. 컬러 토큰 재설계
2. 타이포 스케일 재설계
3. 버튼/배지/카드/섹션 여백 규칙 통일
4. 그림자, 보더, 오버레이 강도 축소
5. 모션 duration/easing 표준화

### Expected code impact

- `src/app/globals.css`
- `src/app/layout.tsx`

### Key change

현재의 블루/에메랄드 그라디언트 기반 유틸리티를 줄이고, 중립 색상 기반의 토큰 중심 구조로 바꾼다.

---

## 2. Header / Navigation

### Problems to solve

- 현재 헤더는 기능적으로 충분하지만 브랜드 경험이 평범하다.
- 스크롤 상태별 스타일 변화가 다소 세분화되어 있어, 오히려 브랜드 인상이 분산된다.

### Redesign direction

1. 상단에서는 거의 사라지는 수준의 미니멀 헤더
2. 스크롤 후 얇고 단정한 고정 헤더
3. 모바일은 풀스크린 오버레이 메뉴
4. 메뉴 자체에 브랜드 카피 또는 대표 프로젝트 링크 포함

### Expected code impact

- `src/components/Header.tsx`

---

## 3. Home Hero

### Problems to solve

- 현재 히어로는 정보량과 시각 효과가 모두 많다.
- 태그 칩, 라인 장식, 그라디언트 텍스트, 복수 CTA가 동시에 경쟁한다.

### Redesign direction

1. 한 줄의 강한 브랜드 메시지
2. 한 개의 보조 문장
3. CTA 1개 메인, 1개 서브
4. 배경은 시네마틱 영상 또는 아주 좋은 정지 이미지
5. 오버레이는 색조보다 명암 중심

### Suggested content structure

- Overline: 지역/업력/라이선스
- Headline: 철학 중심 문장
- Body: 전문 분야 요약
- CTA: 상담 / 프로젝트 보기

### Expected code impact

- `src/app/page.tsx`

---

## 4. Home Project Section

### Problems to solve

- 현재는 "좋은 카드의 나열"에 가깝다.
- 대표 프로젝트를 시각적으로 더 크게 말하지 못한다.

### Redesign direction

1. 벤토형 또는 masonry 성격의 하이라이트 그리드
2. 대표 프로젝트 1~2개를 대형 카드로 강조
3. 나머지는 보조 카드로 배치
4. 프로젝트 메타데이터를 더 에디토리얼하게 정리

### Content rule

- 카드 수를 줄이고 큐레이션한다.
- "최근", "대표", "상업", "주거" 같은 필터보다 "signature selection" 경험을 우선한다.

### Expected code impact

- `src/components/ProjectPreview.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/ScrollableBar.tsx` 또는 대체 컴포넌트

---

## 5. Services / Expertise Section

### Problems to solve

- 현재 서비스 섹션은 정보는 많지만 카드 8개가 한번에 보여서 감상이 아니라 비교 모드가 된다.

### Redesign direction

1. 서비스 카테고리를 2단 구조로 단순화
2. 대표 서비스 1개를 크게 보여주고 나머지는 보조 리스트화
3. 공정/강점/결과 중심으로 카피 재정렬
4. 아이콘 의존도를 줄이고 실제 공간 이미지 비중을 높인다

### Expected code impact

- `src/components/Introduction.tsx`
- `src/app/services/page.tsx`

---

## 6. Projects Index

### Problems to solve

- 현재 필터 UX는 실용적이지만 브랜드 몰입도는 낮다.
- 모든 카드가 동일 규격이라 대표성과 리듬감이 부족하다.

### Redesign direction

1. 프로젝트 아카이브형 레이아웃
2. 상단에 큐레이터 문장 또는 소개 카피 추가
3. 필터 UI를 드롭다운/segmented control 방식으로 정리
4. 카드 크기와 비율을 일부 가변화
5. hover 시 정보가 "튀어나오는" 방식보다 처음부터 정돈된 메타 구조 제공

### Expected code impact

- `src/app/projects/page.tsx`
- `src/components/ProjectGrid.tsx`
- `src/components/ProjectCard.tsx`

---

## 7. Footer and Contact Surfaces

### Redesign direction

1. Footer도 브랜드 톤에 맞게 더 절제된 편집형 레이아웃으로 변경
2. 연락처 CTA를 배너처럼 강하게 분리
3. 법적 정보는 유지하되 시각적 우선순위를 낮춘다

### Expected code impact

- `src/components/Footer.tsx`
- `src/components/ContactForm.tsx`
- `src/app/contact/page.tsx`

---

## Execution Roadmap

## Phase 1. Brand Foundation

기간: 1 sprint

### Scope

1. 디자인 토큰 정리
2. 폰트 체계 도입
3. 버튼/카드/섹션 스타일 리빌드
4. 헤더/푸터 기본 톤 수정

### Deliverable

- 전체 사이트가 같은 브랜드 언어를 쓰기 시작하는 상태

---

## Phase 2. Home Page Rebuild

기간: 1 sprint

### Scope

1. 히어로 전면 개편
2. 브랜드 스테이트먼트 섹션 추가
3. 프로젝트 프리뷰를 벤토형 구조로 변경
4. 서비스 섹션을 큐레이션형으로 재설계

### Deliverable

- 첫 방문 인상이 완전히 달라지는 상태

---

## Phase 3. Projects Experience

기간: 1 sprint

### Scope

1. 프로젝트 목록 페이지 개편
2. 프로젝트 카드 시스템 재정의
3. 필터 UX 단순화
4. 상세 페이지 메타 레이아웃 정리

### Deliverable

- 포트폴리오가 브랜드의 중심 자산처럼 보이는 상태

---

## Phase 4. Secondary Pages and Polish

기간: 1 sprint

### Scope

1. Services / Why Us / Contact 페이지 톤 맞춤
2. 모션 디테일 통일
3. 모바일 여백 및 오버레이 UX 마감
4. 접근성, 성능, SEO 회귀 점검

### Deliverable

- 전체 페이지가 하나의 디자인 시스템으로 묶인 상태

---

## Priority Order

실제 작업 우선순위는 아래 순서를 권장한다.

1. `globals.css` 토큰 재설계
2. `layout.tsx` 폰트 전략 변경
3. `Header.tsx` 개편
4. `app/page.tsx` 히어로 개편
5. `ProjectPreview.tsx` 구조 변경
6. `Introduction.tsx` 단순화
7. `projects/page.tsx` + `ProjectGrid.tsx` 개편
8. `Footer.tsx` 및 `ContactForm.tsx` 톤 정리

---

## Design Rules to Protect During the Redesign

1. 영상이나 애니메이션이 늘어나도 텍스트 가독성은 반드시 우선한다.
2. 프리미엄 톤을 만든다고 정보 접근성이 떨어지면 안 된다.
3. 카드마다 hover 효과를 추가하기보다, 기본 상태의 완성도를 높인다.
4. 모바일에서는 "복잡한 우아함"보다 "단정한 명료함"을 택한다.
5. 기존 접근성 배려는 유지하거나 강화한다.

---

## Success Metrics

개편 성공 기준은 아래처럼 잡는 것이 좋다.

1. 첫 화면에서 브랜드 톤이 3초 내 인지된다.
2. 프로젝트 섹션의 대표작 클릭률이 올라간다.
3. 문의 CTA 클릭률이 홈 기준 개선된다.
4. 모바일에서도 여백과 이미지 위계가 무너지지 않는다.
5. 새 페이지를 추가할 때 스타일 재사용성이 높아진다.

---

## Recommended Next Step

가장 좋은 다음 단계는 "바로 구현"이 아니라 아래 2개를 먼저 만드는 것이다.

1. 홈 화면 개편용 low-fidelity 와이어프레임
2. 글로벌 디자인 토큰 초안

이 2개가 먼저 나오면, 이후 구현이 훨씬 빠르고 흔들리지 않는다.
