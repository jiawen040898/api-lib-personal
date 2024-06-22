module.exports = {
    branches: ['+([0-9])?(.{+([0-9]),x}).x', 'master'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
            '@semantic-release/npm',
            {
                npmPublish: true,
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['package.json', 'CHANGELOG.md'],
                message:
                    'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
        '@semantic-release/github',
        [
            '@semantic-release/exec',
            {
                verifyReleaseCmd: 'echo ${nextRelease.version} > .VERSION',
            },
        ],
    ],
};
