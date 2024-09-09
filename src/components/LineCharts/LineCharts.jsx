import { LineChart as LC, Line, XAxis, YAxis } from "recharts";

const LineCharts = () => {
  const subjectMarkData = [
    {
      "id": 1,
      "name": "Alice",
      "math_marks": 85,
      "physics_marks": 82,
      "chemistry_marks": 79
    },
    {
      "id": 2,
      "name": "Bob",
      "math_marks": 76,
      "physics_marks": 72,
      "chemistry_marks": 68
    },
    {
      "id": 3,
      "name": "Charlie",
      "math_marks": 92,
      "physics_marks": 94,
      "chemistry_marks": 90
    },
    {
      "id": 4,
      "name": "David",
      "math_marks": 67,
      "physics_marks": 60,
      "chemistry_marks": 65
    },
    {
      "id": 5,
      "name": "Eva",
      "math_marks": 88,
      "physics_marks": 85,
      "chemistry_marks": 90
    },
    {
      "id": 6,
      "name": "Frank",
      "math_marks": 81,
      "physics_marks": 77,
      "chemistry_marks": 74
    },
    {
      "id": 7,
      "name": "Grace",
      "math_marks": 95,
      "physics_marks": 96,
      "chemistry_marks": 94
    },
    {
      "id": 8,
      "name": "Hank",
      "math_marks": 70,
      "physics_marks": 65,
      "chemistry_marks": 68
    },
    {
      "id": 9,
      "name": "Ivy",
      "math_marks": 89,
      "physics_marks": 84,
      "chemistry_marks": 88
    },
    {
      "id": 10,
      "name": "John",
      "math_marks": 77,
      "physics_marks": 70,
      "chemistry_marks": 72
    }
  ]
  

  return (
    <div className="flex flex-col bg-green-500 mt-6">
      <LC  width={1100} height={350} data={subjectMarkData}>
        <Line dataKey="math_marks" stroke="red"></Line>
        <Line dataKey="physics_marks" stroke="green"></Line>
        <Line dataKey="chemistry_marks" stroke="blue"></Line>
        <XAxis></XAxis>
        <YAxis></YAxis>
      </LC>
    </div>
  );
};

export default LineCharts;
