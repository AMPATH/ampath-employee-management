import { formInputProps, budgetInputProps } from './dimensions.types';

const url = process.env.REACT_APP_URL;
const token = sessionStorage.getItem('token');

export const addBudget = async (values) => {
  return await fetch(url + `/budget`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'Application/json' },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response;
    })
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      return error;
    });
};

export const addCounty = async (values) => {
  return await fetch(url + `/county`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'Application/json' },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response;
    })
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      return error;
    });
};

export const addDepartment = async (values) => {
  return await fetch(url + `/department`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'Application/json' },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response;
    })
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      return error;
    });
};

export const addSite = async (values) => {
  return await fetch(url + `/site`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'Application/json' },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response;
    })
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      return error;
    });
};

export const addProgram = async (values) => {
  return await fetch(url + `/program`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'Application/json' },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response;
    })
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      return error;
    });
};

export const addProject = async (values) => {
  return await fetch(url + `/project`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'Application/json' },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response;
    })
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      return error;
    });
};

export const getUser = async (userName) => {
  const options = {
    headers: {
      Authorization: `Bearer  ${token}`,
      'Content-Type': 'application/json',
    },
  };
  return await fetch(url + `/role?userName=${userName}`, options)
    .then((response) => {
      return response.json();
    })
    .then((res: any) => {
      return res.data;
    })
    .catch((error: any) => {
      return error;
    });
};

export const updateRole = async (formData: any) => {
  const options = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer  ${token}`,
      'Content-Type': 'application/json',
    },
    body: formData,
  };
  return await fetch(url + `/register`, options)
    .then((response) => {
      return response.json();
    })
    .then((res: any) => {
      return res.data;
    })
    .catch((error: any) => {
      return error;
    });
};
