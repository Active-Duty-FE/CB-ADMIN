import { menuItem } from '@/data'
import path from 'path'
import { FC, Fragment, useEffect, useState } from 'react'
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar'
import { NavLink } from 'react-router-dom'

interface IProps {
  setPaddingLeft?: (paddingLeft: number) => void
  pathname?: string
}

const Siderbar: FC<IProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const { setPaddingLeft, pathname } = props
  useEffect(() => {
    if (setPaddingLeft) {
      if (collapsed) {
        setPaddingLeft(81)
      } else {
        setPaddingLeft(200)
      }
    }
  }, [collapsed])
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      <Sidebar collapsed={collapsed} backgroundColor="#313743" width="200px" transitionDuration={500}>
        <div
          className="h-4 bg-[#4A5064] text-center text-[#313743] py-2 cursor-pointer"
          onClick={() => setCollapsed && setCollapsed(!collapsed)}
        >
          | | |
        </div>
        <Menu
          rootStyles={{
            color: '#fff',
            fontSize: '14px',
            '.ps-menu-button': {
              backgroundColor: '#313743',
              ':hover': {
                backgroundColor: '#272c36'
              }
            },
            '.active': {
              color: '#409fff!important',
              backgroundColor: '#272c36'
            }
          }}
        >
          {menuItem.map((item) => {
            return (
              <Fragment key={item.label}>
                {item.children ? (
                  <SubMenu
                    defaultOpen={item.children.map((item) => item.to).includes(pathname)}
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                  >
                    {item.children.map((itemI) => (
                      <MenuItem
                        key={itemI.label}
                        icon={itemI.icon}
                        component={
                          itemI.to && (
                            <NavLink className="text-white" to={itemI.to}>
                              {itemI.label}
                            </NavLink>
                          )
                        }
                      >
                        {itemI.label}
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    key={item.label}
                    icon={item.icon}
                    component={
                      item.to && (
                        <NavLink className="text-white" to={item.to}>
                          {item.label}
                        </NavLink>
                      )
                    }
                  >
                    {item.label}
                  </MenuItem>
                )}
              </Fragment>
            )
          })}
        </Menu>
      </Sidebar>
    </div>
  )
}

export default Siderbar
