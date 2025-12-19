import { ColorPicker } from "@/widgets/color-picker";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-cente">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between">
        <ColorPicker />
      </main>
    </div>
  );
}
