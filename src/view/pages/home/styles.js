import { colors } from '@colors';

export const styles = {
    base: {

    },
    
    address: {
        color: colors.midGrey
    },

    userListWrapper: {
        margin: '32px 0'
    },

    plusButton: {
        display: 'block',
        margin: '0 auto',
        marginTop: 32,
        outline: 'none'
    },

    noDataMessage: {
        display: 'flex',
        flexDirection: 'column',
        background: colors.white,
        border: '1px solid ' + colors.softGrey,
        borderRadius: 8,
        padding: 24,
        marginTop: 32,
        marginBottom: 32, 
        textAlign: 'center'
    }
}