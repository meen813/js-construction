# 포트폴리오 감사 로그 (2026-07)

`OneDrive/Desktop/Construction Projects` 원본 자료와 `src/projects/data.ts`의 게시 내용을 대조한 기록입니다.
목적은 **웹사이트에 게시된 사실이 실제 인허가·시공 문서와 일치하는지 검증**하는 것이며,
이후 프로젝트를 추가하거나 문구를 수정할 때 같은 절차를 반복할 수 있도록 근거와 방법을 남깁니다.

---

## 1. 원본 폴더 ↔ 게시 프로젝트 매핑

| 원본 폴더 | 게시 항목 | 상태 |
| :--- | :--- | :--- |
| `5501 Orangethorpe Ave` | #1 La Palma Mall Renovation | 검증 후 수정 |
| `9376 El Arbol Ave ADU` | #2 Fountain Valley ADU | 검증 후 수정 |
| `1121-1145 Artesia` / ada 2025 | #6 ADA Improvement | 일치, 수정 없음 |
| `1121-1145 Artesia` / trash enclosure | #13 Trash Enclosure | 검증 후 수정 |
| `1121-1145 Artesia` / **paint 2025** | #14 Exterior Repaint | **신규 추가** |
| `350 University Ave San Diego` | #12 Asphalt Replacement | 검증 후 수정 |
| — | #4 Mall Entrance Remodel | **삭제** (사진 1장, 자료 없음) |
| — | #5 / #10 / #11 | 대응 폴더 없음, 모순 없어 유지 |
| `2218 S Garey Ave Pomona` | 없음 | 보류 (시공 사진 미확인) |
| `1367 Redondo Beach Bl Gardena` | 없음 | 보류 (하수 인입관 보수, 규모 작음) |
| `2829 Crenshaw` | 없음 | 제외 (입찰 단계) |
| `cerritos mall proposal` | 없음 | 제외 (수주 전 제안서) |

---

## 2. 프로젝트별 검증 결과

### #1 La Palma — 시공 범위가 절반 이상 누락돼 있었음

**근거**: `5501_ORANGETHORPE_AVE__LP__FULL_SET__REV_3__REVISED__11_27_25_stamped_approved_Thu_Dec_18_2025` (35시트, 2025-12-18 승인)

시트 T1.0의 자체 스코프 기재:
> FRONT FACADE RENOVATION OF 5,010 SF ENTIRE BUILDING. **PARKING LOT RENOVATION.**

기존 게시본은 파사드 공사만 서술하고 **주차장 개조를 통째로 누락**했습니다. 도면에서 확인된 내용:

| 항목 | 내용 | 시트 |
| :--- | :--- | :--- |
| 건물 | 5,010 SF | T1.0 |
| 테넌트 분할 | 769 / 1,277 / 1,301 SF 3개소 (4번째 2,360 SF는 범위 외) | A1.0 |
| 스토어프론트 | 신규 3개소, 알루미늄 + 1/2" 강화유리, 기존 높이 맞춤 | A1.0 |
| 주차장 | 기존 27면 → 29면 + 컴팩트 8면, 주차면적 15,206 SF, 신규 진입로 | LP-1 |
| ADA | 기존 램프 철거, 신규 콘크리트 보도 + ADA path of travel | LP-1 |
| 전기 | 신규 200A 패널 | A1.0 / E-101 |
| 파사드 | 캔틸레버 금속 어닝 (전용 상세) | A1.1 |
| 조경 | 신규 플랜터 3개소, MWELO/ETAF 워크시트, 관수 전용 1" 서브미터 | LP-1 ~ LI-2 |
| 구조 | Simpson SET-XP 에폭시 앵커, 강재 현장용접, f'c > 2,500psi — 특별검사 | T1.0 / S-1~S-4 |
| 설계 | Joon S. Park (C20077), P/A Architects / 건축주 William Um | T1.0 |
| 코드 | 2022 CBC·CPC·CMC·CEC·CFC + CCR Title 19 + 2022 Energy | T1.0 |

> **주의**: 기존 문구의 "2개 → 3개 확장"은 삭제했습니다.
> 도면은 신규 3개소만 기재하고 **이전 개수를 어디에도 적지 않았습니다.**

### #2 Fountain Valley ADU — 면적 표기 오류

**근거**: `9376ElArbolAve_6th_FullSet.pdf` (20시트) 사이트플랜, `2024-440_PCF BB`, `2024-440 Final Fees`

| 항목 | 면적 |
| :--- | :--- |
| (N) PROPOSED ATTACHED ADU | **793 S.F.** |
| (N) FAMILY ROOM ADDITION TO (E) DWELLING | **384 S.F.** |
| (E) 1층 단독주택 | 1,821 S.F. |
| (E) 차고 | 434 S.F. |
| 대지 | 7,201 S.F. (R1, Tract 4763) |

게시본의 `1,200 sq ft`는 **793 + 384 = 1,177 S.F.의 반올림값**으로 보이나, ADU 단독 면적처럼 표기돼 있었습니다.
두 수치를 모두 명시하는 것으로 수정했습니다.

기타 확인: Type V-B, 허가 2024-440, 구조 플랜체크 True North Compliance(2024-08-06 코멘트 없이 승인),
설계 Basis & Associates / Basis Engineering, ADU 전용 전기 계량기, 히트펌프,
기존 4" 하수 연결 유지, 파크웨이 가로수 신규 식재(FV STD 607), 우측통행로 점용허가 별도 취득.

### #12 San Diego — 자산 성격 오기

사진(`6.jpg`)에 페이버 포설 장면이 있어 전면 재포장 자체는 실제 시공으로 확인됩니다.
다만 배경이 **유료 공영주차 표지판 + 오피스 빌딩**이라 `commercial mall parking lot`과 맞지 않았습니다.
소유주 확인 결과 **상업용 몰이되 유료 주차장으로 운영 중**이라 그에 맞게 수정했습니다.
면적 약 7,400 sq ft는 `2026 Parking lot re-stripe/GPT.pdf`의 수치이며 소유주가 확인했습니다.

### #13 Trash Enclosure

`26-0318 TRASH ENCLOSURE - REVISED_v4.pdf`, C&D WMP 신고서(BLDC-25-00550), 소방 견적 3061MC로 검증했습니다.
기존 문구의 `"trench drain ... runoff"`는 오류였습니다 — 도면상 바닥 채널드레인은 우수 배수가 아니라
**self-priming trap을 거쳐 하수관(sanitary sewer)에 직결**입니다.
동일 부지 상호 언급은 하지 않기로 하여 `"our third project at this property"` 문구도 제거했습니다.

### #14 Exterior Repaint — 신규 추가

**Paint Schedule 도면**에 영업 중 테넌트를 피한 존별 공정표(10/16~11/22/2025)가 기록돼 있습니다.
실사 사진 촬영일(2025-07-08)에 이미 도장이 끝난 동이 있어, **두 차례로 나눠 시공**된 것으로 확인했습니다.

> ⚠️ **사진 분류 주의.** `job site pics` 폴더의 `fedex copy.jpg` / `tanning.jpg` / `tanning copy.jpg` /
> `Goodwill copy.jpg`는 현장 사진이 아니라 **실사를 포토샵으로 덧칠한 색상 시안**입니다.
> `fedex copy.jpg`는 `KakaoTalk_..._02.jpg`와 차량 위치·구름까지 동일합니다.
> 게시에서 전부 제외했습니다. 실사 4장 중 **완공 사진은 `_03` 한 장뿐**이고 나머지 3장은 시공 전입니다.

#### 완공 사진 보강 및 The Butchery 동 제외 (2026-07-30)

`OneDrive/Documents/카카오톡 받은 파일/construction projects/Manhattan beach mall repaint` 폴더로
완공 실사 7장을 추가 확보했습니다(전부 동일 우천일 촬영). Paint Schedule 도면의 존 구획과 대조한 결과:

| 존 | 기간 | 대상 동 |
| :--- | :--- | :--- |
| Red | 10/16~10/18 | UCATAN / Pure Bean 동 (TANNING·CLEANERS·dr LASER·NOOR NAIL·pure BEAN) |
| Blue | 10/20~11/05 | 서측 입면 (Afterburn Fitness 측) |
| Purple | 11/06~11/18 | Goodwill / Reset Bodyworks / Pita & Basil 2층 동 |
| Yellow | 11/19~11/22 | FedEx Office / Rush My Passport 동 |

> ⚠️ **The Butchery 동은 어느 존에도 없습니다.** 해당 동은 테넌트 브랜드가 자체 시공한 것으로
> 소유주가 확인했고, 도면상 시공 범위와도 일치합니다. 기존 대표 이미지였던 `after-butchery.jpg`
> (구 `_03`)를 **삭제**했고, The Butchery / Fatburger가 찍힌 신규 사진 3장(`_01`·`_02`·`_03`)도
> 같은 이유로 게시에서 제외했습니다.

게시한 완공 사진 4장은 모두 존 내부 동입니다 — `after-goodwill-building`·`after-goodwill-wide`
(Purple), `after-storefronts`(Red), `after-pure-bean-rear`(Red+Purple).
`after-storefronts`는 기존 `before-storefronts`와 **피사체·구도·해상도(2992×2992)가 동일**해
`comparisonImages` Before/After 분할 뷰로 사용했습니다.

### #4 Mall Entrance Remodel — 삭제

사진 1장으로는 상세 페이지를 구성할 수 없어 내렸습니다.
`/projects/4`가 이미 제출된 사이트맵에 포함돼 있어 [next.config.ts](../next.config.ts)에
`/projects → 301 permanent redirect`를 추가했습니다. 이미지 파일은 `public/Mall Office Lobby/`에 남겨뒀습니다.

---

## 3. 대형 PDF 확인 방법

승인 도면 세트는 33~39MB로 이미지 렌더링 기반 열람 한도(20MB)를 넘습니다.
**텍스트만 추출하면 크기 제한과 무관하게 읽을 수 있습니다.**

```bash
python -c "
from pypdf import PdfReader
r = PdfReader(r'<경로>')
print('pages:', len(r.pages))
for i, pg in enumerate(r.pages):
    t = (pg.extract_text() or '').upper()
    if 'PROJECT DESCRIPTION' in t or 'PARKING' in t:
        print(f'p{i+1}')
"
```

시트 인덱스와 프로젝트 데이터 블록은 대개 **1페이지(T1.0 / 타이틀 시트)** 에 있습니다.
스코프·면적·코드 기준을 가장 빨리 확정할 수 있는 지점입니다.

---

## 4. 미해결 항목

| 항목 | 내용 |
| :--- | :--- |
| ADU 수도 계량기 | 기존 구경이 도면(5/8")과 부담금 내역서(3/4")에서 불일치. 현재 구경 표기 없이 "1인치로 승압"만 기재 |
| ~~#14 완공 사진~~ | ~~완공 실사가 1장뿐이라 갤러리가 얇음~~ → **해소 (2026-07-30)**. 완공 4장 + 시공 전 3장 + Before/After 분할 뷰 |
| Pomona (2218 S Garey) | 존 3개 3일 순차 시공 공정표는 있으나 시공 사진 미확인. 사진 확보 시 추가 검토 |
| Gardena (1367 Redondo Beach) | 시 점용허가 하수 인입관 보수(2025-03). 단독 항목으로는 규모가 작아 보류 |

---

## 5. 반영 이력

| PR | 내용 |
| :--- | :--- |
| #1 | #13 트래시 인클로저 상세 보강, `Project.specs` 옵셔널 필드 신설 |
| #2 | 전체 감사 — #14 추가, #4 삭제 + 리다이렉트, #1/#2/#12 수정 및 `specs` 확대 |
| #3 | 승인 도면 검증 — #1 La Palma 주차장·ADA 범위 추가, #2 ADU 면적 정정 |
| #4 | 감사 로그 문서 신설. #14 리페인트 갤러리 시공 범위 정정 — The Butchery 동 제외, 완공 사진 4장 추가, `comparisonImages` Before/After 분할 뷰 신설 |
| #6 | 성능 최적화 — 히어로 영상 `faststart` 재인코딩(7.75MB → 1.15MB), 히어로를 서버 컴포넌트로 분리해 LCP를 JS 하이드레이션에서 분리. 홈 초기 페이로드 10.4MB → 1.2MB |

> PR #2는 base가 `enrich-trash-enclosure-details`였고 PR #1이 그보다 먼저 main에 머지되어,
> 커밋 `f660049`가 main에 반영되지 않은 상태였습니다. PR #3이 main 기준이라 함께 포함됩니다.

> PR #6은 포트폴리오 데이터를 바꾸지 않은 인프라 작업이지만, 사이트 반영 이력을 한곳에서
> 추적하기 위해 같은 표에 기록합니다.
