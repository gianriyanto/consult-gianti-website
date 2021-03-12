<template>
  <div id="InlineInput">
    <label v-if="field.edit">
      <input
          class="input-editing"
          v-model="field.input"
          v-on:blur="field.edit=false; onChangeText(field.input); $emit('update')"
          v-on:keyup.enter="$event.target.blur()"
          v-focus>
    </label>
    <div v-else class="input-card">
      <div :class="applyInputStyle(field.input)">
        <label @click="onEditText"> {{field.input}} </label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  field: "InlineInput",
  props: ['inputData'],
  components: {
  },
  data() {
    return {
      field: this.inputData,
    }
  },
  methods: {
    onEditText: function() {
      this.field.input = '';
      this.field.edit = true;
    },
    onChangeText: function(input) {
      //check if name input is valid
      if (input === '') {
        this.field.input = this.field.prompt;
        this.field.edit = false;
        this.field.isValid = false;
      } else {
        this.field.input = input.charAt(0).toUpperCase() + input.slice(1);
        this.field.isValid = true;
      }
    },
    applyInputStyle: function(input) {
      return [(input.length>0 && input !== this.field.prompt) ? 'input-has-value-style' : 'input-no-value-style']
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#InlineInput{
  font-family: "Bw Modelica Medium", serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 19px;
  width: 290px;
  min-width: fit-content;

  .input-editing{
    text-align: center;
    font-family: "Bw Modelica Medium", serif;
    font-size: 19px;
    color: #5f5f5f;
    width: 100%;
    border: transparent;
    outline: transparent;
    background-color: transparent;
  }

  .input-card{
    display: flex;
    flex-direction: row;
  }
  .input-has-value-style{
    color: #61b0e5;
  }
  .input-no-value-style{
    color: #b2b3b7;
    width: fit-content;
  }
}
.fade-enter-active {
  transition: all 0.3s ease-in-out;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

</style>