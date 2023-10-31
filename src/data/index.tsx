import { MenuItemType } from '@/types'
import HomeIcon from '@mui/icons-material/Home'
import PeopleIcon from '@mui/icons-material/People'
import WidgetsIcon from '@mui/icons-material/Widgets'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import ListAltIcon from '@mui/icons-material/ListAlt'
import QueryStatsIcon from '@mui/icons-material/QueryStats'

export const menuItem: MenuItemType[] = [
  {
    label: '홈',
    icon: <HomeIcon />,
    to: '/'
  },
  {
    label: '관리자',
    icon: <PeopleIcon />,
    children: [{ label: '리스트', icon: <WidgetsIcon />, to: '/user-list' }]
  },
  {
    label: '권한관리',
    icon: <AdminPanelSettingsIcon />,
    children: [
      {
        label: '롤 리스트',
        icon: <WidgetsIcon />,
        to: '/role-list'
      },
      {
        label: '권한 리스트',
        icon: <WidgetsIcon />,
        to: '/permission-list'
      }
    ]
  },
  {
    label: '상품관리',
    icon: <LocalMallIcon />,
    children: [
      {
        label: '리스트',
        icon: <WidgetsIcon />,
        to: '/product-list'
      },
      {
        label: '파라미터',
        icon: <WidgetsIcon />,
        to: '/param-list'
      },
      {
        label: '분류',
        icon: <WidgetsIcon />,
        to: '/category-list'
      }
    ]
  },
  {
    label: '오더',
    icon: <ListAltIcon />,
    children: [
      {
        label: '리스트',
        icon: <WidgetsIcon />,
        to: '/order-list'
      }
    ]
  },
  {
    label: '데이터',
    icon: <QueryStatsIcon />,
    children: [
      {
        label: '리스트',
        icon: <WidgetsIcon />,
        to: '/data-list'
      }
    ]
  }
]
