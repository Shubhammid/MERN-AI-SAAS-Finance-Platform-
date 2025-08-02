import cron from "node-cron";

const task = () => {
  console.log("running a task every minute");
};

export const startJobs = () => {
  cron.schedule("* * * * *", task);
};
