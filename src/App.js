import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { puclicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {puclicRoutes.map((route, index) => {
                        const Page = route.component;

                        const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
