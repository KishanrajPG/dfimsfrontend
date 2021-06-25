import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/dashboard',
    icon:<i class="fas fa-home" style={{marginRight:"20px"}}></i>,
    badge: {
      color: 'info',
      // text: 'NEW',
    }
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Candidates',
    to: '/Candidates',
    icon: <i class="fas fa-users" style={{marginRight:"20px"}}></i>,
    badge: {
      color: 'info',
      // text: 'NEW',
    }
  },



  {
    _tag: 'CSidebarNavItem',
    name: 'Request',
    to: '/Requests',
    icon: <i class="fas fa-book" style={{marginRight:"20px"}}></i>,
    badge: {
      color: 'info',
      // text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Interviews',
    to: '/Interviews',
    icon: <i class="fas fa-people-arrows" style={{marginRight:"20px"}}></i>,
    badge: {
      color: 'info',
      // text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Feedbacks',
    to: '/Feedbacks',
    icon:<i class="fas fa-comments" style={{marginRight:"20px"}}></i>,
    badge: {
      color: 'info',
      // text: 'NEW',
    }
  },
  
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'User',
    route: '/buttons',
    icon: <i class="fas fa-user-tag" style={{marginRight:"20px"}}></i>,
    _children: [
      {
    
        _tag: 'CSidebarNavItem',
        name: 'User Role Requests',
        to: '/userrequests',
        icon: <i class="fas fa-user-plus" style={{marginRight:"20px"}}></i>,
      },
      {
    
        _tag: 'CSidebarNavItem',
        name: 'User Roles',
        to: '/userroles',
        icon: <i class="fas fa-user-check" style={{marginRight:"20px"}}></i>,
      },

    
    ],
  },
  
  
  
  
  
  
  
 
  
  
]

export default _nav
