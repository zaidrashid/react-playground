import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResource = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  }

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
}

const ResourceList = ({ resource }) => {
  const resources = useResource(resource);

  return (
    <div>
      <h1>{resource}</h1>
      {resources.map(resouce => <li>{resouce.title}</li>)}
    </div>
  );
};

export default ResourceList;