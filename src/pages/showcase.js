import React from 'react';
import Layout from '@theme/Layout';
import Footer from '@theme/Footer';

export default function Showcase(){
    return(
        <Layout title="Showcase" description="Showcase Page">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px'
                }}
            >
                <p>All project will be show here and notes code will be in blog menu</p>
            </div>
        </Layout>
    );
}