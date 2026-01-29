
import { PageTransition } from "../../components/layout/PageTransition";
import { GlassContainer } from "../../components/ui/glass-container";

export function TermsOfServicePage() {
  return (
    <PageTransition>
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <GlassContainer className="p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Service</h2>
            <p className="text-muted-foreground">
              You agree to use this site for lawful purposes only. Unauthorized use of this site may give rise to a claim for damages and/or be a criminal offense.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Booking & Cancellation Policy</h2>
            <p className="text-muted-foreground">
              Appointments can be cancelled up to 24 hours in advance for a full refund. Late cancellations may be subject to a fee.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
            <p className="text-muted-foreground">
              Your use of this site is also governed by our Privacy Policy. Please review our Privacy Policy for information on how we collect and use your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
             <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at support@luxesalon.com.
            </p>
          </section>
        </GlassContainer>
      </div>
    </PageTransition>
  );
}
