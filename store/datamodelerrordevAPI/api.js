import axios from "axios"
const datamodelerrordevAPI = axios.create({
  baseURL: "https://datamodelerror-dev-89400.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return datamodelerrordevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return datamodelerrordevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return datamodelerrordevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return datamodelerrordevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return datamodelerrordevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return datamodelerrordevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return datamodelerrordevAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_mithilesh_list(payload) {
  return datamodelerrordevAPI.get(`/api/v1/mithilesh/`)
}
function api_v1_mithilesh_create(payload) {
  return datamodelerrordevAPI.post(`/api/v1/mithilesh/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return datamodelerrordevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return datamodelerrordevAPI.post(`/rest-auth/logout/`)
}
function api_v1_mithilesh_retrieve(payload) {
  return datamodelerrordevAPI.get(`/api/v1/mithilesh/${payload.id}/`)
}
function api_v1_mithilesh_update(payload) {
  return datamodelerrordevAPI.put(
    `/api/v1/mithilesh/${payload.id}/`,
    payload.data
  )
}
function api_v1_mithilesh_partial_update(payload) {
  return datamodelerrordevAPI.patch(
    `/api/v1/mithilesh/${payload.id}/`,
    payload.data
  )
}
function api_v1_mithilesh_destroy(payload) {
  return datamodelerrordevAPI.delete(`/api/v1/mithilesh/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return datamodelerrordevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return datamodelerrordevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return datamodelerrordevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return datamodelerrordevAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return datamodelerrordevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_mithilesh_list,
  api_v1_mithilesh_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_mithilesh_retrieve,
  api_v1_mithilesh_update,
  api_v1_mithilesh_partial_update,
  api_v1_mithilesh_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
