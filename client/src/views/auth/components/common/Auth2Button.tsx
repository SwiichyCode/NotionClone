interface Auth2ButtonProps {
  text: string;
  icon: string;
}

export const Auth2Button = ({ text, icon }: Auth2ButtonProps) => {
  return (
    <button className="w-full h-10 flex items-center justify-center gap-2 border-1 border-gray-400 rounded-lg px-4 transition-all hover:bg-slate-50 ">
      <img width={18} height={18} src={icon} />
      <span className=" text-sm">{text}</span>
    </button>
  );
};
