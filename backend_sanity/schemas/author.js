export default{
    name:'author',
    title:'Author',
    type:'document',
    fields: [
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'bio',
            title: 'Bio',
            type: 'text'
        },
        // If Author has their own page you can use a slug for their URL
        {
            name:'slug',
            title:'Custom URL',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
    ]
}