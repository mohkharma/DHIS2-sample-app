import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'

const query = {
    me: {
        resource: 'me',
    },
}
let logger1 = () => window.alert('It works!');
const myQuery = {
    results: {
        resource: 'programs',
        params: {
            pageSize: 20, //fetches 20 first programs in the system
            fields: ['id', 'displayName'],
        },
    },
}
const MyApp = () => (

    <div className={classes.container}>

        <DataQuery query={myQuery}>

            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                    <>
                    <div>
                        <h1>
                            {/*{i18n.t('Hello {{name}}', { name: data.me.name })}*/}
                        </h1>
                        <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                        <h3>{i18n.t('Free Palestine!')}</h3>
                    </div>
                        <div>
                            <h1>Get List of Programs Using DHIS2 APIs</h1>
                            <ul>
                                {' '}
                                List of 5 programs
                                {data.results.programs.map((prog) => (
                                    <li key={prog.id}>{prog.displayName}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )
            }}
        </DataQuery>
    </div>
)

export default MyApp
