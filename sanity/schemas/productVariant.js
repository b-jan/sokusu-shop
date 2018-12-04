export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Size',
      name: 'size',
      type: 'number'
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
  ]
}
