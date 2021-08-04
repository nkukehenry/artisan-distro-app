import { AuthguardService } from '../services/auth/authguard.service';

const MAIN_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'knowledgehub',
        loadChildren: () => import('../pages/knowhub/knowhub.module').then(m => m.KnowHubPageModule)
    },
    {
        path: 'noticeboard',
        loadChildren: () => import('../pages/noticeboard/noticeboard.module').then(m => m.NoticeBoardPageModule)
    },
    {
        path: 'courses',
        canActivate: [AuthguardService],
        loadChildren: () => import('../pages/courses/courses.module').then(m => m.CoursesPageModule)
    },
    {
        path: 'course-details',
        canActivate: [AuthguardService],
        loadChildren: () => import('../pages/course-details/course-details.module').then(m => m.CourseDetailsPageModule)
    },
];

export default MAIN_ROUTES;
