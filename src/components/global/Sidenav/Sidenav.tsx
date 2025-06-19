import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
// import { getSidenavItems, SidenavItem, SubItem } from '../../../lib/data/getSidenavItems'
import { formatToLink } from '../../../lib/utils'
import { Home } from '../../icons'
import { getSidenavItems, type SidenavItem, type SubItem } from '../../../lib/data/getSidenavItems'

interface SidenavProps {
    show: boolean
}

const Sidenav: React.FC<SidenavProps> = ({ show }) => {
  const location = useLocation()
  const [activeItem, setActiveItem] = useState<string>(location?.pathname)

  return (
        <nav className={classnames({ 'show': show }, { 'hide': !show })}>
          <div className='sidenav-content'>
            <Link
                className={classnames('sidenav-link', { 'active': activeItem === '/' })}
                to='/'
                onClick={() => setActiveItem('/')}
            >
              <Home />
              <span>Dashboard</span>
            </Link>
            {
              getSidenavItems()?.map((i: SidenavItem) => {
                return (
                  <div className='sidenav-items' key={i.name}>
                    <h2>{i.name}</h2>
                    <ul>
                      {
                        i.items?.map((j: SubItem) => {
                          return (
                            <li key={j.subname}>
                              <Link
                                className={classnames('sidenav-link',
                                  {
                                    'active': activeItem === formatToLink(`/${i.name}/${j.subname}`),
                                    'disabled': j.subname !== 'Users'
                                  }
                                )}
                                to={formatToLink(`/${i.name}/${j.subname}`)}
                                onClick={() => setActiveItem(formatToLink(`/${i.name}/${j.subname}`))}
                              >
                                <j.icon />
                                <span>{j.subname}</span>
                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </nav>
    )
}

export default Sidenav