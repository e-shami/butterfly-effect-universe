import React from "react";

const AboutUs = () => {
  return (
    <div className="h-screen flex-row text-center justify-center align-middle">
      <div
        style={{
          height: "110vh",
          width: "80%",
          position: "absolute",
          background: "#c1e5e0",
          border: "1px solid #fff",
          boxShadow: "0px 0px 6px 1px #dbdbdb",
          display: "flex",
        }}
      >
        <div
          className="absolute"
          style={{
            width: "130%",
          }}  
        >
          <h2
            className="
                font-bold text-5xl mt-10 mb-10"
            style={{ color: "#526092" }}
          >
            About Us
          </h2>
          <div
            style={{
              height: "50vh",
              width: "50%",
              position: "absolute",
              background: "#ffffffbf",
              border: "1px solid #fff",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "30px",
              marginLeft: "10%",
              marginTop: "10%",
              zIndex: 1,
              boxShadow: "0px 0px 6px 1px #dbdbdb",
            }}
          >
            <h3
              style={{
                color: "#526092",
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "5%",
                marginTop: "3%",
              }}
            >
              Our Mission
            </h3>
            <p
              style={{
                textAlign: "left",
                paddingLeft: "5%",
                paddingRight: "5%",
                fontSize: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, doloremque, quod, quos voluptatibus voluptates
              voluptas dolorum quibusdam quas quia dolorem! Quisquam voluptatum,
              doloremque, quod, quos voluptatibus voluptates voluptas dolorum
              quibusdam quas quia dolorem!
            </p>
            {/* become patron */}
            <button
              className=" text-white font-bold py-2 px-4 border-collapse mt-10"
              style={{
                backgroundColor: "#526092",
                borderRadius: "10px",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#fff",
                alignSelf: "left",
                justifySelf: "left",
                alignItems: "center",
                marginTop: "5%",
                marginBottom: "5%",
                marginLeft: "5%",
                display: "flex",
                padding: "15px 25px 15px 25px"
              }}
            >
              Become a Patron{" "}
              <svg
                style={{ marginLeft: 10 }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          style={{
            height: "100vh",
            width: "90%",
            position: "absolute",
            backgroundImage: "url('/assets/images/lib1.jpg')",
            border: "1px solid #fff",
            // boxShadow: "2px 4px 6px 3px #dbdbdb",
            marginTop: "10%",
            justifySelf: "center",
            borderRadius: "50px",
            right: "-30%",
            boxShadow: "0px 0px 6px 1px #dbdbdb",
            zIndex: 0,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutUs;
