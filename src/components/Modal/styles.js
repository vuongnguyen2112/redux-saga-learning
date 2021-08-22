const styles = theme => ({
    modal: {
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
    header: {
        backgroundColor: theme.color.primary,
        color: '#000000',
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: '#000000',
        fontWeight: 700,
        textTransform: "capitalize"
    },
    content: {
        padding: theme.spacing(2),
    },
    icon: {
        cursor: "pointer",
        fontSize: 26
    }
});

export default styles;