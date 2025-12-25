# Universal F&B Boilerplate - Setup Guide (v2.1 Unified)

이 가이드는 **Next.js 15 + React 18 안정 스택**을 기반으로 레스토랑/바 웹사이트를 구축하기 위한 완전한 초기 설정 문서입니다.
성능(Performance), SEO, 모바일 최적화(Mobile-first), 그리고 실무 안정성에 초점을 맞춘 검증된 기술 조합을 사용합니다.

## 🛠️ Tech Stack Spec

| Category | Package | Version (Locked) | Reason |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | `15.1.6` | LTS급 안정 버전, Turbopack 지원 |
| **React** | React | `18.3.1` | 생태계 호환성 최고의 안정 버전 |
| **React DOM** | React DOM | `18.3.1` | React 버전과 동일 |
| **Language** | TypeScript | `5.6.3` | Next 15 + React 18과 안전한 호환성 |
| **Styling** | Tailwind CSS | `3.4.14` | Tailwind v3 최종 안정화 버전 |
| **Icons** | Lucide React | `0.441.0` | React 18 호환 아이콘 라이브러리 |
| **UI Components** | Shadcn/ui | Latest | React 18 Preset |
| **Animation** | Framer Motion | `11.x` | 복잡한 인터랙션 및 페이지 전환 |

---

## 🚀 Installation Steps

### 1. 프로젝트 생성 (Project Scaffolding)

Next.js 15.1.6 버전으로 프로젝트를 생성합니다.
**중요:** 설정 파일(tailwind.config 등) 자동 생성을 위해 모든 설치 질문에서 **Yes(기본값)**를 선택합니다.

```bash
npx create-next-app@15.1.6 my-restaurant-app
```

설치 옵션 (모두 Yes 권장):
- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes** (필수: 설정 파일 생성용)
- src/ directory: **Yes** (폴더 구조 정리)
- App Router: **Yes**
- Turbopack: **Yes**
- Import alias (@/*): **Yes**

### 2. 프로젝트 폴더 이동

```bash
cd my-restaurant-app
```

### 3. 패키지 버전 고정 (Critical: Version Locking)

Next.js 15가 기본 설치하는 React 19 RC를 **검증된 안정 버전(React 18.3.1)**으로 덮어씌웁니다.
`--legacy-peer-deps` 플래그로 피어 의존성 경고를 무시합니다.

#### 3-1. 핵심 Dependencies 설치 (React, Next, Icons)

```bash
npm install react@18.3.1 react-dom@18.3.1 next@15.1.6 lucide-react@0.441.0 --legacy-peer-deps
```

#### 3-2. DevDependencies 설치 (TypeScript, Tailwind, ESLint)

```bash
npm install -D typescript@5.6.3 tailwindcss@3.4.14 postcss autoprefixer @types/react@18.3.1 @types/react-dom@18.3.1 eslint-config-next@15.1.6 --legacy-peer-deps
```

### 4. Shadcn/ui 초기화

React 18 및 Tailwind 3 환경에 맞춰 UI 컴포넌트 라이브러리를 초기화합니다.

```bash
npx shadcn@latest init
```

Configuration (권장):
- Which style would you like to use? › **New York**
- Which color would you like to use as base color? › **Slate** (또는 선호하는 색상)
- Do you want to use CSS variables for colors? › **Yes**

### 5. F&B 특화 UI/UX 패키지 설치 (The "Wow" Factor)

방문자에게 시각적 몰입감을 주고, 앱 같은 경험을 제공하기 위한 핵심 라이브러리들입니다.

#### 5-1. 애니메이션 & 스크롤

```bash
npm install framer-motion embla-carousel-react lenis @studio-freight/react-lenis --legacy-peer-deps
```

#### 5-2. 음식 사진 갤러리 (모달 확대)

```bash
npm install yet-another-react-lightbox
```

#### 5-3. 모바일 친화적 인터페이스 (하단 드로어, 토스트)

```bash
npm install vaul sonner
```

#### 5-4. 추가 UI 유틸리티 (권장)

```bash
npm install react-wrap-balancer react-hot-toast --legacy-peer-deps
```

**패키지 설명:**
- **Lenis**: 웹사이트 스크롤을 고급 승용차처럼 부드럽게 구현
- **Vaul**: 모바일에서 메뉴/예약창을 네이티브 앱처럼 하단에서 올라오게 구현
- **Sonner**: "예약이 완료되었습니다" 등의 메시지를 아름답게 표시
- **Yet-another-react-lightbox**: 음식 사진을 우아하게 확대하는 갤러리
- **Framer Motion**: 복잡한 애니메이션 및 페이지 전환 효과
- **Embla Carousel**: 터치 친화적인 캐러셀 슬라이더

### 6. 기능성 유틸리티 설치 (Functionality)

예약 시스템, 지도, 데이터 처리를 위한 필수 도구들입니다.

#### 6-1. 폼 관리 및 유효성 검사 (예약 폼)

```bash
npm install react-hook-form zod @hookform/resolvers
```

#### 6-2. 유틸리티 (클래스 병합, 날짜 처리)

```bash
npm install clsx tailwind-merge date-fns
```

#### 6-3. 구글 맵 통합

```bash
npm install @vis.gl/react-google-maps
```

**도구 설명:**
- **Zod**: "전화번호 형식이 맞는지", "인원수가 0명은 아닌지" 등을 철저하게 검증
- **React Hook Form**: 성능 최적화된 폼 관리
- **Clsx & Tailwind-merge**: 조건부 스타일링 충돌 방지
- **Date-fns**: 예약 날짜/시간 처리

### ✅ 설치 완료 확인 (package.json)

설치 완료 후 `package.json` 파일이 아래 버전과 일치하는지 확인합니다.

```json
{
  "dependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "next": "15.1.6",
    "lucide-react": "0.441.0",
    "framer-motion": "^11.x",
    "embla-carousel-react": "^8.x",
    "lenis": "^1.x",
    "@studio-freight/react-lenis": "^0.x",
    "yet-another-react-lightbox": "^3.x",
    "vaul": "^1.x",
    "sonner": "^1.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "@hookform/resolvers": "^3.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "date-fns": "^3.x",
    "@vis.gl/react-google-maps": "^3.x",
    "tailwindcss-animate": "^1.x",
    "class-variance-authority": "^0.7.x"
  },
  "devDependencies": {
    "typescript": "5.6.3",
    "@types/react": "18.3.1",
    "@types/react-dom": "18.3.1",
    "tailwindcss": "3.4.14",
    "postcss": "^8",
    "autoprefixer": "^10",
    "eslint": "^8",
    "eslint-config-next": "15.1.6"
  },
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom"
  }
}
```

## 📝 중요 참고사항

**Peer Dependency Warning**: npm install 시 Next.js 15는 React 19를 권장한다는 경고가 뜰 수 있으나, 실무 안정성을 위해 React 18을 사용하므로 무시하셔도 됩니다 (`--legacy-peer-deps` 사용).

**Turbopack**: 개발 서버 실행 시 `npm run dev`를 사용하면 내부적으로 `next dev --turbopack`이 자동 실행되어 빠른 개발 환경을 경험할 수 있습니다.


---

## ⚙️ 초기 설정 가이드 (Configuration)
1. Tailwind 설정 (tailwind.config.ts)

기본 폰트와 색상 변수를 CSS Variable과 연결하도록 설정합니다.

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg-main) / <alpha-value>)",
        foreground: "rgb(var(--text-primary) / <alpha-value>)",
        primary: "rgb(var(--brand-primary) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
```

2. CSS 변수 및 전역 스타일 (src/styles/globals.css)

Tailwind 설정과 연결될 CSS 변수들을 정의합니다. (RGB 값으로 관리하면 투명도 조절이 쉬워집니다.)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* 1. 배경 & 기본 컬러 */
    --bg-main: 255 255 255;      /* #FFFFFF */
    --text-primary: 17 24 39;    /* #111827 */

    /* 2. 브랜드 컬러 */
    --brand-primary: 59 130 246; /* #3B82F6 */

    /* 3. 보더 컬러 (shadcn 스타일링에도 사용) */
    --border: 229 231 235;       /* #E5E7EB */
  }

  .dark {
    --bg-main: 13 17 23;         /* #0D1117 */
    --text-primary: 250 250 250; /* #FAFAFA */
    --brand-primary: 212 175 55; /* #D4AF37 (Gold) */
    --border: 48 54 61;          /* #30363D */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

3. Smooth Scroll 설정 (src/components/providers/smooth-scroll.tsx)

Lenis를 전역으로 적용하기 위한 컴포넌트입니다.

```typescript
"use client";
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}
```

4. 유틸리티 함수 설정 (src/lib/utils.ts)

조건부 클래스 병합을 위한 헬퍼 함수입니다.

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

5. 환경 변수 설정 (.env.local)

구글 맵, API 키 등을 관리합니다.

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
NEXT_PUBLIC_RESTAURANT_NAME=My Restaurant
NEXT_PUBLIC_RESTAURANT_PHONE=+82-10-1234-5678
NEXT_PUBLIC_RESTAURANT_ADDRESS=Seoul, South Korea
```

6. Next.js 설정 (next.config.ts)

외부 이미지 허용 및 React 엄격 모드 등 런타임 설정을 관리합니다.

> 참고: `remotePatterns`는 보안상 가능한 한 구체적으로 지정하는 것을 권장합니다.

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
```

## 📂 권장 폴더 구조 (Recommended Architecture)

```plaintext
src/
├── app/
│   ├── layout.tsx                    # Providers(SmoothScroll 등) 감싸기
│   ├── page.tsx                      # 메인 페이지 (랜딩)
│   ├── menu/
│   │   └── page.tsx                  # 메뉴 페이지
│   ├── locations/
│   │   └── page.tsx                  # 오시는 길 (구글 맵)
│   ├── reservations/
│   │   └── page.tsx                  # 예약 페이지
│   └── api/
│       ├── reservations/             # 예약 API
│       └── contact/                  # 연락처 API
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx                  # 히어로 섹션 (배경 이미지)
│   │   ├── menu-showcase.tsx          # 메뉴 갤러리 (Lightbox)
│   │   ├── bento-grid.tsx             # 2x2 그리드 레이아웃
│   │   ├── reservation-form.tsx       # 예약 폼 (React Hook Form + Zod)
│   │   └── testimonials.tsx           # 고객 리뷰
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── modal.tsx
│   │   └── carousel.tsx               # Embla Carousel 래퍼
│   └── providers/
│       ├── smooth-scroll.tsx          # Lenis
│       ├── toaster.tsx                # Sonner Toast
│       └── theme-provider.tsx         # 다크 모드 (선택사항)
├── config/
│   ├── site.ts                        # ⭐ 중앙 설정 (가장 중요)
│   └── navigation.ts                  # 네비게이션 링크 구조
├── lib/
│   ├── utils.ts                       # cn() 클래스 병합 함수
│   ├── form-schemas.ts                # Zod 스키마 (예약 폼 검증)
│   └── api-client.ts                  # API 요청 유틸
├── hooks/
│   └── use-reservation.ts             # 예약 관련 커스텀 훅
├── types/
│   └── index.ts                       # 공용 TypeScript 타입
└── styles/
    └── globals.css                    # CSS 변수 정의
```

## 🎯 config/site.ts - 중앙 설정 파일 (Most Important)

모든 텍스트, 링크, 설정을 한 곳에서 관리합니다. 나중에 CMS로 쉽게 마이그레이션할 수 있습니다.

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "My Restaurant",
  description: "Premium Korean BBQ Experience",
  
  // 연락처
  contact: {
    phone: "+82-10-1234-5678",
    email: "info@myrestaurant.com",
    address: "Seoul, South Korea",
    mapEmbedUrl: "https://goo.gl/maps/...",
  },
  
  // 영업 시간
  hours: {
    weekday: "11:00 - 23:00",
    weekend: "11:00 - 00:00",
    closed: "Monday",
  },
  
  // 메뉴 카테고리
  menu: [
    { id: "bbq", name: "BBQ", category: "Main" },
    { id: "side", name: "Side Dishes", category: "Main" },
    { id: "drinks", name: "Drinks", category: "Beverage" },
  ],
  
  // 내비게이션
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Menu", href: "/menu" },
    { title: "Locations", href: "/locations" },
    { title: "Reservations", href: "/reservations" },
  ],
};
```

## ✨ 필수 구현 체크리스트

- [ ] 프로젝트 생성 및 버전 고정 완료
- [ ] 모든 패키지 설치 완료
- [ ] Tailwind config 설정
- [ ] CSS 변수 정의 완료
- [ ] Providers 구성 (SmoothScroll, Toaster 등)
- [ ] 폴더 구조 생성
- [ ] config/site.ts 작성
- [ ] 기본 Layout 컴포넌트 구성
- [ ] 메인 페이지 (Hero + Menu Showcase + Reservation Form)
- [ ] 예약 폼 검증 (Zod + React Hook Form)
- [ ] 모바일 반응형 테스트

## 🚀 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000`에서 개발 서버가 실행됩니다.