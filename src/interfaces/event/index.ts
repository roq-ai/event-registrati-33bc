import { RegistrationInterface } from 'interfaces/registration';
import { AdminInterface } from 'interfaces/admin';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  description?: string;
  admin_id?: string;
  created_at?: any;
  updated_at?: any;
  registration?: RegistrationInterface[];
  admin?: AdminInterface;
  _count?: {
    registration?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  admin_id?: string;
}
