import axios from "axios";
import { useEffect, useState } from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Phone = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data =>setPhones(data.data))

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phoneWithFakeData);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-black">Phones: {phones.length}</h1>
      <BarChart width={1100} height={400} data={phones}>
        <Bar dataKey="price" fill="" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phone;
