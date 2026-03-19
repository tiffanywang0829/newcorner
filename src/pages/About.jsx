const timeline = [
  {
    period: '2022 — Present',
    role: 'Product Manager II',
    company: 'Microsoft',
    location: 'New York, NY',
  },
  {
    period: '2022 — 2023',
    role: 'Product Manager',
    company: 'EthSign',
    location: 'Los Angeles, CA',
  },
  {
    period: '2021',
    role: 'Data Analyst Intern',
    company: 'Tencent — Autonomous Driving',
    location: '',
  },
  {
    period: '2018 — 2022',
    role: 'B.S. Economics & Data Science',
    company: 'University of Southern California',
    location: 'Los Angeles, CA',
  },
]

const interests = ['Skiing ⛷️', 'Running 🏃‍♀️', 'Reading 📚', 'Musical Theatre 🎭']

export default function About() {
  return (
    <div className="pt-28 pb-16">
      <div className="page-container">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: main content */}
          <div className="md:col-span-3">
            <p className="nav-link text-text-secondary mb-3">03 About</p>
            <h1
              className="font-serif font-light mb-8"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}
            >
              Hi, I'm Tiffany.
            </h1>

            <div className="space-y-5 text-text-secondary leading-relaxed"
                 style={{ fontSize: '1.0625rem' }}>
              <p>
                I'm a Microsoft product manager based in{' '}
                <span className="text-text-primary font-medium">📍 NYC</span> who loves
                turning complex systems into products people actually understand and love
                to use.
              </p>
              <p>
                I'm currently building{' '}
                <a
                  href="https://azure.microsoft.com/en-us/products/advisor"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-primary underline underline-offset-2 decoration-border-warm hover:opacity-60 transition-opacity"
                >
                  Azure Advisor
                </a>
                , helping some of the world's largest enterprises make smarter, more
                resilient decisions about their cloud workloads.
              </p>
              <p>
                My journey started with Economics and Data Science at USC, then took me
                into mobility tech as a data analyst on autonomous driving at Tencent,
                and later into web3 as a product manager at EthSign.
              </p>
              <p>
                I'm happiest when I'm learning something new.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-10">
              <p className="nav-link text-text-secondary mb-4">When I'm not working</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm border border-border-warm bg-white/60"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: timeline */}
          <div className="md:col-span-2">
            <div className="card-surface p-7">
              <p className="nav-link text-text-secondary mb-6">Experience</p>
              <ol className="space-y-7 relative">
                {timeline.map(({ period, role, company, location }, idx) => (
                  <li key={idx} className="relative pl-5">
                    <span
                      className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-text-primary"
                    />
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      {period}
                    </p>
                    <p className="font-medium text-sm text-text-primary leading-snug">
                      {role}
                    </p>
                    <p className="text-sm text-text-secondary">{company}</p>
                    {location && <p className="text-xs text-text-secondary mt-0.5">{location}</p>}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
