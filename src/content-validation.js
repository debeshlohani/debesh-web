const link = { label: 'string', href: 'string', 'newTab?': 'boolean' };
const heading = { eyebrow: 'string', title: 'string' };
const section = { ...heading, description: 'string' };
const shape = {
  site: { title: 'string', description: 'string', language: 'string' },
  navigation: { brand: 'string', links: [link], themeLabel: 'string', themeAccessibleLabel: 'string' },
  hero: {
    tagline: 'string', name: 'string', highlightedName: 'string', roles: ['string'], introduction: 'string',
    buttons: [link], portrait: { src: 'string', alt: 'string' }, profile: [{ label: 'string', value: 'string' }],
  },
  stats: [{ value: 'number', suffix: 'string', label: 'string' }],
  about: {
    ...heading, paragraphs: ['string'], topics: ['string'], educationTitle: 'string',
    education: [{ year: 'string', degree: 'string', institution: 'string' }],
  },
  career: {
    ...section, filterLabel: 'string', tracks: [{ id: 'string', label: 'string' }],
    jobs: [{ track: 'string', title: 'string', organization: 'string', dates: 'string', description: 'string' }],
  },
  expertise: { ...section, items: [{ icon: 'string', title: 'string', description: 'string' }] },
  recognition: { ...heading, awards: [{ year: 'string', description: 'string' }] },
  credentials: {
    ...section, certifications: [{ title: 'string', description: 'string' }],
    membershipsTitle: 'string', memberships: ['string'], boardsTitle: 'string', boards: ['string'],
  },
  writing: {
    ...section, searchPlaceholder: 'string', searchLabel: 'string', noMatches: 'string',
    publications: [{ year: 'string', title: 'string', publisher: 'string' }], talksTitle: 'string',
    talks: [{ year: 'string', title: 'string', venue: 'string' }],
  },
  contact: { ...section, buttons: [link] },
  footer: { copyright: 'string', backToTopLabel: 'string' },
};

function check(value, expected, path) {
  if (typeof expected === 'string') {
    if (typeof value !== expected || (expected === 'number' && !Number.isFinite(value))) {
      throw new Error(`${path} must be ${expected === 'number' ? 'a number without quotes' : `a ${expected}`}.`);
    }
  } else if (Array.isArray(expected)) {
    if (!Array.isArray(value)) throw new Error(`${path} must be a list inside [ ].`);
    value.forEach((item, index) => check(item, expected[0], `${path}[${index}]`));
  } else {
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${path} must be an object inside { }.`);
    for (const [field, type] of Object.entries(expected)) {
      const key = field.replace(/\?$/, '');
      if (field.endsWith('?') && !(key in value)) continue;
      check(value[key], type, `${path}.${key}`);
    }
    const allowed = new Set(Object.keys(expected).map((key) => key.replace(/\?$/, '')));
    for (const key of Object.keys(value)) {
      if (!allowed.has(key)) throw new Error(`${path}.${key} is not a recognized field. Check its spelling.`);
    }
  }
}

export function validateContent(content) {
  check(content, shape, 'content');
  if (!content.hero.roles.length || content.hero.roles.some((role) => !role.trim())) {
    throw new Error('content.hero.roles needs at least one non-empty role.');
  }
  const tracks = content.career.tracks.map((track) => track.id);
  if (!tracks.includes('all') || new Set(tracks).size !== tracks.length) {
    throw new Error('content.career.tracks needs unique IDs and an "all" track.');
  }
  for (const job of content.career.jobs) {
    if (job.track === 'all' || !tracks.includes(job.track)) throw new Error(`Unknown career track "${job.track}" for "${job.title}".`);
  }
  if (content.stats.some((stat) => stat.value < 0 || !Number.isInteger(stat.value))) {
    throw new Error('Each stats value must be a whole number of zero or more.');
  }
  return content;
}
