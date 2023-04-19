export const checkIfStaffMember = () => {
  if (window.localStorage.getItem('rbs_role_hash') === 'staff') return true;
  return false;
};

export const checkIfAuthorized = () => {
  if (window.localStorage.getItem('rbs_login_hash') != null) return true;
  return false;
};

export const authUser = () => {
  window.localStorage.setItem('rbs_login_hash', 'login_hash');
  window.localStorage.setItem('rbs_role_hash', (active ? 'student' : 'staff'));
  window.location.reload(false);
};

export const logout = () => {
  window.localStorage.removeItem('rbs_login_hash');
  window.localStorage.removeItem('rbs_role_hash');
  window.location.reload(false);
};