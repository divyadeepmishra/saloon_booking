import { Chrome, Facebook } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"

export function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-20 px-4 bg-background">
      <Card className="w-full max-w-md border-border/50 shadow-2xl bg-card">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-heading font-bold">Welcome Back</CardTitle>
          <CardDescription className="text-md font-serif">Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Input
                type="email"
                placeholder="Email address"
                className="bg-transparent h-12 rounded-none border-primary/30 focus:border-primary font-serif text-lg"
            />
            <Input
                type="password"
                placeholder="Password"
                className="bg-transparent h-12 rounded-none border-primary/30 focus:border-primary font-serif text-lg"
            />
          </div>
          <div className="flex justify-end">
             <Link to="#" className="text-sm text-primary hover:underline font-bold tracking-wide">Forgot password?</Link>
          </div>
          <Button className="w-full h-12 text-lg font-bold uppercase tracking-widest rounded-none bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
              Sign In
          </Button>

          <div className="relative my-6">
               <div className="absolute inset-0 flex items-center">
                 <span className="w-full border-t border-border"></span>
               </div>
               <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                 <span className="bg-card px-4 text-muted-foreground">Or continue with</span>
               </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
               <Button variant="outline" className="w-full h-12 rounded-none border-foreground/10 hover:border-primary hover:bg-transparent">
                   <Chrome className="mr-2 h-4 w-4" /> Google
               </Button>
               <Button variant="outline" className="w-full h-12 rounded-none border-foreground/10 hover:border-primary hover:bg-transparent">
                   <Facebook className="mr-2 h-4 w-4 text-blue-600" /> Facebook
               </Button>
          </div>

        </CardContent>
        <CardFooter className="flex justify-center pb-8">
            <p className="text-sm text-muted-foreground font-serif">
                Don't have an account? <Link to="/auth/signup" className="text-primary hover:underline font-bold uppercase tracking-wider ml-1">Sign Up</Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  )
}
