
import { PageTransition } from "../../components/layout/PageTransition";
import { GlassContainer } from "../../components/ui/glass-container";

export function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <GlassContainer className="p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, such as when you create an account, book an appointment, or contact us for support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, including to process transactions and send you related information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
             <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at privacy@luxesalon.com.
            </p>
          </section>
        </GlassContainer>
      </div>
    </PageTransition>
  );
}
