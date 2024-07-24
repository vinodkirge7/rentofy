import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MessageIcon from '@mui/icons-material/Message';
import { NotificationAddOutlined } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

export const Menu =[

    {     
        title:"Home",
        icon : <HomeIcon/>,
        path:"/middle"
    },
    {     
        title:"Search",
        icon : <SearchIcon/>,
        path:"/search"
    },
    {
        title:"Post",
        icon: <AddCircleOutlineIcon/>,
        path:"/create-post"
    },
    {
        title:"Messages",
        icon: <MessageIcon/>,
        path:"/msg"
    },
    {
        title:"Notifications",
        icon: <NotificationAddOutlined/>,
        path:"/notification"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/profile"
    }
]