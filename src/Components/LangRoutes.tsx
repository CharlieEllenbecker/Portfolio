import { Route } from 'react-router-dom'

import AppRoutes from './AppRoutes'

const LangRoutes = () => {

    // TODO: Use params inorger to pass in lang from i18 next into lang routes?
    // Also have this function return just routes instead of JSX.Element[]
    const getLangRoutes = () => {

        const langs = ['en', 'ja']  // TODO: load from somewhere else

        return (
            langs.map(l => <Route path={`/${l}/*`} element={<AppRoutes />} />)
        )
    }

    return (
        {getLangRoutes}
    )
}

export default LangRoutes