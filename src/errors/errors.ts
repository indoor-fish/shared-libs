import { AppError } from './AppError';

export class NotFoundError extends AppError {
  constructor(msg: string) { super('NOT_FOUND', msg, 404); }
}

export class ValidationError extends AppError {
  constructor(msg: string) { super('VALIDATION_ERROR', msg, 400); }
}

export class UnauthorizedError extends AppError {
  constructor(msg: string) { super('UNAUTHORIZED', msg, 401); }
}

export class ForbiddenError extends AppError {
  constructor(msg: string) { super('FORBIDDEN', msg, 403); }
}

export class ConflictError extends AppError {
  constructor(msg: string) { super('CONFLICT', msg, 409); }
}
