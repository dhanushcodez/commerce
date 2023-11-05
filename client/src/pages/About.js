import React from "react";
import Layout from "./../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout title={"About us - Urban Soul"}>
    <div className="row contactus" style={{ backgroundColor: "lightblue" }}>
      <div className="col-md-6">
        <img
          src={process.env.PUBLIC_URL + "/images/about.jpg"}
          alt="About us"
          style={{ width: "80%" }}
        />
      </div>
      <div className="col-md-4">
        <p className="text-justify mt-1">
          <h2 style={{ color: "green" }}>About Urban Soul: </h2>
          Redefining Fashion for the New Generation
          Welcome to Urban Soul, where fashion meets individuality and style becomes a statement.
          We're more than just a clothing brand; we're a lifestyle,
          a movement, and a celebration of the spirit of today's youth.

          At Urban Soul, our journey began with a simple belief: fashion is not just about clothes;
          it's about self-expression, confidence,
          and embracing your unique identity.
          We recognized that the new generation is a dynamic force,
          constantly evolving and redefining what it means to be stylish and authentic.
        </p>
      </div>
    </div>
  </Layout>
  );
};

export default About;