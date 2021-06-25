import React, { Component } from 'react'
import axios from 'axios';
import {
    CButton,
    CLink,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
    CForm,
    CInputCheckbox,
    CValidFeedback,
    CLabel,
    CInput,
    CFormGroup,
    CDataTable,
    CFormText,
    CCardFooter,
    CTextarea,
    CSelect
  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import CIcon from '@coreui/icons-react'
const BASE_URL = 'http://localhost:3001/admin/view_User_Role_Request';
const fields = [
  {key:'User_Id',_style: { width: '20%'}},
  {key: 'Requested_Roles', _style: { width: '5%'} },
  {key: 'Status', _style: { width: '5%'} },
  { key: 'Notes', _style: { width: '20%'} },
  { key: 'Action', _style: { width: '10%'},sorter: false,
  filter: false },
  
 
]
export class userrequests extends Component {
    state={
        modal:false,
        modal2:false,
        deleteId:"",
        data:null,
        createdBy:"",
        experience:"",
        panelEmail:"",
        request_id:"",
        Qualification:"",
        requestedTeam:"",
        requestedRole:"",
        skillSet:"",
        formResult:false,
        checked:false,
        updateexp:"",
        updatepanel:"",
        updatereqTeam:"",
        updatereqRole:"",
        updatequalification:"",
        updateSkill:"",
       
        

    }

    componentWillMount(){
        axios.get(`${BASE_URL}`)
            .then(({ data }) => this.setState({data:data}))
            .catch(console.error)
            // .finally(() => setLoading(false));
    }

    
onClickHandle=()=>{
//   const data={
//     "I_d":"001",
//     "User_Id":this.state.UserID,
//     "Role_Assigned": this.state.Role_Assigned,
//     "Role_Assigned_Date": this.state.Role_Assigned_Date,
//     "Status": this.state.Status,

// }
// axios.post("http://localhost:3001/admin/add_User_Role_Request",data)
// .then(()=>{
//   window.alert("Request Successful")
//   window.location.reload()
// })
window.alert("Added")

}
   
    onUpdate=(e)=>{
      const data={
      
        "User_Id": "Email",
        "Status": "Approved",
        "Requested_Roles": "Team Lead",
        "Notes": "string"
         
      }
      console.log(data)
      axios
        .put(
            "http://localhost:3001/admin/update_User_Role_Request",data
        )
        .then(r => console.log(r.status))
        .catch(e => console.log(e));
        // window.location.reload();
        this.setState({modal2:false})
        this.componentWillMount()
        
    }


    render() {
        return (
            <div>


            <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Role Requests Made
            </CCardHeader>
            <CCardBody>
            <CDataTable

              items={this.state.data}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              columnFilter
              tableFilter
              scopedSlots = {{
                'Action':
                  (item)=>(
                    <td>
                    <button onClick={this.onClickHandle}>Approve</button>
                    <button onClick={this.onClickHandle}>Reject</button>
                    {/* <CSelect custom name="select" id="select"  required>
                      <option value="0">Please select Status</option>
                      <option value="Approve" onChange={this.onClickHandle}>Approve</option>
                      <option value="Reject">Reject</option>
                      
                    </CSelect> */}
                 
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      
            </div>
        )
    }
}

export default userrequests

