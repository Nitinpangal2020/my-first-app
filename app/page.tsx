export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            Nitin Pangal
          </h1>

          <p className="text-xl mb-6">
            Senior System Engineer | Linux | AWS | Web Hosting | DevOps
          </p>

          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Contact Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-lg text-gray-700">
          I am a Senior System Engineer with 14+ years of experience in
          Linux Administration, Web Hosting, Cloud Infrastructure,
          Email Solutions, AWS, Google Workspace and DevOps.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="shadow-lg rounded-xl p-6 bg-white">
              <h3 className="font-bold text-xl mb-2">
                Linux Administration
              </h3>
              <p>RHEL, AlmaLinux, Ubuntu, Production Support</p>
            </div>

            <div className="shadow-lg rounded-xl p-6 bg-white">
              <h3 className="font-bold text-xl mb-2">
                Cloud Infrastructure
              </h3>
              <p>AWS, Backup, Security, Monitoring</p>
            </div>

            <div className="shadow-lg rounded-xl p-6 bg-white">
              <h3 className="font-bold text-xl mb-2">
                Email Solutions
              </h3>
              <p>Google Workspace, Zoho, Office 365</p>
            </div>

            <div className="shadow-lg rounded-xl p-6 bg-white">
              <h3 className="font-bold text-xl mb-2">
                Web Hosting
              </h3>
              <p>cPanel, Plesk, Webuzo, DNS Management</p>
            </div>

            <div className="shadow-lg rounded-xl p-6 bg-white">
              <h3 className="font-bold text-xl mb-2">
                DevOps
              </h3>
              <p>GitHub, Vercel, CI/CD, Automation</p>
            </div>

            <div className="shadow-lg rounded-xl p-6 bg-white">
              <h3 className="font-bold text-xl mb-2">
                Security
              </h3>
              <p>SSL, Firewall, Malware Protection, VAPT</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8">
        <p>© 2026 Nitin Pangal | Hosted on Vercel</p>
      </footer>

    </main>
  );
}