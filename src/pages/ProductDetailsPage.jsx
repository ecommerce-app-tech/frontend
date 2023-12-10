import React from 'react'

function ProductDetailsPage() {
    const getProject = () => {
        // Get the token from the localStorage
        const storedToken = localStorage.getItem("authToken");
       
        // Send the token through the request "Authorization" Headers
        axios
          .get(
            `${API_URL}/api/projects/${projectId}`,
            { headers: { Authorization: `Bearer ${storedToken}` } }
          )
          .then((response) => {
            const oneProject = response.data;
            setProject(oneProject);
          })
          .catch((error) => console.log(error));
      };
  return (
    <div>ProductDetailsPage</div>
  )
}

export default ProductDetailsPage