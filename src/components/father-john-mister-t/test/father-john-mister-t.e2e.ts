import { newE2EPage } from '@stencil/core/testing';

describe('father-john-mister-t', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<father-john-mister-t></father-john-mister-t>');

    const element = await page.find('father-john-mister-t');
    expect(element).toHaveClass('hydrated');
  });
});
