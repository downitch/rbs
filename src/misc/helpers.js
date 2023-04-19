export const checkIfStaffMember = () => {
  if (window.localStorage.getItem('rbs_role_hash') === 'staff') return true;
  return false;
};

export const checkIfAuthorized = () => {
  if (window.localStorage.getItem('rbs_login_hash') != null) return true;
  return false;
};

export const logout = () => {
  window.localStorage.removeItem('rbs_login_hash');
  window.localStorage.removeItem('rbs_role_hash');
  window.location.reload(false);
};