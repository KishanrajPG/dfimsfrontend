import { useState,useEffect } from 'react'
import axios from 'axios'
import DateTimePicker from 'react-datetime-picker'
import {
    CForm,
    CValidFeedback,
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
    CInputCheckbox,
    CCollapse,
    DateTimePickerInput 
  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import CIcon from '@coreui/icons-react'
  import React, { Component } from 'react'

 
  
  function Feedback() {
    const [details, setDetails] = useState([])
    const [usersData,setusersData] = useState([])
    const [items, setItems] = useState(usersData)
    const [visible, setVisible] = useState(false)
    const [primary, setPrimary] = useState(false)
    const [info, setInfo] = useState(false)

    const [deleteid, setdeleteid] = useState("")
    const [Interview_Id, setInterview_Id] = useState("")
    const [Request_Id, setRequest_Id] = useState("")
    const [Candidate_Id, setCandidate_Id] = useState("")
    const [Recived_From, setRecived_From] = useState("")
    const [formresult, setformresult] = useState("")
    // const [setchecked, setchecked] = useState("")
    const [checked, setchecked] = useState("")
    // const [setformresult, setformresult] = useState("")
    const [Feedback_Submission_Date_Time, setFeedback_Submission_Date_Time] = useState("")
    const [FeedBack_Details, setFeedBack_Details] = useState("")
    const [status, setstatus] = useState("")
    
    // const [visible, setVisible] = useState(false)


    useEffect(async () => {
      const result = await axios(
        'http://localhost:3001/admin/view_Feedbacks',
      );
   console.log(result.data)
      setusersData(result.data);
    },[]);

  const ondelete = ()=> {
  axios.delete(`http://localhost:3001/admin/delete-feedback/${deleteid}`)
  window.location.reload();
  }

  const handledata = (e)=>{
    setInfo(!info)
    const data=JSON.parse(e.target.getAttribute('datakey'))
    console.log(data.Feedback_Id)
    setdeleteid(data.Feedback_Id)
    setInterview_Id(data.Interview_Id)
    setRequest_Id(data.Request_Id)
    setCandidate_Id(data.Candidate_Id)
    setRecived_From(data.Recived_From)
    setFeedback_Submission_Date_Time(data.Feedback_Submission_Date_Time)
    setFeedBack_Details(data.FeedBack_Details)
  }
  
  // const handledata1 = (e)=>{
  //   setInfo(!info)
  //   console.log(e.target.getAttribute('datakey'))
  //   setdeleteid(e.target.getAttribute('datakey'))
  // }

 
  
    const fields = [
      {key:'Feedback_Id', _style: {width: '15%'}},
      {key: 'Interview_Id', _style: { width: '15%'} },
      {key: 'Request_Id', _style: { width: '15%'} },
      { key: 'Candidate_Id', _style: { width: '15%'} },
      { key: 'Recived_From', _style: { width: '15%'} },
      { key: 'Feedback_Submission_Date_Time', _style: { width: '15%'} },
      { key: 'FeedBack_Details', _style: { width: '15%'} },
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
      setFeedBack_Details(e.target.value)
    }
    const onChange=(e)=>{
      console.log(e.target.value)
      setFeedback_Submission_Date_Time(e.target.value)
    }
    const onUpdate=()=>{
      const data={
        "Feedback_Id": deleteid,
        "Interview_Id": Interview_Id,
        "Request_Id": Request_Id,
        "Candidate_Id": Candidate_Id,
        "Recived_From": Recived_From,
        "Feedback_Submission_Date_Time": Feedback_Submission_Date_Time,
        "FeedBack_Details": FeedBack_Details
      }
      console.log(data)
  
      axios
    .put(
        "http://localhost:3001/admin/update_Feedback",data
    )
    .then(r => console.log(r.status))
    .catch(e => console.log(e));
     window.location.reload();
    const result = axios.get(
      'http://localhost:3001/admin/view_Feedbacks',
    );
  //  console.log(result.data)
    setusersData(result.data);
    }

    const onAdd=()=>{
      const data={
        "Feedback_Id": deleteid,
        "Interview_Id": Interview_Id,
        "Request_Id": Request_Id ,
        "Candidate_Id" : Candidate_Id,
        "Recived_From" : Recived_From,
        "Feedback_Submission_Date_Time": Feedback_Submission_Date_Time,
        "FeedBack_Details": FeedBack_Details
      }
      console.log(data)
      if(formresult==true){
        axios.post("http://localhost:3001/admin/add_Feedback", data )
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

    const Feedback_Idchange=(e)=>{
      setdeleteid(e.target.value)
      console.log(e.target.value)
    }
    
    const Interview_Idchange=(e)=>{
      setInterview_Id(e.target.value)
    }
    
    const Request_Idchange=(e)=>{
      setRequest_Id(e.target.value)
    }

    const Candidate_Idchange=(e)=>{
      setCandidate_Id(e.target.value)
    } 
    const Recived_Fromchange=(e)=>{
      setRecived_From(e.target.value)
    }

    const Feedback_Submission_Date_Timechange=(e)=>{
      setFeedback_Submission_Date_Time(e.target.value)
    }
    
    const FeedBack_Detailschange=(e)=>{
      setFeedBack_Details(e.target.value)
    }
  
    // const [value, onChange] = useState(new Date());

    const handlecheck=(e)=>{
      setchecked(!checked)
      const data={
        "Feedback__Id": deleteid,
        "Interview_Id": Interview_Id,
        "Request_Id": Request_Id ,
        "Candidate_Id" : Candidate_Id,
        "Recived_From" : Recived_From,
        "Feedback_Submission_Date_Time": Feedback_Submission_Date_Time,
        "Feedback_Details": FeedBack_Details
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
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
      }
    }
   
    return (
      <div>
        <div>
  <CButton style={{width:"200px",margin:"auto",marginBottom:"50px"}} onClick={() => setVisible(!visible)} active block color="primary" aria-pressed="true">Add Feedback</CButton>

  <CModal 
              show={visible} 
              onClose={() => setVisible(!visible)}
              color="dark"
            >
              <CModalHeader closeButton>
                <CModalTitle>Add new Feedback</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
              Feedback form
            </CCardHeader>
            <CCardBody>
            <CForm className="was-validated">
              <CFormGroup>
                <CLabel htmlFor="company">Feedback_Id</CLabel>
                <CInput onChange={Feedback_Idchange} id="company"  placeholder="alpha-num"  required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              {/* <CFormGroup>
                <CLabel htmlFor="inputIsInvalid">Input is invalid</CLabel>
                <CInput invalid id="inputIsInvalid" />
                <CInvalidFeedback>Houston, we have a problem...</CInvalidFeedback>
              </CFormGroup> */}
              <CFormGroup>
                <CLabel htmlFor="vat">Interview_Id</CLabel>
                <CInput onChange={Interview_Idchange} id="vat" placeholder="Interviewer email"  required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Request_Id</CLabel>
                <CInput onChange={Request_Idchange} id="street" placeholder="Auto generated " required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="city">Candidate_Id</CLabel>
                    <CInput onChange={Candidate_Idchange} id="city" placeholder="candidate email"  required/>
                    
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="street">Recived from</CLabel>
                    <CInput onChange={Recived_Fromchange} id="street" placeholder="Reciver email"  required/>
                    
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Date </CLabel>
                <CInput onChange={Feedback_Submission_Date_Timechange} type="datetime-local" id="country" placeholder="YYYY-MM-DD"  required/>
                
                  <CValidFeedback className="help-block">Input provided</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">FeedBack_Details</CLabel>
                <CInput onChange={FeedBack_Detailschange} id="street" placeholder=""  required/>
                
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
                <CButton color="dark" onClick={() => setVisible(false)} >
                  Cancle
                </CButton>
              </CModalFooter>
            </CModal>




     
      </div>

        {/* <CButton style={{width:"200px",margin:"auto",marginBottom:"50px"}} active block color="primary" aria-pressed="true">Add Feedback</CButton> */}
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
                <CModalTitle>Update Feedback</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CFormGroup row>
                 
              <CCol md="3">
                    <CLabel>Interview ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">{Interview_Id}</p>
                  </CCol>

                  <CCol md="3">
                    <CLabel>Request ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">{Request_Id}</p>
                  </CCol>

                  <CCol md="3">
                    <CLabel>Candidate Id</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">{Candidate_Id}</p>
                  </CCol>
                 
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Recived From</CLabel>
                  </CCol>

                  <CCol xs="12" md="9">
                    <CInput id="text-input" onChange={handleChange1} name="text-input" defaultValue={Recived_From} placeholder="Text" />
                    {/* <CFormText>Enter the Candidate ID above</CFormText> */}
                  </CCol>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Feedback date and time</CLabel>
                  </CCol>
                    <CCol xs="12" md="9">
                    
                    <CInput type="datetime-local" onChange={onChange} defaultValue={Feedback_Submission_Date_Time}  />
                  </CCol>

                  <CCol md="3">
                    <CLabel htmlFor="text-input">Feedback Details</CLabel>
                  </CCol>

                  <CCol xs="12" md="9">
                    <CInput id="text-input" onChange={handleChange2} name="text-input" defaultValue={FeedBack_Details} placeholder="Text" />
                    <CFormText>Edit details above</CFormText>
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
  
  export default Feedback