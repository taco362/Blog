interface CustomWhiteButtonProps {
  text: string;
  onClick?: () => void; // 클릭 이벤트 추가
  }

export default function CustomWhiteButton({ text, onClick }: CustomWhiteButtonProps) {
  return (
    <button 
      onClick={onClick} // 클릭 이벤트 연결
      className="rounded-full bg-white px-8 py-2 text-base text-black
      trasition-all duration-300 hover:-translate-y-1">
      {text}
    </button>
  );
}