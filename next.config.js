module.exports = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true, // Disables built-in optimization
        domains: ['localhost', '127.0.0.1', 'a4jq1r9ne2.execute-api.us-east-1.amazonaws.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
                    { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
                ],
            },
        ]
    } //,
    // async rewrites() {
    //     return [
    //         {
    //             source: '/speaking/:taskType/:promptId',
    //             destination: '/speaking/[taskType]/[promptId]',
    //         },
    //     ]
    // }
};