import { Logo } from "@/components/common/Logo";

export const AuthHeader = () => {
  return (
    <header className="fixed flex w-full max-w-7xl p-6">
      <div className=" flex items-center gap-4">
        <Logo />
        <h1 className="text-2xl font-semibold">Notion</h1>
      </div>
    </header>
  );
};
