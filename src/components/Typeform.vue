<template>
  <div id="Typeform" :key="componentKey">
    <div class="content-wrapper">
      <div class="form_line font-style">
        <span class="font-style">
          Hey, my name is
        </span>
        <inline-input class="padding margin" v-bind:inputData="name"/>
        <span class="font-style">
          and I'm interested in an
        </span>
        <inline-input class="padding margin" v-bind:inputData="programs"/>
      </div>
      <div class="form_line font-style">
        <span class="font-style">
          to study and learn about
        </span>
        <inline-input class="padding margin" v-bind:inputData="course"/>
        <span class="font-style">
          preferably in
        </span>
        <inline-input class="padding margin" v-bind:inputData="country"/>
      </div>
      <div class="form_line font-style">
        <span class="font-style">
          Get in touch with me at
        </span>
        <inline-input class="padding margin" v-bind:inputData="contact"/>
      </div>
      <div class="button-container">
        <button class="submit-button" @click="handleSubmit">
          <span class="button-label">
            Send Enquiry
          </span>
          <send-icon size="1.2x" class="send-icon"></send-icon>
        </button>
        <button class="clear-button" @click="clearForm">
          <span class="button-label">
            Clear
          </span>
        </button>
      </div>
      <span class="notification">
        {{ notificationMessage }}
      </span>
    </div>
  </div>
</template>

<script>
import InlineInput from "@/components/InlineInput";
import { SendIcon } from 'vue-feather-icons'
import emailjs from 'emailjs-com';

export default {
  name: "Typeform",
  components: {InlineInput, SendIcon},
  data() {
    return {
      componentKey: 0,
      name: {prompt: 'your name', input: 'your name', edit: false, isValid: false},
      programs: {prompt: 'e.g undergraduate', input: 'e.g undergraduate', edit: false, isValid: false},
      course: {prompt: 'major or course', input: 'major or course', edit: false, isValid: false},
      country: {prompt: 'city or country?', input: 'city or country?', edit: false, isValid: false},
      contact: {prompt: "type your phone number", input: "type your phone number", edit: false, isValid: false},
      notificationMessage: "",
      showValidateError: false,
      isFormValid: true,
    }
  },
  methods: {
    handleSubmit() {
      this.validateForm()
      if (this.isFormValid) {
        console.log('send to email.js here')
        emailjs.send(
            "service_qcv8e2k",
            "template_cu31zld",
            {
              name: this.name.input,
              program: this.programs,
              course: this.course.input,
              country: this.country.input,
              contact: this.contact.input
            }
        );
        this.showValidateError = false;
        this.clearForm()
        this.setNotification("Thanks! Chat soon")
      } else {
        this.setNotification("Please check that you've filled out everything")
      }
    },
    clearForm: function(){
      this.componentKey += 1;
      this.name = {prompt: 'your name', input: 'your name', edit: false, isValid: false};
      this.programs = {prompt: 'e.g undergraduate', input: 'e.g undergraduate', edit: false, isValid: false};
      this.course = {prompt: 'major or course', input: 'major or course', edit: false, isValid: false};
      this.country = {prompt: 'city or country?', input: 'city or country?', edit: false, isValid: false};
      this.contact = {prompt: "type your phone number", input: "type your phone number", edit: false, isValid: false};
    },
    validateForm: function() {
      if (this.name.isValid && this.programs.isValid && this.course.isValid && this.country.isValid && this.contact.isValid) {
        this.isFormValid = true
        this.showValidateError = false
      } else {
        this.isFormValid = false
        this.showValidateError = true
      }
    },
    setNotification: function(message) {
      this.notificationMessage = message
    }
  }
}
</script>

<style lang="scss" scoped>

@media only screen and (min-width: 769px) {
  #Typeform {
    display: flex;
    flex-direction: column;
    padding-top: 50px;

    .content-wrapper {
      display: flex;
      flex-direction: column;

      .padding {
        margin: 0 10px;
        padding: 1px 2px 6px 2px;
        border-bottom: thin solid #8c8c8c;
      }

      .font-style {
        font-family: "Bw Modelica Medium", serif;
        font-size: 17px;
        color: #1f1f1f;
        padding: 3px 0 0 0;
      }

      .form_line {
        display: flex;
        flex-direction: row;
        margin: 13px 0;
      }

      .button-container {
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        text-align: left;
        height: 45px;

        .submit-button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 160px;
          border: thin solid black;
          background-color: #2b2b2b;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
          border-radius: 30px;

          .button-label {
            font-family: "Gilroy Regular", serif;
            font-size: 13px;
            color: white;
            margin-right: 5px;
          }

          .send-icon {
            color: white;
          }
        }

        .clear-button {
          margin-right: 10px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          background-color: transparent;
          align-items: center;
          width: 100px;
          border-radius: 30px;

          .button-label {
            font-family: "Gilroy Medium", serif;
            font-size: 15px;
            color: #1f1f1f;
            margin-right: 5px;
          }
        }
      }

      .notification {
        padding-top: 30px;
        flex-direction: row;
        justify-content: center;
        height: 40px;
        font-family: "Bw Modelica Light", serif;
        font-size: 17px;
        color: #4a4a4a;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #Typeform {
    display: flex;
    flex-direction: column;
    padding-top: 50px;

    .content-wrapper {
      display: flex;
      flex-direction: column;

      .padding {
        margin: 0;
        padding: 1px 0 6px 0;
        border-bottom: thin solid #8c8c8c;
      }

      .margin {
        margin-bottom: 37px;
        margin-top: 15px;
      }

      .font-style {
        font-family: "Bw Modelica Medium", serif;
        font-size: 16px;
        color: #1f1f1f;
        padding: 3px 0 0 0;
      }

      .form_line {
        display: flex;
        flex-direction: column;
      }

      .button-container {
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        text-align: left;
        height: 45px;

        .submit-button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 160px;
          border: thin solid black;
          background-color: #2b2b2b;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
          border-radius: 30px;

          .button-label {
            font-family: "Gilroy Regular", serif;
            font-size: 13px;
            color: white;
            margin-right: 5px;
          }

          .send-icon {
            color: white;
          }
        }

        .clear-button {
          margin-right: 10px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          background-color: transparent;
          align-items: center;
          width: 100px;
          border-radius: 30px;

          .button-label {
            font-family: "Gilroy Medium", serif;
            font-size: 15px;
            color: #1f1f1f;
            margin-right: 5px;
          }
        }
      }

      .notification {
        padding-top: 30px;
        flex-direction: row;
        justify-content: center;
        height: 40px;
        font-family: "Bw Modelica Light", serif;
        line-height: 1.5;
        font-size: 14px;
        color: #4a4a4a;
      }
    }
  }
}

</style>