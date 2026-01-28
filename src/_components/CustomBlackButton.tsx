interface CustomBlackButtonProps {
  text: string;
  onClick?:()=>void;
}

export default function CustomBlackButton({ text, onClick }: CustomBlackButtonProps) {
  return (
    <button 
      className="
        rounded-full
        border border-white
        bg-black
        px-8 py-2
        text-base text-white
        transition-colors duration-300
        hover:bg-white hover:text-black"
      >
      {text}
    </button>
  );
}