import React, { Component } from 'react'
import axios from 'axios';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CTextarea,
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
    CSelect
  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import CIcon from '@coreui/icons-react'

export class requestroles extends Component {
    state={
        UserId:"",
        Notes:"",
        Requested_Roles:"",
        Status:""
       
      

    }

    onChangeHandle1=(e)=>{
      // console.log(e.target.value)
      this.setState({Requested_Roles:e.target.value})
  }
  onChangeHandle2=(e)=>{
    // console.log(e.target.value)
    this.setState({Notes:e.target.value})
    console.log(e.target.value)
}




onClickHandle=()=>{
  const data={
      "I_d" : "001",
      "User_Id":"Email",
      "Requested_Roles": this.state.Requested_Roles,
      "Notes": this.state.Notes,
      "Status": "Requested",
      
  }
axios.post("http://localhost:3001/admin/add_User_Role_Request",data)
.then(()=>{
  window.alert("Request Successful")
  window.location.reload()
})
}





handleChange=(e)=>{
  this.setState({checked:!this.state.checked})
  const data={

    Requested_Roles: this.state.Requested_Roles,
    Notes: this.state.Notes,
   
    
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




    render() {
        return (
            <div>
             <CCard show={this.state.modal} >
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
                    <p className="form-control-static">User Email</p>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Role</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select" onChange={this.onChangeHandle1} required>
                      <option value="0">Please select role</option>
                      <option value="HR">HR</option>
                      <option value="Team Lead">Team Lead</option>
                      <option value="Panel">Panel</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input" >Textarea </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea onChange={this.onChangeHandle2} required
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Content..." 
                    />
                  </CCol>
                
                </CFormGroup>
                
              </CForm>
            </CCardBody>
            <CCardFooter>
            <CButton color="primary" onClick={this.onClickHandle}>Send Request</CButton>
            <CButton 
                  color="secondary" 
    
                >Cancel</CButton>
            </CCardFooter>
          </CCard>
            </div>
        )
    }
}

export default requestroles

