import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_ROOT = rawApiUrl.replace(/\/+$/, "").replace(/\/api$/, "");

export const contactApi = createApi({
  reducerPath: "contactApi",
  tagTypes: ["Contacts", "Contact", "ContactStats"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_ROOT}/api/contact`,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("adminToken");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Submit contact form
    submitContact: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
    }),

    // Get all contacts (admin only)
    getAllContacts: builder.query<unknown, { page?: number; limit?: number } | undefined>({
      query: ({ page = 1, limit = 10 } = {}) =>
        `/?page=${page}&limit=${limit}`,
      providesTags: ["Contacts"],
    }),

    // Get single contact (admin only)
    getContactById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Contact", id }],
    }),

    // Update contact status (admin only)
    updateContactStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Contact", id },
        "Contacts",
      ],
    }),

    // Delete contact (admin only)
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),

    // Get contact statistics (admin only)
    getContactStats: builder.query({
      query: () => "/stats",
      providesTags: ["ContactStats"],
    }),
  }),
});

export const {
  useSubmitContactMutation,
  useGetAllContactsQuery,
  useGetContactByIdQuery,
  useUpdateContactStatusMutation,
  useDeleteContactMutation,
  useGetContactStatsQuery,
} = contactApi;
