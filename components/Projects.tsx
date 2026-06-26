import Image from "next/image";
import FadeIn from "@/components/FadeIn";

type Project = {
  title: string;
  desc: string;
  period: string;
  role: string;
  tech: string[];
  points: string[];
  image?: string;
  demo?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "모여락(Moyeorak)",
    desc: "모임 일정 및 장소 조율 통합 서비스",
    period: "2026.01 - 2026.03 · 약 2개월",
    role: "팀 프로젝트 6인 · 디자인 2, 백엔드 2, 프론트엔드 2(본인)",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Vercel",
      "Git",
    ],
    points: [
      "모임 생성, 링크 초대, 가능 시간 등록, 일정 확정, 장소 선정까지 이어지는 플로우 구현",
      "참여자들의 일정을 기반으로 가능한 인원이 많은 시간대를 한눈에 확인할 수 있는 투표 결과 화면 구성",
      "TanStack Query, React Hook Form, Zod로 서버 상태, 폼 상태, 유효성 검증 책임을 분리해 안정적인 입력 처리와 데이터 동기화 구조 구현",
    ],
    image: "/moyeorak.png",
    demo: "https://moyeorak.site/",
    repo: "https://github.com/dnd-side-project/dnd-14th-8-frontend",
  },
  {
    title: "모여락 디자인 시스템",
    desc: "@moyeorak/design-system 컴포넌트 라이브러리 구축",
    period: "2026.04 - 진행 중",
    role: "프론트엔드 1(본인) · 디자인 1",
    tech: [
      "React",
      "TypeScript",
      "Panda CSS",
      "Radix UI",
      "Storybook",
      "Chromatic",
    ],
    points: [
      "색상과 타이포그래피를 semantic token으로 구조화하고 Button, Badge, Chip 등 공통 컴포넌트 구현",
      "Storybook으로 컴포넌트 사용 가이드와 예제를 문서화하고 Chromatic 기반 문서화 환경 구성",
      "Panda CSS와 Tailwind를 함께 지원할 수 있는 스타일링 구조 설계",
    ],
    image: "/moyeorak-design-system.png",
    demo: "https://main--69cf7bceba8267c1b5d86ba6.chromatic.com/",
    repo: "https://github.com/meteorqz6/moyeorakui",
  },
  {
    title: "한귤(Hangyul)",
    desc: "AI 한국어 학습 앱 공식 다국어 랜딩 페이지",
    period: "2026.01 - 2026.03 · 약 3개월",
    role: "외주 프로젝트 단독 수행",
    tech: [
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "Framer Motion",
      "next-intl",
      "Playwright",
      "Vercel",
    ],
    points: [
      "한국어와 영어를 지원해 국내외 사용자가 각자의 언어 환경에서 서비스를 탐색할 수 있는 다국어 구조 구현",
      "모바일 반응형 레이아웃을 적용하고 Playwright 기반 검증 환경을 활용",
    ],
    image: "/hangyul.png",
    demo: "https://www.talkhangyul.com/ko/",
    repo: "https://github.com/hangyul-edu/hangyul-web",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-[12%] py-32">
      <FadeIn>
        <h2 className="text-center text-6xl font-semibold mb-12">Projects</h2>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col lg:flex-row lg:items-center gap-8 p-8 border-2 border-black rounded-[2rem] transition-all duration-200 hover:scale-[1.01] hover:shadow-xl"
            >
              {/* 이미지 */}
              {p.image && (
                <div className="lg:w-2/5 flex-shrink-0 aspect-[7/5]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              )}

              {/* 텍스트 */}
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                  </div>
                  <span className="text-xs text-gray-400 sm:whitespace-nowrap pt-1">
                    {p.period}
                  </span>
                </div>

                <p className="text-xs text-gray-400">{p.role}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="flex flex-col gap-1.5">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="text-sm text-gray-600 pl-3 border-l-2 border-gray-200"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-auto pt-2">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-5 py-2 rounded-full border-2 border-black font-medium transition-all duration-200 hover:bg-black hover:text-white"
                    >
                      <i className="fa-brands fa-github text-sm" />
                      Github
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-5 py-2 rounded-full border-2 border-black font-medium transition-all duration-200 hover:bg-black hover:text-white"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
