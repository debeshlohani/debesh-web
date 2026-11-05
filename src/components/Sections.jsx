import { useContent } from '../content';
import { AnimatedStat, CareerTimeline, Publications, ThemeToggle, TypedRole } from './Interactive';

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-intro reveal">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p className="sub">{description}</p>}
  </div>;
}

function ContentLink({ link, className, style }) {
  return <a href={link.href} className={className} style={style}
    target={link.newTab ? '_blank' : undefined} rel={link.newTab ? 'noopener' : undefined}>
    {link.label}
  </a>;
}

function Chips({ items }) {
  return <div className="chips">{items.map((item) => <span className="chip" key={item}>{item}</span>)}</div>;
}

export function Header() {
  const content = useContent();
  const { navigation } = content;
  return <header><nav>
    <a className="logo" href="#top">{navigation.brand}</a>
    {navigation.links.map((link) => <ContentLink key={link.href} link={link} className="l" />)}
    <ThemeToggle />
  </nav></header>;
}

export function Hero() {
  const content = useContent();
  const { hero } = content;
  return <div className="hero" id="top"><div className="wrap grid">
    <div>
      <span className="tag">{hero.tagline}</span>
      <h1>{hero.name} <span>{hero.highlightedName}</span></h1>
      <div className="role"><TypedRole /></div>
      <p className="lead">{hero.introduction}</p>
      <div className="btns">
        {hero.buttons.map((link) => <ContentLink key={link.href} link={link} className="btn p" />)}
      </div>
    </div>
    <div className="card pf">
      <img className="ph" src={hero.portrait.src} alt={hero.portrait.alt} />
      <ul>{hero.profile.map((item) => <li key={item.label}><b>{item.label}</b>{item.value}</li>)}</ul>
    </div>
  </div></div>;
}

export function Stats() {
  const content = useContent();
  return <div className="stats"><div className="wrap">
    {content.stats.map((stat) => <div className="stat" key={stat.label}>
      <AnimatedStat value={stat.value} suffix={stat.suffix} /><div className="t">{stat.label}</div>
    </div>)}
  </div></div>;
}

export function About() {
  const content = useContent();
  const { about } = content;
  return <section id="about"><div className="wrap two">
    <div className="reveal">
      <SectionHeading {...about} />
      {about.paragraphs.map((paragraph, index) => <p className="sub" key={paragraph}
        style={{ maxWidth: 'none', marginTop: index === 0 ? '14px' : undefined }}>{paragraph}</p>)}
      <Chips items={about.topics} />
    </div>
    <div className="box reveal">
      <h3 style={{ marginBottom: '14px' }}>{about.educationTitle}</h3>
      {about.education.map((item, index) => <div className="pub" key={`${item.year}-${item.degree}`}
        style={index === about.education.length - 1 ? { border: 0 } : undefined}>
        <span className="y">{item.year}</span><div><b>{item.degree}</b><br /><i>{item.institution}</i></div>
      </div>)}
    </div>
  </div></section>;
}

export function Career() {
  const content = useContent();
  return <section id="career" style={{ background: 'var(--surf)' }}><div className="wrap">
    <SectionHeading {...content.career} />
    <CareerTimeline />
  </div></section>;
}

export function Expertise() {
  const content = useContent();
  const { expertise } = content;
  return <section id="expertise"><div className="wrap">
    <SectionHeading {...expertise} />
    <div className="area">{expertise.items.map((item) => <div className="box reveal" key={item.title}>
      <div className="ico">{item.icon}</div><h3>{item.title}</h3><p>{item.description}</p>
    </div>)}</div>
  </div></section>;
}

export function Recognition() {
  const content = useContent();
  const { recognition } = content;
  return <section className="dark-sec"><div className="wrap">
    <div className="reveal">
    <span className="eyebrow">{recognition.eyebrow}</span>
    <h2 style={{ marginBottom: '28px' }}>{recognition.title}</h2>
    </div>
    <div className="aw">{recognition.awards.map((award) => <div className="box reveal" key={`${award.year}-${award.description}`}>
      <b>{award.year}</b><p>{award.description}</p>
    </div>)}</div>
  </div></section>;
}

export function Credentials() {
  const content = useContent();
  const { credentials } = content;
  return <section id="creds"><div className="wrap">
    <SectionHeading {...credentials} />
    <div className="cert">{credentials.certifications.map((item) => <div className="box reveal" key={item.title}>
      <b>{item.title}</b><span>{item.description}</span>
    </div>)}</div>
    <h3 style={{ margin: '40px 0 12px', fontSize: '22px' }}>{credentials.membershipsTitle}</h3>
    <Chips items={credentials.memberships} />
    <h3 style={{ margin: '40px 0 12px', fontSize: '22px' }}>{credentials.boardsTitle}</h3>
    <Chips items={credentials.boards} />
  </div></section>;
}

export function Writing() {
  const content = useContent();
  const { writing } = content;
  return <section id="writing" style={{ background: 'var(--surf)' }}>
    <div className="wrap two" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
      <div>
        <div className="reveal">
        <span className="eyebrow">{writing.eyebrow}</span><h2>{writing.title}</h2>
        <p className="sub" style={{ marginTop: '10px' }}>{writing.description}</p>
        </div>
        <Publications />
      </div>
      <div className="box reveal" style={{ alignSelf: 'start', background: 'var(--bg)' }}>
        <h3 style={{ marginBottom: '12px' }}>{writing.talksTitle}</h3>
        {writing.talks.map((talk, index) => <div className="pub" key={`${talk.year}-${talk.title}`}
          style={index === writing.talks.length - 1 ? { border: 0 } : undefined}>
          <span className="y">{talk.year}</span><div>{talk.title}<br /><i>{talk.venue}</i></div>
        </div>)}
      </div>
    </div>
  </section>;
}

export function Contact() {
  const content = useContent();
  const { contact } = content;
  return <section id="contact"><div className="wrap reveal" style={{ textAlign: 'center', maxWidth: '680px' }}>
    <span className="eyebrow">{contact.eyebrow}</span><h2>{contact.title}</h2>
    <p className="sub" style={{ margin: '12px auto 26px' }}>{contact.description}</p>
    <div className="btns" style={{ justifyContent: 'center' }}>
      {contact.buttons.map((link, index) => <ContentLink key={link.href} link={link}
        className={index === 0 ? 'btn p' : 'btn s'}
        style={index === 0 ? undefined : { color: 'var(--ink)', borderColor: 'var(--line)' }} />)}
    </div>
  </div></section>;
}

export function Footer() {
  const content = useContent();
  return <footer><div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', fontSize: '14px' }}>
    <span>© {new Date().getFullYear()} {content.footer.copyright}</span>
    <a href="#top">{content.footer.backToTopLabel}</a>
  </div></footer>;
}
