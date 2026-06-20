```tsx
export default function Home() {
  const categories = [
    {
      title: "Linux Administration",
      description: "Server management, security hardening, troubleshooting and monitoring."
    },
    {
      title: "AWS Cloud",
      description: "EC2, Route53, RDS, VPC, IAM and CloudWatch guides."
    },
    {
      title: "Google Workspace",
      description: "Migration, email routing, SPF, DKIM and administration."
    },
    {
      title: "Zoho Solutions",
      description: "Zoho One, CRM, Mail and implementation guides."
    },
    {
      title: "Webuzo & cPanel",
      description: "Hosting management, DNS, SSL and migrations."
    },
    {
      title: "Vercel & GitHub",
      description: "Deployment, CI/CD, Git workflows and troubleshooting."
    },
    {
      title: "Server Migration",
      description: "Migration plans, checklists and validation procedures."
    },
    {
      title: "Email Security",
      description: "SPF, DKIM, DMARC, spam filtering and mail troubleshooting."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Technical Support Knowledge Base
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            Documentation, Troubleshooting Guides, Migration Procedures and
            Best Practices
          </p>
        </div>
      </section>

      {/* Welcome */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-4">
            Welcome
          </h2>

          <p className="text-lg text-gray-700">
            This portal contains technical documentation related to Linux,
            AWS, Google Workspace, Zoho, Webuzo, cPanel, Email Systems,
            Security, Server Migration and DevOps.
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold mb-8">
          Documentation Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Featured Guides */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Featured Documentation
          </h2>

          <ul className="space-y-4 text-lg">

            <li>✓ Google Workspace Migration Guide</li>
            <li>✓ Webuzo Server Setup Procedure</li>
            <li>✓ Vercel Deployment for Beginners</li>
            <li>✓ SPF, DKIM and DMARC Configuration</li>
            <li>✓ Linux Server Hardening Checklist</li>
            <li>✓ Shared Hosting Migration Plan</li>
            <li>✓ AWS EC2 Deployment Guide</li>

          </ul>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-8">
        <p>Technical Support Documentation Portal</p>
        <p className="text-slate-400">
          Hosted on Vercel
        </p>
      </footer>

    </main>
  );
}
```
