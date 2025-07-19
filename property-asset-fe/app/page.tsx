import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-6 py-8">
      <main className="flex flex-col items-center justify-center min-h-screen gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2B2B2B] mb-4">
            Property Asset <span className="text-[#30e4e4]">Frontend</span>
          </h1>
          <p className="text-[#666666] text-lg mb-8">
            Welcome to the Property Asset application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
          <Link href="/welcome" className="block">
            <Button 
              variant="primary" 
              size="lg"
              className="w-full h-32 flex flex-col items-center justify-center"
            >
              <span className="text-xl font-semibold">Welcome</span>
              <span className="text-sm opacity-90">Onboarding Flow</span>
            </Button>
          </Link>
          
          <Link href="/signin" className="block">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full h-32 flex flex-col items-center justify-center"
            >
              <span className="text-xl font-semibold">Sign In</span>
              <span className="text-sm opacity-90">Login Page</span>
            </Button>
          </Link>
          
          <Link href="/create-account" className="block">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full h-32 flex flex-col items-center justify-center"
            >
              <span className="text-xl font-semibold">Create Account</span>
              <span className="text-sm opacity-90">Registration</span>
            </Button>
          </Link>
        </div>

        <div className="text-center mt-8">
          <p className="text-[#666666]">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </main>
    </div>
  );
}
