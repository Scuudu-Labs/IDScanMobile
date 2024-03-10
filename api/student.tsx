import axios from "axios";
let BASE_URL = "https://schmgrcoou-dev.azurewebsites.net/api/";
// "/api/StudentProfile/get-student-profile"

export interface UserData {
  data: {
    jwtToken: {
      token: string;
      issued: Date;
      expires: Date;
    };
    UserType: string;
    UserId: string;
    FullName: string;
    MenuItems: string[];
    Birthday: boolean;
    TwoFactor: boolean;
    OldUser: boolean;
    ImpersonatorUsername: string;
    IsImpersonating: boolean;
  };
}

export interface UserInfo {
  data: {
    personalData: {
      surname: string;
      firstname: string;
      passport: string;
      middlename: string;
      gender: string;
      dateOfBirth: string;
      countryId: number;
      stateId: number;
      lgaId: number;
      religion: string;
      mobileNo: string;
      email: string;
      contactAddress: string;
      homeTown: string;
      permanentAddress: string;
      bloodGroup: string;
      genoType: string;
    };
    programmeDetail: {
      matricNo: string;
      jambRegNo: string;
      department: string;
      departmentId: string;
      departmentOptionId: string;
      schoolProgrammeId: number;
      entryYear: number;
      graduationYear: number;
      studentTypeId: string;
      studentModeOfEntryId: string;
      studentModeOfStudyId: string;
      yearOfStudy: string;
      studentMode: string;
    };
    sponsor: {
      fullname: string;
      address: string;
      phoneNo: string;
      relationship: string;
      email: string;
    };
    nextOfKin: {
      fullname: string;
      address: string;
      phoneNo: string;
      relationship: string;
      email: string;
    };
    medicalRecords: string[];
    passport: {
      refCode: string;
      passport: string;
    };
  };
}

export async function login(username: String, password: String) {
  return await axios.post(`${BASE_URL}/Auth/login`, {
    userName: username,
    Password: password,
  });
}

export async function getProfile(token: String) {
  console.log(token);
  return await axios.get(`${BASE_URL}/StudentProfile/get-student-profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
