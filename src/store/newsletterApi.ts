import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

console.log('📡 RTK Query API Base URL:', API_URL);

export interface NewsletterData {
  email: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
  subscriber?: {
    _id: string;
    email: string;
    subscribedAt: string;
    isActive: boolean;
  };
}

export interface SubscriptionCheckResponse {
  success: boolean;
  isSubscribed: boolean;
  subscribedAt?: string;
}

export const newsletterApi = createApi({
  reducerPath: 'newsletterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/newsletter`,
  }),
  tagTypes: ['Newsletter'],
  endpoints: (builder) => ({
    subscribeNewsletter: builder.mutation<NewsletterResponse, NewsletterData>({
      query: (data) => {
        console.log('📤 Subscribing to newsletter:', data.email);
        return {
          url: '/subscribe',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Newsletter'],
      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          console.log('✅ Newsletter subscription successful:', result.data);
        } catch (error) {
          console.error('❌ Newsletter subscription failed:', error);
        }
      },
    }),

    checkSubscription: builder.query<SubscriptionCheckResponse, string | null>({
      query: (email) => {
        if (!email) return '/check?email=';
        return `/check?email=${encodeURIComponent(email)}`;
      },
      providesTags: ['Newsletter'],
    }),

    unsubscribeNewsletter: builder.mutation<NewsletterResponse, string>({
      query: (id) => {
        console.log('📤 Unsubscribing from newsletter:', id);
        return {
          url: `/unsubscribe/${id}`,
          method: 'PATCH',
        };
      },
      invalidatesTags: ['Newsletter'],
    }),
  }),
});

export const {
  useSubscribeNewsletterMutation,
  useCheckSubscriptionQuery,
  useUnsubscribeNewsletterMutation,
} = newsletterApi;
