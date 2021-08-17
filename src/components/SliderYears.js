import React, { useState, useEffect } from "react";
import { Slider } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { changeCurrentDisplayedCropYear } from "../redux/MapSlice";

import { PlayIcon, PauseIcon, ResetIcon, SpinIcon } from "../icons/CoreIcons";

const maxYear = 2020;
const minYear = 1982;

export function SliderYears(props) {
  const [selectedYear, setSelectedYear] = useState(1982);
  const [playPause, setPlayPause] = useState("play");
  const [animate, setAnimate] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = props;

  useEffect(() => {
    if (animate && selectedYear < maxYear) {
      setTimeout(() => {
        setSelectedYear(selectedYear + 1);
      }, 500);
    }

    if (selectedYear === maxYear) {
      setPlayPause("play");
    }
  }, [animate, selectedYear, playPause]);

  // update selected year in redux store
  useEffect(() => {
    dispatch(changeCurrentDisplayedCropYear(selectedYear));
  }, [selectedYear, dispatch]);

  return (
    <div className="flex items-center w-1/2 border bg-gray-100 rounded-lg shadow-sm px-8 py-1">
      <span className="text-sm text-gray-600 font">Crop years</span>
      <PlayPause
        playPause={playPause}
        playHandler={() => {
          setAnimate(true);
          setPlayPause("pause");
        }}
        pauseHandler={() => {
          setAnimate(false);
          setPlayPause("play");
        }}
      />
      <Reset
        clickHandler={() => {
          setSelectedYear(minYear);
          setAnimate(false);
          setPlayPause("play");
        }}
      />

      <Slider
        style={{ color: "#2563EB" }}
        step={1}
        marks
        min={minYear}
        max={maxYear}
        valueLabelDisplay={animate ? "on" : "auto"}
        value={selectedYear}
        onChange={(e, newYear) => {
          setSelectedYear(newYear);
          setAnimate(false);
          setPlayPause("play");
        }}
      />

      {isLoading && (
        <span className="ml-8">
          <SpinIcon className="animate-spin fill-current text-blue-600" />
        </span>
      )}
    </div>
  );
}

export function PlayPause(props) {
  const { playPause, playHandler, pauseHandler } = props;

  const toggleState = {
    play: {
      icon: <PlayIcon />,
      clickHandler: () => playHandler()
    },
    pause: {
      icon: <PauseIcon />,
      clickHandler: () => pauseHandler()
    }
  };

  const { icon, clickHandler } = toggleState[playPause];

  return (
    <span className="mr-1 cursor-pointer rounded-full" onClick={clickHandler}>
      {icon}
    </span>
  );
}

export function Reset(props) {
  const { clickHandler } = props;

  return (
    <span className="mr-8 cursor-pointer rounded-full" onClick={clickHandler}>
      <ResetIcon />
    </span>
  );
}
