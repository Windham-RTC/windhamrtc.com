export default {
  name: 'officer',
  title: 'Officer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'The order the officer will appear in the list',
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'office',
      title: 'Office',
      type: 'string',
      options: {
        list: ['Chair', 'Vice Chair', 'Secretary', 'Treasurer'],
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
