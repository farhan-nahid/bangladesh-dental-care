import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.npoint.io/5b877138b355b781bfc2')
      .then((res) => setServices(res.data))
      .catch((err) => toast.error('Something Went Wrong'));
  }, []);
  return [services];
};

export default useServices;
