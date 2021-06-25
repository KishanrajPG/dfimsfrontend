import { useState,useEffect } from 'react'
import axios from 'axios'
import DateTimePicker from 'react-datetime-picker'
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
    CLabel,
    CInput,
    CFormText,
    CFormGroup,
    CDataTable, 
    CBadge,
    CCollapse,
    DateTimePickerInput,
    CValidFeedback,
    CInputCheckbox,
    CForm
  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import CIcon from '@coreui/icons-react'
  import React, { Component } from 'react'

 
  
  function Interview() {
    const [details, setDetails] = useState([])
    const [usersData,setusersData] = useState([])
    const [items, setItems] = useState(usersData)

    const [primary, setPrimary] = useState(false)
    const [info, setInfo] = useState(false)


    const [deleteid, setdeleteid] = useState("")
    const [Request_Id, setRequest_Id] = useState("")
    const [Requestor_Id, setRequestor_Id] = useState("")
    const [Panel_Members, setPanel_Members] = useState("")
    const [Candidate_Id, setCandidate_Id] = useState("")
    const [Sender, setSender] = useState("")
    const [Interview_Date_Time, setInterview_Date_Time] = useState("")
    const [status, setstatus] = useState("")
    const [visible, setVisible] = useState(false)

    const [checked, setchecked] = useState(false)
    const [formresult, setformresult] = useState(false)


    useEffect(async () => {
      const result = await axios(
        'http://localhost:3001/admin/view_interviews',
      );
   console.log(result.data)
      setusersData(result.data);
    },[]);

  const ondelete = ()=> {
  axios.delete(`http://localhost:3001/admin/delete-Interview/${deleteid}`)
  window.location.reload();
  }
  
  const handledata = (e)=>{
    setInfo(!info)
    const data=JSON.parse(e.target.getAttribute('datakey'))
    setdeleteid(data.Interview_Id)
    setRequest_Id(data.Request_Id)
    setRequestor_Id(data.Requestor_Id)
    setPanel_Members(data.Panel_Members)
    setCandidate_Id(data.Candidate_Id)
    setSender(data.Sender)
    setInterview_Date_Time(data.Interview_Date_Time)
    setstatus(data.status)
  }
  
  // const handlemodaldata = (e)=>{
  //   setModal(!Modal)
  //  // const data=JSON.parse(e.target.getAttribute('datakey'))

  // }



    const fields = [
      {key:'Interview_Id'},
      {key: 'Candidate_Id', _style: { width: '25%'} },
      {key: 'Interview_Date_Time', _style: { width: '25%'} },
      
      {key: 'Requested_Role'},
      { key: 'status', _style: { width: '15%'} },
      {
        key: 'show_details',
        label: '',
        _style: { width: '15%' },
        sorter: false,
        filter: false
      }
    ]
  
    const [value, setvalue] = useState("");
    const handleChange1=(e)=>{
      setCandidate_Id(e.target.value)
    }
    const handleChange2=(e)=>{
      setstatus(e.target.value)
    }

    const onChange=(e)=>{
      console.log(e.target.value)
      setInterview_Date_Time(e.target.value)
    }



    const onUpdate=()=>{
      const data={
        "Interview_ID": deleteid,
        "Candidate_Id": Candidate_Id,
        "Interview_Date_Time": Interview_Date_Time,
        "status": status
      }
      console.log(data)

      axios
    .put(
        "http://localhost:3001/admin/update-Interviews",data
    )
    .then(r => {
      console.log(r.status)
      window.location.reload()
    })
    .catch(e => console.log(e));
    // .then()
     
    // const result = axios.get(
    //   'http://localhost:3001/admin/view_interviews',
    // );
//  console.log(result.data)
    // setusersData(result.data);
    }

    const onAdd=()=>{
      const data={
        "Interview_ID": deleteid,
        "Candidate_Id": Candidate_Id,
        "Request_Id": Request_Id ,
        "Requestor_Id":Requestor_Id,
        "Panel_Members" :Panel_Members,
        "Sender"  :Sender,
        "Interview_Date_Time": Interview_Date_Time,
        "status": status


       
      }
      if(formresult==true){
        axios.post("http://localhost:3001/admin/add-Interviews", data )
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
      // console.log(false)
      //this.setState({modal:false})
      }else{
        window.alert("please fill all fields")
      }
    
    }

const InterviewIDchange=(e)=>{
  setdeleteid(e.target.value)
  console.log(e.target.value)
}

const Candidate_Idchange=(e)=>{
  setCandidate_Id(e.target.value)
}

const Request_Idchange=(e)=>{
  setRequest_Id(e.target.value)
}

const Requestor_Idchange=(e)=>{
  setRequestor_Id(e.target.value)
}

const Panel_Memberschange=(e)=>{
  setPanel_Members(e.target.value)
}


const Senderchange=(e)=>{
  setSender(e.target.value)
}

const Interview_Date_Timechange=(e)=>{
  setInterview_Date_Time(e.target.value)
}

const statuschange=(e)=>{
  setstatus(e.target.value)
}

const handlecheck=(e)=>{
  setchecked(!checked)
  const data={
    "Interview_Id": deleteid,
    "Candidate_Id": Candidate_Id,
    "Request_Id": Request_Id ,
    "Requestor_Id":Requestor_Id,
    "Panel_Members" :Panel_Members,
    "Sender"  :Sender,
    "Interview_Date_Time": Interview_Date_Time,
    "status": status
  }


  for(var i in data){
    if(data[i]===""||0){
      setformresult(false);
      break;
    }else{
    setformresult(true);
    }
  }
  
}





    const getBadge = (status)=>{
      switch (status) {
        case 'Completed': return 'success'
        case 'In Progress': return 'secondary'
        case 'Scheduled': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
      }
    }
   

    return (
    <div>
        <div>
  <CButton style={{width:"200px",margin:"auto",marginBottom:"50px"}} onClick={() => setVisible(!visible)} active block color="primary" aria-pressed="true">Add Interview</CButton>

  <CModal 
              show={visible} 
              onClose={() => setVisible(!visible)}
              color="dark"
            >
              <CModalHeader closeButton>
                <CModalTitle>Add new Interview</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
              Interview form
            </CCardHeader>
            <CCardBody>
            <CForm className="was-validated">

            <CFormGroup>
                <CLabel htmlFor="company">Interview ID</CLabel>
                <CInput onChange={InterviewIDchange} id="company"  placeholder="Enter Interview ID"  required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>

              <CFormGroup>
                <CLabel htmlFor="company">Candidate ID</CLabel>
                <CInput onChange={Candidate_Idchange} id="company"  placeholder="Enter Candidate ID"  required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
            
             <CFormGroup>
                <CLabel htmlFor="company">Request ID</CLabel>
                <CInput onChange={Request_Idchange}id="company"  placeholder="Enter Request ID"  required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Requestor ID</CLabel>
                <CInput onChange={Requestor_Idchange} id="street" placeholder="Enter panel email" required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Panel Member</CLabel>
                <CInput onChange={Panel_Memberschange} id="street" placeholder="Enter panel Member" required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Sender</CLabel>
                <CInput onChange={Senderchange} id="street" placeholder="Enter Sender" required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
             <CFormGroup>
                  
             <CLabel htmlFor="street">Interview date</CLabel>
                <CInput onChange={Interview_Date_Timechange} type="datetime-local" id="street" placeholder="Enter Sender" required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                    
                
             </CFormGroup>

             <CFormGroup>
                <CLabel htmlFor="street">Status</CLabel>
                <CInput onChange={statuschange} id="street" placeholder="Enter Status" required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>

              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
        <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox onChange={handlecheck} checked={checked} id="checkbox2"   name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">By Checking this box, I agree that all the information provided by me are correct.</CLabel>
                    </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton color="dark" onClick={onAdd} >
                  Add
                </CButton>{' '}
                <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
              </CModalFooter>
            </CModal>




     
      </div>


      <CDataTable
        items={usersData}
        fields={fields}
        columnFilter
        tableFilter
        footer
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        scopedSlots = {{
            'status':
              (item)=>(
                <td>
                  <CBadge color={getBadge(item.status)}>
                    {item.status}
                  </CBadge>
                </td>
              ),
            'show_details':
              (item, index)=>{
                return (
                  <td className="py-2">
                     <CButton color="dark" datakey={JSON.stringify(item)} onClick={handledata} className="mr-1" size="sm" >
                        More Options
                      </CButton>
                    
                  </td>
                  
                  )
              },
            'details':
                (item, index)=>{
                  return (
          
                      <CModal 
              show={info} 
              onClose={() => setInfo(!info)}
              color="dark"
            >
              <CModalHeader closeButton>
                <CModalTitle>Update here</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CFormGroup row>
                 
              <CCol md="3">
                    <CLabel>Request ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">{Request_Id}</p>
                  </CCol>

                  <CCol md="3">
                    <CLabel>Requester ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">{Requestor_Id}</p>
                  </CCol>

                  <CCol md="3">
                    <CLabel>Panel Member</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">{Panel_Members}</p>
                  </CCol>
                 
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Candidate ID</CLabel>
                  </CCol>

                  <CCol xs="12" md="9">
                    <CInput id="text-input" onChange={handleChange1} name="text-input" defaultValue={Candidate_Id} placeholder="Text" />
                    <CFormText>Enter the Candidate ID above</CFormText>
                  </CCol>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Interview date and time</CLabel>
                  </CCol>
                    <CCol xs="12" md="9">
                    
                    <CInput type="datetime-local" onChange={onChange} defaultValue={Interview_Date_Time}  />
                  </CCol>

                  <CCol md="3">
                    <CLabel htmlFor="text-input">Input Status</CLabel>
                  </CCol>

                  <CCol xs="12" md="9">
                    <CInput id="text-input" onChange={handleChange2} name="text-input" defaultValue={status} placeholder="Text" />
                    <CFormText>Edit status above</CFormText>
                  </CCol>


                </CFormGroup>
              </CModalBody>
              <CModalFooter>
                <CButton color="dark" onClick={onUpdate}>
                  Update
                </CButton>{' '}
                <CButton color="dark" onClick={ondelete}>
                  Delete
                </CButton>
              </CModalFooter>
            </CModal>
                    
                )
              }
          }}
        />
     </div> )

      
  }
  
  export default Interview
  