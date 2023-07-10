import { RegistrationInterface } from 'interfaces/registration';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ParticipantInterface {
  id?: string;
  name: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  registration?: RegistrationInterface[];
  user?: UserInterface;
  _count?: {
    registration?: number;
  };
}

export interface ParticipantGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
}
