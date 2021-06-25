import React from 'react'
import {Link} from 'react-router-dom'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CButton,
  CHeaderNavLink,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const TheHeaderDropdown = () => {


  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'https://www.harrisconsultingservices.com/wp-content/uploads/2021/01/6388939.png'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">

        {/* <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem> */}
        
        <CDropdownItem> 
          
          <CLink to="/requestroles">
          <i class="fas fa-user-plus" style={{marginRight:"20px"}}></i> Request role</CLink>
         
        </CDropdownItem>

        <CDropdownItem>
        <i class="fas fa-sign-out-alt" style={{marginRight:"20px"}}></i>
          Log out
        </CDropdownItem>

        
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
