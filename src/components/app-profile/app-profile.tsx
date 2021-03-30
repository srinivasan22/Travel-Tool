import { Component, Prop, h, State } from '@stencil/core';
import Travels from './travels'

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {

  @State() value: string;
  @Prop() firstName: string;
  @Prop() lastName: string;
  @Prop() startDate: Date;
  @Prop() endDate: Date;
  @Prop() people: number;
  @Prop() departure: string;
  @Prop() destination: string;

  constructor() {
  }
  
  users: Travels[];

  get () {
    return this.users;
  }
  
  set (users){
    this.users.push(users);
  }

  save() {

    console.log(this.users.push(...this.users));
    return this.users.push(...this.users);

  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
  }

  updateValue(e) {
    this.value = e.target.value;
    console.log(this.value);
  }

  render() {
      return (
        <div class="app-profile">

        <stencil-route-link url="/">
          <button>Back</button>
        </stencil-route-link>

          <p>Please enter the following details</p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <label> First name <input type='text' id='firstname' value='' onInput={(e) => this.updateValue(e)}/>
        </label>
        <br/>
        <label> Last name <input type='text' value='' onInput={(e) => this.updateValue(e)}/>
        </label>
        <br/>
        <label> Travel start date <input type='date' value='' onInput={(e) => this.updateValue(e)}/>
        </label>
        <br/>
        <label> Travel end date <input type='date' value='' onInput={(e) => this.updateValue(e)}/>
        </label>
        <br/>
        <label> Number of people <input type='text' value='' onInput={(e) => this.updateValue(e)}/>
        </label>
        <br/>
        <label> Departure location <input type='text' value='' onInput={(e) => this.updateValue(e)}/>
        </label>
        <br/>
        <label> Destination <input type='text' value='' onInput={(e) => this.updateValue(e)}/>
        </label>
        <br/>

        <stencil-route-link url="/travels/:id">
        <input type="submit" value="Submit" onClick={this.save}/>
        </stencil-route-link>
        </form>

        </div>

      );
    }
  
}
