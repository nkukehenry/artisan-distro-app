import { ExamsComponent } from "./exams/exams.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { ForumsComponent } from "./forums/forums.component";
import { LessonsComponent } from "./lessons/lessons.component";
import { LiveClassComponent } from "./live-class/live-class.component";
import { OverviewComponent } from "./overview/overview.component";

const courseDetailsTabRoutes = [
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'lessons',
        component: LessonsComponent
    },
    {
        path: 'forums',
        component: ForumsComponent
    },
    {
        path: 'live-class',
        component: LiveClassComponent
    },
    {
        path: 'exercises',
        component: ExercisesComponent
    },
    {
        path: 'exams',
        component: ExamsComponent
    },
    {
        path: '',
        redirectTo: '/course-details/overview',
        pathMatch: 'full'
    }
];

export default courseDetailsTabRoutes;
