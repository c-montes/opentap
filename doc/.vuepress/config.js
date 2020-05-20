// Relative links in the sidebar only work for the in-tree files generated by
// vuepress. We therefore need the absolute URL to the API reference in order to link it.
// A cleaner solution would be nice.
let baseurl = process.env.NODE_ENV  === 'development' ? "localhost:8080" : "https://doc.opentap.io";

module.exports = {
    title: "OpenTAP",
    description: 'OpenTAP is an Open Source project for fast and easy development and execution of automated tests.',
    dest: '../public',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'https://gitlab.com/OpenTAP/opentap',
        editLinks: true,
        editLinkText: 'Help improve this page!',
        lastUpdated: 'Last Updated',
        docsDir: 'doc',
        logo: '/OpenTAP.png',
        algolia: {
            apiKey: 'b12f5f1ed342b1663193cb9c8fa1e29e',
            indexName: 'opentap',
            algoliaOptions: {
                hitsPerPage: 10,
            }
        },
        nav: [
            { text: 'Homepage', link: 'https://www.opentap.io' }
        ],
        sidebar: [
            "/",
            {
                title: "User Guide",
                children: [
                  ["User Guide/Introduction/", "Overview"],
                  ["User Guide/CLI Usage/", "CLI Usage"],
                  ["User Guide/Editors/", "Editors"],
                  ["User Guide/CLI Reference/", "CLI Reference"],
                ]
              },
            {
                title: 'Developer Guide',
                children: [
                    ["/Developer Guide/Introduction/", "Introduction"],
                    ["/Developer Guide/What is OpenTAP/", "OpenTAP Overview"],
                    ["/Developer Guide/Getting Started in Visual Studio/", "Getting Started"],
                    ["/Developer Guide/Development Essentials/", "Development Essentials"],
                    ["/Developer Guide/Test Step/", "Test Step"],
                    ["/Developer Guide/DUT/", "DUT"],
                    ["/Developer Guide/Instrument/", "Instrument"],
                    ["/Developer Guide/Result Listener/", "Result Listener"],
                    ["/Developer Guide/Component Setting/", "Component Setting"],
                    ["/Developer Guide/Plugin Packaging and Versioning/", "Plugin Packaging and Versioning"],
                    ["/Developer Guide/Attributes/", "Attributes"],
                    ["/Developer Guide/Appendix A/", "Appendix A: Macro Strings"]
                ]
            },
            [baseurl + "/api", "API Reference"],
            {
                title: 'Release Notes',
                children: [
                    ['/Release Notes/ReleaseNote_OpenTAP9.3.md', "Release Notes - OpenTAP 9.3"],
                    ['/Release Notes/ReleaseNote_OpenTAP9.4.md', "Release Notes - OpenTAP 9.4"],
                    ['/Release Notes/ReleaseNote_OpenTAP9.5.md', "Release Notes - OpenTAP 9.5"],
                    ['/Release Notes/ReleaseNote_OpenTAP9.6.md', "Release Notes - OpenTAP 9.6"],
                    ['/Release Notes/ReleaseNote_OpenTAP9.7.md', "Release Notes - OpenTAP 9.7"]
                ]
            },
            "FAQ/"
        ]
    }
}
