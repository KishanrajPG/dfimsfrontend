import React, { Component } from 'react'
import axios from 'axios';
import {
    CButton,
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
    CCardFooter
  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import CIcon from '@coreui/icons-react'
const BASE_URL = 'http://localhost:3001/admin/view_requests';
const fields = [
  {key:'Created_By'},
  {key: 'Experience_Type', _style: { width: '5%'} },
  {key: 'Panel', _style: { width: '20%'} },
  { key: 'Qualification_Required', _style: { width: '10%'} },
  { key: 'Requested_Team', _style: { width: '10%'} },
  { key: 'Requested_Role', _style: { width: '10%'} },
  { key: 'Skill_Set_Required', _style: { width: '20%'} },
  {key:'Status'},
  {
    key: 'show_details',
    label: '',
    _style: { width: '15%' },
    sorter: false,
    filter: false
  }
]
// const fields = ['created_by','experience_type', 'panel', 'qualification_required','requested_team', 'requested_role', 'skill_set_required','']
export class Requests extends Component {
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
        this.setState({createdBy:e.target.value})
    }
    onChangeHandle2=(e)=>{
      // console.log(e.target.value)
      this.setState({experience:e.target.value})
  }
  onChangeHandle3=(e)=>{
    // console.log(e.target.value)
    this.setState({panelEmail:e.target.value})
}
onChangeHandle4=(e)=>{
  // console.log(e.target.value)
  this.setState({Qualification:e.target.value})
}
onChangeHandle5=(e)=>{
// console.log(e.target.value)
this.setState({requestedTeam:e.target.value})
}
onChangeHandle6=(e)=>{
  // console.log(e.target.value)
  this.setState({requestedRole:e.target.value})
}
onChangeHandle7=(e)=>{
// console.log(e.target.value)
this.setState({skillSet:e.target.value})
}
onChangeHandle8=(e)=>{
  this.setState({request_id:e.target.value})
}
onClickHandle=()=>{
  const data={

      "description": "strfdsfsding",
      "experience_type": this.state.experience,
      "panel": this.state.panelEmail,
      "status": "Recently Added",
      "skill_set_required": this.state.skillSet,
      "requested_role": this.state.requestedRole,
      "requested_team": this.state.requestedTeam,
      "qualification_required": this.state.Qualification,
      "created_by": this.state.createdBy,
      "request_id": this.state.request_id
    
  }
if(this.state.formResult==true){
  axios.post("http://localhost:3001/admin/add_request", data )
.then(function (response) {
  console.log(response);
  window.location.reload();
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
    Created_by: this.state.createdBy,
    Experience: this.state.experience,
    Panel_email:this.state.panelEmail,
    Requested_role:this.state.requestedRole,
    Requested_Team:this.state.requestedTeam,
    Skill_set:this.state.skillSet,
    Qualification:this.state.Qualification,
    request_id:this.state.request_id
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
onupdateexp=(e)=>{
  // console.log(e.target.value)
  this.setState({updateexp:e.target.value})
}
onupdatepanel=(e)=>{
  // console.log(e.target.value)
  this.setState({updatepanel:e.target.value})
}
onupdatequal=(e)=>{
  // console.log(e.target.value)
  this.setState({updatequalification:e.target.value})
}
onupdaterole=(e)=>{
  // console.log(e.target.value)
  this.setState({updatereqRole:e.target.value})
}
onupdateteam=(e)=>{
  // console.log(e.target.value)
  this.setState({updatereqTeam:e.target.value})
}
onupdateskill=(e)=>{
  // console.log(e.target.value)
  this.setState({updateSkill:e.target.value})
}


onDelete=(e)=>{
  axios.delete(`http://localhost:3001/admin/delete-request/${this.state.deleteId}`)  
  this.setState({modal2:false})
  this.componentWillMount()
}

onUpdate=(e)=>{
  const data={
    // "created_by": this.state.createdBy,
    // "experience_type": this.state.updateexp,
    // "panel":this.state.updatepanel,
    // "requested_role":this.state.updatereqRole,
    // "requested_team":this.state.updatereqTeam,
    // "skill_set_required":this.state.updateSkill,
    // "qualification_required":this.state.updatequalification,
    // "description":"hello",
    // "request_id":this.state.deleteId


    
      "description": "string",
      "experience_type": this.state.updateexp,
      "panel": this.state.updatepanel,
      "status": "fired",
      "skill_set_required": this.state.updateSkill,
      "requested_role": this.state.updatereqRole,
      "requested_team": this.state.updatereqTeam,
      "qualification_required": this.state.updatequalification,
      "created_by": this.state.createdBy,
      "request_id": this.state.deleteId
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
            
              <CButton style={{width:"200px",margin:"auto",marginBottom:"50px"}} onClick={this.handlemodal} active block color="primary" aria-pressed="true">Add Request</CButton>
              <CModal 
              show={this.state.modal} 
              onClose={() => this.setState({modal:false})}
            >
              <CModalHeader closeButton>
                <CModalTitle>Add New Request</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
              Request
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
            <CForm className="was-validated">
              <CFormGroup>
                <CLabel htmlFor="company">Created_by</CLabel>
                <CInput id="company"  placeholder="Enter your name" onChange={this.onChangeHandle1} required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="company">Request ID</CLabel>
                <CInput id="company"  placeholder="Enter Request ID" onChange={this.onChangeHandle8} required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              {/* <CFormGroup>
                <CLabel htmlFor="inputIsInvalid">Input is invalid</CLabel>
                <CInput invalid id="inputIsInvalid" />
                <CInvalidFeedback>Houston, we have a problem...</CInvalidFeedback>
              </CFormGroup> */}
              <CFormGroup>
                <CLabel htmlFor="vat">Experience</CLabel>
                <CInput id="vat" type="number" placeholder="0" onChange={this.onChangeHandle2} required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Panel_email</CLabel>
                <CInput id="street" placeholder="Enter panel email" onChange={this.onChangeHandle3} required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="city">Qualification</CLabel>
                    <CInput id="city" placeholder="Enter Qualification" onChange={this.onChangeHandle4} required/>
                    
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Requested_Team</CLabel>
                    <CInput id="postal-code" placeholder="Requested_Team" onChange={this.onChangeHandle5} required/>
                    
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Requested_role</CLabel>
                <CInput id="country" placeholder="Requested_role" onChange={this.onChangeHandle6} required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Skills</CLabel>
                <CInput id="street" placeholder="Enter Skills" onChange={this.onChangeHandle7} required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
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
              Requests Made
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
                'show_details':
                  (item)=>(
                    <td>
                      <CButton
                       datakey1={JSON.stringify(item)}
                       onClick={this.handleData}>
                        View ALL
                      </CButton>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
        <CModal 
              show={this.state.modal2} 
              onClose={() => this.setState({modal2:false})}
              // size="sm"
            >
              <CModalHeader style={{backgroundColor:"#636f83"}} closeButton>
                <CModalTitle style={{color:"#ebedef"}}>Update Form</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCard>
            <CCardBody>
              <CForm  className="form-horizontal">
              <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-exp">Request_Id</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-exp" disabled defaultValue={this.state.deleteId}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-exp">Experience</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-exp" onChange={this.onupdateexp} defaultValue={this.state.updateexp}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-panel">panel</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-panel" onChange={this.onupdatepanel} defaultValue={this.state.updatepanel}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-qualification">qualification</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-qualification" onChange={this.onupdatequal} defaultValue={this.state.updatequalification}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-requested_team">requested_team</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-requested_team" onChange={this.onupdateteam} defaultValue={this.state.updatereqTeam}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-requested_role">requested_role</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-requested_role" onChange={this.onupdaterole} defaultValue={this.state.updatereqRole}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-skill_set">skill_set</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-skill_set" onChange={this.onupdateskill} defaultValue={this.state.updateSkill}/>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
              </CModalBody>
              <CModalFooter>
              <CButton color="secondary" onClick={this.onUpdate}>Update</CButton>{' '}
              <CButton color="danger" onClick={this.onDelete}>Delete</CButton>{' '}
                <CButton 
                  color="secondary" 
                  onClick={() => this.setState({modal2:false})}
                >Cancel</CButton>
              </CModalFooter>
            </CModal>
            </div>
        )
    }
}

export default Requests

