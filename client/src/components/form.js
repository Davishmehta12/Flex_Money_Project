import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [batch, setBatch] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:4000/addUser/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          batch,
        }),
      });
  
      const data = await response.json();
      if(data.success){
        if(data.paymentStatus){
          alert("Registration successfull")
        }
        else{  
        alert("user already exists or age is not correct")
        }
      }else{
        alert("user already exists or age is not correct");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name: <br></br>
        <input required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Enter your Age: <br></br>
        <input required
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="0"
        />
      </label>
      <div>
        Details:<br/>
        1)Registration fees for this yoga session would be 500Rs.<br/>
        2)Only people within the age limit of 18-65 can enroll for the monthly classes. <br/>
        3)There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. You can choose any batch in a month and can move to any other batch next
month. I.e. you can shift from one batch to another in different months but in the
same month,you need to be in the same batch.
        
      </div> <br/> 
      

      <label>
        {" "}
        Select your Batch: <br />
        <div className="radio-fields">
          {/* Use the 'checked' attribute to determine which radio button is selected */}
          <div className="radio-div">
            <input 
              type="radio"
              id="6-7"
              name="batch"
              value="6-7 Am"
              checked={batch === "6-7 Am"}
              onChange={() => setBatch("6-7 Am")}
            />
            <label htmlFor="6-7">6-7 Am</label>
          </div>
          <div className="radio-div">
            <input 
              type="radio"
              id="7-8"
              name="batch"
              value="7-8 Am"
              checked={batch === "7-8 Am"}
              onChange={() => setBatch("7-8 Am")}
            />
            <label htmlFor="7-8">7-8 Am</label>
          </div>
          <div className="radio-div">
            <input required
              type="radio"
              id="8-9"
              name="batch"
              value="8-9 Am"
              checked={batch === "8-9 Am"}
              onChange={() => setBatch("8-9 Am")}
            />
            <label htmlFor="8-9">8-9 Am</label>
          </div>
          <div className="radio-div">
            <input 
              type="radio"
              id="9-10"
              name="batch"
              value="9-10 Am"
              checked={batch === "9-10 Am"}
              onChange={() => setBatch("9-10 Am")}
            />
            <label htmlFor="9-10">5-6 Pm</label>
          </div>
        </div>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
