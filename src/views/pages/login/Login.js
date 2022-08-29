import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CContainer,
  CModalFooter,
  CForm,
  CFormInput,
  CCol,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = (props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextFormState)
  }
  const onSubmitForm = (e) => {
    e.preventDefault()
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CModal
          className="show d-block position-static"
          backdrop={false}
          keyboard={false}
          portal={false}
          visible
        >
          <CModalHeader>
            <CModalTitle>Pls Log In to your account</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm onSubmit={onSubmitForm}>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <input
                  type="text"
                  placeholder="Email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <CInputGroupText>
                  <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <input
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  autoComplete="current-password"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <CInputGroupText>
                  <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  autoComplete="current-password"
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                />
                {/* <input type="text" placeholder="lol" /> */}
              </CInputGroup>
              <CRow>
                <CCol xs={6}>
                  <CButton color="primary" className="px-4" type="submit">
                    Login
                  </CButton>
                </CCol>
                {/* <CCol xs={6} className="text-right">
                  <CButton color="link" className="px-0">
                    Forgot password?
                  </CButton>
                </CCol> */}
              </CRow>
            </CForm>
          </CModalBody>
        </CModal>
      </CContainer>
    </div>
  )
}

export default Login
