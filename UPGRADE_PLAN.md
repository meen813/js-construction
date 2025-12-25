# HJS Construction 프로젝트 업그레이드 플랜

**목표**: js-construction 프로젝트를 Next.js 15 + React 18로 업그레이드하여 hjsconstruction 폴더에 새로 구축

**현재 상태**:
- js-construction: Next.js 14.2.33, React 18, TypeScript 5.9.3
- hjsconstruction: 이미지 파일들이 `public/` 폴더에 준비됨

**목표 상태**:
- Next.js 15.1.6
- React 18.3.1
- TypeScript 5.6.3
- 최신 보안 및 성능 최적화

---

## 📋 단계별 실행 플랜

### Phase 1: 프로젝트 초기 설정 (30분)

#### 1.1 Next.js 15 프로젝트 생성
```bash
cd hjsconstruction
npx create-next-app@15.1.6 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**설정 옵션**:
- TypeScript: ✅ Yes
- ESLint: ✅ Yes
- Tailwind CSS: ✅ Yes
- `src/` directory: ✅ Yes
- App Router: ✅ Yes
- Import alias: ✅ Yes

#### 1.2 핵심 의존성 버전 고정
```bash
npm install react@18.3.1 react-dom@18.3.1 next@15.1.6 --legacy-peer-deps
npm install -D typescript@5.6.3 @types/react@18.3.1 @types/react-dom@18.3.1 eslint-config-next@15.1.6 --legacy-peer-deps
```

#### 1.3 필수 패키지 설치
```bash
# 기존 프로젝트에서 사용하던 패키지들
npm install clsx tailwind-merge --legacy-peer-deps
npm install @tailwindcss/aspect-ratio --legacy-peer-deps
npm install next-sitemap nodemailer dotenv --legacy-peer-deps
npm install swr uuid --legacy-peer-deps

# 타입 정의
npm install -D @types/nodemailer @types/uuid --legacy-peer-deps
```

---

### Phase 2: 프로젝트 구조 설정 (1시간)

#### 2.1 폴더 구조 생성
```
hjsconstruction/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── api/
│   │   │   └── send-email/
│   │   │       └── route.ts
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   └── [기타 페이지들]
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectPreview.tsx
│   │   ├── Introduction.tsx
│   │   ├── ScrollableBar.tsx
│   │   └── StructuredData.tsx
│   ├── projects/
│   │   ├── data.ts
│   │   └── types.ts
│   └── lib/
│       ├── utils.ts
│       └── env.ts
├── public/ (이미 존재)
├── docs/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

#### 2.2 설정 파일 생성

**next.config.ts**:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'post-images-jsconstruction.s3.us-west-1.amazonaws.com',
        pathname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

**tailwind.config.ts**:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... 기존 색상 유지
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
```

---

### Phase 3: 데이터 및 타입 마이그레이션 (1시간)

#### 3.1 프로젝트 타입 정의
- `src/projects/types.ts` 복사 및 검증
- TypeScript strict mode 호환성 확인

#### 3.2 프로젝트 데이터 마이그레이션
- `src/projects/data.ts` 복사
- 이미지 경로가 `public/` 폴더 구조와 일치하는지 확인
- 모든 이미지 import 경로 검증

**주의사항**:
- 이미지 경로는 `../../public/...` 형식 유지
- 또는 Next.js Image 컴포넌트의 `src` prop에 직접 경로 사용

---

### Phase 4: 컴포넌트 마이그레이션 (2-3시간)

#### 4.1 레이아웃 컴포넌트
1. **Header.tsx**
   - Next.js 15 호환성 확인
   - Link 컴포넌트 사용 확인

2. **Footer.tsx**
   - 메타데이터 및 링크 검증

3. **layout.tsx**
   - 메타데이터 설정
   - 폰트 설정 (Open Sans)
   - 접근성 기능 유지

#### 4.2 페이지 컴포넌트
1. **page.tsx (홈)**
   - Hero 섹션 (비디오 배경)
   - ProjectPreview
   - Introduction
   - ContactForm

2. **projects/page.tsx**
   - ProjectGrid 컴포넌트 사용

3. **projects/[id]/page.tsx**
   - 동적 라우팅
   - 이미지 갤러리

4. **contact/page.tsx**
   - ContactForm 통합

#### 4.3 기능 컴포넌트
1. **ContactForm.tsx**
   - React Hook Form (선택사항 - 현재는 순수 React)
   - Validation 로직
   - 에러 처리

2. **ProjectGrid.tsx**
   - 필터링 기능
   - 카테고리별 그룹화

3. **StructuredData.tsx**
   - JSON-LD 스키마
   - SEO 최적화

---

### Phase 5: API 라우트 마이그레이션 (1시간)

#### 5.1 이메일 전송 API
- `src/app/api/send-email/route.ts`
- Rate limiting 로직
- Input validation
- Nodemailer 설정

**개선 사항**:
- Rate limiting을 Redis 또는 Upstash로 업그레이드 (선택사항)
- 환경 변수 검증 강화

---

### Phase 6: 스타일링 및 CSS (1시간)

#### 6.1 글로벌 CSS
- `src/app/globals.css` 설정
- Tailwind 기본 스타일
- 커스텀 유틸리티 클래스
- 애니메이션 정의

#### 6.2 반응형 디자인
- 모바일 우선 접근
- Breakpoint 테스트
- 터치 인터랙션 확인

---

### Phase 7: 환경 변수 및 설정 (30분)

#### 7.1 .env.local 생성
```bash
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
COMPANY_EMAIL=company@example.com

# AWS Configuration (Optional)
AWS_REGION=us-west-1
BUCKET_NAME=your-bucket-name

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.hjsconstruction.com
```

#### 7.2 환경 변수 검증
- `src/lib/env.ts` 생성
- 빌드 타임 검증 추가 (Zod 사용 권장)

---

### Phase 8: SEO 및 최적화 (1시간)

#### 8.1 Sitemap 설정
- `next-sitemap.config.mjs` 생성
- `package.json`에 postbuild 스크립트 추가

#### 8.2 메타데이터
- 각 페이지별 메타데이터 설정
- Open Graph 이미지
- Twitter Cards

#### 8.3 이미지 최적화
- Next.js Image 컴포넌트 사용 확인
- Lazy loading
- Blur placeholder

---

### Phase 9: 테스트 및 검증 (1-2시간)

#### 9.1 기능 테스트
- [ ] 홈페이지 로드
- [ ] 프로젝트 목록 표시
- [ ] 프로젝트 상세 페이지
- [ ] 문의 폼 제출
- [ ] 이메일 전송
- [ ] 필터링 기능
- [ ] 반응형 디자인

#### 9.2 성능 테스트
- [ ] Lighthouse 점수 확인
- [ ] 이미지 최적화 확인
- [ ] 번들 크기 확인

#### 9.3 접근성 테스트
- [ ] 키보드 네비게이션
- [ ] Screen reader 호환성
- [ ] 색상 대비
- [ ] Reduced motion 지원

---

### Phase 10: 배포 준비 (30분)

#### 10.1 빌드 테스트
```bash
npm run build
npm run start
```

#### 10.2 문서 업데이트
- README.md 작성
- 배포 가이드 작성
- 환경 변수 설정 가이드

---

## 🔄 마이그레이션 체크리스트

### 필수 작업
- [ ] Phase 1: 프로젝트 초기 설정
- [ ] Phase 2: 프로젝트 구조 설정
- [ ] Phase 3: 데이터 및 타입 마이그레이션
- [ ] Phase 4: 컴포넌트 마이그레이션
- [ ] Phase 5: API 라우트 마이그레이션
- [ ] Phase 6: 스타일링 및 CSS
- [ ] Phase 7: 환경 변수 및 설정
- [ ] Phase 8: SEO 및 최적화
- [ ] Phase 9: 테스트 및 검증
- [ ] Phase 10: 배포 준비

### 선택적 개선 사항
- [ ] Rate limiting을 Redis/Upstash로 업그레이드
- [ ] React Hook Form + Zod로 폼 관리 개선
- [ ] Framer Motion 추가 (애니메이션 강화)
- [ ] 에러 로깅 시스템 통합 (Sentry)
- [ ] 테스트 코드 작성 (Jest + React Testing Library)

---

## ⚠️ 주의사항

### 1. 이미지 경로
- `public/` 폴더의 이미지 경로가 올바른지 확인
- Next.js Image 컴포넌트 사용 시 경로는 `/image.jpg` 형식

### 2. 타입 호환성
- Next.js 15의 타입 변경사항 확인
- React 18.3.1과의 호환성 확인

### 3. Breaking Changes
- Next.js 14 → 15 마이그레이션 가이드 참고
- App Router 변경사항 확인

### 4. 의존성 충돌
- `--legacy-peer-deps` 플래그 사용
- 패키지 버전 충돌 시 해결 방법 문서화

---

## 📊 예상 소요 시간

| Phase | 예상 시간 | 누적 시간 |
|-------|----------|----------|
| Phase 1 | 30분 | 30분 |
| Phase 2 | 1시간 | 1.5시간 |
| Phase 3 | 1시간 | 2.5시간 |
| Phase 4 | 2-3시간 | 4.5-5.5시간 |
| Phase 5 | 1시간 | 5.5-6.5시간 |
| Phase 6 | 1시간 | 6.5-7.5시간 |
| Phase 7 | 30분 | 7-8시간 |
| Phase 8 | 1시간 | 8-9시간 |
| Phase 9 | 1-2시간 | 9-11시간 |
| Phase 10 | 30분 | 9.5-11.5시간 |

**총 예상 시간**: **10-12시간** (선택적 개선 제외)

---

## 🚀 빠른 시작 명령어

```bash
# 1. 프로젝트 생성
cd hjsconstruction
npx create-next-app@15.1.6 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. 의존성 설치
npm install react@18.3.1 react-dom@18.3.1 next@15.1.6 --legacy-peer-deps
npm install -D typescript@5.6.3 @types/react@18.3.1 @types/react-dom@18.3.1 eslint-config-next@15.1.6 --legacy-peer-deps

# 3. 필수 패키지 설치
npm install clsx tailwind-merge @tailwindcss/aspect-ratio next-sitemap nodemailer dotenv swr uuid --legacy-peer-deps
npm install -D @types/nodemailer @types/uuid --legacy-peer-deps

# 4. 개발 서버 실행
npm run dev
```

---

## 📝 다음 단계

이 플랜을 따라 단계별로 진행하면 됩니다. 각 Phase가 완료되면 체크리스트를 업데이트하고, 문제가 발생하면 문서화하여 해결 방법을 기록하세요.

**시작할까요?** Phase 1부터 순차적으로 진행하겠습니다.

---

**작성일**: 2025년 1월  
**버전**: 1.0

