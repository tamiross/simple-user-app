import React, { Component } from 'react'
import { styles } from './styles';
import Navbar from '@components/navbar/navbar';

export const Header = props => {
    return (
        <div style={styles.base}>
            <div className="container">
                <Navbar />
            </div>
        </div>
    )
}
