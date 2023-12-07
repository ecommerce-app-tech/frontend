import React from 'react'

function AddProduct() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { title, description };
       
        // Get the token from the localStorage
        const storedToken = localStorage.getItem('authToken');
       
        // Send the token through the request "Authorization" Headers
        axios
          .post(
          `${API_URL}/api/projects`,
          requestBody,
          { headers: { Authorization: `Bearer ${storedToken}` } }
        )
          .then((response) => {
          // Reset the state
          setTitle("");
          setDescription("");
          props.refreshProjects();
        })
          .catch((error) => console.log(error));
      };
  return (
    <div>AddProduct</div>
  )
}

export default AddProduct