export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5feb30ae5e042e1f1db62472',
                  title: 'Sanity Studio',
                  name: 'landing-page-in-sanity-studio',
                  apiId: 'a89a228c-c4fc-47c1-a0b5-60da25547c7d'
                },
                {
                  buildHookId: '5feb30aedf7a4728d006cbfd',
                  title: 'Landing pages Website',
                  name: 'landing-page-in-sanity',
                  apiId: '233e2db5-14b7-4784-a295-64f1d372276a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Aliyan-webdeveloper/Landing-page-in-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landing-page-in-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
