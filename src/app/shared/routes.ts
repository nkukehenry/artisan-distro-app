import { AuthguardService } from '../services/auth/authguard.service';

const MAIN_ROUTES = [
    {
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full'
    },
    {
        path: 'splash',
        loadChildren: () => import('../pages/splash/splash.module').then(m => m.SplashPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'inventory',
        loadChildren: () => import('../pages/inventory/inventory.module').then(m => m.InventoryPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('../pages/register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'stockists',
        loadChildren: () => import('../pages/stockist/stockist.module').then(m => m.StockistPageModule)
    },
];
export default MAIN_ROUTES;
