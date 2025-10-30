import { Response } from 'express';

interface ApiResponseOptions {
  message?: string;
  data?: any;
  meta?: any;
}

export class ApiResponse {
  static success(res: Response, options: ApiResponseOptions = {}, statusCode = 200): Response {
    return res.status(statusCode).json({
      success: true,
      message: options.message || 'Success',
      data: options.data,
      meta: options.meta,
    });
  }

  static created(res: Response, options: ApiResponseOptions = {}): Response {
    return this.success(res, { ...options, message: options.message || 'Created successfully' }, 201);
  }

  static error(
    res: Response,
    message: string,
    statusCode = 400,
    errors: any = null,
  ): Response {
    return res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  }

  static unauthorized(res: Response, message = 'Unauthorized'): Response {
    return this.error(res, message, 401);
  }

  static forbidden(res: Response, message = 'Forbidden'): Response {
    return this.error(res, message, 403);
  }

  static notFound(res: Response, message = 'Resource not found'): Response {
    return this.error(res, message, 404);
  }

  static validationError(res: Response, errors: any): Response {
    return this.error(res, 'Validation failed', 422, errors);
  }

  static serverError(res: Response, message = 'Internal server error'): Response {
    return this.error(res, message, 500);
  }
}
