// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    membershipDetails: `${ROOTS.DASHBOARD}/membershipDetails`,
    selfAssessmentForm: `${ROOTS.DASHBOARD}/selfAssessmentForm`,
    brnadSearch: `${ROOTS.DASHBOARD}/brnadSearch`,
    ngoSearch: `${ROOTS.DASHBOARD}/ngoSearch`,
    linkedRequest: `${ROOTS.DASHBOARD}/linkedRequest`,
    pendingRequest: `${ROOTS.DASHBOARD}/pendingRequest`
    // group: {
    //   root: `${ROOTS.DASHBOARD}/group`,
    //   five: `${ROOTS.DASHBOARD}/group/five`,
    //   six: `${ROOTS.DASHBOARD}/group/six`,
    // },
  },
};
