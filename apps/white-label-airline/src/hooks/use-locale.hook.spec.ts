import { zhCN as materialZhCN } from '@material-ui/core/locale';
import { renderHook } from '@testing-library/react-hooks';
import { zhCN as dateZhCN } from 'date-fns/locale';

import { useLocale } from './use-locale.hook';

jest.mock('@white-label-airline/services/i18n', () => ({
  onLanguageChanged: jest
    .fn()
    .mockImplementationOnce((callback) => callback('zh-CN')),
}));

describe('Use Locale Hook', () => {
  it('should return zh-CN locale', () => {
    const { result } = renderHook(() => useLocale());
    expect(result.current.dateLocale.code).toEqual(dateZhCN.code);
    expect(result.current.materialLocale).toEqual(materialZhCN);
  });
});
