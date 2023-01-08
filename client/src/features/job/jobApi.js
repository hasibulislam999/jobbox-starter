import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // post new job
    postJob: builder.mutation({
      query: (data) => ({
        url: "jobs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),

    // apply new job
    applyJob: builder.mutation({
      query: (data) => ({
        url: "apply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),

    // fetch all jobs
    getJobs: builder.query({
      query: () => ({
        url: "jobs",
      }),
      providesTags: ["Jobs"],
    }),

    // fetch all applied jobs
    getAppliedJobs: builder.query({
      query: (email) => ({
        url: `applied-jobs/${email}`,
      }),
      providesTags: ["Jobs"],
    }),

    // fetch specific job
    getJob: builder.query({
      query: (id) => ({
        url: `job/${id}`,
      }),
      providesTags: ["Job"],
    }),

    // ask question
    question: builder.mutation({
      query: (data) => ({
        url: "query",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),

    // reply question
    reply: builder.mutation({
      query: (data) => ({
        url: "reply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),
  }),
});

export const {
  usePostJobMutation,
  useGetJobsQuery,
  useGetJobQuery,
  useApplyJobMutation,
  useGetAppliedJobsQuery,
  useQuestionMutation,
  useReplyMutation,
} = authApi;
