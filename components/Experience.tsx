import FadeIn from "@/components/FadeIn";

type Item = {
  label: string;
  href?: string;
};

type Entry = {
  org: string;
  fullName: string;
  href?: string;
  period: string;
  role: string;
  desc?: string;
  items: Item[];
  current: boolean;
  type?: "activity" | "education";
  icon?: string;
};

const timeline: Entry[] = [
  {
    org: "서울시 민간기업 참여형 매력일자리",
    fullName: "AI 바이브코딩 기반 프론트엔드 실무과정",
    period: "2026.05 - 진행 중",
    role: "",
    items: [
      {
        label: "React 미션 기반 페어 스터디 및 PR 코드 리뷰 진행",
        href: "https://github.com/pair-study",
      },
      { label: "최종 프로젝트 진행 중" },
    ],
    current: true,
    type: "education",
    icon: "fa-solid fa-laptop-code",
  },
  {
    org: "세종대학교",
    fullName: "컴퓨터공학과",
    period: "2021.03 - 2026.02",
    role: "",
    items: [],
    current: false,
    type: "education",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    org: "DND",
    fullName: "사이드 프로젝트 동아리",
    href: "https://dnd.ac/projects/100",
    period: "2026.01 - 2026.02",
    role: "14기 프론트엔드 개발자",
    items: [],
    current: false,
  },
  {
    org: "OSSCA",
    fullName: "오픈소스 컨트리뷰션 아카데미",
    href: "https://www.contribution.ac/19836dcb-0b5f-80bb-bf91-c22dfc5de0b4",
    period: "2025.07 - 2025.11",
    role: "Node.js 팀 리드 멘티",
    items: [
      { label: "팀 내 소통 활성화" },
      { label: "문제 해결 주도 및 스터디 진행" },
      { label: "2025 OSSCA 회고 및 참가 후기 공유 인터뷰 촬영", href: "https://www.youtube.com/watch?v=7AUmrEwx-Xk" },
    ],
    current: false,
  },
  {
    org: "ALOM",
    fullName: "교내 개발 동아리",
    period: "2025.03 - 2025.06",
    role: "React 팀 멘토",
    items: [
      { label: "React 팀 멘티 학습 지원" },
      { label: "코드 리뷰 및 스터디 운영" },
      { label: "Git/GitHub 사용법 지도" },
    ],
    current: false,
  },
  {
    org: "프로그래머스 데브코스",
    fullName: "타입스크립트로 함께하는 웹 풀 사이클 개발 과정 수료",
    period: "2024.08 - 2025.02",
    role: "",
    items: [],
    current: false,
    type: "education",
    icon: "fa-solid fa-laptop-code",
  },
];

export default function Experience() {
  return (
    <section id="timeline" className="min-h-screen px-[12%] py-32">
      <FadeIn>
      <h2 className="text-center text-6xl font-semibold mb-16">Timeline</h2>

      <div className="max-w-2xl mx-auto relative">
        {/* 세로 타임라인 선 */}
        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#009dff] to-[#ff00ff]" />

        <div className="flex flex-col gap-12">
          {timeline.map((item) => (
            <div key={item.org} className="flex gap-8">
              {/* 타임라인 닷 */}
              <div className="flex-shrink-0 relative">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 relative ${item.type === "education" ? "bg-white border-gray-300" : item.current ? "bg-black border-black" : "bg-white border-black"}`}>
                  {item.type === "education"
                    ? <i className={`${item.icon} text-xs text-gray-400`} />
                    : <div className={`w-3 h-3 rounded-full ${item.current ? "bg-white" : "bg-black"}`} />
                  }
                </div>
              </div>

              {/* 컨텐츠 카드 */}
              <div className="flex-1 border-2 border-black rounded-[2rem] p-8 mb-2 transition-all duration-200 hover:scale-[1.01] hover:shadow-xl">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold">
                      {item.org}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#1f8fd1] text-sm font-medium hover:text-[#006ba8]"
                        style={{ position: "static" }}
                      >
                        {item.fullName}
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500">{item.fullName}</span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                {item.role && (
                  <p className="text-sm font-semibold mb-3 text-gray-700">
                    ⸰ {item.role}
                  </p>
                )}

                {item.desc && (
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">{item.desc}</p>
                )}

                {item.items.length > 0 && (
                  <ul className="flex flex-col gap-1.5">
                    {item.items.map((i) => (
                      <li key={i.label} className="text-sm text-gray-600 pl-3 flex items-center gap-2">
                        {i.href ? (
                          <a
                            href={i.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-1 hover:text-[#006ba8] ${
                              i.href.includes("youtube.com")
                                ? "text-red-500 hover:text-red-400"
                                : "text-[#1f8fd1]"
                            }`}
                            style={{ position: "static" }}
                          >
                            <span>— {i.label}</span>
                            <i
                              className={`${
                                i.href.includes("youtube.com")
                                  ? "fa-brands fa-youtube"
                                  : "fa-solid fa-arrow-up-right-from-square"
                              } text-[10px]`}
                            />
                          </a>
                        ) : (
                          <span>— {i.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
