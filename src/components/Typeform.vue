<template>
  <div id="Typeform">
    <span class="left input-card">
      <span class="me">
        Gianti Atmojo
      </span>
      <span class="prompt-text">
        Hi, let's start with your name.
      </span>
    </span>
    <span class="right input-card">
      <span class="user">
        You
      </span>
      <span class="input-text">
        What's your name?
      </span>
    </span>
    <span class="left input-card">
      <span class="me">
        Gianti Atmojo
      </span>
      <span class="prompt-text">
        What are you planning to study?
      </span>
    </span>
    <span class="right input-card">
      <span class="user">
        You
      </span>
      <span class="input-text">
        Interested major or course
      </span>
    </span>
    <span class="left input-card">
      <span class="me">
        Gianti Atmojo
      </span>
      <span class="prompt-text">
        Where would you like to travel to study?
      </span>
    </span>
    <span class="right input-card">
      <span class="user">
        You
      </span>
      <span class="input-text">
        Preferred city or country
      </span>
    </span>
    <span class="left input-card">
      <span class="me">
        Gianti Atmojo
      </span>
      <span class="prompt-text">
        Cool! It's best to contact you at?
      </span>
    </span>
    <span class="right input-card">
      <span class="user">
        You
      </span>
      <span class="input-text">
        What's your mobile or email to contact?
      </span>
    </span>
    <span class="submit-button">
      <span class="button-label">
        Submit
      </span>
    </span>
    <span class="left input-card">
      <span class="me">
        Gianti Atmojo
      </span>
      <span class="prompt-text">
        Thanks! Talk soon Gian.
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Typeform"
}
</script>

<style lang="scss" scoped>

#Typeform{
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  .left{
    margin-right: auto;
    border: 1px solid rgba(109, 107, 107, 0.4);
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
    backdrop-filter: blur( 20.0px );
    -webkit-backdrop-filter: blur( 20.0px );
    padding: 0 50px 0 20px;
  }

  .right{
    margin-left: auto;
    background-image: linear-gradient(to top right, #343434, #292929);
    padding: 0 20px 0 50px;
  }

  .input-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    height: 57px;
    border-radius: 9px;
    margin-bottom: 15px;

    .me {
      font-family: 'Gilroy Regular', serif;
      font-size: 10px;
      margin-bottom: 4px;
      color: #5873f5;
    }

    .user {
      font-family: 'Gilroy Regular', serif;
      font-size: 10px;
      margin-bottom: 4px;
      margin-left: auto;
      color: white;
    }


    .prompt-text {
      font-family: 'Bw Modelica Medium', serif;
      font-size: 12px;
      word-spacing: 1.5px;
      letter-spacing: -1px;
      color: #282828;
    }

    .input-text {
      font-family: 'Bw Modelica Medium', serif;
      font-size: 12px;
      word-spacing: 1.5px;
      letter-spacing: -0.5px;
      color: white;
    }
  }
  .submit-button{
    display: flex;
    cursor: pointer;
    width: 100px;
    background-color: #2b2b2b;
    border-radius: 8px;
    margin-left: auto;
    height: 38px;

    .button-label {
      margin: auto;
      font-family: "Bw Modelica Medium", serif;
      font-size: 11px;
      color: white;
    }
  }
}

</style>