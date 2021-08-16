import React from "react";
import { GithubIcon } from "../icons/Organization";

export function FooterComponent(props) {
  return (
    <section className="mx-2">
      <hr className="mt-6 mb-2" />

      <div className="grid-col-12 flex justify-between">
        <div className="col-span-2">
          <span className="text-sm text-gray-600">
            Dashboard by
            <br />
            <a
              className="hover:text-blue-600"
              href="https://github.com/Badr-MOUFAD"
              target="blank"
            >
              @Badr-MOUFAD
            </a>{" "}
          </span>
        </div>

        <div className="col-span-2">
          <span className="text-sm text-gray-600">
            Internship at AgriEdge <br /> 2020-2021
          </span>
        </div>

        <div className="col-span-2">
          <span className="cursor-pointer">
            <a
              className="inline-flex flex items-center"
              target="blank"
              href="https://github.com/Badr-MOUFAD/dashboard-agri-edge-frontend"
            >
              <span className="text-sm text-gray-600 mr-2">Code source</span>{" "}
              <GithubIcon color="gray-600" size="20" />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
