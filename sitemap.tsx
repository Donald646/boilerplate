import { MetadataRoute } from 'next'
//import { getAllFeatures } from './lib/features'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://academikai.com'

  // Get dynamic feature slugs
  //const featureSlugs = await getAllFeatures()

  // Static routes
  const routes = [
    '',
    '/mission',
    '/pricing',
    "/login",
    "/privacy",
    "/terms"
    // Add other static public routes here
  ]

  const staticPages: MetadataRoute.Sitemap = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }))

  // Dynamic feature pages
  {/*   const featurePages: MetadataRoute.Sitemap = featureSlugs.map(slug => ({
    url: `${baseUrl}/features/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))*/}


  return [...staticPages] // put ...featurePages inside if you want features
}