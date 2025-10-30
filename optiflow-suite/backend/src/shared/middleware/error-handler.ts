import { Request, Response, NextFunction } from 'express';
import { AppError, ValidationError } from '@shared/utils/app-error';
import { logger } from '@shared/utils/logger';
import { config } from '@config/index';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (err instanceof ValidationError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      code: err.code,
      errors: err.errors,
    });
    return;
  }

  if (err instanceof AppError) {
    logger.error(`AppError: ${err.message}`, {
      statusCode: err.statusCode,
      code: err.code,
      stack: config.env === 'development' ? err.stack : undefined,
    });

    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      code: err.code,
      ...(config.env === 'development' && { stack: err.stack }),
    });
    return;
  }

  // Unknown errors
  logger.error('Unexpected error:', err);

  res.status(500).json({
    success: false,
    message: config.env === 'development' ? err.message : 'Internal server error',
    ...(config.env === 'development' && { stack: err.stack }),
  });
};
