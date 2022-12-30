import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  errorMsg = '';
  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(event: any) {
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+=-';
    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    if (!this.includeLetters && !this.includeNumbers && !this.includeSymbols) {
      this.errorMsg =
        'You must select length and at least one of the three options.';
      generatedPassword = '';
    }
    // console.log(
    //   `About to generate a password with the following:
    //   Includes Letters: ${this.includeLetters}
    //   Includes Numbers: ${this.includeNumbers}
    //   Includes Symbols: ${this.includeSymbols}`
    // );
    this.password = generatedPassword;
  }
}
