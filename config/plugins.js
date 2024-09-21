module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      v4ComptabilityMode: true,
      defaultLimit: -1, // all posts to be retreived in a single request
    },
  },
});
