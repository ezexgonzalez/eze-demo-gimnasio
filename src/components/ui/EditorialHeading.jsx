import { Eyebrow } from './Eyebrow'

export function HeadingLines({ lines }) {
  return lines.map(line => <span className="heading-line" key={line}>{line}{' '}</span>)
}

export function EditorialHeading({ id, content }) {
  const { eyebrow, title, mobileTitle, description, action } = content
  return (
    <header className="editorial-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={id} className="section-title">
          {mobileTitle ? <>
            <span className="desktop-lines"><HeadingLines lines={title} /></span>
            <span className="mobile-lines"><HeadingLines lines={mobileTitle} /></span>
          </> : <HeadingLines lines={title} />}
        </h2>
      </div>
      <div className="editorial-copy">
        <p>{description}</p>
        {action && <p className="editorial-cue">{action}</p>}
      </div>
    </header>
  )
}
