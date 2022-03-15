import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ForumsService } from 'src/app/services/forums/forums.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-topic-modal',
  templateUrl: './add-topic-modal.component.html',
  styleUrls: ['./add-topic-modal.component.scss'],
})
export class AddTopicModalComponent implements OnInit {

  data: any = {};
  constructor(private modalController: ModalController,
    private dataService: DataService,
    private uiService: UiService,
    private forumService: ForumsService) { }

  ngOnInit() {

    this.data = {
      description: null,
      title: null,
      course_id: this.dataService.selectedCourse?.id,
      user_id: null
    };

  }

  submitTopic() {
    this.uiService.showLoader('Submitting topic...');
    this.forumService.createTopic(this.data).subscribe((response) => {
      this.uiService.hideLoader();
      if (response.success) {
        this.uiService.showAlert(response.message);
        this.closeModal(true);
      }

    }, error => {
      this.uiService.hideLoader();
    });

  }

  async closeModal(success = false) {
    await this.modalController.dismiss({
      success
    });
  }

}
