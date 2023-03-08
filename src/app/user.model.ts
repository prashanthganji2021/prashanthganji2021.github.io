export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  profileImage: any;
  id: any;
  token: string;

  constructor(firstName: string, lastName: string, email: string, password: string, phoneNumber: string, profileImage: any) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.profileImage = profileImage;
  }
}
