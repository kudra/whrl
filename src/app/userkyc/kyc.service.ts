import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class KycService {
  url = environment.baseUrl;
  constructor(private _http: HttpClient) {}
  saveuserkyc(data) {
    return this._http.post<any>(this.url + "createkyc", data);
  }
}
