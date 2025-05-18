
import { HomePage, AuthPage } from "@/components/import"

export default function Home() {
  const user = false;
  return (
    <main>
      {user ? <HomePage /> : <AuthPage />}
    </main>
  );
}
