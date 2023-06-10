

import useClasses from "../../hooks/useClasses";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classData] = useClasses();

  return (
    <div>
      {/* ... */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {classData.map((classItem) => (
          <ClassCard key={classItem._id} classItem={classItem} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
