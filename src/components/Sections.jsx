import { AnimatedStat, CareerTimeline, Publications, ThemeToggle, TypedRole } from './Interactive';

export function Header() {
  return (
    <header><nav>
<a className="logo" href="#top">Debesh Prasad Lohani</a>
<a className="l" href="#about">About</a><a className="l" href="#career">Career</a><a className="l" href="#expertise">Expertise</a><a className="l" href="#creds">Credentials</a><a className="l" href="#writing">Writing</a><a className="l" href="#contact">Contact</a>
<ThemeToggle />
</nav></header>
  );
}

export function Hero() {
  return (
    <div className="hero" id="top"><div className="wrap grid">
<div>
<span className="tag">Senior Banking Executive · Kathmandu, Nepal</span>
<h1>Debesh Prasad <span>Lohani</span></h1>
<div className="role"><TypedRole /></div>
<p className="lead">Results-driven banking leader with 31+ years of progressive experience in IT leadership, digital transformation and operations management. Former Deputy Chief Executive Officer of Rastriya Banijya Bank, with a proven record in large-scale automation, enterprise security (ISO 27001:2022) and digital banking.</p>
<div className="btns">
  <a className="btn p" href="#career">Explore Career</a>
  <a className="btn p" href="#contact">Get in Touch</a>
  <a className="btn p" href="http://debeshsblog.blogspot.com" target="_blank" rel="noopener">Read the Blog</a>
</div>
</div>
<div className="card pf"><img className="ph" alt="Portrait of Debesh Prasad Lohani" src="/portrait.jpg" />
<ul>
<li><b>Latest role</b>Freelance Consultant</li>
<li><b>Worked as</b>Computer Programmer - DCEO (Banking)</li>
<li><b>Certified</b>ISO 27001 Lead Auditor, ITIL, COBIT, CEH</li>
<li><b>Recognised</b>Outstanding Employee 2024 (RBB)</li>
<li><b>Teaches</b>MIS · Security · eCommerce</li>
</ul></div>
</div></div>
  );
}

export function Stats() {
  return (
    <div className="stats"><div className="wrap">
<div className="stat"><AnimatedStat value={31} /><div className="t">Years in banking &amp; IT</div></div>
<div className="stat"><AnimatedStat value={10} /><div className="t">Departments overseen</div></div>
<div className="stat"><AnimatedStat value={10} /><div className="t">Professional certifications</div></div>
<div className="stat"><AnimatedStat value={35} /><div className="t">Articles published</div></div>
</div></div>
  );
}

export function About() {
  return (
    <section id="about"><div className="wrap two">
<div className="reveal"><span className="eyebrow">About</span><h2>From coding the core to leading the bank</h2>
<p className="sub" style={{"maxWidth": "none", "marginTop": "14px"}}>Debesh began his career in 1994 as a Computer Programmer at Rastriya Banijya Bank, writing and maintaining the bank's core systems. Over three decades he rose through project management, data-centre leadership and Chief of IT to Deputy Executive Officer and, from June 2024, Deputy Chief Executive Officer, overseeing IT, Digital Banking, HR, Compliance, Payment &amp; Settlement, Branch Operations and more.</p>
<p className="sub" style={{"maxWidth": "none"}}>Alongside banking, he has served as the bank's Chief Information Security Officer and Information Officer, advised national e-governance and microfinance programmes funded by ADB, and has taught MBA, MScIT and BScIT students since 2006.</p>
<div className="chips"><span className="chip">ISO 27001:2022</span><span className="chip">Digital Transformation</span><span className="chip">Business Continuity</span><span className="chip">Disaster Recovery</span><span className="chip">Cybersecurity</span><span className="chip">IT Governance</span><span className="chip">AML/CFT Oversight</span></div></div>
<div className="box reveal"><h3 style={{"marginBottom": "14px"}}>Education</h3>
<div className="pub"><span className="y">2011</span><div><b>MBA (Information System)</b><br /><i>Sikkim Manipal University</i></div></div>
<div className="pub"><span className="y">2004</span><div><b>PG Diploma in IT</b><br /><i>Sikkim Manipal University</i></div></div>
<div className="pub"><span className="y">1997</span><div><b>MSc (Physics &amp; Electronics)</b><br /><i>Tribhuvan University</i></div></div>
<div className="pub" style={{"border": "0"}}><span className="y">1991</span><div><b>BSc (Physics, Chemistry, Maths)</b><br /><i>Tribhuvan University</i></div></div></div>
</div></section>
  );
}

export function Career() {
  return (
    <section id="career" style={{"background": "var(--surf)"}}><div className="wrap">
<span className="eyebrow">Career</span><h2>Three decades of progression</h2><p className="sub">Filter the timeline by track.</p>
<CareerTimeline />
</div></section>
  );
}

export function Expertise() {
  return (
    <section id="expertise"><div className="wrap">
<span className="eyebrow">Leadership scope</span><h2>Areas of oversight &amp; expertise</h2><p className="sub">As Deputy CEO, supervising and advising across the bank's most critical functions.</p>
<div className="area">
<div className="box reveal"><div className="ico">💻</div><h3>IT &amp; Digital Banking</h3><p>IT strategy, ICT architecture, digital products and service offerings.</p></div>
<div className="box reveal"><div className="ico">🛡️</div><h3>Security &amp; Risk</h3><p>CISO role, information security policy, risk management advisory.</p></div>
<div className="box reveal"><div className="ico">⚖️</div><h3>Compliance &amp; Legal</h3><p>AML/CFT, NRB directives, FATF alignment and legal affairs.</p></div>
<div className="box reveal"><div className="ico">💳</div><h3>Payments &amp; Settlement</h3><p>Digital payments, RTGS, IPS, SWIFT, remittance and card transactions.</p></div>
<div className="box reveal"><div className="ico">🏦</div><h3>Branch Operations</h3><p>Policies and coordination across central, province and branch offices.</p></div>
<div className="box reveal"><div className="ico">👥</div><h3>People &amp; Services</h3><p>HR, learning &amp; development, general services and asset management.</p></div>
</div></div></section>
  );
}

export function Recognition() {
  return (
    <section className="dark-sec"><div className="wrap">
<span className="eyebrow">Recognition</span><h2 style={{"marginBottom": "28px"}}>Awards &amp; honours</h2>
<div className="aw">
<div className="box reveal"><b>2024</b><p>Outstanding Employee of the Year, Rastriya Banijya Bank</p></div>
<div className="box reveal"><b>2009</b><p>Best Employee of the Year, Rastriya Banijya Bank</p></div>
<div className="box reveal"><b>2008</b><p>International Who's Who of Professionals; First place, Information &amp; Network Security, CDAC India</p></div>
<div className="box reveal"><b>1998</b><p>Colombo Plan Scholarship (later ITEC Scholarship, 2008)</p></div>
</div></div></section>
  );
}

export function Credentials() {
  return (
    <section id="creds"><div className="wrap">
<span className="eyebrow">Credentials</span><h2>Certifications</h2><p className="sub">Internationally recognised credentials in audit, security, governance and infrastructure.</p>
<div className="cert">
<div className="box reveal"><b>ISO 27001 Lead Auditor</b><span>IRCA, London · 2013 &amp; 2022 standards</span></div>
<div className="box reveal"><b>CEH</b><span>Certified Ethical Hacker, EC-Council</span></div>
<div className="box reveal"><b>COBIT 5</b><span>Foundation, ISACA</span></div>
<div className="box reveal"><b>ITIL Foundation</b><span>Service Management, PEOPLECERT</span></div>
<div className="box reveal"><b>MCSE · MCT · MCTS</b><span>Microsoft certifications</span></div>
<div className="box reveal"><b>BCP &amp; DRP</b><span>West Bengal University of Technology</span></div>
</div>
<h3 style={{"margin": "40px 0 12px", "fontSize": "22px"}}>Professional memberships</h3>
<div className="chips"><span className="chip">Life Member, Federation of Computer Association of Nepal</span><span className="chip">Life Member, Management Association of Nepal</span><span className="chip">ISACA</span><span className="chip">Internet Society Nepal (Life)</span><span className="chip">Computer Association of Nepal</span><span className="chip">Lions Club Kathmandu Eureka</span><span className="chip">Nepal Red Cross (Life)</span></div>
<h3 style={{"margin": "40px 0 12px", "fontSize": "22px"}}>Board representation (Former)</h3>
<div className="chips"><span className="chip">Chairperson, RBB Securities</span><span className="chip">Director, Nepal Stock Exchange</span><span className="chip">Director, Nepal Digital Payment Company</span><span className="chip">Director, United Insurance Company</span></div>
</div></section>
  );
}

export function Writing() {
  return (
    <section id="writing" style={{"background": "var(--surf)"}}><div className="wrap two" style={{"gridTemplateColumns": "1.4fr 1fr"}}>
<div><span className="eyebrow">Thought leadership</span><h2>Selected publications</h2><p className="sub" style={{"marginTop": "10px"}}>Search writing on cybersecurity, digital banking and risk.</p>
<Publications /></div>
<div className="box reveal" style={{"alignSelf": "start", "background": "var(--bg)"}}><h3 style={{"marginBottom": "12px"}}>Conferences &amp; talks</h3>
<div className="pub"><span className="y">2025</span><div>Digital Banking &amp; Risk Mitigation for Happiness<br /><i>IMIS, Bhubaneswar, India</i></div></div>
<div className="pub"><span className="y">2018</span><div>Fraud Risk Assessment<br /><i>Nepal Management Council</i></div></div>
<div className="pub"><span className="y">2018</span><div>Cyber Threat &amp; SOC in Nepalese Context<br /><i>APORS Triennial Conference</i></div></div>
<div className="pub" style={{"border": "0"}}><span className="y">2017</span><div>A Glance to Cyber Threat in Nepal<br /><i>ORSN National Conference</i></div></div></div>
</div></section>
  );
}

export function Contact() {
  return (
    <section id="contact"><div className="wrap" style={{"textAlign": "center", "maxWidth": "680px"}}>
<span className="eyebrow">Contact</span><h2>Let's connect</h2>
<p className="sub" style={{"margin": "12px auto 26px"}}>Open to advisory, speaking, board and consulting conversations in banking technology, cybersecurity and digital transformation.</p>
<div className="btns" style={{"justifyContent": "center"}}><a className="btn p" href="mailto:debesh@msn.com">✉ debesh@msn.com</a><a className="btn s" style={{"color": "var(--ink)", "borderColor": "var(--line)"}} href="http://debeshsblog.blogspot.com" target="_blank" rel="noopener">Read the Blog</a></div>
</div></section>
  );
}

export function Footer() {
  return (
    <footer><div className="wrap" style={{"display": "flex", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "10px", "fontSize": "14px"}}>
<span>© <span>{new Date().getFullYear()}</span> Debesh Prasad Lohani · Kathmandu, Nepal</span><a href="#top">Back to top ↑</a></div></footer>
  );
}
