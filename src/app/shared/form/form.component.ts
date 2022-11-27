import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormApiService } from 'src/app/services/form-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  customForm: any;
  //users:any;
  public img = "../assets/images/logo.jpg"
  constructor(private api: FormApiService) {
    this.api.callApi().subscribe(data => {
      console.log(data);
      this.customForm = data["form"];
      this.fields = this.customForm;
      console.log(this.fields);

    })

  }
  ngOnInit() {

  }
  fields: FormlyFieldConfig[] = []
  //fields: FormlyFieldConfig[] = [
  //   {
  //     'key': 'input',
  //     'type': 'input',
  //     'props': {
  //       'label': 'Input',
  //       'placeholder': 'Input placeholder',
  //       'required': true,
  //     },
  //   },
  //   {
  //     key: 'textarea',
  //     type: 'textarea',
  //     props: {
  //       label: 'Textarea',
  //       placeholder: 'Textarea placeholder',
  //       required: true,
  //     },
  //   },
  //   {
  //     key: 'checkbox',
  //     type: 'checkbox',
  //     props: {
  //       label: 'Checkbox',
  //     },
  //   },
  //   {
  //     key: 'select',
  //     type: 'select',
  //     props: {
  //       label: 'Select',
  //       placeholder: 'Select placeholder',
  //       required: true,
  //       options: [
  //         { label: 'Option 1', value: '1' },
  //         { label: 'Option 2', value: '2' },
  //         { label: 'Option 3', value: '3' },
  //       ],
  //     },
  //   },
  //   {
  //     key: 'radio',
  //     type: 'radio',
  //     props: {
  //       label: 'Radio',
  //       required: true,
  //       options: [
  //         { label: 'Option 1', value: '1' },
  //         { label: 'Option 2', value: '2' },
  //       ],
  //     },
  //   },
  // ];


  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }
}
