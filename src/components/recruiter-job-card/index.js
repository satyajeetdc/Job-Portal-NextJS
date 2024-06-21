import CommonCard from "../common-card";
import JobIcon from "../job-icon";
import { Button } from "../ui/button";

export default function RecruiterJobCard({ jobItem, jobApplications }) {
  console.log(jobApplications, "jobApplications for recruiter");
  return (
    <div>
      <CommonCard
        icon={<JobIcon />}
        title={jobItem?.title}
        footerContent={
          <Button className="flex h-11 items-center justify-center px-5">
            {
              jobApplications.filter((item) => item.jobID === jobItem?._id)
                .length
            }{" "}
            Applicants
          </Button>
        }
      />
    </div>
  );
}
