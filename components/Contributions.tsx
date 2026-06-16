"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

type PR = {
  pr: string;
  href: string;
  title: string;
  problem?: string;
  approach?: string;
  result?: string;
  note?: string;
};

type Repo = {
  id: string;
  name: string;
  url: string;
  icon: string;
  prs: PR[];
};

const repos: Repo[] = [
  {
    id: "nodejs",
    name: "nodejs/node",
    url: "https://github.com/nodejs/node",
    icon: "fa-brands fa-node-js",
    prs: [
      {
        pr: "PR #59416",
        href: "https://github.com/nodejs/node/pull/59416",
        title: "child_process 검증 로직 개선",
        problem:
          "child_process 모듈 내부의 검증 로직이 각각 흩어져서 구현되어 있어 코드의 일관성이 부족했습니다. 이로 인해 동일한 성격의 에러임에도 불구하고 발생 지점에 따라 에러 타입이나 메시지가 달라서 디버깅에 혼선을 줄 수 있는 구조였습니다.",
        approach:
          "Node.js 내부에서 공통으로 사용되는 검증 모듈인 internal/validators를 도입하여 child_process 검증 로직을 리팩토링했습니다. 기존의 개별 if 조건문을 공통 검증 모듈의 표준 함수로 대체하고, 이에 맞춰서 테스트 케이스 내 에러 코드 명세를 최신화했습니다.",
        result:
          "중복 코드를 제거하여 모듈의 가독성과 유지보수성을 향상시켰고, Node.js 전체의 에러 리포팅 규격을 일치시켰습니다.",
      },
      {
        pr: "PR #59836",
        href: "https://github.com/nodejs/node/pull/59836",
        title: "벤치마크 설정 최적화",
        problem:
          "기존 cluster/echo.js 벤치마크의 반복 횟수가 높게 설정되어 있어서 측정 시간이 불필요하게 길어질 수 있는 상태였습니다.",
        approach:
          "calibrate-n 스크립트를 활용해 반복 횟수에 따른 변동 계수를 확인하며, 측정 데이터가 안정적인 상태를 유지하는 최적의 값인 n = 1000을 도출했습니다.",
        result:
          "최적화된 반복 횟수를 벤치마크 설정에 반영하여 측정 데이터의 신뢰성을 확보하고, 전체 실행 시간을 단축했습니다.",
      },
      {
        pr: "PR #60162",
        href: "https://github.com/nodejs/node/pull/60162",
        title: "벤치마크용 CPU 성능 제어 스크립트 고도화",
        problem:
          "기존 스크립트가 매우 기초적인 수준이라 실행 환경 검증이 부족했고, 특히 벤치마크 종료 후 성능 위주의 설정을 시스템 기본값으로 되돌리는 기능이 없어 하드웨어에 불필요한 부하를 남길 위험이 있었습니다.",
        approach:
          "Linux 환경 및 권한 체크 로직을 추가하여 실행 안정성을 확보하고, 시스템 권장 거버너를 동적으로 감지해서 복구하는 기능과 모든 코어의 상태를 한눈에 확인하는 get 명령어를 쉘 스크립트로 구현했습니다.",
        result:
          "벤치마크 도구의 편의성을 향상시켰고, 명확한 사용 가이드와 피드백 메시지를 제공하여 기여자들이 일관되고 정확한 성능 측정을 수행할 수 있는 환경을 조성했습니다.",
      },
      {
        pr: "PR #59351",
        href: "https://github.com/nodejs/node/pull/59351",
        title: "Internal Binding 타입 정의 추가",
        problem:
          "인코딩 처리 모듈에 대한 TypeScript 타입 정의가 누락되어 코어 라이브러리 개발 및 유지보수 시 정적 타입 검사의 이점을 누리지 못하는 문제가 있었습니다.",
        approach:
          "C++ 소스 코드를 분석하여 인코딩 메서드들의 시그니처를 파악하고, 이를 바탕으로 EncodingBinding 인터페이스를 새롭게 정의하고 전역 매핑테이블에 통합했습니다.",
        result:
          "누락된 타입을 추가하여 타입 안정성을 확보했고, 코드 품질 유지보수 효율을 높였습니다.",
      },
      {
        pr: "PR #59880",
        href: "https://github.com/nodejs/node/pull/59880",
        title: "불필요한 모듈 참조 제거",
        problem:
          "global.d.ts에 전역 타입으로 선언된 TypedArray를 zlib.d.ts에서 중복으로 import하여, 타입 참조 오류가 발생하는 문제를 확인했습니다.",
        approach:
          "전역 네임스페이스에 정의된 타입은 별도의 import 없이도 참조 가능하다는 원칙에 따라서 파일 내 불필요한 import 구문을 제거하여 타입 시스템의 일관성을 확보했습니다.",
        result:
          "타입 정의 간의 충돌을 해결했으며 내부 라이브러리 zlib의 타입 안정성을 높이고 잠재적인 빌드 오류를 방지했습니다.",
      },
      {
        pr: "PR #59224",
        href: "https://github.com/nodejs/node/pull/59224",
        title: "Dynamic import() 설명 개선",
        problem:
          "require(esm) 지원 이후에도 import()가 CJS에서 ESM을 로드하기 위한 유일한 방법인 것처럼 기술되어 있던 기존 문서의 기술적 오류와 오해의 소지가 있었습니다.",
        approach:
          "import()의 핵심인 비동기적 특성을 명시하고 CJS와 ESM 환경 모두에서 두 모듈 시스템을 모두 로드할 수 있다는 점을 강조하여 문구를 수정했습니다.",
        result:
          "전 세계 개발자들에게 최신 모듈 로드 메커니즘에 대한 정확한 가이드를 제공하고 기술적 혼선을 방지하는 데 기여했습니다.",
      },
      {
        pr: "PR #59427",
        href: "https://github.com/nodejs/node/pull/59427",
        title: "ERR_INVALID_URL_PATTERN 링크 오류 수정",
        problem:
          "errors.md 문서 내 ERR_INVALID_URL_PATTERN 설명에서 마크다운 문법 오류로 인해 관련 API 명세로 연결되는 하이퍼링크가 정상적으로 표시되지 않는 문제를 발견했습니다.",
        approach:
          "잘못된 마크다운 구문을 표준 형식에 맞춰 수정하고, 문서 하단에 누락되었던 참조 링크를 추가하여 하이퍼링크가 정상적으로 작동할 수 있도록 개선했습니다.",
        result:
          "전 세계 개발자들이 에러 원인을 파악하고 관련 문서를 참조하는 과정의 편의성을 높였습니다.",
      },
    ],
  },
  {
    id: "react",
    name: "reactjs/ko.react.dev",
    url: "https://github.com/reactjs/ko.react.dev",
    icon: "fa-brands fa-react",
    prs: [
      {
        pr: "PR #1516",
        href: "https://github.com/reactjs/ko.react.dev/pull/1516",
        title: "AddTask 컴포넌트의 불필요한 prop 제거",
        note: "AddTask 컴포넌트의 불필요한 onAddTask prop을 제거했습니다.",
      },
      {
        pr: "PR #1517",
        href: "https://github.com/reactjs/ko.react.dev/pull/1517",
        title: "한국어 맞춤법 오타 및 띄어쓰기 오류 수정",
        note: "공식 문서 학습 중 발견한 자모 오타 및 띄어쓰기 오류를 수정했습니다.\n(떄문에 → 때문에, 야합니다 → 야 합니다, 반환할수 → 반환할 수 등)",
      },
    ],
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: PR;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-2 border-black rounded-2xl overflow-hidden transition-all duration-200">
      {/* 헤더 */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-150"
      >
        <div className="flex items-center gap-3">
          <a
            href={item.href}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="text-[#2da4e0] font-semibold text-sm hover:underline whitespace-nowrap"
            style={{ position: "static" }}
          >
            {item.pr}
          </a>
          <span className="font-medium text-sm">{item.title}</span>
        </div>
        <i
          className={`fa-solid fa-chevron-down text-sm text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* 펼쳐지는 내용 */}
      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100">
          {item.note ? (
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              {item.note}
            </p>
          ) : (
            <div className="flex flex-col gap-4 mt-4">
              {[
                { label: "문제", text: item.problem },
                { label: "접근", text: item.approach },
                { label: "결과", text: item.result },
              ].map(({ label, text }) => (
                <div key={label} className="pl-4 border-l-2 border-black">
                  <span className="text-xs font-bold tracking-wider block mb-1 text-gray-400">
                    {label}
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Contributions() {
  const [activeTab, setActiveTab] = useState("nodejs");
  const [openPR, setOpenPR] = useState<string | null>(null);

  const activeRepo = repos.find((r) => r.id === activeTab)!;

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setOpenPR(null);
  };

  return (
    <section id="contributions" className="min-h-screen px-[12%] py-32">
      <FadeIn>
      <h2 className="text-center text-6xl font-semibold mb-4">Contributions</h2>
      <p className="text-center text-gray-400 mb-12">오픈소스 기여 내역</p>

      {/* 탭 */}
      <div className="flex justify-center gap-3 mb-10">
        {repos.map((repo) => (
          <button
            key={repo.id}
            onClick={() => handleTabChange(repo.id)}
            className={`flex items-center gap-3 px-7 py-3 rounded-full border-2 font-medium transition-all duration-200 ${
              activeTab === repo.id
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black hover:bg-gray-50"
            }`}
          >
            <i className={`${repo.icon} text-base`} />
            <span>{repo.name}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${activeTab === repo.id ? "bg-white/20" : "bg-gray-100"}`}
            >
              {repo.prs.length}
            </span>
            <i
              className={`fa-solid fa-arrow-up-right-from-square text-xs opacity-50 hover:opacity-100`}
              onClick={(e) => { e.stopPropagation(); window.open(repo.url, "_blank"); }}
            />
          </button>
        ))}
      </div>

      {/* PR 목록 */}
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {activeRepo.prs.map((pr) =>
          pr.note ? (
            // note만 있는 PR → 카드로 바로 표시
            <div
              key={pr.pr}
              className="border-2 border-black rounded-2xl px-6 py-4 flex flex-col gap-1"
            >
              <div className="flex items-center gap-3">
                <a
                  href={pr.href}
                  target="_blank"
                  className="text-[#2da4e0] font-semibold text-sm hover:underline whitespace-nowrap"
                  style={{ position: "static" }}
                >
                  {pr.pr}
                </a>
                <span className="font-medium text-sm">{pr.title}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed pl-0 mt-1 whitespace-pre-line">
                {pr.note}
              </p>
            </div>
          ) : (
            // 문제/접근/결과 있는 PR → 아코디언
            <AccordionItem
              key={pr.pr}
              item={pr}
              isOpen={openPR === pr.pr}
              onToggle={() => setOpenPR(openPR === pr.pr ? null : pr.pr)}
            />
          ),
        )}
      </div>
      </FadeIn>
    </section>
  );
}
