export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Nitin Pangal
          </h1>

          <p className="text-2xl mb-3">
            Senior System Engineer
          </p>

          <p className="text-lg">
            Linux • AWS • Cloud Infrastructure • DevOps
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/nitin-pangal-14356947"
              target="_blank"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-lg text-gray-700">
          Results-driven Senior System Engineer with 14+ years of experience
          in Linux Administration, Production Support, AWS Infrastructure,
          Web Hosting Platforms, and Enterprise Email Systems.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="font-bold text-xl">AWS Cloud</h3>
              <p>EC2, RDS, S3, Route53, IAM, VPC, CloudWatch</p>
            </div>

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="font-bold text-xl">Linux</h3>
              <p>RHEL, CentOS, Ubuntu, AlmaLinux</p>
            </div>

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="font-bold text-xl">Hosting</h3>
              <p>WHM/cPanel, Plesk, Webuzo, WHMCS</p>
            </div>

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="font-bold text-xl">Web Servers</h3>
              <p>Apache, Nginx, Squid Proxy, LAMP Stack</p>
            </div>

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="font-bold text-xl">Email Systems</h3>
              <p>Google Workspace, Microsoft 365</p>
            </div>

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="font-bold text-xl">Security</h3>
              <p>SSL, CSF Firewall, Fail2Ban, Hardening</p>
            </div>

          </div>

        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Professional Experience
        </h2>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-bold">
            Dimakh Consultants Pvt Ltd
          </h3>

          <p className="text-blue-700 font-semibold">
            Senior System Engineer | May 2011 - Present
          </p>

          <ul className="mt-4 list-disc ml-6 space-y-2">
            <li>AWS Infrastructure Management</li>
            <li>Linux Administration</li>
            <li>Server Migrations</li>
            <li>Google Workspace & Microsoft 365</li>
            <li>Web Hosting Platforms</li>
            <li>L2 / L3 Production Support</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Key Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">
                Infrastructure Deployment
              </h3>
              <p>
                AlmaLinux 9 and CentOS 7 LAMP Stack Deployments
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">
                Email Migration
              </h3>
              <p>
                Google Workspace & Microsoft 365 Migrations
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">
                Monitoring
              </h3>
              <p>
                Nagios & Netdata Monitoring Implementations
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-8">
        <p>© 2026 Nitin Pangal</p>
        <p>Pune, Maharashtra</p>
      </footer>

    </main>
  );
}