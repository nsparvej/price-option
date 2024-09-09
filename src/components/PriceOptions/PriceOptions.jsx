import PriceOption from "../../PriceOption/PriceOption";

const PriceOptions = () => {
  const PriceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Unlimited group classes",
        "Free fitness assessment",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "All features of Basic Membership",
        "Access to swimming pool",
        "One personal training session per month",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 69.99,
      features: [
        "All features of Standard Membership",
        "Unlimited personal training sessions",
        "Access to sauna and steam room",
        "Priority booking for classes",
      ],
    },
    {
      id: 4,
      name: "Family Membership",
      price: 99.99,
      features: [
        "Access for up to 4 family members",
        "All features of Premium Membership",
        "Family fitness classes",
        "Discounts on additional personal training sessions",
      ],
    },
    {
      id: 5,
      name: "Day Pass",
      price: 9.99,
      features: [
        "Access to gym equipment for one day",
        "Access to group classes on the day of visit",
        "No long-term commitment",
      ],
    },
    {
      id: 6,
      name: "Student Membership",
      price: 19.99,
      features: [
        "Access to gym equipment",
        "Unlimited group classes",
        "Discounted personal training sessions",
        "Valid student ID required",
      ],
    },
    {
      id: 7,
      name: "Senior Membership",
      price: 24.99,
      features: [
        "Access to gym equipment",
        "Senior group fitness classes",
        "Free monthly health workshop",
      ],
    },
    {
      id: 8,
      name: "Corporate Membership",
      price: 89.99,
      features: [
        "Access for employees of participating companies",
        "All features of Premium Membership",
        "Corporate wellness programs",
        "Discounts for large groups",
      ],
    },
    {
      id: 9,
      name: "Weekend Warrior",
      price: 14.99,
      features: [
        "Access to gym equipment on weekends",
        "Weekend group classes",
        "No weekday access",
      ],
    },
  ];

  return (
    <div className="">
      <h1 className=" text-5xl text-center bg-yellow-200 text-black">Best Prices in the town</h1>
      <div className="grid grid-cols-3 gap-3 ">
      {PriceOptions.map((option) => (
        <PriceOption option={option} key={PriceOptions.id}></PriceOption>
      ))}
      </div>
    </div>
  );
};

export default PriceOptions;
