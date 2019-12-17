export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5df9020c213535838e1b5088',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-9y3xqhq8',
                  apiId: '581b484e-dad2-4170-8ae0-64c02bf3e967'
                },
                {
                  buildHookId: '5df9020df5e3f4b1419d4830',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-g5bake4m',
                  apiId: '46fd21b6-6d2a-4822-999b-34272dcff085'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aadimator/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-g5bake4m.netlify.com', category: 'apps'}
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
