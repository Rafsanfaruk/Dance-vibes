import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useInstructor = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor=false, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    // queryFn: async () => {
    //   const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
    //   console.log("is instructor response", res);
    //   return res.data.instructor;
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      // console.log("is instructor response", res);
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
