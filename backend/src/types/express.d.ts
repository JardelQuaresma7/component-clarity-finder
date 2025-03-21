import { IUser } from '../models/userModel';

declare global {
  namespace Express {
    interface Request {
      user?: IUser & { _id: any };
    }
  }
}