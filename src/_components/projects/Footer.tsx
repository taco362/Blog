import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6"; //npm install react-icons로 설치해주세용
import Link from "next/link"; //서비스 내 페이지로 이동시 빠른 이동을 지원하는 <Link>컴포넌트
export default function Footer() {
  return (//p:패딩,border-t:위쪽테두리(테두리색설정),첫번째 div(flexbox):반응형
    <footer className="w-full py-16 px-8 pt-[60px] border-t border-white"> 
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* 왼쪽 섹션 */}
        <div className="w-[370px] h-[191px] flex flex-col max-w-sm"> 
          {/* 자기소개 문구.leading:줄간격 넉넉하게 */} 
          <p className="text-[16px] font-light leading-relaxed">
            Chaeyeong Park is an experienced web developer in Korea, 
            specializing in responsive, user-friendly websites and 
            custom solutions to grow your business. Contact today.
          </p>

          {/* 소셜 아이콘.cusor-pointer:마우스커서올리면 손가락모양으로 경*/}
          <div className="flex gap-4 mt-15">
            <a href="https://github.com/taco362" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-[20px] h-[20px] hover:text-white cursor-pointer" /></a>
            <FaLinkedin className="w-[20px] h-[20px] cursor-pointer" />
            <FaXTwitter className="w-[20px] h-[20px] cursor-pointer" />
            <FaEnvelope className="w-[20px] h-[20px] cursor-pointer" />
          </div>
        </div>

        {/* 오른쪽 섹션 */}
        <div className="flex flex-1 justify-between max-w-xl">
          {/* Site Link(내부 링크들) */}
          <div className="flex flex-col space-y-4">
            <h3 className="mb-[20px] text-[18px] font-normal">Site Link</h3>
            <ul className="flex flex-col space-y-2 text-center text-[16px] font-light">
             <li className="cursor-default">Portfolio</li>
              <li className="cursor-default">About</li>
              <li className="cursor-default">Contact</li>
              <li className="cursor-default">Resume</li>
            </ul>
          </div>
          {/* 외부링크들(1).target="_blank":새 탭에서 열기,rel="noopener noreferrer":보안 옵션(원본 페이지 접근 차단)*/}
          <div className="flex flex-col space-y-4">
            <h3 className="mb-[20px] text-[18px] font-normal">What is this song?</h3>
            <ul className="flex flex-col space-y-2 text-center text-[16px] font-light">
                <li>
                <a href="https://youtu.be/U0PkAWqbGPk?si=Jkb4CQxMf7jmQC18" target="_blank" rel="noopener noreferrer">
                  The black skirts
                </a>
              </li>
              <li>
                <a href="https://youtu.be/MPCkqAvYtyM?si=J81WS3Tpa84V3WgU" target="_blank" rel="noopener noreferrer">
                  Parasol
                </a>
              </li>
              <li>
                <a href="https://youtu.be/YTKyaHIK3hM?si=YKJvDPc5BjUtkUTq" target="_blank" rel="noopener noreferrer">
                  Ghost Bookstore
                </a>
              </li>
              <li>
                <a href="https://youtu.be/pFptt7Cargc?si=0GFMinwh_GjiYamR" target="_blank" rel="noopener noreferrer">
                  Tame impala
                </a>
              </li>
              <li>
                <a href="https://youtu.be/DIPxnt5vnhU?si=boTWvqFTvi3m7T2N" target="_blank" rel="noopener noreferrer">
                  Silica Gel
                </a>
              </li>
            </ul>
          </div>
          {/* 외부링크들(2)*/}
          <div className="flex flex-col space-y-4">
            <h3 className="mb-[20px] text-[18px] font-normal">Anime Watchlist</h3>
            <ul className="flex flex-col space-y-2 text-center text-[16px] font-light">
                <li>
                <a href="https://namu.wiki/w/%EB%A7%88%EB%B2%95%EC%86%8C%EB%85%80%20%EB%A7%88%EB%8F%84%EC%B9%B4%E2%98%86%EB%A7%88%EA%B8%B0%EC%B9%B4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  마법소녀 마도카☆마기카
                </a>
              </li>
              <li>
                <a href="https://namu.wiki/w/%EA%B0%95%EC%B2%A0%EC%9D%98%20%EC%97%B0%EA%B8%88%EC%88%A0%EC%82%AC(2003%EB%85%84%20%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98)" target="_blank" rel="noopener noreferrer">
                  강철의 연금술사
                </a>
              </li>
              <li>
                <a href="https://namu.wiki/w/%EC%97%90%EB%B0%98%EA%B2%8C%EB%A6%AC%EC%98%A8" target="_blank" rel="noopener noreferrer">
                  에반게리온
                </a>
              </li>
              <li>
                <a href="https://namu.wiki/w/%EB%8D%B0%EC%8A%A4%EB%85%B8%ED%8A%B8" target="_blank" rel="noopener noreferrer">
                  데스노트
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 flex justify-between items-center text-sm font-light">
        <p>© 2026 Chaeyeong Park. All rights reserved.</p>
        <p>Last updated by Chaeyeong on 13 January, 2026 at 6:00 PM UTC 09:00</p>
      </div>
    </footer>
  );
}