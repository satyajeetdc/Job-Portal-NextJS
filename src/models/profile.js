const { default: mongoose } = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  userId: String,
  role: String,
  email: String,
  isPremiumUser: Boolean,
  membershipType: String,
  membershipStartDate: String,
  membershipEndDate: String,
  recruiterInfo: {
    name: String,
    companyName: String,
    companyRole: String,
  },
  candidateInfo: {
    name: String,
    currentCompany: String,
    currentJobLocation: String,
    preferredJobLocation: String,
    currentSalary: String,
    noticePeriod: String,
    skills: String,
    previousCompanies: String,
    totalExperience: String,
    college: String,
    collegeLocation: String,
    graduatedYear: Number,
    linkedinProfile: String,
    githubProfile: String,
  },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);

export default Profile;
