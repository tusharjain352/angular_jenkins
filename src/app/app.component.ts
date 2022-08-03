import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'http';

  constructor(private http:HttpClient){

  }

  ngOnInit(){
    const url ='http://52.151.193.94:5258/Api/MpartnerApi3/consumerEMI_Get_Ro_Sm_Details';
    const body = {
      "app_version": "7.5",
      "device_id": "358240051111110",
      "device_name": "vivo 1812",
      "os_type": "Android",
      "os_version_name": "27",
      "os_version_code": "8.1.0",
      "ip_address": "0.0.0.0",
      "screen_name": "HomePageFragment",
      "network_type": "4g",
      "network_operator": "Airtel",
      "channel": "M",
      "language": "EN",
      "time_captured": "1652462347982",
      "pinCode": 110001,
      "user_id": "9999994",
      "token": "8b53b826671bfa322081ff0daeef51bc"
    }
    this.http.post(url, body).subscribe((res:any)=>{
      console.log('post res-', res);
    })
  }

  download(){
    var node:any = document.getElementById('test');
    //console.log('downlad',node);
    htmlToImage.toPng(node)
  .then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;
    //document.body.appendChild(img);

    const link = document.createElement('a');
  link.download = 'download.png';
  link.href =dataUrl;
  link.click();
  //link.delete;



  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });
  }
}
