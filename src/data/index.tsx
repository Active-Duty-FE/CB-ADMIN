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
        to: '/permission'
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
        to: '/product'
      },
      {
        label: '파라미터',
        icon: <WidgetsIcon />,
        to: '/param'
      },
      {
        label: '분류',
        icon: <WidgetsIcon />,
        to: '/category'
      }
    ]
  },
  {
    label: '주문',
    icon: <ListAltIcon />,
    children: [
      {
        label: '리스트',
        icon: <WidgetsIcon />,
        to: '/order'
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
        to: '/data-view'
      }
    ]
  }
]
