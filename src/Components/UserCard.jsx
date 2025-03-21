import React from "react";

const userCard = ({ users }) => {
  // console.log(users);
  const { firstName, lastName, skills, age, gender, img_Url } = users;
  return (
    <>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img
            className=" w-[400px] h-[500px] object-center object-contain"
            src={img_Url}
            alt="People"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{age + " " + gender}</p>
          <div className="flex gap-2.5">
          {skills &&
            skills.map((skill) => {
              return <span key={skill}>{skill}</span>;
            })}
          </div>
          <div className="card-actions  justify-end">
            <button className="btn bg-red-600">Ignore</button>
            <button className="btn bg-pink-700">Interested</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default userCard;
