import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const skills = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
    ],
  },
  { label: "Backend", items: ["Node.js", "Express.js"] },
  {
    label: "Tools",
    items: ["Git", "GitHub", "GitHub Actions", "Storybook", "Vercel", "Figma"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-[12%] py-32"
    >
      <FadeIn>
        <div className="flex items-center gap-28 justify-center flex-col sm:flex-row">
          <Image
            src="/profile.jpg"
            alt="Yooseong Nam"
            width={300}
            height={300}
            className="rounded-[12%] w-[40vw] sm:w-64 lg:w-72 flex-shrink-0 object-cover"
          />

          <div className="flex flex-col gap-7 text-center sm:text-left items-center sm:items-start">
            {/* 이름 & 직함 */}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2 className="text-3xl lg:text-4xl font-semibold">남유성</h2>
                <span className="text-xs text-gray-400 font-normal">
                  세종대학교 컴퓨터공학과 학사
                </span>
              </div>
              <span className="text-xl lg:text-2xl bg-gradient-to-r from-[#009dff] to-[#ff00ff] bg-clip-text text-transparent">
                Frontend Developer
              </span>
              <div className="flex gap-5 mt-4">
                <a
                  href="https://github.com/meteorqz6"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors duration-200"
                >
                  <i className="fa-brands fa-github text-[18px]" />
                  <span>github.com/meteorqz6</span>
                </a>
                <a
                  href="https://velog.io/@meteorqz6/posts"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors duration-200"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] block flex-shrink-0"
                  >
                    <path
                      d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3 -1.338 3 -3V3c0 -1.662 -1.338 -3 -3 -3H3Zm6.883 6.25c0.63 0 1.005 0.3 1.125 0.9l1.463 8.303c0.465 -0.615 0.846 -1.133 1.146 -1.553 0.465 -0.66 0.893 -1.418 1.283 -2.273 0.405 -0.855 0.608 -1.62 0.608 -2.295 0 -0.405 -0.113 -0.727 -0.338 -0.967 -0.21 -0.255 -0.608 -0.577 -1.193 -0.967 0.6 -0.765 1.35 -1.148 2.25 -1.148 0.48 0 0.878 0.143 1.193 0.428 0.33 0.285 0.494 0.704 0.494 1.26 0 0.93 -0.39 2.093 -1.17 3.488 -0.765 1.38 -2.241 3.457 -4.431 6.232l-2.227 0.156 -1.711 -9.628h-2.25V7.24c0.6 -0.195 1.305 -0.406 2.115 -0.63 0.81 -0.24 1.358 -0.36 1.643 -0.36Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>velog.io/@meteorqz6</span>
                </a>
              </div>
            </div>

            {/* 소개 */}
            <div className="flex flex-col gap-2">
              <p className="font-medium text-base">
                안녕하세요, UX와 DX를 함께 고민하는 개발자 남유성입니다.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                좋은 사용자 경험은 좋은 코드에서 나온다고 믿기에, UX와 DX를 함께
                고려한 설계를 추구합니다.
                <br />
                읽기 쉽고 유지하기 쉬운 코드가 결국 더 나은 제품으로 이어진다고
                생각합니다.
              </p>
            </div>

            {/* 스킬 */}
            <div className="flex flex-col gap-2.5 w-full">
              {skills.map((cat) => (
                <div key={cat.label} className="flex items-start gap-3">
                  <span className="text-xs text-gray-400 w-16 pt-1 flex-shrink-0 text-right sm:text-right">
                    {cat.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 border border-black rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
