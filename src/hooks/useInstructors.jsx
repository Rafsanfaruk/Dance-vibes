import { useEffect, useState } from "react";

const useInstructors = () => {
    const [instructorsData, setInstructorsData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('instructors.json')
          .then((res) => res.json())
          .then((data) => {
           setInstructorsData(data);
            setLoading(false);
          });
      }, []);
    
      return [instructorsData, loading];
    };

export default useInstructors;