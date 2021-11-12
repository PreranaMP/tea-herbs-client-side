import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link,

 useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../makeAdmin/makeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';
import ManageOrders from '../ManageOrders/ManageOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';



const drawerWidth = 200;

function Dashboard(props) {
 const { window } = props;
 const [mobileOpen, setMobileOpen] = React.useState(false);

 let { path, url } = useRouteMatch();

 const { admin } = useAuth();

 const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
 };

 const drawer = (
  <div>
   <Toolbar />
   <Divider />
   <Link style={{ textDecoration: 'none', color: '#2E86C1' }} to="/products"><Button variant="inherit">All products</Button> </Link>
   <Link style={{ textDecoration: 'none', color: '#2E86C1' }} to={`${url}`}><Button variant="inherit">Dashboard</Button> </Link>
   <br />
   <Link style={{ textDecoration: 'none', color: '#2E86C1' }} to={`${url}/pay`}><Button variant="inherit">Pay</Button> </Link>
   <br />
   <Link style={{ textDecoration: 'none', color: '#2E86C1' }} to={`${url}/review`}><Button variant="inherit">Review</Button> </Link>
   {admin && <Box>
    <Link style={{ textDecoration: 'none', color: '#2E86C1' }} to={`${url}/manageOrders`}><Button variant="inherit">Manage Orders</Button> </Link>
    <Link style={{ textDecoration: 'none', color: '#2E86C1' }} to={`${url}/makeAdmin`}><Button variant="inherit">Make Admin</Button> </Link>
    <Link style={{ textDecoration: 'none', color: '#2E86C1' }} to={`${url}/addProduct`}><Button variant="inherit">Add a product</Button> </Link>
    <List></List>
   </Box>}




  </div >
 );

 const container = window !== undefined ? () => window().document.body : undefined;

 return (


  <Box sx={{ display: 'flex' }}>
   <CssBaseline />
   <AppBar
    position="fixed"
    sx={{
     width: { sm: `calc(100% - ${drawerWidth}px)` },
     ml: { sm: `${drawerWidth}px` },
    }}
   >
    <Toolbar style={{ backgroundColor: '#A9CCE3', textAlign: 'center' }}>
     <IconButton
      color="inherit"

      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { sm: 'none' } }}

     >
      <MenuIcon />
     </IconButton>
     <Typography sx={{ color: 'white' }} variant="h6" noWrap component="div">
      Dashboard
     </Typography>
    </Toolbar>
   </AppBar>
   <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    aria-label="mailbox folders"
   >

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
    <Drawer
     variant="permanent"
     sx={{
      display: { xs: 'none', sm: 'block' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
     }}
     open
    >
     {drawer}
    </Drawer>
   </Box>
   <Box
    component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
   >
    <Toolbar />
    <Switch>
     <Route exact path={path}>
      <DashboardHome></DashboardHome>
     </Route>
     <AdminRoute path={`${path}/makeAdmin`}>
      <MakeAdmin></MakeAdmin>
     </AdminRoute>
     <AdminRoute path={`${path}/addProduct`}>
      <AddProduct></AddProduct>
     </AdminRoute>
     <AdminRoute path={`${path}/manageOrders`}>
      <ManageOrders></ManageOrders>
     </AdminRoute>
     <Route path={`${path}/pay`}>
      <Pay></Pay>
     </Route>
     <Route path={`${path}/review`}>
      <Review></Review>
     </Route>

    </Switch>

   </Box>
  </Box>

 );
}

Dashboard.propTypes = {
 /**
  * Injected by the documentation to work in an iframe.
  * You won't need it on your project.
  */
 window: PropTypes.func,
};

export default Dashboard;
