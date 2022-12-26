import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { NavLinks } from '../../data/data';
import { logoImg } from '../../assets';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';



interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const Header = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ background: '#00000E', py: 2 }}>
                <img src={logoImg} width='150px' />
            </Box>
            <Divider />
            <List>
                {NavLinks.map((item, i) => (
                    <ListItem key={i} disablePadding>
                        <AnchorLink href={`#${item.id}`} className="all_unset">
                            <ListItemButton sx={{ textAlign: 'center'}}>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItemButton>
                        </AnchorLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <AppBar component="nav" sx={{ background: '#00040f' }}>
                <Toolbar>
                    <Container>
                        <Box sx={{ display: 'flex', py: 2 }} alignItems='center'>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                                <img src={logoImg} width='150px' />
                            </Box>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {NavLinks.map((item, i) => (
                                    <AnchorLink key={i} href={`#${item.id}`} className="all_unset">
                                        <Button sx={{ color: '#fff' }}>
                                            {item.title}
                                        </Button>
                                    </AnchorLink>

                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
}
export default Header