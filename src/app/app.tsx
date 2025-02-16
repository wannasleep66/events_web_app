import * as React from 'react'
import { RouterProvider } from 'react-router'
import router from './router.tsx'
import QueryProvider from './query.tsx'

const App: React.FC = () => {
    return (
        <QueryProvider>
            <RouterProvider router={router} />
        </QueryProvider>
    )
}

export default App
