import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          // name="logo-negative"
          src="https://secureservercdn.net/45.40.152.13/kbv.bc5.myftpupload.com/wp-content/uploads/2020/02/DF_Logo_Black-01.jpg"
          height={104}
          width={255}
        />
        {/* <img style={{width:"255px",height:"104px"}} src="https://secureservercdn.net/45.40.152.13/kbv.bc5.myftpupload.com/wp-content/uploads/2020/02/DF_Logo_Black-01.jpg"/> */}
        <CIcon
          className="c-sidebar-brand-minimized"
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQGeiiFR4VV0nw/company-logo_200_200/0/1519898376432?e=2159024400&v=beta&t=UPAzhd6lh5NTdXJkffZeW3WX1sKpKiRYMNOlARthBEk"
          height={53}
          // width={255}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
