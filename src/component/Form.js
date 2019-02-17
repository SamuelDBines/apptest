Vue.component('FormComponent', {
  template: `
    <form id="form1">
      <inputField name="name" type="text" label="Restraunt Name *" v-model="review.name"></inputField>
      <selectField label="Restraunt Type *" :options=this.options v-model="review.type"> </selectField>
      <div id="fnameDiv" data-role="fieldcontain">
        <label class="formLabels" for="date" id="fnameLabel" >Date and Time of Visit</label>
        <input class="app-input timeAndDate" id="date" v-model="review.date" type="date" required/>
        <input class="app-input timeAndDate" id="time" v-model="review.time" type="time" required />
      </div>

      <inputField name="cost" type="number" label="Average meal cost (PP)" v-model="review.cost"></inputField>
      <radioFields name="service" label="Service" v-model="review.service"> </radioFields>
      <radioFields name="cleanliness" label="Cleanliness" v-model="review.cleanliness"> </radioFields>
      <radioFields name="quality" label="Food Quality" v-model="review.quality"> </radioFields>
      
      <inputField name="reporter" type="text" label="Reporter Name *" v-model="review.reporter"></inputField>
      
      <div id="shipDiv" data-role="fieldcontain">
        <label class="formLabels" for="reporter">Notes</label>
        <textArea class="app-input formFields" id="notes" v-model="review.notes" name="notes" placeholder="Notes">  </textArea>
      </div>
      <div id="submitDiv" data-role="fieldcontain">
        <input class="app-button" type="button" @click="addReview()" value="Submit Claim" data-inline="true"/>
      </div>
    </form>`,
  data() {
    return {
      review : {
        name : undefined,
        type : undefined,
        date : undefined, 
        cost : undefined, 
        service : undefined,
        cleanliness : undefined,
        quality : undefined,
        report : undefined,
        notes : undefined,
      },
      options : [
        "Fast Food", "Sea Food", "Buffet", "Vegitarian" , "Meat Place" , "Other"
      ]
    }
  },
  methods: {
    addReview() {
      alert(this.review.type)
    },
    fieldCheck() {
      alert(this.review.date)
      if(!this.review.name)
        alert("Name is empty");
      // if(!this.review.date)
    }
  }
})
Vue.component('selectField', {
  template: `
    <div id="stateDiv" data-role="fieldcontain">
      <label class="formLabels"  > {{this.label}}</label>
      <select  class="app-input formFields"  @input="$emit('input', $event.target.value)" tabindex="2">
        <option v-for="item in options" :value=item > {{item }}</option>
      </select>
    </div>`,
  props: ["options", "label", "value"]
})
Vue.component('inputField', {
  template: `
    <div data-role="fieldcontain">
      <label class="formLabels" :for=this.name > {{ this.label }} </label>
      <input class="app-input formFields" :type=this.type :placeholder=this.label @input="$emit('input', $event.target.value)" />
    </div>`,
  props: ["type", "name", "label", "value"]
})
Vue.component('radioFields', {
  template: ` 
    <div data-role="fieldcontain">
      <label class="formLabels" :for=this.name  > {{this.label}} Rating </label>
      <input type="radio" :name=this.name :value="1"  @input="$emit('input', $event.target.value)"> Need to improve 
      <input type="radio" :name=this.name :value="2" @input="$emit('input', $event.target.value)"> OKAY
      <input type="radio" :name=this.name :value="3" @input="$emit('input', $event.target.value)"> Good
      <input type="radio" :name=this.name :value="4" @input="$emit('input', $event.target.value)"> Excellent
    </div>`,
    props: ["name", "label", "value"]
})


