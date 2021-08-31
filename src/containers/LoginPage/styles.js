const styles = theme => ({
    background: {
        backgroundColor: theme.palette.primary.main,
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        flex: "1 0 auto"
    },
    caption: {
        fontWeight: 500,
        fontSize: 24
    }
})

export default styles;