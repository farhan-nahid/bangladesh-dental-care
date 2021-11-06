import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/farhan-nahid/router-task/main/src/allServices.json'
      )
      .then((res) => setServices(res.data))
      .catch((err) => toast.error('Something Went Wrong'));
  }, []);
  return [services];
};

export default useServices;
