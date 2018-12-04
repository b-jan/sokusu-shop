export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Size',
      name: 'size',
      type: 'string'
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'reference',
      to: {type: 'gender'}
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    }
  ],
  preview: {
    select: {
      gender: 'gender.title.en',
      size: 'size'
    },
    prepare(selection) {
      const {gender, size} = selection
      return {
        title: `${gender} | ${size}`
      }
    }
  }
}
