import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigunupService } from 'src/app/services/sigunup.service';
import { DatePipe } from '@angular/common';
import { PlayerService } from 'src/app/services/player.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css'],
})
export class SignupformComponent {
  isLinear: boolean = true;
  stepperFormGroup1: FormGroup;
  stepperFormGroup2: FormGroup;
  stepperFormGroup3: FormGroup;
  playerOptions: any[] = [];
  playerData: any;
  selectedPlayer: any;
  errorMessage: string | null = null;
  firstNameErrorMessage: string | null = null;
  lastNameErrorMessage: string | null = null;
  formattedDate: string | null = null;
  selectedPlayerID: string = '';
  emailChangeValue: string = '';
  usernameChangeValue: string = '';
  emailExist: boolean = false;
  usernameExist: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private user: SigunupService,
    private datePipe: DatePipe,
    private playerService: PlayerService,
    private authService: AuthenticationService
  ) {
    this.stepperFormGroup1 = this.formBuilder.group({
      // Step 1: Email, Username, and Password

      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required],
    });
    this.stepperFormGroup2 = this.formBuilder.group({
      // Step 2: First Name, Last Name, and EGD ID
      first_name: [''],
      last_name: [''],
      egd_id: [''],
    });

    this.stepperFormGroup3 = this.formBuilder.group({
      // Step 3: Birth Date and Gender
      birth_date: ['', Validators.required],
      gender: [''],
    });
  }

  create() {
    if (this.stepperFormGroup1.valid &&
        this.stepperFormGroup2.valid &&
        this.stepperFormGroup3.valid) {
      console.log(this.stepperFormGroup1);
      
      const formData ={
        ...this.stepperFormGroup1.value,
        ...this.stepperFormGroup2.value,
        ...this.stepperFormGroup3.value}
      ;console.log(formData);
      
      // if full name was not selected, I choose from their user

      const secondStepData = this.stepperFormGroup2.value;
        if(formData.first_name.length < 3){
          formData.first_name = secondStepData.selected_egd_id.first_name
        } 
        if(formData.last_name.length < 3){
          formData.last_name = secondStepData.selected_egd_id.last_name
        }
      formData.egd_id = secondStepData.selected_egd_id.pin.toString();

      // Get the original date from the form
      const originalBirthDate = formData.birth_date;

      if (originalBirthDate) {
        // Format the birth_date field using DatePipe
        this.formattedDate = this.datePipe.transform(
          originalBirthDate,
          'yyyy-MM-dd'
        );

        // Update formData with the formatted date
        formData.birth_date = this.formattedDate;
          
        this.user.createUser(formData).subscribe((res) => console.log(res));
      }
    }
  }

  searchPlayer() {
    if (this.stepperFormGroup2.valid) {
      const nameData = this.stepperFormGroup2.value;

      const firstName = nameData['first_name'];
      const lastName = nameData['last_name'];
      if (firstName.length < 2 || lastName.length < 2) {
        // Display an error message
        this.errorMessage =
          'Please enter at least 2 characters to first name or last name';
      } else {
        // Reset the error message
        this.errorMessage = null;

        if (firstName.length < 2) {
          // Display an error message
          this.firstNameErrorMessage =
            'First name is too short (minimum 2 letters)';
        } else {
          // Reset the error message
          this.errorMessage = null;
          if (lastName.length < 2) {
            // Display an error message
            this.lastNameErrorMessage =
              'Last name is too short (minimum 2 letters)';
          } else {
            // Reset the error message
            this.errorMessage = null;

            this.playerService.getId(firstName, lastName).subscribe((data) => {
              this.playerData = data;
            });
          }
        }
      }
    }
  }

  onPlayerSelectionChange() {
    if (this.selectedPlayer) {
      this.selectedPlayerID = this.selectedPlayer.id; 
    } else {
      this.selectedPlayerID = ''; // Clear the selectedPlayerID if nothing is selected
    }
  }

  emailExists(event: Event) {
    this.emailChangeValue = (event.target as HTMLInputElement).value;

    this.authService.emailCheckAvailability(this.emailChangeValue).subscribe(
      (res: boolean) => {
        this.emailExist = res;
      },
      (error) => {
        console.error('Error checking email availability', error);
      }
    );
  }
  usernameExists(event: Event) {
    this.usernameChangeValue = (event.target as HTMLInputElement).value;

    this.authService
      .usernameCheckAvailability(this.usernameChangeValue)
      .subscribe(
        (res: boolean) => {
          this.usernameExist = res;
        },
        (error) => {
          console.error('Error checking username availability', error);
        }
      );
  }
}
