import harmony from 'eslint-config-harmony';

const config = {
  ...harmony,
  rules: {
    ...harmony.rules,
    'react/prop-types': 'off',
  },
};

export default config;
