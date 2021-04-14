import React from 'react'

export default function MyApp({Component, PageProps}) {
    return <Component { ...PageProps } />
}
