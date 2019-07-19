const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
};

export default {
    mongodbUri: 'mongodb://rproenza:gaxhi4-cotbuh-hucnIj@cluster0-shard-00-00-6c54t.mongodb.net:27017/contests?ssl=true&authSource=admin',
    port: env.PORT || 8080,
    host: env.HOST || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};
