import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3LHm1UJq8ivnXS2TgKoDs8yghHnRwFug",
        {
          email,
          password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(errorResponse => {
          let errorMessage = "An unknown error occurred!";

          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
          }

          switch (errorResponse.error.error.message) {
            case "EMAIL_EXISTS":
              errorMessage = "This email exist already!";
              break;
            default:
              break;
          }
          return throwError(errorMessage);
        })
      );
  }
}
