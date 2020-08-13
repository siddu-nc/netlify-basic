export default {
  name: 'blog',
  label: 'Blog',
  folder: 'src/pages/blog',
  create: true,
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'templateKey',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
  ],
}
