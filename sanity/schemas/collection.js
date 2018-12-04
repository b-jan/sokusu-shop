export default {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeBlockContent'
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'image'
    },
    {
      name: 'parents',
      title: 'Parent collections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'collection'}]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'banner'
    }
  }
}
