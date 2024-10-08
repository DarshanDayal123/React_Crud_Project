import axios from 'axios';


const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.REACT_APP_AIRTABLE_TABLE_NAME;

const airtableApi = axios.create({
  baseURL: `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});


export const fetchEmployees = async () => {
  try {
    const response = await airtableApi.get();
    return response.data.records;
  } catch (error) {
    console.error('Error fetching employee records:', error);
    throw error;
  }
};


export const addEmployee = async (newEmployee) => {
    try {
      const employeeRecord = {
        fields: {
          FirstName: newEmployee.FirstName,    
          LastName: newEmployee.LastName,      
          Email: newEmployee.Email,           
          PhoneNumber: newEmployee.PhoneNumber, 
          Department: newEmployee.Department,  
        },
      };
  
      console.log('Sending to AirTable:', employeeRecord);  
      const response = await airtableApi.post('', employeeRecord);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error('Error response from AirTable:', error.response.data);  
      } else {
        console.error('Error:', error.message);
      }
      throw error;
    }
  };
  
  


export const deleteEmployee = async (id) => {
  try {
    await airtableApi.delete(`/${id}`);
  } catch (error) {
    console.error('Error deleting employee record:', error);
    throw error;
  }
};
