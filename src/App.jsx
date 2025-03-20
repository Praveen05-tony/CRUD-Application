import { useState } from 'react'
import './App.css'
import Tablecomponent from './table';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from './popup';

function App() {
  const [valuee, setValuee] = useState(false);
  const [tempData, setTempData] = useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    if (rowData) {
      setTempData(rowData)
    } else {
      setTempData({
        emailId: null,
        location: null,
        name: null,
        phoneNo: null,
        qualification: null
      })
    }
    setShow(true);
  }
  return (
    <Container fluid className='p-4'>
      <Popup boxShow={show} boxClose={handleClose} fieldData={tempData} setFieldData={setTempData} ref={valuee} setRef={setValuee} />
      <Tablecomponent boxOpen={handleShow} update={valuee} setUpdate={setValuee} />
    </Container>
  )
}

export default App
