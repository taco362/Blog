interface CustomWhiteButtonProps {
  text: string;
}

export default function CustomWhiteButton({ text }: CustomWhiteButtonProps) {
  return (
    <button 
      className="rounded-full bg-white px-8 py-2 text-base text-black
      trasition-all duration-300 hover:-translate-y-1">
      {text}
    </button>
  );
}