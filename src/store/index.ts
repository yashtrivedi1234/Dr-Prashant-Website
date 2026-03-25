export { store } from './store';
export type { RootState, AppDispatch } from './store';
export { appointmentApi, useCreateAppointmentMutation, useGetAppointmentsQuery, useGetAvailableSlotsQuery } from './appointmentApi';
export type { AppointmentData, AppointmentResponse, AvailableSlotsResponse } from './appointmentApi';
