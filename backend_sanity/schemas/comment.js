export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => [
                Rule.required().error('Name is required'),
                Rule.min(2).error('Name must be at least 2 characters long'),
            ]
        },
        {
           name: 'email',
           title: 'Email',
           type: 'email',
           validation: Rule => Rule.required().error('An email is required'),
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'text',
            validation: Rule => [
                Rule.required(),
                Rule.min(5).error('Must be at least 5 characters long'),
            ]
        }
    ]
}