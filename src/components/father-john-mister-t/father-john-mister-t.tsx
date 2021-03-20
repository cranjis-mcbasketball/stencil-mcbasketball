import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'father-john-mister-t',
  styleUrl: 'father-john-mister-t.css',
  shadow: true,
})
export class FatherJohnMisterT {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
