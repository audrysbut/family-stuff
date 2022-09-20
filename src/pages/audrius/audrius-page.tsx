import { data as day1 } from "./training-data/day-1";
import { data as day2 } from "./training-data/day-2";
import { data as day3 } from "./training-data/day-3";
import { ExerciseView } from "../../components/exercise-view/exercise-view";

const trainingData = [day1, day2, day3];

export const AudriusPage = () => {
  return (
    <>
      <button
        onClick={() => {
          setTimeout(() => {
            notifyMe();
          }, 3000);
        }}
      >
        Notify me
      </button>
      <ExerciseView trainingData={trainingData} />
    </>
  );
};

function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        new Notification("Hi there!");
        // …
      }
    });
  }
}
