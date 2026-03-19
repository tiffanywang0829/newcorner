const projects = [
  {
    tag: 'Currently',
    image: '/assets/images/azure.jpg',
    title: 'Microsoft — Azure Advisor',
    role: 'Product Manager II · New York, NY',
    link: 'https://www.youtube.com/watch?v=58_6MkB2znI',
    linkLabel: 'Watch demo',
  },
  {
    tag: 'Previously',
    image: '/assets/images/ethsign.jpg',
    title: 'EthSign — TokenTable',
    role: 'Product Manager',
    link: 'https://sign.global/tokentable',
    linkLabel: 'Learn more',
  },
  {
    tag: 'Previously',
    image: '/assets/images/tencent.jpg',
    title: 'Tencent — Autonomous Driving',
    role: 'Data Analyst',
    link: 'https://www.tencent.com/en-us/articles/2201669.html',
    linkLabel: 'Learn more',
  },
  {
    tag: 'Project',
    image: '/assets/images/air.jpg',
    title: 'Chimney Filter for Alaska',
    role: 'Hardware + Research',
    link: 'https://viterbischool.usc.edu/news/2022/04/catching-smoke-how-a-usc-team-is-helping-clear-the-air-in-alaska/',
    linkLabel: 'Read article',
  },
  {
    tag: 'Project',
    image: '/assets/images/unity.jpg',
    title: 'Love Death + Robots — Unity Game',
    role: 'Game Design',
    link: 'https://play.unity.com/en/games/7b5c8ae3-d32e-4af7-b1b3-18ed850bc873/webgl-builds',
    linkLabel: 'Play game',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="card-surface overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-card-hover">
      <div className="overflow-hidden" style={{ height: '280px' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <span
          className="inline-block text-xs font-medium uppercase tracking-widest mb-3 px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(26,26,26,0.07)',
            color: '#6B6B6B',
          }}
        >
          {project.tag}
        </span>
        <h3 className="font-serif font-light text-2xl leading-snug mb-1"
            style={{ letterSpacing: '-0.02em' }}>
          {project.title}
        </h3>
        <p className="text-xs text-text-secondary uppercase tracking-wider mb-4">
          {project.role}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="btn-outline self-start text-xs"
        >
          {project.linkLabel} →
        </a>
      </div>
    </div>
  )
}

export default function Works() {
  return (
    <div className="pt-28 pb-16">
      <div className="page-container">
        {/* Header */}
        <div className="mb-14">
          <p className="nav-link text-text-secondary mb-3">02 Works</p>
          <h1 className="font-serif font-light"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}>
            Things I've built &amp; shipped
          </h1>
          <p className="text-text-secondary mt-3 max-w-xl" style={{ fontSize: '1.0625rem' }}>
            A selection of professional roles and personal projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
