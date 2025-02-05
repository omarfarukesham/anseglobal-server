import express, { Request, Response } from 'express';
import userRouter from './module/user/user.router';
import authRouter from './module/auth/auth.router';
import blogRouter from './module/blog/blog.router';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import adminRouter from './module/admin/admin.router';
import notFound from './middlewares/notFound';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import seoRouter from './module/seo/seo.router';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger'; 
import instagramRouter from './module/instagram/instagram.router';

const app = express();

// CORS configuration
const allowedOrigins = [ 'https://anseglobal.com', 'https://boitoi-marketplace.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true, 
}));

// Parsers
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/seo', seoRouter)
app.use('/api/instagram/', instagramRouter);

app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is now Live - Alhamdulillah',
  });
});

// Error handling
app.use(globalErrorHandler);
app.use(notFound);

export default app;