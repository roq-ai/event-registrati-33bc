import { EventInterface } from 'interfaces/event';
import { ParticipantInterface } from 'interfaces/participant';
import { GetQueryInterface } from 'interfaces';

export interface RegistrationInterface {
  id?: string;
  status: string;
  event_id?: string;
  participant_id?: string;
  created_at?: any;
  updated_at?: any;

  event?: EventInterface;
  participant?: ParticipantInterface;
  _count?: {};
}

export interface RegistrationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  event_id?: string;
  participant_id?: string;
}
