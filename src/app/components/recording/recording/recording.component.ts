import { Component, OnInit } from '@angular/core';
import { CameraService } from 'src/app/services/camera/camera.service';
import { AlertService } from 'src/app/services/layouts/alert.service';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss']
})
export class RecordingComponent implements OnInit {

  constructor(private cameraService: CameraService, private alertService: AlertService) { }

  ngOnInit() {
  }

  startRecording() {
    this.cameraService.startRecording()
      .subscribe((res) => {
        console.log(res.body);
        this.alertService.success('start recording');
      },
      err => this.alertService.error(err));
  }

  stopRecording() {
    this.cameraService.stopRecording()
      .subscribe((res) => {
        console.log(res.body);
        this.alertService.success('stop recording');
      },
      err => this.alertService.error(err));
  }

}
