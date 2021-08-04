import { CurrentCoursesComponent } from './current-courses/current-courses.component';
import { FeaturedCoursesComponent } from './featured-courses/featured-courses.component';
import { PastCoursesComponent } from './past-courses/past-courses.component';
import { UpcomingCoursesComponent } from './upcoming-courses/upcoming-courses.component';

const courseTabRoutes = [
    {
        path: 'featured',
        component: FeaturedCoursesComponent
    },
    {
        path: 'past',
        component: PastCoursesComponent
    },
    {
        path: 'current',
        component: CurrentCoursesComponent
    },
    {
        path: 'upcoming',
        component: UpcomingCoursesComponent
    },
    {
        path: '',
        redirectTo: '/courses/featured',
        pathMatch: 'full'
    }
];

export default courseTabRoutes;
