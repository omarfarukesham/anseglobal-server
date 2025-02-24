import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import adminRouter from "./module/admin/admin.router";
import authRouter from "./module/auth/auth.router";
import blogRouter from "./module/blog/blog.router";
import instagramRouter from "./module/instagram/instagram.router";
import seoRouter from "./module/seo/seo.router";
import userRouter from "./module/user/user.router";
import swaggerSpec from "./swagger";

const app = express();

//// CORS configuration
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Parsers
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/seo", seoRouter);
app.use("/api/instagram", instagramRouter);

if (process.env.NODE_ENV === "development") {
  app.use(
    "/api/api-docs",
    swaggerUi.serveFiles(swaggerSpec),
    swaggerUi.setup(swaggerSpec)
  );
} else {
  app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.get("/api/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server is now Live - Alhamdulillah",
  });
});

// Error handling
app.use(globalErrorHandler);
app.use(notFound);

export default app;
