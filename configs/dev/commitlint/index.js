const ISSUE_PREFIXES = ['CHAR-', 'DEV-'];
const WHITELISTED_TYPES = ['ci', 'chore'];

module.exports = {
    parserPreset: {
        parserOpts: {
            issuePrefixes: [...ISSUE_PREFIXES],
        },
    },
    plugins: ['commitlint-plugin-function-rules'],
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', Infinity],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'function-rules/references-empty': [
            2,
            'never',
            (parsed) => {
                if (WHITELISTED_TYPES.includes(parsed.type)) {
                    return [true];
                } else if (parsed.references.length === 0) {
                    return [
                        false,
                        'footer/references should have JIRA ticket number or link',
                    ];
                }

                for (const ref of parsed.references) {
                    let isValid = [
                        'https://pulsifi.atlassian.net/browse',
                        ...ISSUE_PREFIXES,
                    ].some((link) => ref.raw.includes(link));
                    if (!isValid) {
                        return [
                            false,
                            'footer/references should have JIRA ticket [CHAR]',
                        ];
                    }
                }
                return [true];
            },
        ],
        'header-max-length': [2, 'always', 100],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],
    },
};
