# Next.js 포트폴리오 마이그레이션

## 목표
기존 HTML/CSS/JS 포트폴리오를 Next.js + Tailwind CSS로 이전하고 GitHub Pages에 자동 배포

## 스택 결정
- **Next.js 15** (App Router + `output: 'export'`로 정적 빌드)
- **Tailwind CSS** (기존 CSS 대체)
- **GitHub Actions** → `gh-pages` 브랜치로 자동 배포

---

## Tasks

- [ ] **1. Next.js 프로젝트 초기화**
  - `npx create-next-app@latest portfolio --typescript --tailwind --app --no-src-dir`
  - `next.config.ts`에 `output: 'export'` 및 `images: { unoptimized: true }` 설정
  - 검증: `npm run build` 성공, `out/` 폴더 생성 확인

- [ ] **2. 기존 에셋 이전**
  - `profile.jpg`, `tistory-dark.svg`, `example.png` → `public/` 폴더로 복사
  - 검증: `npm run dev` 후 이미지 정상 로드 확인

- [ ] **3. 레이아웃 & 공통 컴포넌트 작성**
  - `app/layout.tsx`: font (Pretendard), metadata, Font Awesome CDN
  - `components/Header.tsx`: 네비게이션 + 모바일 메뉴 (햄버거)
  - `components/Footer.tsx`
  - 검증: 헤더/푸터 렌더링, 모바일 메뉴 토글 동작

- [ ] **4. 섹션 컴포넌트 분리**
  - `components/About.tsx`
  - `components/Experience.tsx` (Contributions, Awards, Activities, Education)
  - `components/Projects.tsx` (실제 프로젝트로 교체)
  - `components/Contact.tsx`
  - 검증: 모든 섹션 기존과 동일하게 표시

- [ ] **5. 기존 CSS → Tailwind 변환**
  - 주요 스타일(그라디언트, 호버 효과, 카드, 반응형) Tailwind 클래스로 변환
  - 검증: 데스크탑/모바일 레이아웃 기존 대비 동일 확인

- [ ] **6. GitHub Actions 배포 설정**
  - `.github/workflows/deploy.yml` 작성 (build → `gh-pages` 브랜치 push)
  - GitHub 레포 Settings → Pages → Source: `gh-pages` 브랜치로 변경
  - 검증: `main` push 후 Actions 성공, `meteorqz6.github.io` 접속 확인

---

## Done When
- [ ] `meteorqz6.github.io`에서 Next.js 빌드된 포트폴리오 정상 접속
- [ ] 모바일 반응형 정상 동작
- [ ] `main` 브랜치 push 시 자동 배포

---

## 참고
- 현재 `main` 브랜치의 HTML 파일은 마이그레이션 완료 전까지 유지
- GitHub Actions가 `gh-pages`에만 빌드 결과를 올리므로 기존 코드는 보존됨
