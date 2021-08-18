import React from "react";

import { SpinIcon, ErrorIcon, ArrowUpIcon } from "../icons/CoreIcons";

export function FeedbackComponent(props) {
  const { notSelected, isLoading, error } = props;

  if (error) {
    return (
      <div className="flex inline items-center">
        <ErrorIcon className="fill-current text-red-500" size="24" />

        <span className="ml-3 text-sm text-red-500">Network error</span>
      </div>
    );
  }

  if (notSelected) {
    return (
      <div className="flex inline items-center">
        <ArrowUpIcon
          className="fill-current text-blue-500 animate-bounce"
          size="24"
        />

        <span className="ml-3 text-blue-500 text-sm">Select a region</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex inline items-center">
        <SpinIcon className="fill-current animate-spin" size="24" />

        <span className="ml-3 text-sm">fetching data ...</span>
      </div>
    );
  }

  return <div></div>;
}
