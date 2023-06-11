import { useState, useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Modal from "./Modal";

const ManageClasses = () => {
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);
  const [axiosSecure] = useAxiosSecure();
  const [classes, setClasses] = useState([]);

  // Function to fetch classes from the server
  const fetchClasses = async () => {
    try {
      const res = await axiosSecure.get("/classes");
      setClasses(res.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  // Function to update the status of a class to approved
  const approveClass = async (classId) => {
    try {
      await axiosSecure.patch(`/classes/${classId}`, {
        status: "approved",
      });
      // Update the status locally
      setClasses((prevClasses) =>
        prevClasses.map((classItem) => {
          if (classItem.id === classId) {
            return {
              ...classItem,
              status: "approved",
            };
          }
          return classItem;
        })
      );
    } catch (error) {
      console.error("Error approving class:", error);
    }
  };

  // Function to update the status of a class to denied
  const denyClass = async (classId) => {
    try {
      await axiosSecure.patch(`/classes/${classId}`, {
        status: "denied",
      });
      // Update the status locally
      setClasses((prevClasses) =>
        prevClasses.map((classItem) => {
          if (classItem.id === classId) {
            return {
              ...classItem,
              status: "denied",
            };
          }
          return classItem;
        })
      );
    } catch (error) {
      console.error("Error denying class:", error);
    }
  };

  // Function to handle sending feedback to the instructor
  const sendFeedback = async () => {
    try {
      // Send feedback to the instructor
      await axiosSecure.post(`/feedback/${selectedClass.instructorId}`, {
        feedback,
      });
      // Close the modal and reset the feedback
      setShowModal(false);
      setFeedback("");
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  // Fetch classes on component mount
  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>
      {classes.length === 0 ? (
        <p>No classes available.</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Dance Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem,index) => (
              <tr key={classItem._id}>
                <td>
                    {index + 1}
                </td>
                <td>
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="text-center">{classItem.name}</td>
                
                <td>{classItem?.email}</td>
                <td className="text-center">{classItem.availableSeats}</td>
                <td className="text-end">${classItem.price}</td>
                <td>{classItem.status}</td>
                <td>
                  {classItem.status === "pending" && (
                    <>
                      <button
                        onClick={() => approveClass(classItem._id)}
                        disabled={classItem.status !== "pending"}
                        className="btn btn-primary"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => denyClass(classItem._id)}
                        disabled={classItem.status !== "pending"}
                        className="btn btn-danger"
                      >
                        Deny
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => {
                      setSelectedClass(classItem);
                      setShowModal(true);
                    }}
                    disabled={classItem.status === "pending"}
                    className="my-btn "
                  >
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showModal && (
        <Modal
          title="Send Feedback"
          onClose={() => setShowModal(false)}
          onSubmit={sendFeedback}
        >
          <div className="mb-4">
            <label htmlFor="feedback" className="font-bold">
              Feedback:
            </label>
            <textarea
              id="feedback"
              className="w-full h-32 p-2 border rounded"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              required
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </Modal>
      )}
    </div>
  );
};

export default ManageClasses;
