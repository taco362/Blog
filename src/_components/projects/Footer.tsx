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
            Ji You Han is an experienced web developer in Korea, 
            specializing in responsive, user-friendly websites and 
            custom solutions to grow your business. Contact today.
          </p>

          {/* 소셜 아이콘.cusor-pointer:마우스커서올리면 손가락모양으로 경*/}
          <div className="flex gap-4 mt-15">
            <a href="https://github.com/hanjiyu257-cloud" target="_blank" rel="noopener noreferrer">
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
                <a href="https://www.youtube.com/watch?v=LDGC47F6k_4" target="_blank" rel="noopener noreferrer">
                  POP
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=p8pYDvb3BzA" target="_blank" rel="noopener noreferrer">
                  R&B
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=nej08HFsp7A" target="_blank" rel="noopener noreferrer">
                  BAND
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=NwOvu-j_WjY" target="_blank" rel="noopener noreferrer">
                  JPOP
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=bw4AuPrLWeA" target="_blank" rel="noopener noreferrer">
                  KPOP
                </a>
              </li>
            </ul>
          </div>
          {/* 외부링크들(2)*/}
          <div className="flex flex-col space-y-4">
            <h3 className="mb-[20px] text-[18px] font-normal">Anime Watchlist</h3>
            <ul className="flex flex-col space-y-2 text-center text-[16px] font-light">
                <li>
                <a href="https://namu.wiki/w/%EC%82%AC%EB%AC%B4%EB%9D%BC%EC%9D%B4%20%EC%B0%B8%ED%94%84%EB%A3%A8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  사무라이 참프루
                </a>
              </li>
              <li>
                <a href="https://namu.wiki/w/%EC%9C%A0%EB%A3%A8%EC%BA%A0%E2%96%B3(%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%201%EA%B8%B0)" target="_blank" rel="noopener noreferrer">
                  유루캠△
                </a>
              </li>
              <li>
                <a href="https://namu.wiki/w/%EC%97%90%EB%B0%98%EA%B2%8C%EB%A6%AC%EC%98%A8" target="_blank" rel="noopener noreferrer">
                  에반게리온
                </a>
              </li>
              <li>
                <a href="https://namu.wiki/w/%EC%86%8C%EB%93%9C%20%EC%95%84%ED%8A%B8%20%EC%98%A8%EB%9D%BC%EC%9D%B8(%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%201%EA%B8%B0)" target="_blank" rel="noopener noreferrer">
                  소드아트온라인
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 flex justify-between items-center text-sm font-light">
        <p>© 2026 Ji You Han. All rights reserved.</p>
        <p>Last updated by JiYou on 13 January, 2026 at 6:00 PM UTC 09:00</p>
      </div>
    </footer>
  );
}