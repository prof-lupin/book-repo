import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: "100%",
        display: 'flex',
        flexDirection: 'column',
    },
    // media: {
    //     height:0,
    //     paddingTop: '56.25%' // 16:9
    // },
    cardActions:{
        justifyContent: 'flex-end',
    },
    // cardContent: {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    // },
    // desc: {
    //     marginTop: '10',
    //     justifyContent: 'flex-end',
    // },
    // cardBase: {
    //     display: 'flex',
    //     flex:1
    // },
    // price: {
    //     width: 'auto',
    //     marginLeft: '10'
    // }
    content: {
        display: 'flex',
        flexDirection: 'row',
    },
    grow: {
        flexGrow: 1
    }

}));