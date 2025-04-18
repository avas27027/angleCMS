import { scheme } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {

};

export const fields = [
  { name: 'Text field', description: 'Simple short text', value: 'textField' },
  { name: 'Multiline', description: 'Text with multiple lines', value: 'multiline' },
  { name: 'Url', description: 'Text with URL validation', value: 'url' },
  { name: 'Group', description: 'Group of multiple fields', value: 'map' },
  { name: 'Repeat/List', description: 'A field that gets repeated multiple times (e.g. multiple text fields)', value: 'list' }
]

export const collections: Array<scheme> = [
  {
    id: 'pages',
    name: 'Pages',
    path: 'pages',
    description: 'List of website pages that can be edited here',
    icon: '',
    properties: {
      title: {
        datatype: 'string',
        name: 'Page Title',
        slug: 'Page_Title'
      },
      slug: {
        datatype: 'string',
        name: 'URL Slug',
        slug: 'URL_Slug'
      },
      hero_section: {
        name: 'Hero Section',
        slug: 'hero_section',
        datatype: 'map',
        properties: {
          headline: {
            datatype: 'string',
            name: 'Headline',
            slug: 'Headline'
          },
          background_image: {
            storage: {
              acceptedFiles: [
                'image/*',
              ],
              storagePath: 'page_hero/images',
            },
            datatype: 'string',
            name: 'Background Image',
            slug: 'background_image',
          },
          subhead: {
            datatype: 'string',
            name: 'Subheadline',
            slug: 'subhead'
          },
          call_to_action: {
            name: 'Call to Action',
            datatype: 'string',
            slug: 'call_to_action'
          },
          call_to_action_link: {
            datatype: 'string',
            name: 'CTA Link',
            url: 'true',
            slug: 'call_to_action_link'
          },
        },
      }
    }
  },
  {
    id: 'pages1',
    name: 'Pages1',
    path: 'pages1',
    description: 'List of website pages that can be edited here',
    icon: '',
    properties: {
      title: {
        datatype: 'string',
        name: 'Page Title',
        slug: 'Page_Title'
      },
      slug: {
        datatype: 'string',
        name: 'URL Slug',
        slug: 'URL_Slug'
      },
      hero_section: {
        name: 'Hero Section',
        slug: 'hero_section',
        datatype: 'map',
        properties: {
          headline: {
            datatype: 'string',
            name: 'Headline',
            slug: 'Headline'
          },
          background_image: {
            storage: {
              acceptedFiles: [
                'image/*',
              ],
              storagePath: 'page_hero/images',
            },
            datatype: 'string',
            name: 'Background Image',
            slug: 'background_image',
          },
          subhead: {
            datatype: 'string',
            name: 'Subheadline',
            slug: 'subhead'
          },
          call_to_action: {
            name: 'Call to Action',
            datatype: 'string',
            slug: 'call_to_action'
          },
          call_to_action_link: {
            datatype: 'string',
            name: 'CTA Link',
            url: 'true',
            slug: 'call_to_action_link'
          },
        },
      }
    }
  }
]
