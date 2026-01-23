import { useStoreState } from 'easy-peasy';
import { Fragment, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from '@/routers/routes';

import DashboardContainer from '@/components/dashboard/DashboardContainer';
import MainHeader from '@/components/elements/MainHeader';
import MainWrapper from '@/components/elements/MainWrapper';
import { NotFound } from '@/components/elements/ScreenBlock';

const DashboardRouter = () => {
    const rootAdmin = useStoreState((state) => state.user.data!.rootAdmin);

    const onSelectAdminPanel = () => {
        window.open(`/admin`);
    };

    return (
        <Fragment key={'dashboard-router'}>
            <MainHeader onSelectAdminPanel={onSelectAdminPanel} rootAdmin={rootAdmin} />

            <div className='flex flex-col w-full'>

                <Suspense fallback={null}>
                    <MainWrapper className='w-full'>
                        <main
                            data-pyro-main=''
                            data-pyro-transitionrouter=''
                            className='relative inset-[1px] w-full h-full overflow-y-auto overflow-x-hidden rounded-md bg-[#08080875]'
                        >
                            <Routes>
                                <Route path='' element={<DashboardContainer />} />

                                {routes.account.map(({ route, component: Component }) => (
                                    <Route
                                        key={route}
                                        path={`/account/${route}`.replace('//', '/')}
                                        element={<Component />}
                                    />
                                ))}

                                <Route path='*' element={<NotFound />} />
                            </Routes>
                        </main>
                    </MainWrapper>
                </Suspense>
            </div>
        </Fragment>
    );
};

export default DashboardRouter;
