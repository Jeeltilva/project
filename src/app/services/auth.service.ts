import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, RouterLink } from "@angular/router";
import { Subject } from "rxjs";

import { AuthData } from "../models/auth-data.model";
import { Lawyer } from '../models/lawyer.model';
import { Client } from '../models/client.model';
import { NotificationService } from "./notification.service";
import swal from 'sweetalert/dist/sweetalert.min.js';

const BACKEND_URL = 'http://localhost:4000/api';

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private userName: string;
  private userId: string;
  private role = new Subject<String>();

  constructor(private http: HttpClient, private router: Router, public notifyService : NotificationService) {}

  getToken() {
    return this.token;
  }

  getuserName() {
    return this.userName;
  }

  getRole() {
    return this.role;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getRoleListener() {
    return this.role.asObservable();
  }

  createLawyer(lawyer: Lawyer, role: string) {
    const data = {...lawyer, role}
    this.http.post<{ token: string; role:string; userId: string; userName: string }>(
      BACKEND_URL + "/signupLawyer", data)
      .subscribe( (response) => {
        const token = response.token;
        this.token = token;
        const role = response.role;
        if (token) {
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.userName = response.userName;
          this.role.next(role);
          this.saveAuthData(token, role, this.userId, this.userName);
          location.reload();
          this.router.navigate(["/dashboard"]);
          this.notifyService.showSuccess("Logged In Successfully", "Yayy!");
        }
      },
      error => {
        this.role.next(null);
      }
    );
  }

  createClient(client: Client, role: string) {
    const data = {...client, role}
    this.http.post<{ token: string; role:string; userId: string, userName: string  }>(
      BACKEND_URL + "/signupClient", data)
      .subscribe( (response) => {
        const token = response.token;
        this.token = token;
        const role = response.role;
        if (token) {
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.userName = response.userName;
          this.role.next(role);
          this.saveAuthData(token, role, this.userId, this.userName);
          location.reload();
          this.router.navigate(["/clientdashboard"]);
          this.notifyService.showSuccess("Logged In Successfully", "Yayy!");
        }
      },
      error => {
        this.role.next(null);
      }
    );
  }

  loginLawyer(email: string, password: string, role: string) {
    const authData: AuthData = { email: email, password: password, role: role };
    this.http
      .post<{ token: string; role:string; userId: string; userName: string }>(
        BACKEND_URL + "/login",
        authData
      )
      .subscribe(
        response => {
          const token = response.token;
          this.token = token;
          const role = response.role;
          if (token) {
            this.isAuthenticated = true;
            this.userId = response.userId;
            this.userName = response.userName;
            this.role.next(role);
            this.saveAuthData(token, role, this.userId, this.userName);
            console.log(this.userName)
            location.reload();
            this.router.navigate(["/dashboard"]);
            this.notifyService.showSuccess("Logged In Successfully", "Yayy!");
          }
        },
        error => {
          swal("Wrong Credentials!", "Please Try again!", "warning");
          this.role.next(null);
        }
      );
  }

  loginClient(email: string, password: string, role: string) {
    const authData: AuthData = { email: email, password: password, role: role };
    this.http
      .post<{ userId: string ,token: string; role:string, userName: string}>(
        BACKEND_URL + "/loginClient",
        authData
      )
      .subscribe(
        response => {
          const token = response.token;
          this.token = token;
          const role = response.role;
          if (token) {
            this.isAuthenticated = true;
            this.userId = response.userId;
            this.userName = response.userName;
            this.role.next(role);
            this.saveAuthData(token, role, this.userId, this.userName);
            location.reload();
            this.router.navigate(["/clientdashboard"]);
            this.notifyService.showSuccess("Logged In Successfully", "Yayy!");
          }
        },
        error => {
          swal("Wrong Credentials!", "Please Try again!", "warning");
          this.role.next(null);
        }
      );
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    this.token = authInformation.token;
    this.isAuthenticated = true;
    const role = authInformation.role;
    this.userId = authInformation.userId;
    this.userName = authInformation.userName;
    this.role.next(role);
    if(role === "lawyer") {
      this.router.navigate(["/dashboard"]);
    }
    if(role === "client"){
      this.router.navigate(["/clientdashboard"])
    }
  }

  logoutLawyer() {
      swal({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        // buttons: true,
        dangerMode: true,
        buttons: ["No", "Yes"],
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Successfully logged Out!", {
            icon: "success",
          });
          this.http.post<any>(BACKEND_URL + "/logoutLawyer", "").subscribe( response => {
            this.token = null;
            this.role.next(null);
            this.userId = null;
            this.userName = null;
            this.isAuthenticated = false;
            this.clearAuthData();
            this.router.navigate(["/login"]);
          }, error => {
            alert(error);
          });
        } else {
          swal("In the system");
        }
      });
      // alert("Logout Successfully !");
    // }, error => {
    //   alert(error);
    // });
  }

  getChatRoomsChat(chatRoom) {
    return this.http.get<any>('http://localhost:4000/api/chatroom/' + chatRoom);
  }

  private saveAuthData(token: string, role: string, userId: string, userName: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", userId);
    localStorage.setItem("userName", userName);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName")
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");
    if (!token) {
      return;
    }
    return {
      token: token,
      role: role,
      userId: userId,
      userName: userName
    };
  }
}
