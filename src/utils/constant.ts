// user

export const USER_LOGIN = "/users/login-user-with-token";
export const USER_PROFILE = (_id: string) => {
  return `/users/${_id}`;
};
export const CREATE_USER = "/users";
export const GET_USER = "/users";
export const UPDATE_USER = "/users";

// bookmark
export const CREATE_BOOKMARK = "/bookmarks";
export const GET_BOOKMARK = "/bookmarks";
export const GET_SUMMARY_BY_VIDEO_ID = "/bookmarks/get-summary-by-videoid";
export const GET_BOOKMARK_BY_ID = (id: string) => `/bookmarks/${id}`;
export const BOOKMARK_BY_ID = (id: string) => `bookmarks/${id}`;

export const UPDATE_BOOKMARK = "/bookmarks";
export const DELETE_BOOKMARK = "/bookmarks";
export const SHARE_BOOKMARK = "/bookmarks/share";
export const UNSHARE_BOOKMARK = "/bookmarks/unshare";
export const GET_SHARED_BOOKMARKS = "/bookmarks/shared";
export const GET_COMPANY_BOOKMARKS = "/bookmarks/company";
export const INCREMENT_ACCESS_COUNT = "/bookmarks/access-count";
export const ADD_TAGS = "/bookmarks/add-tags";
export const REMOVE_TAGS = "/bookmarks/remove-tags";

// Aggrgation
export const GET_BOOKMARKS_BY_TAG = "/bookmarks/tag";
export const GET_BOOKMARKS_BY_USER = "/bookmarks/user";
export const GET_BOOKMARKS_BY_COMPANY = "/bookmarks/company";
export const GET_BOOKMARKS_BY_USER_AND_COMPANY = "/bookmarks/user-company";
export const GET_BOOKMARKS_BY_USER_AND_TAG = "/bookmarks/user-tag";
export const GET_BOOKMARKS_BY_COMPANY_AND_TAG = "/bookmarks/company-tag";
export const GET_BOOKMARKS_BY_USER_COMPANY_AND_TAG =
  "/bookmarks/user-company-tag";
export const GET_BOOKMARKS_BY_USER_AND_SEARCH = "/bookmarks/user-search";
export const GET_BOOKMARKS_BY_COMPANY_AND_SEARCH = "/bookmarks/company-search";
export const GET_BOOKMARKS_BY_USER_COMPANY_AND_SEARCH =
  "/bookmarks/user-company-search";
export const GET_BOOKMARKS_BY_TAG_AND_SEARCH = "/bookmarks/tag-search";
// end

export const SEARCH_BOOKMARKS = "/bookmarks/search";

// task
export const CREATE_TASK = "/tasks";
export const GET_TASK = "/tasks";
export const UPDATE_TASK = "/tasks";
export const DELETE_TASK = "/tasks";
export const ASSIGN_TASK = "/tasks/assign";
export const REASSIGN_TASK = "/tasks/reassign";
export const GET_TASKS_BY_USER = "/tasks/user";
export const GET_TASKS_ASSIGNED_TO_USER = "/tasks/assigned";
export const GET_PERSONAL_TASKS = "/tasks/personal";
export const GET_COMPANY_TASKS = "/tasks/company";
export const MARK_TASK_AS_COMPLETED = "/tasks/mark-completed";
export const ADD_COMMENT = "/tasks/add-comment";
export const ADD_ATTACHMENT = "/tasks/add-attachment";
export const REMOVE_ATTACHMENT = "/tasks/remove-attachment";

// reminder
export const CREATE_REMINDER = "/reminders";
export const GET_REMINDER = "/reminders";
export const UPDATE_REMINDER = "/reminders";
export const DELETE_REMINDER = "/reminders";
export const ASSIGN_REMINDER = "/reminders/assign";
export const REASSIGN_REMINDER = "/reminders/reassign";
export const MARK_REMINDER_AS_NOTIFIED = "/reminders/mark-notified";
export const GET_REMINDERS_BY_USER = "/reminders/user";
export const GET_REMINDERS_ASSIGNED_TO_USER = "/reminders/assigned";
export const GET_PERSONAL_REMINDERS = "/reminders/personal";
export const GET_COMPANY_REMINDERS = "/reminders/company";

export const LOGO_BASE64 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAABB2lDQ1BTa2lhAAAokX2QP0vDQByGn1NBBEEHBweHG1wttQXp4FSF4BojpN0uMUYh/7ikdHURZ0GcRfwM9YOILi79CA7irJeA1yW+08PLy93DD8QcYKULaVZp1xlKfzSWq3MEgjoqLAvaI+D7vdm+7v2za8vaeVSGwCfgaX80BnEMbMUN+4aDhhPD06qofr+9Nqw99wjEPbAZL3CwwGGhzf4ZOEyTSWi9WY+ys1NgAOxQ4uIwROKgSJlQIZlyRcUlkh4dekg8NIqMkgsijLJsnswfYfAFy3e2Cx7g5Ra2P2y3+wQbNzB7s529YaG0+rvOUr/f4ixrZ4ecnJiECMkJGSGd2rXLPgc/b9ZFPoj6CWEAABH9SURBVFiFZVlZcBzXdT3nvp7BDAYASawkAAIgARCguIsiJVLUaonarNiREsuLYquSVCrfqUrlJ85PvpOP/CTlxJVUnCh22aVEmymJkkhKJMXV4k5xAUiAWIgdGACzdb9789EzpJR0oQaN6cZ7r8+799x7TvPAf4bv/FsJACEGM4uECQBmIegIAdTiq2ZgmK5OFHKUwG/ZY82tcvaIdvTpnmeT189Hh9/xYSHZ0aONrRgdtKlRZ2beexckCDPzpANo8ADL02kkkgBgUFPuejoIQBI0wAgYCDECAEwAGisXBMkkHn6G7etx46JO3MGmXW7gou17ibMTPPQ/1raOXf0YuIg9z7NhteWW5O2fY8sjNjnCwasWFgm4eEADAQKAEcLKdARhQAAAENAAojx9fAthNGOm1nY8bksLtpRla2fi41/j6VehnvlluXkJ3Zstv6Qr61GVRqnAdIbNbVIqWCLJNZ26cSdbuzRdY5dPMVOLxXl4JUDG49N4bzqWZ40XpDCAgMVIGQwGbViDUoE9Wy1VjfPHbFUzXMLq1wDA9KQ2tqqPODGihbxu2o3r521mHOmMLi+ykNdinp39qK4lxXm1536gK5tw7Us7/QkBLUNgMDPSAMAURgDu9Vf/5vo5T4DlhStMVNG7VZ//EZeylkpBPcIS09U6OeY3PSQjg1bMI5Gwzj5m6qQqFWTnmaxi92Y2tWJqXKfHMHgJQcAbF4zCpTls3SuXT/nuTYmlBZ/O6MKMCMlypEi8fwDb1kl5yyzeMgAmq1qQSluQkBWr2LMZ54/Z1r3s6JULJ2w5y9lJ1K1y89P+xgUp5CQswUeqJgLQIZlyqWo0tPjerQxLmJ3C7474zg3u1Me69/nEwGXds1++PIq6BpsZ5/RdArQYB0i8qCDGC2YgzJCp0+/8sUyN2pWzOjIg1TW6fjMO/gpre21dPybG7MvPuTiPqESQIAUWR6QHrGTFAhbnODUiNy+gZhW6N1pXP29dxchNl8poVdoAbN/H6XHb+Tje+pnll1HeMhgsjiFTs6icVmaqvph3qzvY1u0Ovx1VV+PuiO18ilGIz3+r2VkVGmmgJwBzBjUYDYgTGyRo1CjC/KScnbTqFdHWPUH7ejt/PEqmtG9HMHzDxm/j2deEVLOIijIXmMA0IIUMABhJQ36J7/8HnvqOJdMYuRnUN3HHY/7ySd656dQgElEcygFHA2lCGCgGUEEJAIgJCIPANLcgpw66td368DOJy6d48iOq6XOv2fmjyC8HIgCDmAWhAF0AxGlolTzE0pwceRuFnG/vsZ7N+OIA56aFQtJiDrFy+JcTFeUhzCrn4L1TkgA4fEMWZvXhZ60qxaFrOH8MIwNSHuvrH0AAM1hMnQqYQU1lfgpdD+j6B+Tz97CchVDjUFFTmhEGmJmZigTqAlMPH8FMhQrQVCsrMkBpSmJ+Gkffw54XvFfcvEARI8zuEQ3UjIQFKPPmfT40Y0uH9u/ksfdkOUtSvwbH/Xvq6q2rX7u3sGmNy87ZwGW7fZUz4xCH2lWoXclkFfLLmJ1EfgkkRSy3JCc/wqMv+VwW40PkfYTvLyAAy0xdjnVlps6278PZQ1icj5OxsgEGM3qlC7DxQbz846C9OxEkyqPue9FmJ/yZw1FdPXu3JDN1EIGPODKoH/5XdO0cYaRwcQFnj8iup2xh1nJLBO+lPQEYGKAMV5mpSe3bjpFBTI5AROPABGEqQdLWdFlTq3b2yr6XqmpXyr0HXFrwqmhc7Z7/QUxsGLtdunQqWrcx6NueaGnnL/4uvHrGYp6YGrXBK7Ztr544SFMDFWCFqS0o14m44Ko1rNHmDn7ym7iOEGYGM0VDi3/2NdmxL52po3P8ekDPTkS/fTMfJLj/D6vqWxIAfKRnDod19XLiYNTRm1jZGLz4ut26WsgtORGANnAZbS+joUUnR00qPGRl7iEJBwoo4mT9A7x6WsKiI4UUUGCuuU3e+KvkEy+n6lY556QMbyVuF2Z9Iol0hhOjPv5mcV5nJzh4xTp6mUzCzAo569jgWtYK6UApFeXGeXlgN10gYDy7IyscgApK9U1oaQ8uHidjgAwGJKt019PWvTn4Gip2+1p4+yvfuzVoWxe0r09OjeHOQHT1d2FrV+CcHH6ntPMJ1705kUzBq106GQ5c9j/+y6QP+f5/hKcPmRonRtC3HTUrNTsXs4iVi+uPXvnra1+GBvWRtff47LwfHwKhZh6w7k328hsyOeZrV7KmTihUtfHh6OCv8w0tcuVMtPHBRJCUtvVu446Ej/T4h8WBK+H6jcG2vVX5ZT16YPncscLinO3/XmpFvcvUSvcmDl0rTY9pFEISVtfgp0dJqJnCtLVLAlLAIAisvQd923HhuJEBBebZ9yBf/4tEQ4trXx/99j9LKxuj1i4uzmNuCnWrgjsD1rM5cAGjyO4OR+kMN++uqkrJZ+9FjWscwKHrCnOmsvvpqkytGxuKgoDNbW7fS8mbl9WHsjBtu7/lBi7QexIKJShxcUX/g9bcjrHb3LoHc5NYXsTKJvvunwQNLQGA5ragvjlqWM0LJ0rPfz+9pjMIAhRySNcA4K0rxZOfREEC3/6j1IZtyXSNHDsQPvIMmlp54YRkarVhtdy5GR5+p5RIyAs/rGpqZTKFfITsPEpFTaUTy4sGljs0gVky5bv67OTHOHOIdwaj2nqvXvu2Y213YGZmFiS4cWdw46JPpqy101Wl6AJm6ihCAGEJDS1aKvjJUQ9wbXfiqe8kTx8K52f0lT9NvvR6dVXKZecsVW3pGg1LUIWpAVbK2/EPo2JeAYOpmQEICEYlzs9oVy/nVlpzm9y5zmQKW/YEYYjTh/LOyc7HqzbuSHRtkBOfFE58XHr0hSrn7qd9z+ZAnDW326lDhSDJjp6gZW2wba8e/zDq7E0kklxe9Ncv+DWdwdpuaWrljQsaFigggOV5J+WaVqbqAISq+/Izbn/MOvt5+ZQszEimzlavDUYGdXoMVWl/dyTq6Emka9ze/alP3iqdPVLq2RynJ5Mp1NS5/h0OwOq17vgHpblJM8O1c+ETv5dMZwTActays/bo88mW9mB+xh894L13FACk/J8GjQEMhOWW+MUBIc17UOLeC/WNXF7C+BAeerKMR1XaPf7t5CdvlQavlCg0BeAffSGxtjsJoG1dcs9+vvvv4ZpOrauXdf1l1m5uC5542Y68W9i2N3HyIz/0Vdy8lmsrUWnn4+JqULUoVl4wNSgMYYhCzrV2JV79s9TJg/nJsaipNQCwMBvll+yl15OAqDdVTI2FRw/kH3mG6/oTAFY2Sn2LRqG1dn2jPVm3MZif9v/yt+HSAg0KkGZmmqzyphaGBDQWOQEgQJCptbAkUUkIhbhSwQau6PoHkEpL77bkp28Vk8kwDO304XwyGTz4WGLdRn7+21J+yfa9lHj6u9VH3gmjEnq3JGpWuBd/mD7+UTFdLZXAAIAowuBVXc4mKAAUgFDWP8DerSjm5OIphkWGRTon7iff/2lVqrT/Nd4ZQHaOQgPFVAr5aOseqUpJda3cvqqToz6/ZHMzvrXDiaM4XjgRNrawkEPP5sTqDjn2YTg/E1HQ1BrU1PLMkXDD1sAFBFDI68mD4Ue/NB8JYj1oaFyN7fvs2PtWKsjTr9j2fdbVZ+rF/eS1nyp8OoO7t7Wq2nKLRghpCzO+VPIdvZJKiUvY4pzu/16qcY2I46ZdyXQNB6/6sdu2Z38ynZHqGi4tRNPj/voF39XnVjW74evh6KDNz9iNi6UDb5aOvs9SwSpco1CsakLtKr16Rs1k615EoeWWZGmeQbEgF09ITZ01t7G5nR//GsUCQUDl6Lty60pp40OgYGQAdwZ9Z2+ys7e8C9v3Jm59FdU3x00IV9S7Ozd9Ko0gARFoJG/9DHTeIlUEEveypIEGQjg7IcmkPfptCxI2PW7FvF08jtZ1EpihpQ1dfXQO0+OaWYFCoSxuVTk6KI8+j617g9lJf/Jg6EOtrglS1VzZKCJ07n5TvWFrsrFF0jVSXePmpqJzX8CM8AZQJK6e95tSEvkcL52Uh5/lkXexrl8fetKV8sjOIRCx21/Z8Q+NlPwy2nswc9dIxLngI5u8ixUNsqLBpTN89xd5Jz5Zhe2PuckRXZw37y0mSRewqS0BoFT0n71XvDtUFqYGJWIUFUaQLDdgWlvvz30RLc4lOnpx+5o/+zm7N0EIlIro6uOzfyC1K9jWJelqhd3X+ldPY3rcA1jdEWx6KGhcTdBGB6PMCpaK9tEvS6O3ouysLmc1O+eHb0Rv/XP4yW9giopSjl0NqzTP5XawOqOdvTY5jCCB059iYQZRKeYhUr0MfaUwC0O7O+LbuhM3L5bVFsnxIf3NP4YvvwEX2PCNqLUjuXVPsrMvmJvSwUv84E09/HYpXctE0kpFzWWD5UXCYtHEsqNwT73HKpWqitUdyM7Lcpbb92HTLs7cRW5RUJaIxitnpG29Pfl77sB/We9WjA5oYfm+vr5wArevh6vb9dtvVPVsTgIYuhH+8h+ioWtCcHHOsnM0o5mKKwNzD2KDsQx4RSuYVWfQvQWnPqV6vfalK+Q0t2jq7Z6UDsMSDCgVg/lpvaW+f6f97ogxHg0KYG5SVtazrSsBcGIk+sXfF+5cp4gZDFDAkWYWwWL5Evft8Yo8NMbH08RAM+3ZYlNjkp1F58awlLcb5xlFBniYBKQIE97j8H+bEblskMu63d/Sjg02ctNBWHkyFgtWLJoE+v4vwtGbiSCIpbQBBpaTP5bShCJObzNCIC42AkCaYm2PrumyQ//t6pv1D/9coghv/RNHBmOJW5HShC1mJQjsye+icY2e+JCbdyO3ZDN3ywYHiYU5TI/7Yg4Xv5CKeixraMP/OXj/99eumaK+xbY8YicO0gma2/TiSZ+pSUyNScUDKRudPpa0yZS1rUfDaoB2+bTf9bSuavbqFVDQcsv6yVu5T9+O8vk4SiqNVTmJFKaI9Xi52zKDWUWhq/oVjf6hp/T8cZ0et3Wboud+iOqa4IM3USrF2tAAC+49EIn8Mt75N2tfz6dfxaWTdvU0H3mWX36ud4eFAoIXjzuSUq6b/CYKsQXHbwAV2xMGM7asxY7HceUU7w7Llke0Ko2JITd4xRcKQUzi8ShCkHEHBAKcn5TlLAC/bZ/Q4cIx7ngM/TssCAij9+JV4rkJfm0R3/iJj/iqGYME+7bbzif55WcydF1S1fLgE7Kun2//HJdOVO6sGCXu9Vd+eu1cVNlqA3VhlmERk6O2Yx8nR+zqWevqt64+K+SwvOhN4/3We0Rn9/7XPMvOjgFmChE0tdm2fVZTZ198YItz6OrXxTm7dQXpDEYG4SNjGWIzQ+u6sra/F3gWj3/ppDywSwt5jTz2vmgnPkKmNtj+GBZm9M4NnZ1gfsmsnFv3mcbMKi6BpjOsb7G1vbaigRdPYPw2g4R/8vd1406eO4qj78vxDysea7mwlEMxAIUIKqankQSdOFw/h5m79vAzXJq33/8TOfmxHX1fMrXugQel+lGODmh2jvllKeTMhzATiolzqYxUZ1C7ytrXS2EZV35nU2NGk027rbXLUTA7qdlZEefMWK4kjEu0UVB24L6RmpVDI5selcNvo6vP+nfqt17lZ+9FBpw+DACZOq7usN5tSCQgDqSa0XtqhIkRHR/iwCXklliVwpoOv2E7O3uZWcEP3rQzh9zMRKWn/sa8ds/9UEOESuFRqFhMzx6wpTl+dVZzS9bcLj2bsbJJ7w5Fi7NSs1KHr/H6uQhmZkqKGn3knXM+Yl29GrDvRVnba6O3tXODO/VpFCT88PWgVADFw0ioAaYRyzJIzWKzgUKUTU+YCTTGkAbSGekjHbyM4evc9qgtZzk34Tbt0r0vuuvn0NHLyRGbGEHjGlcqcvSW3/uc3LiIBx9PXjzhVzVhTQdnJ+SzdzE2mMwvmwjoyrXIIJVtitWzkgTKW8bY2L2HYuWPChcDUcQzh+HEvOfctNwd9lNj3LybYQkSYM9+yS7YwV9xZZMsZ7VU0IbVPPWxfvEB5qZQKAQERe6Zpf+P0HH/ZUdgMIM3u7ec8jsHwKPsusYOpgAWRUrR4QGMDxsMU+O+lLemdh0fLtaskNHb+va/lsZuBreu+HyOxYKYGUwpahVDyRDLoPJrgwq5V9o3yP8CbAMb1pnHsksAAAAASUVORK5CYII=";


// Quiz Prgrogress
export const CREATE_PROGRESS = 'quiz-progress';
export const GET_PROGRESS = 'quiz-progress';
export const GET_PROGRESS_BY_ID = (id: string) => `quiz-progress/${id}`;
export const UPDATE_PROGRESS = 'quiz-progress';
export const DELETE_PROGRESS = 'quiz-progress';
export const ADD_RESPONSE = (progressId: string) =>
  `quiz-progress/${progressId}/responses`;


// Quiz
export const CREATE_QUIZ = 'quiz';
export const GET_QUIZZES = 'quiz';
export const GET_SINGLE_QUIZ = 'quiz/url';
export const GET_QUIZ_BY_ID = (id: string) => `quiz/${id}`;
export const UPDATE_QUIZ = 'quiz';
export const DELETE_QUIZ = 'quiz';
export const ADD_QUESTION = (quizId: string) => `quiz/${quizId}/questions`;
export const REMOVE_QUESTION = (quizId: string, questionId: string) =>
  `/quiz/${quizId}/questions/${questionId}`;

