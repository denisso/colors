import { Colors } from '@/widgets/colors';
import { Container } from "@/shared/ui/layout";

export default function Home() {
  return (
    <Container className="min-h-screen justify-center" >
      <main className="flex w-full flex-col items-center justify-between max-w-7xl">
        <Colors />
      </main>
    </Container>
  );
}
