// import React from 'react';

import { useEffect, useState } from "react";

const useClasses = () => {
  const [classData, setClassData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClassData(data);
        setLoading(false);
      });
  }, []);

  return [classData, loading];
};

export default useClasses;