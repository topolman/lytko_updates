import Home from './containers/home';

//const Recruit = React.lazy(() => import('./views/Recruit/Recruit'));
//const WorkAgreement = React.lazy(() => import('./views/Agreements/WorkAgreement'));
//const TermsOfService = React.lazy(() => import('./views/Agreements/TermsOfService'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{path: '/', exact: true, name: 'Главная', component: Home},
];

export default routes;