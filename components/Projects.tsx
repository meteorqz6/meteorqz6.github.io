import Image from "next/image";
import FadeIn from "@/components/FadeIn";

type Project = {
  title: string;
  desc: string;
  period: string;
  role: string;
  tech: string[];
  points: string[];
  image: string;
  demo?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Moyeorak",
    desc: "모임 일정 및 장소 조율 통합 서비스",
    period: "2026.01 - 2026.02",
    role: "프론트엔드 개발 · 디자이너 2, FE 2, BE 2",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "TanStack Query", "React Hook Form", "Zod", "Storybook", "Vercel"],
    points: [
      "드래그로 시간 슬롯을 선택·해제하는 멀티 날짜 타임테이블 구현",
      "참여자 수를 슬롯 opacity로 표현한 히트맵으로 최적 일정 시각화",
      "출발지 기반 중간지점 역·장소 추천 및 대중교통·도보 경로 제공",
      "링크 공유만으로 참여 가능한 비회원 초대 플로우 구현",
    ],
    image: "/example.png",
    demo: "https://moyeorak.site/",
  },
  {
    title: "Moyeorak Design System",
    desc: "Moyeorak 서비스 기반 Storybook 컴포넌트 라이브러리",
    period: "2026.04 - 진행 중",
    role: "프론트엔드 개발 · 디자이너 1, FE 1",
    tech: [
      "React",
      "TypeScript",
      "Panda CSS",
      "Radix UI",
      "Storybook",
      "Chromatic",
    ],
    points: [
      "디자이너와 협업하여 Moyeorak 컴포넌트를 독립 라이브러리로 구축",
      "Chromatic으로 컴포넌트 문서화 및 시각적 회귀 테스트 운영",
    ],
    image: "/moyeorak-design-system.png",
    demo: "https://main--69cf7bceba8267c1b5d86ba6.chromatic.com/",
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
              className="flex flex-col lg:flex-row gap-8 p-8 border-2 border-black rounded-[2rem] transition-all duration-200 hover:scale-[1.01] hover:shadow-xl"
            >
              {/* 이미지 */}
              <div className="lg:w-2/5 flex-shrink-0">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* 텍스트 */}
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap pt-1">{p.period}</span>
                </div>

                <p className="text-xs text-gray-400">{p.role}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="flex flex-col gap-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-sm text-gray-600 pl-3 border-l-2 border-gray-200">
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-auto pt-2">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      className="flex items-center gap-2 text-sm px-5 py-2 rounded-full border-2 border-black font-medium transition-all duration-200 hover:bg-black hover:text-white"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                      Live Demo
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      className="flex items-center gap-2 text-sm px-5 py-2 rounded-full border-2 border-black font-medium transition-all duration-200 hover:bg-black hover:text-white"
                    >
                      <i className="fa-brands fa-github text-sm" />
                      Github Repo
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
