export default {
  name: 'gender',
  title: 'Gender',
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
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'banner'
    }
  }
}
