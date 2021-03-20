import { newSpecPage } from '@stencil/core/testing';
import { FatherJohnMisterT } from '../father-john-mister-t';

describe('father-john-mister-t', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FatherJohnMisterT],
      html: `<father-john-mister-t></father-john-mister-t>`,
    });
    expect(page.root).toEqualHtml(`
      <father-john-mister-t>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </father-john-mister-t>
    `);
  });
});
