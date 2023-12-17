import React, { useContext } from "react";
import { PageContext } from "../PageContextLogic";

// icon imports
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiAxios, SiTailwindcss, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Author = () => {
  const { setPage } = useContext(PageContext);

  return (
    <div className="min-h-screen bg-gray-400">
      <div className="container mx-auto bg-gray-400">
        <h2 className="text-center text-2xl font-bold bg-gray-400 pt-3">
          COMS-319: Construction of User Interfaces
        </h2>
        <p className="text-center mt-2">
          Solo Developed by: Nick McCullough
          <br />
          Professor: Abraham Aldaco, Ph.D.
          <br />
          Final Project Repository:{" "}
          <a
            href="https://github.com/mccnick/secoms319_final-project"
            className="text-blue-600 hover:text-blue-800 bg-gray-400">
            GitHub
          </a>
          <br />
          Email: nickmcc@iastate.edu
          <br />
          Due Date: 12/10/2023
          <br />
          Assignment 03
          <br />
          <br />
        </p>
        <div className="md:flex-row shadow-lg rounded-lg overflow-hidden bg-gray-300">
          <h2 className="text-center text-2xl font-bold bg-purple-600">
            Technologies used to build this (M E R N) website:
            <div className="flex justify-center items-center space-x-4 pb-4 pt-4">
              {/* flex container for icons */}

              <SiMongodb size={50} title="MongoDB" />
              <SiExpress size={50} title="Express" />
              <FaReact size={50} title="React" />
              <FaNodeJs size={50} title="NodeJS" />
              <IoLogoJavascript size={50} title="JavaScript" />
              <FaHtml5 size={50} title="HTML5" />
              <FaCss3Alt size={50} title="CSS3" />
              <SiTailwindcss size={50} title="TailwindCSS" />
              <SiAxios size={50} title="Axios" />
            </div>
          </h2>
          <div className="text-center mt-2">
            <p>
              The merchandise pictures and product information used in this
              website were sourced from:
              <br></br>
              <a
                href="https://fakestoreapi.com/products"
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer">
                {" "}
                Fake Store API
              </a>
              .
            </p>
          </div>

          <p className="text-center mt-2 pb-4">
            I decided to use the URL Image addresses rather than downloading images
            to my device.
          </p>
        </div>

        <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden mt-4 bg-gray-300">
          <div className="md:w-1/3">
            <img
              src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/242514478_10223647137104764_7794972867059718420_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=aWwQu8sJKncAX-7m1DU&_nc_ht=scontent-ord5-2.xx&oh=00_AfDLNfduWu6QjFhSO2SuDNPVcmVnmBdPDV5y0VVK0fJRrQ&oe=6576C1B4"
              alt="Nick Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h5 className="text-lg font-bold">
              {" "}
              Developer Info - Nick McCullough
            </h5>
            <p className="mt-2">
              <strong>Major:</strong> Software Engineering
              <br />
            </p>
            <p className="mt-2">
              <strong>Bio:</strong> Nick is a non-traditional student,
              previously from a finance background before going back to college.
              He is a rising Junior at Iowa State majoring in Software
              Engineering. Nick is joining Collins Aerospace in 2024 as an
              Avionics/Mission Flight Software Engineer through an 8 month Co-Op
              and previously interned at John Deere.
            </p>
            <p className="mt-2">
              Nick has experience with Git, GitHub, JavaScript, ReactJS from
              building his personal portfolio website. Prior to that, he had no
              frontend experience. He enjoys learning frontend development in
              SE319 and finds it useful.
            </p>

            <p className="mt-2">
              <strong>Hobbies:</strong>
              <br />
            </p>
            <ul className="list-disc list-inside">
              <li>
                Listening to music
              </li>
              <li>Spending time with family and friends</li>
              <li>Gaming - Valorant, COD, Fortnite</li>
              <li>
                Helping friends / classmates in my ISU Tech discord community
              </li>
              <li>Building / iterating upon my PC desk setup</li>
              <li>Buying too many sneakers</li>
              <li>Learning new tech</li>
              <li>Traveling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
