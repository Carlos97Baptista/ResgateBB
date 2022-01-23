describe('Testes', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Teste 1 - Clicar em confirmar com mais de um campos a resgatar com valor invalido', async () => {
    await waitFor(element(by.text('INVESTIMENTO I'))).toBeVisible().withTimeout(5000);
    await element(by.id('INVESTIMENTO I')).tap();
    await waitFor(element(by.id('resgate-details'))).toBeVisible().withTimeout(5000);
    await element(by.id('BBAS3')).tap();
    await element(by.id('BBAS3')).typeText('1200000');
    await element(by.id('Keyboard')).tap();
    await element(by.id('VALE3')).tap();
    await element(by.id('VALE3')).typeText('900000');
    await element(by.id('Keyboard')).tap();
    await element(by.id('resgate-details')).scroll(500, 'down')
    await element(by.id('subimit')).tap();
    await waitFor(element(by.text("DADOS INVÁLIDOS"))).toBeVisible().withTimeout(5000); 
    await new Promise((r) => setTimeout(r, 5000));
    // const info = await element(by.id('1'))
    // await expect(info).toBeVisible();
  });

  it('Teste 2 - Clicar em confirmar com todos os campos com valor validos', async () => {
    await waitFor(element(by.text('INVESTIMENTO I'))).toBeVisible().withTimeout(5000);
    await element(by.id('INVESTIMENTO I')).tap();
    await waitFor(element(by.id('resgate-details'))).toBeVisible().withTimeout(5000);
    await element(by.id('BBAS3')).tap();
    await element(by.id('BBAS3')).typeText('1000000');
    await element(by.id('Keyboard')).tap();
    await element(by.id('VALE3')).tap();
    await element(by.id('VALE3')).typeText('700000');
    await element(by.id('Keyboard')).tap();
    await element(by.id('resgate-details')).scroll(500, 'down')
    await element(by.id('subimit')).tap();
    await waitFor(element(by.text("RESGATE EFETUADO!"))).toBeVisible().withTimeout(5000); 
    await new Promise((r) => setTimeout(r, 5000));
    // const info = await element(by.id('1'))
    // await expect(info).toBeVisible();
  });

});
