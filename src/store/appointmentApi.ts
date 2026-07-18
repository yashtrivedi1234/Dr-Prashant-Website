import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

console.log('📡 RTK Query API Base URL:', API_URL);

export interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}

export interface AppointmentResponse {
  success: boolean;
  message: string;
  data?: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    notes: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface AvailableSlotsResponse {
  success: boolean;
  date: string;
  totalSlots: number;
  availableCount: number;
  availableSlots: string[];
  bookedSlots: string[];
}

export const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Appointment'],
  endpoints: (builder) => ({
    createAppointment: builder.mutation<AppointmentResponse, AppointmentData>({
      query: (appointmentData) => {
        console.log('📤 Sending appointment data:', appointmentData);
        return {
          url: '/appointments',
          method: 'POST',
          body: appointmentData,
        };
      },
      invalidatesTags: ['Appointment'],
    }),
    getAppointments: builder.query<AppointmentResponse, void>({
      query: () => '/appointments',
      providesTags: ['Appointment'],
    }),
    getAvailableSlots: builder.query<AvailableSlotsResponse, string>({
      query: (date) => `/appointments/available-slots?date=${date}`,
      providesTags: ['Appointment'],
    }),
  }),
});

export const { useCreateAppointmentMutation, useGetAppointmentsQuery, useGetAvailableSlotsQuery } =
  appointmentApi;
