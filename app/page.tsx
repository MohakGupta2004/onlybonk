import AuthScreen from "@/components/auth/AuthScreen";
import HomeScreen from "@/components/home/HomeScreen";

export default function Home() {
  const user = false;
  return (
    // Create dark theme 
    <div className="bg-gray-900 text-white min-h-screen">
      {user ? <HomeScreen /> : <AuthScreen />}
    </div>
  );
}
