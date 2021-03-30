import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'travel-data',
  styleUrl: 'travel-data.css',
  shadow: true,
})
export class TravelData {

  @State() traveldata: TravelData;
  
  render() {
    return  <div> List of Travel Data  </div>;
  }
}
