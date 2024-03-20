import {clientApi} from './clientApi';

export const authService = clientApi.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: body => ({
        url: `/login`,
        method: 'POST',
        body: body,
      }),
    }),
    // State Data
    fetchData: builder.query({
      query: () => '/get_all_state',
    }),

    // Register User
    registerUser: builder.mutation({
      query: body => ({
        url: `/register`,
        method: 'POST',
        body: body,
      }),
    }),

    mendateList: builder.mutation({
      query: body => ({
        url: `/mandate/list`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useFetchDataQuery,
  useRegisterUserMutation,
  useMendateListMutation,
} = authService;
