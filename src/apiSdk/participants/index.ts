import axios from 'axios';
import queryString from 'query-string';
import { ParticipantInterface, ParticipantGetQueryInterface } from 'interfaces/participant';
import { GetQueryInterface } from '../../interfaces';

export const getParticipants = async (query?: ParticipantGetQueryInterface) => {
  const response = await axios.get(`/api/participants${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createParticipant = async (participant: ParticipantInterface) => {
  const response = await axios.post('/api/participants', participant);
  return response.data;
};

export const updateParticipantById = async (id: string, participant: ParticipantInterface) => {
  const response = await axios.put(`/api/participants/${id}`, participant);
  return response.data;
};

export const getParticipantById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/participants/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteParticipantById = async (id: string) => {
  const response = await axios.delete(`/api/participants/${id}`);
  return response.data;
};
