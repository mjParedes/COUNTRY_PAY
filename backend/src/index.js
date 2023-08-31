const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const fs = require('fs');
const path = require('path');
const AppError = require('./helpers/AppError');
const bodyParser = require('body-parser');
const globalErrorHandle = require('./controllers/error.controller');
const uploadDirectory = './public/uploads';
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

const app = express();
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'too many renders from this api',
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cors({
        origin: '*',
    }),
);
app.use(helmet());
app.use(hpp());

app.use('/api/v1', limiter);
// app.use('/api/v1/users', userRouter);
// require('./routes')(app);

const userRoute = require('./routes/user.routes');
const cardRoute = require('./routes/card.routes');
app.use('/api/v1/users', userRoute);
app.use('/api/v1/cards', cardRoute);

app.all('*', (req, res, next) => {
    return next(
        new AppError(`Cant find ${req.originalUrl} on this server!`, 404),
    );
});
// app.use('/public', express.static('/public'));
app.use('/public', express.static(path.join(__dirname + '/public')));
app.use(globalErrorHandle);

module.exports = app;
