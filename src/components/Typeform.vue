<template>
  <div id="Typeform">
    <div class="content-wrapper">
      <div class="form_line font-style">
        <span class="font-style">
          Hey, my name is
        </span>
        <inline-input class="padding" v-bind:inputData="name"/>
        <span class="font-style">
          and I'm interested in an
        </span>
        <inline-input class="padding" v-bind:inputData="programs"/>
      </div>
      <div class="form_line font-style">
        <span class="font-style">
          to study and learn about
        </span>
        <inline-input class="padding" v-bind:inputData="course"/>
        <span class="font-style">
          in
        </span>
        <inline-input class="padding" v-bind:inputData="country"/>
      </div>
      <div class="form_line font-style">
        <span class="font-style">
          Get in touch with me at
        </span>
        <inline-input class="padding" v-bind:inputData="contact"/>
      </div>
      <div class="button-container">
        <button class="submit-button">
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
    </div>
  </div>
</template>

<script>
import InlineInput from "@/components/InlineInput";
import { SendIcon } from 'vue-feather-icons'

export default {
  name: "Typeform",
  components: {InlineInput, SendIcon},
  data() {
    return {
      name: {prompt: 'your name', input: 'your name', edit: false, isValid: false},
      programs: {prompt: 'e.g undergraduate', input: 'e.g undergraduate', edit: false, isValid: false},
      course: {prompt: 'major or course', input: 'major or course', edit: false, isValid: false},
      country: {prompt: 'preferred city or country?', input: 'preferred city or country?', edit: false, isValid: false},
      contact: {prompt: "phone or email", input: "phone or email", edit: false, isValid: false},
    }
  },
  methods: {
    clearForm: function(){
      // Clear form button is not working
      this.name = {prompt: 'your name', input: 'your name', edit: false, isValid: false};
      this.programs = {prompt: 'e.g undergraduate', input: 'e.g undergraduate', edit: false, isValid: false};
      this.course = {prompt: 'major or course', input: 'major or course', edit: false, isValid: false};
      this.country = {prompt: 'preferred city or country?', input: 'preferred city or country?', edit: false, isValid: false};
      this.contact = {prompt: "phone or email", input: "phone or email", edit: false, isValid: false};
    }
  }
}
</script>

<style lang="scss" scoped>

#Typeform{
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  .content-wrapper{
    display: flex;
    flex-direction: column;

    .padding{
      margin: 0 10px;
      padding: 1px 2px 6px 2px;
      border-bottom: thin solid #8c8c8c;
    }

    .font-style{
      font-family: "Bw Modelica Medium", serif;
      font-size: 19px;
      color: #1f1f1f;
      padding: 3px 0 0 0;
    }

    .form_line{
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
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.2 );
        border-radius: 30px;

        .button-label {
          font-family: "Gilroy Regular", serif;
          font-size: 13px;
          color: white;
          margin-right: 5px;
        }
        .send-icon{
          color: white;
        }
      }
      .clear-button {
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
  }
}

</style>