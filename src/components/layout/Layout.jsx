import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
// import { ParticlesBackground } from "../ui/ParticlesBackground"
import { ErrorBoundary } from "../ui/ErrorBoundary"

export function Layout() {
  return (
    <ErrorBoundary>
      <div className="relative flex min-h-screen flex-col bg-background/0 font-sans antialiased overflow-x-hidden">
        {/* <ParticlesBackground /> */}
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
