import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
// import { ParticlesBackground } from "../ui/ParticlesBackground"
import { ErrorBoundary } from "../ui/ErrorBoundary"

export function Layout() {
  return (
    <ErrorBoundary>
      <div className="relative flex min-h-screen flex-col bg-background/0 font-sans antialiased overflow-x-hidden">
        {/* Global Noise Texture */}
        <div className="bg-noise" />

        {/* Ambient Lighting - Premium Feel */}
        <div className="fixed inset-0 pointer-events-none z-0">
             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
             <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full pt-20">
              <Outlet />
            </main>
            <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}
