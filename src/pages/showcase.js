import React from 'react';
import Layout from '@theme/Layout';
import ShowcaseList from '@site/src/components/ShowcaseList';

export default function Showcase(){
    return(
        <Layout title="Showcase" description="Showcase Page">
            <main>
                <ShowcaseList />
            </main>
        </Layout>
    );
}