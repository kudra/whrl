import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { KycService } from "./kyc.service";
@Component({
  selector: "app-userkyc",
  templateUrl: "./userkyc.component.html",
  styleUrls: ["./userkyc.component.css"]
})
export class UserkycComponent implements OnInit {
  public kycform: any = FormGroup;
  public ppImage: any;
  public beImage: any;
  public feImage: any;
  public clickimg: any;
  submitted = false;
  constructor(private fb: FormBuilder, private _kyc: KycService) {}

  ngOnInit(): void {
    this.kycform = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      email_id: [null, [Validators.required, Validators.email]],
      adhar_no: [
        null,
        [Validators.required, Validators.pattern("^[2-9]{1}[0-9]{11}$")]
      ],
      mobile_no: [
        null,
        [Validators.required, Validators.pattern("^([6-9][0-9]{9})$")]
      ],
      profile_pic: [null, Validators.required],
      adhar_front_pic: [null, Validators.required],
      adhar_back_pic: [null, Validators.required]
    });
  }
  get frm() {
    return this.kycform.controls;
  }
  formSubmit() {
    this.submitted = true;
    if (this.kycform.invalid) {
      return;
    }
    this.kycform.value.profile_pic = this.ppImage;
    this.kycform.value.adhar_front_pic = this.feImage;
    this.kycform.value.adhar_back_pic = this.beImage;
    console.log(this.kycform.value);
    this._kyc.saveuserkyc(this.kycform.value).subscribe(
      res => {
        if (res.success) {
          alert(res.msg);
          this.kycform.reset();
        } else {
          alert(res.msg);
        }
      },
      err => {
        alert(err);
      }
    );
  }

  imgselect(evt, vl) {
    this.clickimg = vl;
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    if (this.clickimg == "1") {
      this.ppImage = btoa(binaryString);
    } else if (this.clickimg == "2") {
      this.feImage = btoa(binaryString);
    } else {
      this.beImage = btoa(binaryString);
    }
  }
}
