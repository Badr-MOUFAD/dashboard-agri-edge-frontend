import React from "react";

export function FooterComponent(props) {
  return (
    <section className="mx-2">
      <hr className="mt-6 mb-2" />

      <div className="grid-col-12 flex justify-between">
        <div className="col-span-2">
          <span className="text-sm text-gray-600">Internship</span>
        </div>
        <div className="col-span-1">
          <span className="text-sm text-gray-600">GitHub</span>
        </div>
      </div>
    </section>
  );
}
