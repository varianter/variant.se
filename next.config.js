const withImages = require('next-images');

const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  );
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    disableStaticImages: true,
    domains: [
      'variantno.blob.core.windows.net',
      'chewiesald2ijhpvmb34c.blob.core.windows.net',
    ],
  },

  async redirects() {
    return [
      {
        source: '/jobs/ux-designer-stockholm',
        destination: '/jobs/designer',
        permanent: true,
      },
    ];
  },

  webpack: (config) => {
    // Allows for non-pure CSS Modules in Nextjs.
    // Overrides css loader config setting modules mode to local

    const oneOf = config.module.rules.find(
      (rule) => typeof rule.oneOf === 'object',
    );
    if (oneOf) {
      const moduleCssRule = oneOf.oneOf.find(
        (rule) => regexEqual(rule.test, /\.module\.css$/),
        // regexEqual(rule.test, /\.module\.(scss|sass)$/)
      );
      if (moduleCssRule) {
        const cssLoader = moduleCssRule.use.find(({ loader }) =>
          loader.includes('css-loader'),
        );
        if (cssLoader) {
          cssLoader.options.modules.mode = 'local';
        }
      }
    }

    return config;
  },
};

module.exports = withImages(nextConfig);
