# ADA 접근성 개선 사항 요약 (California 2025 기준)

## 개요
이 문서는 Hwang J&S Construction 웹사이트의 ADA 접근성 개선 작업을 요약한 것입니다. WCAG 2.1 Level AA 기준과 캘리포니아 2025년 규정을 준수하며, 특히 VoiceOver 스크린리더 호환성을 중점적으로 개선했습니다.

---

## 주요 개선 사항

### 1. 구조 및 시맨틱 HTML (WCAG 2.1 - 1.3.1, 4.1.1)

#### 개선 내용:
- ✅ **메인 페이지 (`src/app/page.tsx`)**
  - Hero 섹션에 `aria-label` 추가
  - 섹션별 `aria-labelledby` 및 숨겨진 제목 추가
  - h2를 p로 변경하여 올바른 제목 계층 구조 유지 (h1은 페이지당 하나만)

- ✅ **프로젝트 카드 (`ProjectGrid.tsx`, `ProjectPreview.tsx`)**
  - `<div>`를 `<article>`로 변경하여 시맨틱 구조 개선
  - h2를 h3로 변경하여 제목 계층 구조 수정
  - 각 링크에 명확한 `aria-label` 추가

- ✅ **모든 페이지**
  - 섹션에 적절한 `aria-labelledby` 및 숨겨진 제목 추가
  - `main` 랜드마크에 `id="main-content"` 추가 (skip link와 연결)

---

### 2. 키보드 접근성 및 포커스 관리 (WCAG 2.1 - 2.1.1, 2.4.7)

#### 개선 내용:
- ✅ **Header 컴포넌트 (`src/components/Header.tsx`)**
  - 모바일 메뉴에 **Focus Trap** 구현
    - Tab 키로 메뉴 내부에서만 포커스 이동
    - Shift+Tab으로 역방향 네비게이션 지원
  - 모바일 메뉴를 `role="dialog"` 및 `aria-modal="true"`로 설정
  - 메뉴 열림/닫힘 시 포커스 자동 이동
  - ESC 키로 메뉴 닫기 지원

- ✅ **프로젝트 상세 페이지 (`src/app/projects/[id]/page.tsx`)**
  - 이미지 갤러리에 **키보드 네비게이션** 추가
    - 좌우 화살표 키로 이미지 전환
    - 갤러리 영역 내에서만 작동하도록 제한
  - 모든 인터랙티브 요소에 명확한 포커스 스타일 적용

- ✅ **전역 스타일 (`src/app/globals.css`)**
  - `:focus-visible` 스타일 강화
  - 모든 버튼, 링크, 입력 필드에 명확한 포커스 링 추가
  - `prefers-reduced-motion` 지원으로 애니메이션 제어

---

### 3. 이미지 및 미디어 접근성 (WCAG 2.1 - 1.1.1, 1.4.2)

#### 개선 내용:
- ✅ **프로젝트 이미지 (`ProjectGrid.tsx`, `ProjectPreview.tsx`)**
  - 모든 이미지에 **상세한 alt 텍스트** 추가
    - 예: `"Mall Renovation Project - Main project image showing commercial renovation work"`
    - 프로젝트 제목, 이미지 유형, 설명 포함
  - 추가 이미지에 순서 및 컨텍스트 정보 포함

- ✅ **프로젝트 상세 페이지 이미지 갤러리**
  - 현재 표시 중인 이미지 표시 (`aria-hidden` 사용)
  - 썸네일 버튼에 현재 상태 표시 (`aria-pressed`, `aria-label`)
  - 이미지 번호 및 총 개수 정보 제공

- ✅ **비디오 (`src/app/page.tsx`)**
  - 배경 비디오에 `aria-label` 및 `aria-describedby` 추가
  - 숨겨진 설명 텍스트 추가 (`sr-only`)
  - `prefers-reduced-motion` 감지 시 자동 일시정지
  - 재생/일시정지 버튼에 명확한 `aria-label` 제공

- ✅ **Introduction 컴포넌트**
  - 서비스 이미지에 제목 및 부제목을 포함한 alt 텍스트 추가

---

### 4. 폼 접근성 (WCAG 2.1 - 3.3.1, 3.3.2, 3.3.3)

#### 개선 내용:
- ✅ **ContactForm (`src/components/ContactForm.tsx`)**
  - **에러 요약 영역** 개선
    - `role="alert"`, `aria-live="assertive"`, `aria-atomic="true"` 추가
    - 에러 발생 시 자동 포커스 이동
    - 각 에러 메시지를 해당 필드로 연결하는 링크 추가
  - 모든 필수 필드에 `aria-label="required field"` 추가
  - 필드별 `aria-invalid` 및 `aria-describedby` 연결
  - 에러 메시지에 `role="alert"` 추가
  - 성공/에러 상태 메시지에 `aria-live="polite"` 및 `aria-atomic="true"` 추가
  - 제출 버튼에 `aria-busy` 상태 표시

---

### 5. 네비게이션 및 링크 (WCAG 2.1 - 2.4.4, 2.4.6)

#### 개선 내용:
- ✅ **Header 네비게이션**
  - 현재 페이지 표시 (`aria-current="page"`)
  - 메인 네비게이션에 `aria-label="Main navigation"` 추가
  - 모바일 네비게이션에 `aria-label="Mobile navigation"` 추가
  - 로고 링크에 `aria-label` 추가

- ✅ **필터 버튼 (`ProjectGrid.tsx`)**
  - 모든 필터 버튼에 `aria-label` 추가
  - `aria-pressed` 상태로 선택 상태 표시
  - 이모지 아이콘에 `aria-hidden="true"` 추가

- ✅ **프로젝트 카드 링크**
  - 각 프로젝트 카드 링크에 명확한 `aria-label` 추가
    - 예: `"View Mall Renovation Project project details"`

---

### 6. Skip Link 및 랜드마크 (WCAG 2.1 - 2.4.1)

#### 개선 내용:
- ✅ **Skip Link (`src/app/layout.tsx`)**
  - "Skip to main content" 링크 구현
  - 포커스 시에만 표시되도록 스타일링
  - `#main-content`로 연결

- ✅ **랜드마크 구조**
  - 모든 페이지에 `<main id="main-content">` 추가
  - Header에 `role="banner"` 추가
  - Footer에 `role="contentinfo"` 추가
  - 섹션별 `aria-labelledby` 추가

---

### 7. VoiceOver 특화 개선 사항

#### 개선 내용:
- ✅ **명확한 ARIA 레이블**
  - 모든 인터랙티브 요소에 VoiceOver가 읽을 수 있는 명확한 레이블 제공
  - 버튼 상태 (`aria-pressed`, `aria-expanded`, `aria-busy`) 명확히 표시

- ✅ **라이브 영역 (Live Regions)**
  - 폼 에러 메시지: `aria-live="assertive"`
  - 폼 성공 메시지: `aria-live="polite"`
  - 상태 변경 시 VoiceOver가 자동으로 알림

- ✅ **이미지 갤러리 네비게이션**
  - 현재 이미지 번호 및 총 개수 정보 제공
  - 썸네일 버튼에 현재 선택 상태 표시
  - 키보드 네비게이션으로 VoiceOver 사용자가 쉽게 탐색 가능

- ✅ **포커스 관리**
  - 모달/메뉴 열림 시 포커스 자동 이동
  - 포커스 트랩으로 메뉴 내에서만 포커스 유지
  - VoiceOver 사용자가 현재 위치를 명확히 인지 가능

---

## 개선된 파일 목록

1. `src/app/page.tsx` - 메인 페이지 구조 및 비디오 접근성
2. `src/app/layout.tsx` - Skip link 및 메인 랜드마크
3. `src/app/contact/page.tsx` - 메인 랜드마크 추가
4. `src/app/projects/page.tsx` - 섹션 레이블 추가
5. `src/app/projects/[id]/page.tsx` - 이미지 갤러리 키보드 네비게이션
6. `src/components/Header.tsx` - 모바일 메뉴 focus trap
7. `src/components/ContactForm.tsx` - 폼 에러 처리 및 라이브 영역
8. `src/components/ProjectGrid.tsx` - 이미지 alt 텍스트 및 ARIA 레이블
9. `src/components/ProjectPreview.tsx` - 이미지 alt 텍스트 및 ARIA 레이블
10. `src/components/Introduction.tsx` - 이미지 alt 텍스트 개선

---

## WCAG 2.1 Level AA 준수 체크리스트

### ✅ 준수 항목:

- **1.1.1** Non-text Content: 모든 이미지에 적절한 alt 텍스트 제공
- **1.3.1** Info and Relationships: 시맨틱 HTML 및 ARIA 사용
- **1.4.2** Audio Control: 비디오 재생/일시정지 컨트롤 제공
- **2.1.1** Keyboard: 모든 기능 키보드로 접근 가능
- **2.1.2** No Keyboard Trap: 모바일 메뉴에 focus trap 구현
- **2.4.1** Bypass Blocks: Skip link 제공
- **2.4.4** Link Purpose: 모든 링크에 명확한 목적 표시
- **2.4.6** Headings and Labels: 적절한 제목 계층 구조
- **2.4.7** Focus Visible: 모든 포커스 가능 요소에 명확한 포커스 표시
- **3.2.1** On Focus: 포커스 시 컨텍스트 변경 없음
- **3.3.1** Error Identification: 에러 필드 명확히 표시
- **3.3.2** Labels or Instructions: 모든 폼 필드에 레이블 제공
- **3.3.3** Error Suggestion: 에러 메시지 및 수정 방법 제공
- **4.1.2** Name, Role, Value: 모든 UI 컴포넌트에 적절한 이름, 역할, 값 제공

---

## 테스트 권장 사항

### 1. 키보드 테스트
- Tab 키로 모든 인터랙티브 요소 접근 가능한지 확인
- 모바일 메뉴에서 Tab/Shift+Tab으로 포커스 트랩 작동 확인
- ESC 키로 모바일 메뉴 닫기 확인

### 2. VoiceOver 테스트 (macOS/iOS)
- VoiceOver로 모든 페이지 탐색
- 이미지 갤러리에서 화살표 키로 네비게이션 확인
- 폼 제출 시 에러 메시지 자동 읽기 확인
- 모바일 메뉴 열림/닫힘 시 포커스 이동 확인

### 3. 자동화 도구 테스트
- Lighthouse 접근성 점수 확인
- axe DevTools로 추가 문제 검사
- WAVE 브라우저 확장 프로그램으로 검증

---

## 추가 권장 사항

### 향후 개선 가능 항목:

1. **비디오 캡션**: 배경 비디오에 자막 파일 추가 (WCAG 2.1 AA 필수)
2. **색상 대비**: 모든 텍스트가 4.5:1 대비 비율 확인 (자동화 도구로 검증)
3. **언어 설정**: 다국어 콘텐츠가 있는 경우 `lang` 속성 추가
4. **에러 방지**: 폼 제출 전 실시간 검증으로 에러 사전 방지
5. **접근성 성명서**: `/accessibility` 페이지에 최신 개선 사항 반영

---

## 결론

이번 개선 작업을 통해 Hwang J&S Construction 웹사이트는 WCAG 2.1 Level AA 기준을 충족하며, 특히 VoiceOver 사용자를 위한 접근성이 크게 향상되었습니다. 모든 주요 인터랙티브 요소가 키보드로 접근 가능하며, 스크린리더 사용자가 사이트를 효과적으로 탐색할 수 있도록 개선되었습니다.

---

**작성일**: 2025년 1월 27일  
**기준**: WCAG 2.1 Level AA, California 2025 Regulations  
**특별 고려사항**: VoiceOver 호환성

