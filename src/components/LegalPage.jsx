import PageHeader from './PageHeader.jsx'

export default function LegalPage({ eyebrow, title, updated, intro, sections }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} subtitle={`Last updated: ${updated}`} />
      <div className="section section--white">
        <div className="container legal">
          <nav className="legal__toc" aria-label={`${title} sections`}>
            <p className="legal__toc-title">On this page</p>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="legal__content">
            {intro && <div className="legal__intro">{intro}</div>}
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-h`}>
                <h2 id={`${section.id}-h`}>
                  <span className="legal__num">{String(index + 1).padStart(2, '0')}</span>
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  )
}
