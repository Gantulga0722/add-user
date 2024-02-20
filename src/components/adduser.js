import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/index/submitUserData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, age }),
        }
      );

      if (response.ok) {
        console.log("Data submitted successfully");
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  return (
    <main className="flex justify-center items-center container mx-auto gap-10 mt-[100px]">
      <div className="flex w-[350px] h-[200px] rounded-[12px] gap-5 border flex-col p-4 justify-center">
        <div className="flex gap-2">
          <label htmlFor="name">User Name:</label>
          <input
            type="text"
            placeholder="enter user name"
            id="name"
            className="border rounded-[5px] p-[2px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="age">User Age:</label>
          <input
            type="text"
            placeholder="enter user age"
            id="age"
            className="border rounded-[5px] p-[2px]"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button
          className="flex justify-center items-center rounded-[5px] border bg-[#9494d2] w-[100px]"
          onClick={handleSubmit}
        >
          Add User
        </button>
      </div>
      <div className="flex w-[350px] h-[200px] rounded-[12px] gap-5 border flex-col p-4 justify-center">
        <div className="flex gap-2">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            placeholder="enter product name"
            id="product"
            className="border rounded-[5px] p-[2px]"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="age">Product Price:</label>
          <input
            type="text"
            placeholder="enter product price"
            id="price"
            className="border rounded-[5px] p-[2px]"
          />
        </div>

        <button className="flex justify-center items-center rounded-[5px] border bg-[#9494d2] w-[120px]">
          Add Product
        </button>
      </div>
    </main>
  );
}
