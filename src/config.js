module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'developemnt',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://rachel:1234@localhost/sliced',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://rachel:1234@localhost/sliced'
}