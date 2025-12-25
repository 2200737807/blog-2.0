import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  // site: { title: "講評世界" },
  // seo: { twitter: "@moeyua13" },
  site: {
    navLinks: [
      { name: 'Posts', href: '/' },
      { name: 'Categories', href: '/categories' },
      { name: '漫画', href: '/categories/漫画' },
      { name: 'Archive', href: '/archive' },
      { name: 'About', href: '/about' },
    ],
    categoryMap: [
      { name: 'MH', path: '漫画' },
    ],
  },
  appearance: {
    fonts: {
      header: '"MiSans-Light", sans-serif',
      ui: '"MiSans-Light", sans-serif',
    },
  },
}
