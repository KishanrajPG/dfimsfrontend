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
const BASE_URL = 'http://localhost:3001/admin/view_candidates';
const fields = [
  {key:'Full_Name'},
  {key: 'Experience_Type', _style: { width: '5%'} },
  {key: 'Description', _style: { width: '20%'} },
  { key: 'Description', _style: { width: '10%'} },
  { key: 'Qualification', _style: { width: '10%'} },
  { key: 'Candidate_Current_Status', _style: { width: '10%'} },
  { key: 'Resume', _style: { width: '20%'} },
  {
    key: 'show_details',
    label: '',
    _style: { width: '15%' },
    sorter: false,
    filter: false
  }
]
// const fields = ['created_by','experience_type', 'panel', 'qualification_required','requested_team', 'requested_role', 'skill_set_required','']
export class Candidate extends Component {
    state={
        modal:false,
        modal2:false,
        deleteId:"",
        data:null,
        CandidateId:"",
        fullName:"",
        experience:"",
        description:"",
        status:"",
        resume:"",
        Qualification:"",
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
        this.setState({CandidateId:e.target.value})
    }
    onChangeHandle2=(e)=>{
      // console.log(e.target.value)
      this.setState({fullName:e.target.value})
  }
  onChangeHandle3=(e)=>{
    // console.log(e.target.value)
    this.setState({experience:e.target.value})
}
onChangeHandle4=(e)=>{
  // console.log(e.target.value)
  this.setState({Qualification:e.target.value})
}
onChangeHandle5=(e)=>{
// console.log(e.target.value)
this.setState({description:e.target.value})
}
onChangeHandle6=(e)=>{
  // console.log(e.target.value)
  this.setState({status:e.target.value})
}
onChangeHandle7=(e)=>{
// console.log(e.target.value)
this.setState({skillSet:e.target.value})
}
onChangeHandle8=(e)=>{
  // console.log(e.target.value)
  this.setState({resume:e.target.files[0]})
  // this.setState({resume:e.target.value})
  }
onClickHandle=(e)=>{
  const data={

    "candidate_id": this.state.CandidateId,
    "full_name": this.state.fullName,
    "experience_type": this.state.experience,
    "description": this.state.description,
    "skill_set": this.state.skillSet,
    "qualification": this.state.Qualification,
    "candidate_current_status": this.state.status,
    "resume": "resume"


    // "candidate_id": "string",
    // "full_name": "string",
    // "experience_type": "string",
    // "description": "string",
    // "skill_set": "string",
    // "qualification": "string",
    // "candidate_current_status": "string",
    // "resume": "string"
    
  }
  console.log(data)
if(this.state.formResult==true){
  axios.post("http://localhost:3001/admin/add_candidate", data )
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


    const formData=new FormData()
    formData.append('foo',this.state.resume)
    // console.log(this.state.file)
    axios.post("http://localhost:3001/admin/upload-resume", formData)

}


handleChange=(e)=>{
  this.setState({checked:!this.state.checked})
  const data={
    "candidate_id": this.state.CandidateId,
    "full_name": this.state.fullName,
    "experience_type": this.state.experience,
    "description": this.state.description,
    "skill_set": this.state.skillSet,
    "qualification": this.state.qualification,
    "candidate_current_status": this.state.status,
    "resume": this.state.resume
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
  this.setState({deleteId:data1.Candidate_Id,fullName:data1.Full_Name,skillSet:data1.Skill_set,
                experience:data1.Experience_Type,description:data1.Description,
                Qualification:data1.Qualification,status:data1.Candidate_Current_Status,
                resume:data1.Resume
})
  this.setState({modal2:true})
}

onupdatename=(e)=>{
  this.setState({fullName:e.target.value})
}
onupdateexp=(e)=>{
  // console.log(e.target.value)
  this.setState({experience:e.target.value})
}
onupdateQualification=(e)=>{
  // console.log(e.target.value)
  this.setState({Qualification:e.target.value})
}
onupdateDesc=(e)=>{
  // console.log(e.target.value)
  this.setState({description:e.target.value})
}
onupdateStatus=(e)=>{
  // console.log(e.target.value)
  this.setState({status:e.target.value})
}
onupdateresume=(e)=>{
  // console.log(e.target.value)
  this.setState({resume:e.target.value})
}
onupdateskill=(e)=>{
  // console.log(e.target.value)
  this.setState({skillSet:e.target.value})
}


onDelete=(e)=>{
  axios.delete(`http://localhost:3001/admin/delete-candidate/${this.state.deleteId}`)  
  this.setState({modal2:false})
  this.componentWillMount()
}

onUpdate=(e)=>{
  const data={
    "candidate_id": this.state.deleteId,
    "full_name": this.state.fullName,
    "experience_type": this.state.experience,
    "description": this.state.description,
    "skill_set": this.state.skillSet,
    "qualification": this.state.Qualification,
    "candidate_current_status": this.state.status,
    "resume": this.state.resume
  }
  console.log(data)
  axios
    .put(
        "http://localhost:3001/admin/update-candidate",data
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
            
              <CButton style={{width:"200px",margin:"auto",marginBottom:"50px"}} onClick={this.handlemodal} active block color="primary" aria-pressed="true">Add Candidate</CButton>
              <CModal 
              show={this.state.modal} 
              onClose={() => this.setState({modal:false})}
            >
              <CModalHeader closeButton>
                <CModalTitle>Add New Candidate</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
              Candidate
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
            <CForm className="was-validated">
              <CFormGroup>
                <CLabel htmlFor="company">Candidate Id</CLabel>
                <CInput id="company"  placeholder="Enter Candidate Id" onChange={this.onChangeHandle1} required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              {/* <CFormGroup>
                <CLabel htmlFor="inputIsInvalid">Input is invalid</CLabel>
                <CInput invalid id="inputIsInvalid" />
                <CInvalidFeedback>Houston, we have a problem...</CInvalidFeedback>
              </CFormGroup> */}
              <CFormGroup>
                <CLabel htmlFor="vat">Full Name</CLabel>
                <CInput id="vat" placeholder="Full Name" onChange={this.onChangeHandle2} required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Experience Type</CLabel>
                <CInput id="street" placeholder="0" type="number" onChange={this.onChangeHandle3} required/>
                
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
                    <CLabel htmlFor="postal-code">Description</CLabel>
                    <CInput id="postal-code" placeholder="Requested_Team" onChange={this.onChangeHandle5} required/>
                    
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Candidate Status</CLabel>
                <CInput id="country" placeholder="Status" onChange={this.onChangeHandle6} required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Skills</CLabel>
                <CInput id="street" placeholder="Enter Skills" onChange={this.onChangeHandle7} required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Resume</CLabel>
                <CInput id="street" type="file" placeholder="Enter Skills" onChange={this.onChangeHandle8} required/>
                
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
              
                <CButton color="primary" onClick={this.onClickHandle}>Do Something</CButton>{' '}
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
                    <CLabel htmlFor="hf-exp">Candidate Id</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-exp" defaultValue={this.state.deleteId} disabled/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
              <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-exp">Full Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-exp" onChange={this.onupdatename} defaultValue={this.state.fullName}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-exp">Experience</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-exp" onChange={this.onupdateexp} defaultValue={this.state.experience}/>
                    {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-panel">Qualification</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-panel" onChange={this.onupdateQualification} defaultValue={this.state.Qualification}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-qualification">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-qualification" onChange={this.onupdateDesc} defaultValue={this.state.description}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-requested_team">Candidate Status</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-requested_team" onChange={this.onupdateStatus} defaultValue={this.state.status}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-skill_set">skill_set</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-skill_set" onChange={this.onupdateskill} defaultValue={this.state.skillSet}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="hf-requested_role">Resume</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput name="hf-requested_role" onChange={this.onupdateresume} defaultValue={this.state.resume}/>
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

export default Candidate

