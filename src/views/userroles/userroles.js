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
const BASE_URL = 'http://localhost:3001/admin/view_User_Roles';
const fields = [
  {key:'User_Id',_style: { width: '20%'}},
  {key: 'Role_Assigned', _style: { width: '5%'} },
  {key: 'Role_Assigned_Date', _style: { width: '5%'} },
  { key: 'Status', _style: { width: '20%'} },
  { key: 'Change Status', _style: { width: '10%'},sorter: false,
  filter: false },
 
]
export class userroles extends Component {
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
    handlemodal=()=>{
        this.setState({modal:true})
    }

    onChangeHandle1=(e)=>{
        // console.log(e.target.value)
        this.setState({UserID:e.target.value})
    }
    onChangeHandle2=(e)=>{
      // console.log(e.target.value)
      this.setState({Role_Assigned_Date:e.target.value})
  }
  onChangeHandle3=(e)=>{
    // console.log(e.target.value)
    this.setState({Role_Assigned:e.target.value})
}
onChangeHandle4=(e)=>{
  // console.log(e.target.value)
  this.setState({Status:e.target.value})
}


onClickHandle=()=>{
  const data={
      "I_d":"001",
      "User_Id":this.state.UserID,
      "Role_Assigned": this.state.Role_Assigned,
      "Role_Assigned_Date": this.state.Role_Assigned_Date,
      "Status": this.state.Status,
      
    
  }
if(this.state.formResult==true){
  axios.post("http://localhost:3001/admin/add_User_Roles", data )
.then(function (response) {
  console.log(response);
  window.location.reload();
  window.alert("done")

})
.catch(function (error) {
  console.log(error);
});
// console.log(false)
this.setState({modal:false})
}else{
  window.alert("please fill all fields")
}


}



handleChange=(e)=>{
  this.setState({checked:!this.state.checked})
  const data={
    UserID: this.state.UserID,
    Role_Assigned: this.state.Role_Assigned,
    Role_Assigned_Date:this.state.Role_Assigned_Date,
    Status:this.state.Status,
    
  }
  
  for(var i in data){
    if(data[i]===""||0){
      this.setState({formResult:false});
      break;
    }else{
    this.setState({formResult:true})
    }
  }

}
handleData=(e)=>{
  const data1=JSON.parse(e.target.getAttribute('datakey1'))
  console.log(data1)
  this.setState({deleteId:data1.Request_Id,updateSkill:data1.Skill_Set_Required,
                updateexp:data1.Experience_Type,updatepanel:data1.Panel,
                updatequalification:data1.Qualification_Required,updatereqRole:data1.Requested_Role,
                updatereqTeam:data1.Requested_Team,createdBy:data1.Created_By,
})
  this.setState({modal2:true})
}



onUpdate=(e)=>{
  const data={
  

      "description": "string",
     
  }
  console.log(data)
  axios
    .put(
        "http://localhost:3001/admin/update-request",data
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
              <CButton style={{width:"200px",margin:"auto",marginBottom:"50px"}} onClick={this.handlemodal} active block color="primary" aria-pressed="true">Add User Role</CButton>

<CModal 
show={this.state.modal} 
onClose={() => this.setState({modal:false})}
>
<CModalHeader closeButton>
  <CModalTitle>Add New User</CModalTitle>
</CModalHeader>
<CModalBody>
<CCol xs="12" sm="12">
<CCard>
<CCardHeader>
Role Request Form
</CCardHeader>
<CCardBody>
<CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
  <CFormGroup row>
    <CCol md="3">
      <CLabel>User ID</CLabel>
    </CCol>
    <CCol xs="12" md="9">
      <CInput type="email" id="email-input" name="email-input" onChange={this.onChangeHandle1} required placeholder="Enter User Email" autoComplete="email"/>
      <CFormText className="help-block">Please enter requesting user email</CFormText>
    </CCol>



    {/* <CCol xs="12" md="9">
      <p className="form-control-static">User Email</p>
    </CCol> */}
  </CFormGroup>
  <CFormGroup row>
    <CCol md="3">
      <CLabel htmlFor="date-input">Role assigned Date</CLabel>
    </CCol>
    <CCol xs="12" md="9">
      <CInput type="date" id="date-input" onChange={this.onChangeHandle2} required name="date-input" placeholder="date"  />
    </CCol>
  </CFormGroup>
  
  <CFormGroup row>
    <CCol md="3">
      <CLabel htmlFor="select">Select Role</CLabel>
    </CCol>
    <CCol xs="12" md="9">
      <CSelect custom name="select" id="select" onChange={this.onChangeHandle3} required>
        <option value="0">Please select role</option>
        <option value="HR">HR</option>
        <option value="Team Lead">Team Lead</option>
        <option value="Panel">Panel</option>
      </CSelect>
    </CCol>
  </CFormGroup>

  <CFormGroup row>
    <CCol md="3">
      <CLabel htmlFor="select">Select Status</CLabel>
    </CCol>
    <CCol xs="12" md="9">
      <CSelect custom name="select" id="select" onChange={this.onChangeHandle4} required>
        <option value="0">Please select Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        
      </CSelect>
    </CCol>
  </CFormGroup>

  
</CForm>
</CCardBody>

</CCard>




</CCol>
<CFormGroup variant="checkbox" className="checkbox">
        <CInputCheckbox id="checkbox2" checked={this.state.checked} onChange={this.handleChange} name="checkbox2" value="option2" />
        <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">By Checking this box, I agree that all the information provided by me are correct.</CLabel>
      </CFormGroup>
</CModalBody>

<CModalFooter>

  <CButton color="primary" onClick={this.onClickHandle}>Add</CButton>{' '}
  <CButton 
    color="secondary" 
    onClick={() => this.setState({modal:false})}
  >Cancel</CButton>
</CModalFooter>
</CModal>
              

            <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              User Roles
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
                'Change Status':
                  (item)=>(
                    <td>
                    
                    <CSelect custom name="select" id="select" onChange={this.onChangeHandle4} required>
                      <option value="0">Please select Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      
                    </CSelect>
                 
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

export default userroles

