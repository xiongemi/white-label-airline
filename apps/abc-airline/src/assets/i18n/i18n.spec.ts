import enGB from './en-GB.json';
import zhCN from './zh-CN.json';

const notTranslated = '__NOT_TRANSLATED__';

describe('i18n assets', () => {
  it('should have valid values', () => {
    expect(JSON.stringify(enGB).includes(notTranslated)).toBeFalsy();
    expect(JSON.stringify(zhCN).includes(notTranslated)).toBeFalsy();
  });
});
