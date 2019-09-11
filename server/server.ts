import express from 'express';
import bodyParser from 'body-parser';
import sessionMiddleware from './modules/session-middleware';
import passport from './strategies/user.strategy';
import userRouter from './routes/user.router';
import adminRouter from './routes/admin.router';
import reviewRouter from './routes/review.router';
import appointmentRouter from './routes/appointment.router';
import measurementsRouter from './routes/measurements.router';
import resourcesRouter from './routes/resources.router';
import needRouter from './routes/need.router';
import infoRouter from './routes/info.router';
import twilioRouter from './routes/twilio.router';

// TEST
import googlecal from './routes/googlecalendar.router';

import { textGentleman } from './modules/textGentleman';

require('dotenv').config();

const app: any = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/review', reviewRouter);
app.use('/api/appointment', appointmentRouter);
app.use('/api/measurements', measurementsRouter);
app.use('/api/info', infoRouter);
app.use('/api/resources', resourcesRouter);
app.use('/api/need', needRouter);
app.use('/api/twilio', twilioRouter);

app.use('/googlecal', googlecal);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT: number | string = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, (): void => {
  console.log(`So awesome. Much wow. Listening on port: ${PORT}`);
});

// Twilio
// app.get('/test/scott', (req: any, res: any) => {
//   textGentleman('+SOME_NUMBER_HERE', 'SOME_MESSAGE');
//   res.send(200);
// })



export default app;