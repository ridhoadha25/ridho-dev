import { portfolio } from './portfolio'

export const socialIconUrls = {
  github: 'https://cdn.simpleicons.org/github/181717',
  linkedin: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/svgs/brands/linkedin.svg',
  email: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/svgs/solid/envelope.svg',
}

export const socials = [
  { label: 'GitHub', href: portfolio.github, icon: socialIconUrls.github },
  { label: 'LinkedIn', href: portfolio.linkedin, icon: socialIconUrls.linkedin },
  { label: 'Email', href: `mailto:${portfolio.email}`, icon: socialIconUrls.email },
]