import * as yup from 'yup';

export const registrationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  event_id: yup.string().nullable(),
  participant_id: yup.string().nullable(),
});
