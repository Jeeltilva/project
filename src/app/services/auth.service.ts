import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, RouterLink } from "@angular/router";
import { Subject } from "rxjs";

import { AuthData } from "../models/auth-data.model";
import { Lawyer } from '../models/lawyer.model';
import {Client} from '../models/client.model';

const BACKEND_URL = 'http://localhost:4000/api';

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private userId: string;
  private role = new Subject<String>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
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
    this.http.post<{ token: string; role:string; userId: string }>(
      BACKEND_URL + "/signupLawyer", data)
      .subscribe( (response) => {
        const token = response.token;
        this.token = token;
        const role = response.role;
        if (token) {
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.role.next(role);
          this.saveAuthData(token, role, this.userId);
          this.router.navigate(["/dashboard"]);
        }
      },
      error => {
        this.role.next(null);
      }
    );
  }

  createClient(client: Client, role: string) {
    const data = {...client, role} 
    this.http.post<{ token: string; role:string; userId: string }>(
      BACKEND_URL + "/signupClient", data)
      .subscribe( (response) => {
        const token = response.token;
        this.token = token;
        const role = response.role;
        if (token) {
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.role.next(role);
          // this.saveAuthData(token, role, this.userId);
          this.router.navigate(["/loginclient"]);
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
      .post<{ token: string; role:string; userId: string }>(
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
            this.role.next(role);
            this.saveAuthData(token, role, this.userId);
            this.router.navigate(["/dashboard"]);
          }
        },
        error => {
          alert("Wrong Credentials!");
          this.role.next(null);
        }
      );
  }

  loginClient(email: string, password: string, role: string) {
    const authData: AuthData = { email: email, password: password, role: role };
    this.http
      .post<{ userId: string ,token: string; role:string}>(
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
            this.role.next(role);
            this.saveAuthData(token, role, this.userId);
            this.router.navigate([""]);
          }
        },
        error => {
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
    this.role.next(role);
    if(role === "lawyer") {
      this.router.navigate(["/dashboard"]);
    }
    if(role === "client"){

    }
  }

  logoutLawyer() {
    this.http.post<any>(BACKEND_URL + "/logoutLawyer", "")
    .subscribe( response => {
      this.token = null;
      this.role.next(null);
      this.userId = null;
      this.isAuthenticated = false;
      this.clearAuthData();
      this.router.navigate(["/login"]);
      alert("Logout Successfully !");
    }, error => {
      alert(error);
    });
  }

  private saveAuthData(token: string, role: string, userId: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", userId);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");
    if (!token) {
      return;
    }
    return {
      token: token,
      role: role,
      userId: userId
    };
  }
}