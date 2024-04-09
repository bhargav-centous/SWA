import { Helmet } from 'react-helmet-async';

import { Auth0LoginView } from 'src/sections/auth/auth0';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> SWA: Login</title>
      </Helmet>

      <Auth0LoginView />
    </>
  );
}
