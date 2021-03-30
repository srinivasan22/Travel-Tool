import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Travel tool. You can use this app to create or any travel related details.
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Create new Entry</button>
        </stencil-route-link>
      </div>
    );
  }
}
