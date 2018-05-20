import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NavigatorService } from '../../services/navigator.service';
import { Observable } from 'rxjs/Rx';
import { Location } from '../../models/location';
import { Group } from '../../models/group';
import { Leassons } from '../../models/leasson';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('#canvas') canvasRef: ElementRef;
  public Name: string;
  public Phone: string;
  public Id: string;
  public IsNotLoged: boolean = true;
  public imgUrl: string = '../../assets/imgs/map.jpg'
  private locations: Location[];
  private groups: Group[];
  private selectedGroup: number;
  private groupName: string;
  private currecntLeasson: Leassons;
  private leassons: Leassons[];
  private timer = Observable.timer(10000)
  private positionStart = '50.000627, 36.243621 ~ 35 / 90';
  private positionEnd = '49.998720, 36.247293 ~ 230 / 275';
  private positionDifferent = '0.001907, -0.003672 ~ -245 / 185';
  constructor(public navCtrl: NavController,
    private service: NavigatorService,
    private storage: Storage,
    private geolocation: Geolocation) {
  }

  ngOnInit() {
    this.timer.subscribe(x => this.currentsUpdate());
    this.storage.get('name').then(x => {
      if (x) {
        this.Name = x
      }
    })
    this.storage.get('phone').then(x => {
      if (x) {
        this.Phone = x
      }
    })

    this.storage.get('group').then(x => {
      if (x) {
        this.selectedGroup = x
      }
    })

    this.storage.get('id').then(x => {
      if (x) {
        this.Id = x
        this.IsNotLoged = false;
      }
      else {
        this.IsNotLoged = true;
      }
    })

    this.service.GetGroups().subscribe(x => {
      this.groups = x
    });
    if (this.selectedGroup) {
      this.service.GetLeassons(this.selectedGroup).subscribe(x => this.leassons = x);
    }
  }

  public SignIn() {
    this.service.Registration(this.Name, this.Phone).subscribe(x => {
      this.Id = x;
      this.storage.set('name', this.Name)
      this.storage.set('phone', this.Phone)
      this.storage.set('id', this.Id)
      this.IsNotLoged = false
      this.drawRectangle();
    });
  }

  drawRectangle(): void {
    let canvas = document.querySelector('#layout') as HTMLCanvasElement;
    let context = canvas.getContext('2d');
    let source = new Image();

    source.onload = () => {
      context.drawImage(source, 0, 0, 580, 480);
      if (this.leassons) {
        context.beginPath();
        context.strokeStyle = "#FFF";
        this.leassons.forEach((x, index) => {
          context.ellipse(
            this.currecntLeasson.Location.XPosition, this.currecntLeasson.Location.YPosition, 10, 10, 2, 20, 40);
          context.fillText(index.toString(), x.Location.XPosition, x.Location.YPosition);
        })
        context.stroke();
      }
      if (this.currecntLeasson) {
        context.beginPath();
        context.strokeStyle = "#FF0000";
        context.lineWidth = 3;
        context.ellipse(this.currecntLeasson.Location.XPosition, this.currecntLeasson.Location.YPosition, 15, 15, 2, 20, 40);
        context.stroke();
      }
      
    };

    source.src = this.imgUrl;
  }

  currentsUpdate() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.pushPosition(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.service.GetCurrentLeasson(this.selectedGroup).subscribe(x => {
      this.currecntLeasson = x;
    })

    this.storage.set("group", this.selectedGroup)
    this.drawRectangle();
  }

  pushPosition(latitude, longitude) {
    this.service.PushPosition(this.Id, latitude, longitude);
  }
}
