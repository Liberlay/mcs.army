const BRIGADES = ['32', '35', '36', '37', '38', '406']

export default function sitemap() {
  return [
    {
      url: `https://mcs.army`,
      alternates: {
        languages: {
          uk: 'https://mcs.army',
          en: 'https://mcs.army/en',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...BRIGADES.map((id) => ({
      url: `https://mcs.army/brigades/${id}`,
      alternates: {
        languages: {
          uk: `https://mcs.army/brigades/${id}`,
          en: `https://mcs.army/en/brigades/${id}`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    {
      url: 'https://mcs.army/vacancies',
      alternates: {
        languages: {
          uk: 'https://mcs.army/vacancies',
          en: 'https://mcs.army/en/vacancies',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mcs.army/privacy-policy',
      alternates: {
        languages: {
          uk: 'https://mcs.army/privacy-policy',
          en: 'https://mcs.army/en/privacy-policy',
        },
      },
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
