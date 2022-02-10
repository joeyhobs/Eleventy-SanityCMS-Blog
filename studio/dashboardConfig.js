export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6205578086eb9934608bd748',
                  title: 'Sanity Studio',
                  name: 'eleventy-sanitycms-blog-studio',
                  apiId: 'e6f941c8-db8a-4b6c-b592-fad737e86733'
                },
                {
                  buildHookId: '6205578031b9d9005aca8282',
                  title: 'Blog Website',
                  name: 'eleventy-sanitycms-blog',
                  apiId: '158716ff-54d2-4b22-8abd-d0f2965b0818'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joeyhobs/Eleventy-SanityCMS-Blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://eleventy-sanitycms-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
