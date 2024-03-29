import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const DashboardPage = lazy(() => import('src/pages/dashboard/Dashboard'));
const MembershipDetails = lazy(() => import('src/pages/dashboard/MembershipDetails'));
const SelfAssessmentForm = lazy(() => import('src/pages/dashboard/SelfAssessmentForm'));
const PageFour = lazy(() => import('src/pages/dashboard/four'));
const PageFive = lazy(() => import('src/pages/dashboard/five'));
const PageSix = lazy(() => import('src/pages/dashboard/six'));
const LinkedRequest = lazy(() => import('src/pages/dashboard/LinkedRequest'));
const PendingRequest = lazy(() => import('src/pages/dashboard/PendingRequest'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <DashboardPage />, index: true },
      { path: 'membershipDetails', element: <MembershipDetails /> },
      { path: 'selfAssessmentForm', element: <SelfAssessmentForm /> },
      { path: 'linkedRequest', element: <LinkedRequest /> },
      { path: 'pendingRequest', element: <PendingRequest /> },
      {
        path: 'group',
        children: [
          { element: <PageFour />, index: true },
          { path: 'five', element: <PageFive /> },
          { path: 'six', element: <PageSix /> },
        ],
      },
    ],
  },
];
