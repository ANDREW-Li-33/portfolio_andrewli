export interface Contact {
  platform: string;
  handle: string;
  /** When omitted, the row is rendered as plain text (no anchor). */
  link?: string;
}

export const CONTACTS: Contact[] = [
  {
    platform: 'GitHub',
    handle: 'github.com/ANDREW-Li-33',
    link: 'https://github.com/ANDREW-Li-33',
  },
  {
    platform: 'LinkedIn',
    handle: 'linkedin.com/in/andrewli033',
    link: 'https://www.linkedin.com/in/andrewli033/',
  },
  {
    platform: 'YouTube',
    handle: 'youtube.com/@andrewli1745',
    link: 'https://www.youtube.com/@andrewli1745',
  },
  {
    platform: 'Email',
    handle: 'ali497@gatech.edu',
  },
];
