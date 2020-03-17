import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import * as PropTypes from 'prop-types'
import routes from "../routes";
import {connect} from "react-redux";

import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

import Header from './header';
import Footer from './footer';
import Page404 from '../containers/page404';
import Page500 from '../containers/page500';
//const DefaultAside = React.lazy(() => import('./DefaultAside'));

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#2f2f2f',
    }
}));

const DefaultLayout = (props) => {
    const classes = useStyles();
    const content =
        <article>
            <Switch>
                {routes.map((route, idx) => {
                    return route.component
                        ? (<Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                <route.component {...props} />
                            )} />
                        )
                        : null;
                })}
                <Route exact
                    path="/500"
                    name="Page 500"
                    render={props => <Page500 {...props} />} />}
						<Route exact
                    path="/404"
                    name="Page 404"
                    render={props => <Page404 {...props} />}
                />}
						<Redirect from='*' to='/404' />
            </Switch>
        </article>;
    return (
        <Container className={classes.container} maxWidth="lg">
            <Header history={props.history} />
            {content}
            <Footer />
        </Container>
    );
};

DefaultLayout.propTypes = {
    history: PropTypes.object.isRequired,
}

const mapStateToProps = (store) => {
    return {...store.main};
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
