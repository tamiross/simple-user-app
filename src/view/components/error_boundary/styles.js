import { colors } from 'colors';

export const styles = {
    base: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },

    messageBox: {
        background: colors.white,
        padding: 24,
        textAlign: 'center',
        border: '1px solid ' + colors.softGrey,
        borderRadius:  8
    }
}