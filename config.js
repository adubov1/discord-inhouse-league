const environments = {
    development: 'development',
    production: 'production'
};

const cfg = {
    discordToken: process.env.DISCORD_TOKEN,
    graphcoolId: process.env.GRAPHCOOL_ID,
    graphcoolToken: process.env.GRAPHCOOL_TOKEN,
    environment: environments.production,
    server: {
        development: 'Test Server',
        production: 'InHouse League NA'
    },
    cmdChannels: {
        development: ['test'],
        production: ['match-bot', 'misc-commands', 'pro-match-bot']
    },
    trueskill: {
        amateur: {
            initialRating: 1500,
            initialSigma: 1.813 * 2
        },
        pro: {
            initialRating: 2500,
            initialSigma: 1.813
        }
    },
    admins: []
};

export default cfg;
