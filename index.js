process.env.DEV_ENV = 'true'
if (process.env.DEV_ENV === 'true') {
    require('@babel/register')({
        extensions: ['.js', '.ts']
    });
    require('./src/service');
} else {
    require('./service');
}