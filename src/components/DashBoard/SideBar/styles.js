const styles = (theme) => ({
    drawerPaper: {
        width: 250,
        maxWidth: 250,
        zIndex: 99,
        height: '100%',
        position: "relative"
    },
    menuLink: {
        textDecoration: 'none',
        color: theme.color.defaultTextColor,
    },
    menuLinkActive: {
        "&>div": {
            backgroundColor: theme.color.hover,
        },
    }
});

export default styles;