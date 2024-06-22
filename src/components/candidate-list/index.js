"use client";

import { Fragment } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { getCandidateDetailsByIDAction } from "@/actions";

export default function CandidateList({
  jobApplications,
  currentCandidateDetails,
  setCurrentCandidateDetails,
  showCurrentCandidateDetailsModal,
  setShowCurrentCandidateDetailsModal,
}) {
  async function handleFetchCandidateDetails(getCurrentCandidateId) {
    const data = await getCandidateDetailsByIDAction(getCurrentCandidateId);

    if (data) {
      setCurrentCandidateDetails(data);
      setShowCurrentCandidateDetailsModal(true);
    }

    console.log(currentCandidateDetails, "currentCandidateDetails");
  }
  return (
    <Fragment>
      <div className="grid grid-cols-1 gap3 p-10 md:grid-cols-2 lg:grid-cols-3">
        {jobApplications && jobApplications.length > 0
          ? jobApplications.map((jobApplicantItem) => (
              <div className="bg-white shadow-lg w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                <div className="px-4 my-6 flex justify-between items-center">
                  <h3 className="text-lg font-bold">
                    {jobApplicantItem?.name}
                  </h3>
                  <Button
                    className="flex h-11 items-center justify-center px-5"
                    onClick={() =>
                      handleFetchCandidateDetails(
                        jobApplicantItem?.candidateUserID
                      )
                    }
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))
          : null}
      </div>
      <Dialog
        open={showCurrentCandidateDetailsModal}
        onOpenChange={() => {
          setCurrentCandidateDetails(null);
          setShowCurrentCandidateDetailsModal(false);
        }}
      >
        <DialogContent>candidate</DialogContent>
      </Dialog>
    </Fragment>
  );
}
