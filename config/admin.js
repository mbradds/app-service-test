module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '606acf317a75423461b5f3a1561aebda'),
  },
});
