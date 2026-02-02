Personal Blog & Portfolio Project
Next.js와 Tailwind CSS를 활용한 반응형 개인 포트폴리오 및 블로그 사이트
본 프로젝트는 팀 프로젝트로 진행되었으며, 단순히 정보를 전달하는 것을 넘어 유지보수가 용이한 코드 구조와 사용자 친화적인 반응형 UI를 구현하는 데 초점을 맞췄습니다.

Tech Stack
Framework Next.js 14+ (App Router)
Styling Tailwind CSS
Language TypeScript
Deploymen tVercel

Key Features & My Contributions
팀 프로젝트 내에서 담당한 주요 기능과 기술적 해결 과정입니다.

1. 데이터 중심의 코드 리팩토링 (Refactoring)
문제점: 기존 팀원이 작성한 코드가 UI 태그와 데이터가 복잡하게 얽혀 있어 재사용성이 낮고 유지보수가 어려운 상태였습니다.
해결: map() 함수와 데이터 객체(data.ts)를 활용하여 UI와 데이터를 분리했습니다.
결과: 코드 라인 수를 약 50% 이상 단축시켰으며, 새로운 항목 추가 시 코드 수정 없이 데이터 파일만 업데이트하면 되는 구조로 개선했습니다.

2. 고도의 반응형 디자인 구현 (Responsive UI)
데스크탑과 모바일의 시각적 계층 구조가 다른 점을 고려하여 order 속성 및 max-lg 접두사를 활용한 Custom Responsive Layout을 설계했습니다.
이미지 최적화(next/image) 및 object-fit 속성을 조절하여 다양한 기기 환경에서도 이미지가 잘리지 않고 최적의 비율로 출력되도록 구현했습니다.

3. 협업 및 버전 관리 (Git Workflow)
복잡한 Git Merge 과정에서 발생하는 충돌을 해결하고, 브랜치 전략을 통해 팀원 간의 작업 효율을 높였습니다.
README.md 문서화를 통해 프로젝트의 기술적 의사결정 과정을 기록으로 남겼습니다.

roubleshooting
에러 상황: 폼(Form) 요소의 고정 너비(px) 설정으로 인한 모바일 화면 터짐 현상 
원인: 데스크탑 중심의 고정 수치 설계 
해결: w-full과 max-w-[수치] 조합을 사용하여 유연한 너비 대응 시스템 구축

Getting Started
npm install
npm run dev