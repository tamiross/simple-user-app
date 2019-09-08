import React, { Component } from 'react'

export default class EditPopup extends Component {
    state = {
        isPopupOpen: false,
        card: {
            name: '',
            id: 0,
            date: ''
        }
    }

    onCloseClick() {

    }
    
    render() {
        return (
            <div>
                <h1>EDIT POPUP</h1>
            </div>
        )
    }
}
