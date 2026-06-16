import FadeIn from "@/components/FadeIn";

type RegularAward = {
  title: string;
  date: string;
  desc?: string;
};

type ProjectGroup = {
  desc: string;
  subItems: { title: string; date: string }[];
};

type AwardItem = RegularAward | ProjectGroup;

const awards: { org: string; items: AwardItem[] }[] = [
  {
    org: "정보통신산업진흥원",
    items: [
      { title: "2025년 오픈소스 컨트리뷰션아카데미 최우수상", date: "2025.12.05", desc: "Node.js 팀 리드 멘티로 활동하며 7건의 PR을 기여했습니다. 팀 운영을 주도해 프로젝트 성과를 이끌었습니다." },
    ],
  },
  {
    org: "세종대학교",
    items: [
      { title: "제 12회 SW·AI 해커톤 장려상", date: "2025.06.26", desc: "교내 트랙제 활성화를 위한 AI 맞춤형 학업 설계 서비스 '마이트랙'을 개발했습니다." },
      {
        desc: "취약 음소 분석과 시각적 피드백 기반 한국어 발음 학습 서비스 '발밤발밤'을 개발했습니다.",
        subItems: [
          { title: "제 17회 창의설계 경진대회 대상", date: "2024.06.14" },
          { title: "제 1회 연합 학술제 본선 우수상", date: "2024.06.24" },
        ],
      },
      { title: "제 8회 SW코딩경시대회 장려상", date: "2021.11.11" },
    ],
  },
];

const certificates = [
  { name: "정보처리기사", date: "2025.12.24" },
  { name: "SQL 개발자(SQLD)", date: "2024.09.20" },
  { name: "데이터 분석 준전문가(ADsP)", date: "2024.09.06" },
];

const languages = [{ name: "TOEIC Speaking IM3", date: "2025.03.22" }];

function Card({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 border-black rounded-[2rem] p-8 flex flex-col gap-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex items-center gap-3">
        <i className={`${icon} text-xl`} />
        <span className="text-xl font-semibold bg-gradient-to-r from-[#009dff] to-[#ff00ff] bg-clip-text text-transparent">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function Background() {
  return (
    <section id="awards" className="min-h-screen px-[12%] py-32">
      <FadeIn>
        <h2 className="text-center text-6xl font-semibold mb-16">
          Awards & Certificates
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card icon="fa-solid fa-trophy" label="Awards">
            <div className="flex flex-col gap-5">
              {awards.map((group) => (
                <div key={group.org}>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{group.org}</p>
                  <ul className="flex flex-col gap-3">
                    {group.items.map((a, i) =>
                      "subItems" in a ? (
                        <li key={i} className="flex flex-col gap-1.5">
                          <div className="pl-3 border-l-2 border-gray-300 flex flex-col gap-1.5">
                            {a.subItems.map((sub) => (
                              <div key={sub.title} className="flex items-baseline justify-between gap-2">
                                <span className="text-sm font-semibold">{sub.title}</span>
                                <span className="text-xs text-gray-400 whitespace-nowrap">{sub.date}</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-gray-600 pl-3">{a.desc}</p>
                        </li>
                      ) : (
                        <li key={a.title} className="flex flex-col gap-0.5">
                          <div className="flex items-baseline justify-between gap-2 pl-3 border-l-2 border-gray-300">
                            <span className="text-sm font-semibold">{a.title}</span>
                            <span className="text-xs text-gray-400 whitespace-nowrap">{a.date}</span>
                          </div>
                          {a.desc && <p className="text-xs text-gray-600 mt-0.5 pl-3">{a.desc}</p>}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card icon="fa-solid fa-certificate" label="Certificates">
            <ul className="flex flex-col gap-3">
              {certificates.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-2 pl-3 border-l-2 border-gray-300">
                  <span className="text-sm font-semibold">{c.name}</span>
                  {c.date && <span className="text-xs text-gray-400 whitespace-nowrap">{c.date}</span>}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">
                Language
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <ul className="flex flex-col gap-3">
              {languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-2 pl-3 border-l-2 border-gray-300">
                  <span className="text-sm font-semibold">{l.name}</span>
                  {l.date && <span className="text-xs text-gray-400 whitespace-nowrap">{l.date}</span>}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </FadeIn>
    </section>
  );
}
