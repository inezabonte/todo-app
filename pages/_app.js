import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import '../styles/global.css'

export default function MyApp({Component, PageProps}) {
    const store = useStore(PageProps)
    return (
        <Provider store={store}>
            <Component { ...PageProps } />
        </Provider>
    )
}
