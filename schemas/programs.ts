import { defineField } from 'sanity';

const projects = {
  name: 'programs',
  title: 'Programs',
  type: 'document',
  fields: [
    defineField({
      name: 'programName',
      title: 'Program Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(100).error('Maximum 100 Characters'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'programName',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'aboutTrip',
      title: 'About Trip',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'dayNumber',
              title: 'Day Number',
              type: 'number',
            },
            {
              name: 'details',
              title: 'Details',
              type: 'text',
              validation: (Rule) =>
                Rule.max(500).error('Maximum 500 characters allowed'),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'numberOfDays',
      title: 'Number Of Days',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'file', type: 'file', title: 'FILE' },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(8),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'object',
      fields: [
        { name: 'url', type: 'url', title: 'URL' },
        { name: 'file', type: 'file', title: 'FILE' },
      ],
    }),
    defineField({
      name: 'destinations',
      title: 'Destinations',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Sharm el Sheihk', value: 'sharm el sheihk' },
              { title: 'Cairo', value: 'cairo' },
              { title: 'Alexandria', value: 'alexandria' },
              { title: 'Luxor', value: 'luxor' },
              { title: 'Aswan', value: 'aswan' },
              { title: 'Minya', value: 'minya' },
              { title: 'Assuit', value: 'assuit' },
              { title: 'Sohag', value: 'sohag' },
              { title: 'St. Catherine', value: 'st. catherine' },
            ],
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error('At least one destination must be selected'),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isHidden',
      title: 'Hide this Program',
      type: 'boolean',
      initialValue: false,
      description: 'Check this box to hide the Program from the frontend.',
    }),
  ],
};

export default projects;
