const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');

const AppError = require('./helpers/AppError');
const globalErrorHandle = require('./controllers/error.controller');

const routes = require('./routes');

const app = express();
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'too many renders from this api',
});
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(hpp());

app.use('/api/v1', limiter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
    return next(
        new AppError(`Cant find ${req.originalUrl} on this server!`, 404),
    );
});

app.use(globalErrorHandle);

module.exports = app;
