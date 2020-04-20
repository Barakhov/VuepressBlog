module.exports = {
    title: 'Barakhov',
    description: 'Automatically deployed Vuepress site to GitHub Pages with Travis CI',
    base: "/",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'About', link: '/about.html'},
            { text: 'JS30', link: '/js30/'}
        ],
        sidebar: [
            {
              title: 'JS 30',   // required
              path: '/js30/',      // optional, which should be a absolute path.
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/js30/01/',
                '/js30/02/'
              ],
            }
        ]
    }
}