import { Shield, BadgeCheck, Clock, LineChart } from "lucide-react"

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose SoftSell</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We offer the most secure, compliant, and profitable way to resell your software licenses.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
            <Shield className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Secure Transactions</h3>
            <p className="text-center text-sm text-muted-foreground">
              Enterprise-grade security protocols protect your data and financial information.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
            <BadgeCheck className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Legal Compliance</h3>
            <p className="text-center text-sm text-muted-foreground">
              All transactions follow software licensing laws and vendor transfer policies.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
            <Clock className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Fast Processing</h3>
            <p className="text-center text-sm text-muted-foreground">
              Complete transactions in days, not weeks, with our streamlined process.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
            <LineChart className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Maximum Value</h3>
            <p className="text-center text-sm text-muted-foreground">
              Our market analytics ensure you get the best possible price for your licenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
