const config = {
  gatsby: {
    pathPrefix: '/pmd1-dx',
    siteUrl: 'https://sharksnack.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title: 'PMD1 DX Wiki',
    githubUrl: 'https://github.com/SharkSnack/pmd-1-dx',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/shark_snack" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/5y7UDFc" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/index',
      '/guides',
      '/pokemon',
      '/items',
      '/system',
      '/dungeons',
      '/other'
    ],
    collapsedNav: [],
    links: [],
    frontline: false,
    ignoreIndex: false
  },
  siteMetadata: {
    title: 'PMD1 DX Wiki | SharkSnack',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: 'https://github.com/sharksnack/pmd-1-dx/tree/main/content',
    favicon: 'https://raw.githubusercontent.com/SharkSnack/pmd-1-dx/main/src/components/images/favicon-32x32.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#008ce3',
      theme_color: '#008ce3',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icon: 'src/components/images/favicon-32x32.png',
      icons: [
        {
          src: 'src/components/images/favicon-32x32.png',
          sizes: `32x32`,
          type: `image/png`,
        },
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
